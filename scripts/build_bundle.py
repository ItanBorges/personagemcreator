"""
Script de Empacotamento do Personagem Creator
Gera js/bundle.js unificando todos os módulos ES6 em um único arquivo executável
compatível tanto com servidores HTTP (http://localhost:8080) quanto com abertura
direta no navegador via protocolo de arquivo local (file:///D:/.../index.html) sem restrições de CORS.
"""

import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

files = [
    'js/data/sources.js',
    'js/data/optionsCatalog.js',
    'js/data/equipment.js',
    'js/data/spells.js',
    'js/data/feats.js',
    'js/data/backgrounds.js',
    'js/data/races.js',
    'js/data/classes.js',
    'js/data/subclasses.js',
    'js/rules-engine.js',
    'js/state.js',
    'js/views/choiceComponents.js',
    'js/views/identityView.js',
    'js/views/attributesView.js',
    'js/views/levelUpView.js',
    'js/views/spellsView.js',
    'js/views/equipmentView.js',
    'js/views/sheetView.js',
    'js/views/headerView.js',
    'js/app.js'
]

def transform_module(rel_path):
    abs_path = os.path.join(ROOT_DIR, rel_path)
    with open(abs_path, 'r', encoding='utf-8') as f:
        code = f.read()

    base_name = os.path.basename(rel_path)

    # 1. Transform imports
    def replace_import(m):
        clause = m.group(1).strip()
        path = m.group(2).strip()
        mod_key = os.path.basename(path)

        if clause.startswith('{') and clause.endswith('}'):
            items = [item.strip() for item in clause[1:-1].split(',') if item.strip()]
            parts = []
            for item in items:
                if ' as ' in item:
                    orig, alias = item.split(' as ')
                    parts.append(f"{orig.strip()}: {alias.strip()}")
                else:
                    parts.append(item.strip())
            destruct = '{ ' + ', '.join(parts) + ' }'
            return f"const {destruct} = __require('{mod_key}');"
        elif '*' in clause:
            alias = clause.split(' as ')[1].strip()
            return f"const {alias} = __require('{mod_key}');"
        else:
            return f"const {clause} = (__require('{mod_key}').default || __require('{mod_key}'));"

    code = re.sub(r'import\s+([\s\S]*?)\s+from\s+[\'"]([^\'"]+)[\'"]\s*;', replace_import, code)
    code = re.sub(r'import\s+[\'"]([^\'"]+)[\'"]\s*;', lambda m: f"__require('{os.path.basename(m.group(1))}');", code)

    # 2. Extract exports
    exported_names = []
    for m in re.finditer(r'export\s+(?:const|let|var|function|class)\s+([a-zA-Z0-9_]+)', code):
        exported_names.append(m.group(1))

    code = re.sub(r'export\s+(const|let|var|function|class)\s+', r'\1 ', code)

    # Handle export default
    default_export = None
    m_def = re.search(r'export\s+default\s+([a-zA-Z0-9_]+)\s*;', code)
    if m_def:
        default_export = m_def.group(1)
        code = re.sub(r'export\s+default\s+([a-zA-Z0-9_]+)\s*;', '', code)

    # Handle export { a, b, c }
    m_exp_list = re.search(r'export\s+\{([^}]+)\}\s*;', code)
    if m_exp_list:
        items = [i.strip() for i in m_exp_list.group(1).split(',') if i.strip()]
        for item in items:
            if ' as ' in item:
                orig, alias = item.split(' as ')
                exported_names.append(f"{alias.strip()}: {orig.strip()}")
            else:
                exported_names.append(item)
        code = re.sub(r'export\s+\{([^}]+)\}\s*;', '', code)

    export_lines = []
    for exp in exported_names:
        if ':' in exp:
            alias, orig = exp.split(':')
            export_lines.append(f"__exports.{alias.strip()} = {orig.strip()};")
        else:
            export_lines.append(f"__exports.{exp} = {exp};")
    if default_export:
        export_lines.append(f"__exports.default = {default_export};")

    code += "\n\n  // Module Exports\n  " + "\n  ".join(export_lines)
    return base_name, code

def build():
    modules = []
    for f in files:
        name, code = transform_module(f)
        modules.append((name, code))
        print(f"  + {name}")

    bundle_header = '''/**
 * Personagem Creator - Bundle Consolidado
 * Suporta execução tanto em servidor HTTP (http://localhost:8080)
 * quanto via protocolo de arquivo local (file:///) sem restrições de CORS.
 */
(function() {
  'use strict';

  const __modules = {};
  const __cache = {};

  function __define(name, factory) {
    __modules[name] = factory;
  }

  function __require(name) {
    const cleanName = name.split('/').pop().replace(/\\?.*$/, '');
    if (__cache[cleanName]) return __cache[cleanName];

    let foundKey = Object.keys(__modules).find(k => k === cleanName || k.endsWith(cleanName));
    if (!foundKey && !cleanName.endsWith('.js')) {
      foundKey = Object.keys(__modules).find(k => k === cleanName + '.js' || k.endsWith(cleanName + '.js'));
    }

    if (!foundKey || !__modules[foundKey]) {
      console.error('Module not found in bundle:', name, 'clean:', cleanName);
      throw new Error('Módulo não encontrado no bundle: ' + name);
    }

    const __exports = {};
    __cache[cleanName] = __exports;
    __modules[foundKey](__exports, __require);
    return __exports;
  }
'''

    bundle_body = []
    for name, code in modules:
        wrapped = f"\n  // ==================== MÓDULO: {name} ====================\n"
        wrapped += f"  __define('{name}', function(__exports, __require) {{\n"
        for line in code.splitlines():
            wrapped += f"    {line}\n"
        wrapped += "  });\n"
        bundle_body.append(wrapped)

    bundle_footer = '''
  // Inicia a aplicação pelo ponto de entrada app.js
  __require('app.js');
})();
'''

    full_bundle = bundle_header + ''.join(bundle_body) + bundle_footer
    output_path = os.path.join(ROOT_DIR, 'js', 'bundle.js')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_bundle)

    print(f"\nBundle gerado com sucesso em js/bundle.js ({len(full_bundle)} bytes, {len(full_bundle.splitlines())} linhas).")

if __name__ == '__main__':
    build()

