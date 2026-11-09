/**
 * Componentes de Interface para Escolhas Dinâmicas de Personagem
 * Manobras de Mestre de Batalha, Iniciado em Magia, Estilos de Luta, Metamagia, etc.
 * Impede seleções duplicadas e exibe nomes, tipos e descrições completas.
 */

import { MANEUVERS, FIGHTING_STYLES, METAMAGIC_OPTIONS, ELDRITCH_INVOCATIONS, TOTEM_SPIRITS, HUNTER_PREY_OPTIONS, DIVINE_ORDERS_2024, PRIMAL_ORDERS_2024, ELEMENTAL_TYPES, getManeuverById, getFightingStyleById, getMetamagicById, getInvocationById, getTotemSpiritById, getHunterPreyById } from '../data/optionsCatalog.js';
import { SPELLS, getSpellById } from '../data/spells.js';
import { SKILLS_LIST } from '../rules-engine.js';

/**
 * Renderiza o Seletor de Manobras do Mestre de Batalha
 * Permite selecionar exatamente N manobras sem repetição, com nome e descrição completa.
 */
export function renderManeuversSelectorHtml(fighterLevel, selectedManeuvers = [], containerClass = 'subclass-choice-box') {
  // Regra de quantidade de manobras: Nível 3 = 3; Nível 7 = 5; Nível 10 = 7; Nível 15 = 9
  let maxCount = 3;
  if (fighterLevel >= 15) maxCount = 9;
  else if (fighterLevel >= 10) return 7;
  else if (fighterLevel >= 7) maxCount = 5;

  const currentList = Array.isArray(selectedManeuvers) ? selectedManeuvers.slice(0, maxCount) : [];
  while (currentList.length < maxCount) {
    currentList.push('');
  }

  const selectedSet = new Set(currentList.filter(id => Boolean(id)));

  let slotsHtml = '';
  for (let i = 0; i < maxCount; i++) {
    const currentId = currentList[i] || '';
    const currentObj = getManeuverById(currentId);

    slotsHtml += `
      <div class="choice-slot-card" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 0.75rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary);">
            ⚔️ Manobra #${i + 1} de ${maxCount}:
          </span>
          ${currentObj ? `<span class="badge-origin" style="font-size: 0.72rem;">${currentObj.type}</span>` : ''}
        </div>

        <select class="form-select select-battlemaster-maneuver" data-slot-index="${i}">
          <option value="">-- Selecione uma Manobra --</option>
          ${MANEUVERS.map(m => {
            const isAlreadySelectedInOtherSlot = selectedSet.has(m.id) && currentId !== m.id;
            return `
              <option value="${m.id}" ${m.id === currentId ? 'selected' : ''} ${isAlreadySelectedInOtherSlot ? 'disabled' : ''}>
                ${m.name} (${m.nameEn}) [${m.type}] ${isAlreadySelectedInOtherSlot ? '— (Já Selecionada)' : ''}
              </option>
            `;
          }).join('')}
        </select>

        ${currentObj ? `
          <div class="choice-description-card" style="margin-top: 0.5rem; padding: 0.6rem 0.75rem; background: var(--bg-surface-elevated); border-left: 3px solid var(--primary); border-radius: var(--radius-sm); font-size: 0.82rem; line-height: 1.4; color: var(--text-muted);">
            <strong style="color: var(--text-main);">${currentObj.name} (${currentObj.nameEn}):</strong>
            <span>${currentObj.description}</span>
          </div>
        ` : `
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem; font-style: italic;">
            Selecione uma manobra para visualizar os efeitos e regras.
          </p>
        `}
      </div>
    `;
  }

  return `
    <div class="${containerClass}" style="margin-top: 1rem; padding: 1.15rem; background: var(--bg-surface-elevated); border: 1px solid var(--primary-border); border-radius: var(--radius-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h4 style="font-family: var(--font-title); font-size: 1rem; color: var(--primary); margin: 0;">
            🛡️ Manobras de Superioridade em Combate (Mestre de Batalha)
          </h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem; margin-bottom: 0;">
            Cada manobra consome 1 Dado de Superioridade (d8/d10). Não é permitido selecionar a mesma manobra mais de uma vez.
          </p>
        </div>
        <span class="badge-source" style="font-size: 0.78rem;">
          Selecionadas: ${selectedSet.size} / ${maxCount}
        </span>
      </div>

      <div class="maneuvers-slots-container">
        ${slotsHtml}
      </div>
    </div>
  `;
}

/**
 * Renderiza o Seletor de Magias para o Talento "Iniciado em Magia" (Magic Initiate)
 * Permite selecionar 2 Truques (sem repetição) e 1 Magia de 1º Círculo da classe escolhida.
 */
export function renderMagicInitiateSelectorHtml({
  featKey = 'origin',
  fixedClass = null,
  selectedClass = 'mago',
  cantrip1 = '',
  cantrip2 = '',
  spell1 = '',
  spellcastingStat = 'INT',
  edition = '2024'
}) {
  const targetClass = fixedClass || selectedClass || 'mago';

  // Obtém truques (nível 0) e magias de nível 1 da classe escolhida
  const classSpells = SPELLS.filter(s => {
    if (!s.classes || !s.classes.includes(targetClass)) return false;
    if (edition === '2024') return s.sourceId === 'phb_2024';
    return s.sourceId === 'phb_2014' || s.sourceId === 'phb_2024' || s.sourceId === 'tcoe' || s.sourceId === 'xgte';
  });

  const availableCantrips = classSpells.filter(s => s.level === 0);
  const availableLevel1 = classSpells.filter(s => s.level === 1);

  const cantrip1Obj = getSpellById(cantrip1);
  const cantrip2Obj = getSpellById(cantrip2);
  const spell1Obj = getSpellById(spell1);

  const classNames = {
    mago: 'Mago (Wizard)',
    clerigo: 'Clérigo (Cleric)',
    druida: 'Druida (Druid)',
    bardo: 'Bardo (Bard)',
    bruxo: 'Bruxo (Warlock)',
    feiticeiro: 'Feiticeiro (Sorcerer)'
  };

  return `
    <div class="magic-initiate-box" data-feat-key="${featKey}" style="margin-top: 0.85rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <strong style="color: var(--primary); font-size: 0.95rem;">
          ✨ Escolhas do Talento: Iniciado em Magia
        </strong>
        <span class="badge-origin">2 Truques + 1 Magia de 1º Círculo</span>
      </div>

      <!-- Escolha da Classe (se não for fixada) -->
      ${!fixedClass ? `
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label class="form-label" style="font-size: 0.82rem;">Lista de Magias da Classe:</label>
          <select class="form-select select-magic-initiate-class" data-feat-key="${featKey}">
            <option value="mago" ${targetClass === 'mago' ? 'selected' : ''}>Mago (Inteligência)</option>
            <option value="clerigo" ${targetClass === 'clerigo' ? 'selected' : ''}>Clérigo (Sabedoria)</option>
            <option value="druida" ${targetClass === 'druida' ? 'selected' : ''}>Druida (Sabedoria)</option>
            <option value="bardo" ${targetClass === 'bardo' ? 'selected' : ''}>Bardo (Carisma)</option>
            <option value="bruxo" ${targetClass === 'bruxo' ? 'selected' : ''}>Bruxo (Carisma)</option>
            <option value="feiticeiro" ${targetClass === 'feiticeiro' ? 'selected' : ''}>Feiticeiro (Carisma)</option>
          </select>
        </div>
      ` : `
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem;">
          Conjurando a partir da lista oficial de <strong>${classNames[targetClass] || targetClass}</strong>.
        </div>
      `}

      <!-- Truque 1 -->
      <div style="margin-bottom: 0.75rem; padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <label class="form-label" style="font-size: 0.82rem; color: var(--accent-emerald);">
          🪄 1º Truque (Nível 0):
        </label>
        <select class="form-select select-magic-initiate-cantrip1" data-feat-key="${featKey}">
          <option value="">-- Selecione o 1º Truque --</option>
          ${availableCantrips.map(c => `
            <option value="${c.id}" ${c.id === cantrip1 ? 'selected' : ''} ${c.id === cantrip2 ? 'disabled' : ''}>
              ${c.name} (${c.nameEn}) [${c.school || 'Truque'}] ${c.id === cantrip2 ? '— (Escolhido no Truque 2)' : ''}
            </option>
          `).join('')}
        </select>
        ${cantrip1Obj ? `
          <div style="margin-top: 0.45rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.35;">
            <strong style="color: var(--text-main);">${cantrip1Obj.name}:</strong> ${cantrip1Obj.description ? cantrip1Obj.description.substring(0, 160) + '...' : ''}
            <span style="display: block; font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem;">
              Tempo: ${cantrip1Obj.castingTime || '1 Ação'} &bull; Alcance: ${cantrip1Obj.range || '9m'} &bull; Duração: ${cantrip1Obj.duration || 'Instantânea'}
            </span>
          </div>
        ` : ''}
      </div>

      <!-- Truque 2 (Não pode ser o mesmo do Truque 1) -->
      <div style="margin-bottom: 0.75rem; padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <label class="form-label" style="font-size: 0.82rem; color: var(--accent-emerald);">
          🪄 2º Truque (Nível 0):
        </label>
        <select class="form-select select-magic-initiate-cantrip2" data-feat-key="${featKey}">
          <option value="">-- Selecione o 2º Truque --</option>
          ${availableCantrips.map(c => `
            <option value="${c.id}" ${c.id === cantrip2 ? 'selected' : ''} ${c.id === cantrip1 ? 'disabled' : ''}>
              ${c.name} (${c.nameEn}) [${c.school || 'Truque'}] ${c.id === cantrip1 ? '— (Escolhido no Truque 1)' : ''}
            </option>
          `).join('')}
        </select>
        ${cantrip2Obj ? `
          <div style="margin-top: 0.45rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.35;">
            <strong style="color: var(--text-main);">${cantrip2Obj.name}:</strong> ${cantrip2Obj.description ? cantrip2Obj.description.substring(0, 160) + '...' : ''}
            <span style="display: block; font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem;">
              Tempo: ${cantrip2Obj.castingTime || '1 Ação'} &bull; Alcance: ${cantrip2Obj.range || '9m'} &bull; Duração: ${cantrip2Obj.duration || 'Instantânea'}
            </span>
          </div>
        ` : ''}
      </div>

      <!-- Magia de 1º Círculo -->
      <div style="padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <label class="form-label" style="font-size: 0.82rem; color: var(--accent-rune);">
          📖 Magia de 1º Círculo (Conjurável 1x ao dia sem gastar espaço):
        </label>
        <select class="form-select select-magic-initiate-spell1" data-feat-key="${featKey}">
          <option value="">-- Selecione a Magia de 1º Círculo --</option>
          ${availableLevel1.map(sp => `
            <option value="${sp.id}" ${sp.id === spell1 ? 'selected' : ''}>
              ${sp.name} (${sp.nameEn}) [${sp.school || 'Magia'}]
            </option>
          `).join('')}
        </select>
        ${spell1Obj ? `
          <div style="margin-top: 0.45rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.35;">
            <strong style="color: var(--text-main);">${spell1Obj.name}:</strong> ${spell1Obj.description ? spell1Obj.description.substring(0, 180) + '...' : ''}
            <span style="display: block; font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem;">
              Tempo: ${spell1Obj.castingTime || '1 Ação'} &bull; Alcance: ${spell1Obj.range || '9m'} &bull; Duração: ${spell1Obj.duration || 'Instantânea'}
            </span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Renderiza o Seletor de Estilo de Luta (Fighting Style)
 */
export function renderFightingStyleSelectorHtml(currentStyleId, contextKey = 'class') {
  const currentObj = getFightingStyleById(currentStyleId);

  return `
    <div class="choice-fighting-style-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <label class="form-label" style="color: var(--primary); font-size: 0.88rem; font-weight: 700;">
        ⚔️ Estilo de Luta (Fighting Style):
      </label>
      <select class="form-select select-fighting-style" data-context-key="${contextKey}">
        <option value="">-- Selecione um Estilo de Luta --</option>
        ${FIGHTING_STYLES.map(fs => `
          <option value="${fs.id}" ${fs.id === currentStyleId ? 'selected' : ''}>
            ${fs.name} (${fs.nameEn})
          </option>
        `).join('')}
      </select>

      ${currentObj ? `
        <div style="margin-top: 0.5rem; padding: 0.5rem 0.75rem; background: var(--bg-surface); border-left: 3px solid var(--primary); border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
          <strong style="color: var(--text-main);">${currentObj.name}:</strong> ${currentObj.description}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renderiza o Seletor de Metamagia (Feiticeiro / Adepto de Metamagia)
 * Permite selecionar 2 opções sem repetição.
 */
export function renderMetamagicSelectorHtml(selectedList = [], contextKey = 'class') {
  const list = Array.isArray(selectedList) ? selectedList.slice(0, 2) : [];
  while (list.length < 2) list.push('');

  const selectedSet = new Set(list.filter(Boolean));

  return `
    <div class="choice-metamagic-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <label class="form-label" style="color: var(--accent-rune); font-size: 0.88rem; font-weight: 700; margin: 0;">
          🔮 Opções de Metamagia (2 Escolhas):
        </label>
        <span class="badge-origin" style="font-size: 0.72rem;">${selectedSet.size} / 2</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.6rem;">
        ${[0, 1].map(slotIdx => {
          const currentId = list[slotIdx] || '';
          const currentObj = getMetamagicById(currentId);

          return `
            <div style="padding: 0.6rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 0.25rem;">
                Opção #${slotIdx + 1}:
              </span>
              <select class="form-select select-metamagic-option" data-slot-index="${slotIdx}" data-context-key="${contextKey}">
                <option value="">-- Selecione uma Metamagia --</option>
                ${METAMAGIC_OPTIONS.map(m => {
                  const isOther = selectedSet.has(m.id) && currentId !== m.id;
                  return `
                    <option value="${m.id}" ${m.id === currentId ? 'selected' : ''} ${isOther ? 'disabled' : ''}>
                      ${m.name} (${m.nameEn}) [${m.cost}] ${isOther ? '— (Já Selecionada)' : ''}
                    </option>
                  `;
                }).join('')}
              </select>

              ${currentObj ? `
                <div style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.35;">
                  <strong style="color: var(--text-main);">${currentObj.name}:</strong> ${currentObj.description}
                  <span style="display: block; font-size: 0.72rem; color: var(--accent-amber); margin-top: 0.2rem;">Custo: ${currentObj.cost}</span>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Renderiza o Seletor de Invocações Sobrenaturais (Bruxo / Iniciado Sobrenatural)
 */
export function renderInvocationSelectorHtml(selectedInvocations = [], maxCount = 2, contextKey = 'class') {
  const list = Array.isArray(selectedInvocations) ? selectedInvocations.slice(0, maxCount) : [];
  while (list.length < maxCount) list.push('');

  const selectedSet = new Set(list.filter(Boolean));

  return `
    <div class="choice-invocations-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <label class="form-label" style="color: var(--accent-rune); font-size: 0.88rem; font-weight: 700; margin: 0;">
          👁️ Invocações Sobrenaturais (${maxCount} Escolha${maxCount > 1 ? 's' : ''}):
        </label>
        <span class="badge-origin" style="font-size: 0.72rem;">${selectedSet.size} / ${maxCount}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.6rem;">
        ${list.map((currentId, slotIdx) => {
          const currentObj = getInvocationById(currentId);

          return `
            <div style="padding: 0.6rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 0.25rem;">
                Invocação #${slotIdx + 1}:
              </span>
              <select class="form-select select-invocation-option" data-slot-index="${slotIdx}" data-context-key="${contextKey}">
                <option value="">-- Selecione uma Invocação --</option>
                ${ELDRITCH_INVOCATIONS.map(inv => {
                  const isOther = selectedSet.has(inv.id) && currentId !== inv.id;
                  return `
                    <option value="${inv.id}" ${inv.id === currentId ? 'selected' : ''} ${isOther ? 'disabled' : ''}>
                      ${inv.name} (${inv.nameEn}) ${inv.req !== 'Nenhum' ? `[Pré-req: ${inv.req}]` : ''} ${isOther ? '— (Já Selecionada)' : ''}
                    </option>
                  `;
                }).join('')}
              </select>

              ${currentObj ? `
                <div style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.35;">
                  <strong style="color: var(--text-main);">${currentObj.name}:</strong> ${currentObj.description}
                  ${currentObj.req !== 'Nenhum' ? `<span style="display: block; font-size: 0.72rem; color: var(--accent-amber); margin-top: 0.2rem;">Pré-requisito: ${currentObj.req}</span>` : ''}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Renderiza o Seletor de Espírito Totêmico (Totem Warrior / Wild Heart)
 */
export function renderTotemSelectorHtml(currentTotemId) {
  const currentObj = getTotemSpiritById(currentTotemId);

  return `
    <div class="choice-totem-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <label class="form-label" style="color: var(--accent-emerald); font-size: 0.88rem; font-weight: 700;">
        🐻 Espírito Totêmico (Nível 3):
      </label>
      <select class="form-select select-totem-spirit">
        <option value="">-- Selecione um Espírito Animal --</option>
        ${TOTEM_SPIRITS.map(t => `
          <option value="${t.id}" ${t.id === currentTotemId ? 'selected' : ''}>
            ${t.name}
          </option>
        `).join('')}
      </select>

      ${currentObj ? `
        <div style="margin-top: 0.5rem; padding: 0.5rem 0.75rem; background: var(--bg-surface); border-left: 3px solid var(--accent-emerald); border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
          <strong style="color: var(--text-main);">${currentObj.name}:</strong> ${currentObj.description}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renderiza o Seletor de Presa do Caçador (Hunter - Ranger)
 */
export function renderHunterPreySelectorHtml(currentPreyId) {
  const currentObj = getHunterPreyById(currentPreyId);

  return `
    <div class="choice-hunter-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <label class="form-label" style="color: var(--accent-emerald); font-size: 0.88rem; font-weight: 700;">
        🏹 Presa do Caçador (Hunter's Prey):
      </label>
      <select class="form-select select-hunter-prey">
        <option value="">-- Selecione sua Técnica de Caça --</option>
        ${HUNTER_PREY_OPTIONS.map(hp => `
          <option value="${hp.id}" ${hp.id === currentPreyId ? 'selected' : ''}>
            ${hp.name}
          </option>
        `).join('')}
      </select>

      ${currentObj ? `
        <div style="margin-top: 0.5rem; padding: 0.5rem 0.75rem; background: var(--bg-surface); border-left: 3px solid var(--accent-emerald); border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
          <strong style="color: var(--text-main);">${currentObj.name}:</strong> ${currentObj.description}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renderiza o Seletor de Perícias do Talento Hábil (Skilled)
 * 3 perícias sem repetição.
 */
export function renderSkilledFeatSelectorHtml(selectedSkills = [], existingProficiencies = [], contextKey = 'feat') {
  const list = Array.isArray(selectedSkills) ? selectedSkills.slice(0, 3) : [];
  while (list.length < 3) list.push('');

  const selectedSet = new Set(list.filter(Boolean));

  return `
    <div class="choice-skilled-box" style="margin-top: 0.75rem; padding: 0.85rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <label class="form-label" style="color: var(--primary); font-size: 0.88rem; font-weight: 700; margin: 0;">
          🎯 3 Perícias do Talento Hábil (Skilled):
        </label>
        <span class="badge-origin" style="font-size: 0.72rem;">${selectedSet.size} / 3</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${[0, 1, 2].map(slotIdx => {
          const currentSk = list[slotIdx] || '';

          return `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); width: 75px;">Perícia #${slotIdx + 1}:</span>
              <select class="form-select select-skilled-skill" data-slot-index="${slotIdx}" data-context-key="${contextKey}">
                <option value="">-- Selecione uma Perícia --</option>
                ${SKILLS_LIST.map(sk => {
                  const isAlreadyProf = existingProficiencies.includes(sk.id) && !selectedSet.has(sk.id);
                  const isOther = selectedSet.has(sk.id) && currentSk !== sk.id;
                  return `
                    <option value="${sk.id}" ${sk.id === currentSk ? 'selected' : ''} ${isOther || isAlreadyProf ? 'disabled' : ''}>
                      ${sk.name} ${isAlreadyProf ? '(Já Proficiente)' : (isOther ? '(Já Selecionada)' : '')}
                    </option>
                  `;
                }).join('')}
              </select>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

