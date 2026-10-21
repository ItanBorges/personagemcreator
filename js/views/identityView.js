/**
 * Painel de Identidade & Origem: Nome, Edição, Raça/Espécie com Sub-raças completas,
 * Seletor de Talento de Humano Variante, Customização de Atributos de Tasha,
 * Seleção de Perícias da Classe e Especialização (Expertise).
 */

import { store } from '../state.js';
import { RACES, getRaceById } from '../data/races.js';
import { BACKGROUNDS, getBackgroundById } from '../data/backgrounds.js';
import { FEATS, getFeatById } from '../data/feats.js';
import { getClassById } from '../data/classes.js';
import { getSourceById } from '../data/sources.js';
import { SKILLS_LIST } from '../rules-engine.js';

const SOURCES_2014 = ['phb_2014', 'tcoe', 'xgte', 'bpg', 'mpmm', 'ftd', 'scag'];
const SOURCES_2024 = ['phb_2024'];
function getSourcesByEdition(edition) {
  return edition === '2014' ? SOURCES_2014 : SOURCES_2024;
}

export function renderIdentityView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const currentRace = getRaceById(state.raceId) || RACES[0];
  const currentBg = getBackgroundById(state.backgroundId) || BACKGROUNDS[0];
  const firstClass = computed.firstClass || getClassById('guerreiro');

  // Filtra opções estritamente com base na edição escolhida e livros oficiais ativos
  const availableRaces = RACES.filter(r => r.edition === state.edition && state.activeSources.includes(r.sourceId));
  const availableBackgrounds = BACKGROUNDS.filter(b => b.edition === state.edition && state.activeSources.includes(b.sourceId));
  const availableFeats = FEATS.filter(f => {
    if (state.edition === '2024') {
      return f.sourceId === 'phb_2024';
    } else {
      if (f.id === 'musico') return false; // Talento exclusivo da regra 2024
      return state.activeSources.includes(f.sourceId) || f.sourceId === 'phb_2024';
    }
  });

  const raceSrc = getSourceById(currentRace.sourceId);
  const bgSrc = getSourceById(currentBg.sourceId);

  // Sub-raças disponíveis para a raça atual
  const subracesList = (currentRace.subraces || []).filter(sub => {
    if (!sub.sourceId) return true;
    return state.activeSources.includes(sub.sourceId);
  });

  // Perícias do Antecedente (já garantidas)
  const bgSkillNames = currentBg.skills || [];
  const skillNameMap = {
    'Acrobacia': 'acrobacia', 'Adestrar Animais': 'adestrar_animais', 'Arcanismo': 'arcanismo',
    'Atletismo': 'atletismo', 'Atuação': 'atuacao', 'Enganação': 'enganacao',
    'Furtividade': 'furtividade', 'História': 'historia', 'Intimidação': 'intimidacao',
    'Intuição': 'intuicao', 'Investigação': 'investigacao', 'Medicina': 'medicina',
    'Natureza': 'natureza', 'Percepção': 'percepcao', 'Persuasão': 'persuasao',
    'Prestidigitação': 'prestidigitacao', 'Religião': 'religiao', 'Sobrevivência': 'sobrevivencia'
  };
  const bgSkillIds = bgSkillNames.map(name => skillNameMap[name] || name.toLowerCase());

  // Opções de perícia da classe inicial
  const classSkillOptions = (firstClass.skillChoices && firstClass.skillChoices.options === 'all')
    ? SKILLS_LIST.map(s => s.id)
    : (firstClass.skillChoices ? firstClass.skillChoices.options : ['atletismo', 'intimidacao']);
  const classSkillMaxCount = firstClass.skillChoices ? firstClass.skillChoices.count : 2;

  // Especialização (Expertise) disponível?
  const maxExpertise = firstClass.expertiseCount || (firstClass.id === 'ladino' ? 2 : (firstClass.id === 'bardo' ? 2 : 0));

  container.innerHTML = `
    <div class="builder-section">
      <div class="builder-section-header">
        <div>
          <h2 class="builder-section-title">👤 Identidade & Origem do Personagem</h2>
          <p class="builder-section-subtitle">Defina o nome, regras base (2014 ou 2024), espécie/raça ancestral, sub-raça e histórico.</p>
        </div>

        <!-- Seletor de Edição de Regras Base -->
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">Edição de Regras:</span>
          <select id="select-edition" class="form-select" style="width: 170px; font-weight: bold;">
            <option value="2024" ${state.edition === '2024' ? 'selected' : ''}>D&D 5.5 (2024)</option>
            <option value="2014" ${state.edition === '2014' ? 'selected' : ''}>D&D 5e (2014)</option>
          </select>
        </div>
      </div>

      <!-- Grid de Identidade -->
      <div class="identity-grid">
        <!-- Nome do Personagem -->
        <div class="form-group">
          <label class="form-label">Nome do Personagem:</label>
          <input type="text" id="input-char-name" class="form-control" value="${state.characterName}" placeholder="Ex: Valerius Martelo de Prata">
        </div>

        <!-- Nome do Jogador -->
        <div class="form-group">
          <label class="form-label">Nome do Jogador / Mestre:</label>
          <input type="text" id="input-player-name" class="form-control" value="${state.playerName}" placeholder="Seu nome">
        </div>

        <!-- Tendência / Alinhamento -->
        <div class="form-group">
          <label class="form-label">Tendência (Alinhamento):</label>
          <select id="select-alignment" class="form-select">
            <option value="Leal e Bom" ${state.alignment === 'Leal e Bom' ? 'selected' : ''}>Leal e Bom</option>
            <option value="Neutro e Bom" ${state.alignment === 'Neutro e Bom' ? 'selected' : ''}>Neutro e Bom</option>
            <option value="Caótico e Bom" ${state.alignment === 'Caótico e Bom' ? 'selected' : ''}>Caótico e Bom</option>
            <option value="Leal e Neutro" ${state.alignment === 'Leal e Neutro' ? 'selected' : ''}>Leal e Neutro</option>
            <option value="Neutro Puro" ${state.alignment === 'Neutro Puro' ? 'selected' : ''}>Neutro Puro</option>
            <option value="Caótico e Neutro" ${state.alignment === 'Caótico e Neutro' ? 'selected' : ''}>Caótico e Neutro</option>
            <option value="Leal e Mau" ${state.alignment === 'Leal e Mau' ? 'selected' : ''}>Leal e Mau</option>
            <option value="Neutro e Mau" ${state.alignment === 'Neutro e Mau' ? 'selected' : ''}>Neutro e Mau</option>
            <option value="Caótico e Mau" ${state.alignment === 'Caótico e Mau' ? 'selected' : ''}>Caótico e Mau</option>
          </select>
        </div>

        <!-- Raça / Espécie -->
        <div class="form-group">
          <label class="form-label" style="display: flex; justify-content: space-between;">
            <span>Raça / Espécie:</span>
            <span class="badge-source" data-source="${currentRace.sourceId}">${raceSrc.code}</span>
          </label>
          <select id="select-race" class="form-select">
            ${availableRaces.map(r => `
              <option value="${r.id}" ${r.id === state.raceId ? 'selected' : ''}>
                ${r.name} [${getSourceById(r.sourceId).code}]
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Sub-raça / Linhagem / Ancestral Dracônico (Dinâmico para QUALQUER raça que tenha sub-raças) -->
        ${subracesList.length > 0 ? `
          <div class="form-group">
            <label class="form-label" style="color: var(--primary);">
              🧬 Sub-raça / Linhagem / Ancestralidade:
            </label>
            <select id="select-subrace" class="form-select">
              ${subracesList.map(sub => `
                <option value="${sub.id}" ${sub.id === state.subraceId ? 'selected' : ''}>
                  ${sub.name} ${sub.element ? `[Elemento: ${sub.element}]` : ''}
                </option>
              `).join('')}
            </select>
          </div>
        ` : ''}

        <!-- Antecedente -->
        <div class="form-group">
          <label class="form-label" style="display: flex; justify-content: space-between;">
            <span>Antecedente (Background):</span>
            <span class="badge-source" data-source="${currentBg.sourceId}">${bgSrc.code}</span>
          </label>
          <select id="select-background" class="form-select">
            ${availableBackgrounds.map(b => `
              <option value="${b.id}" ${b.id === state.backgroundId ? 'selected' : ''}>
                ${b.name} [${getSourceById(b.sourceId).code}]
              </option>
            `).join('')}
          </select>
        </div>
      </div>

      <!-- SELETOR DE TALENTO PARA HUMANO VARIANTE OU LINHAGEM PERSONALIZADA -->
      ${(state.raceId === 'humano_variante_2014' || state.raceId === 'linhagem_tasha' || currentRace.freeFeat) ? `
        <div style="margin-top: 1.25rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <strong style="color: var(--primary); font-size: 0.95rem;">
              ⭐ Talento Bônus de Nível 1 (${currentRace.name}):
            </strong>
            <span class="badge-origin">Talento Inicial Gratuito</span>
          </div>
          <div class="form-group">
            <select id="select-variant-human-feat" class="form-select">
              ${availableFeats.map(f => {
                const src = getSourceById(f.sourceId);
                return `
                  <option value="${f.id}" ${state.variantHumanFeatId === f.id ? 'selected' : ''}>
                    ${f.name} [${src.code}] ${f.category === 'origem' ? '(Origem)' : ''}
                  </option>
                `;
              }).join('')}
            </select>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">
              ${getFeatById(state.variantHumanFeatId)?.description || ''}
            </p>
          </div>
        </div>
      ` : ''}

      <!-- AUMENTO DE ATRIBUTOS: 2024 (DO ANTECEDENTE) OU 2014 (RACIAL / TASHA) -->
      ${state.edition === '2024' ? `
        <div style="margin-top: 1.25rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border-left: 4px solid var(--accent-emerald);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <strong style="color: var(--accent-emerald); font-size: 0.95rem;">
              📈 Bônus de Atributos do Antecedente (${currentBg.name}):
            </strong>
            <span class="badge-origin">Regra D&D 2024</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            No D&D 2024, seus aumentos de atributos derivam do seu Antecedente (+2 em um e +1 em outro). Opções permitidas por ${currentBg.name}: <strong>${(currentBg.statsOptions || ['FOR', 'DES', 'CON']).join(', ')}</strong>.
          </p>

          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <div>
              <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Bônus Maior (+2):</span>
              <select id="select-bg-stat-plus2" class="form-select" style="width: 160px;">
                ${(currentBg.statsOptions || ['FOR', 'DES', 'CON']).map(abbr => {
                  const mapKey = { 'FOR': 'str', 'DES': 'dex', 'CON': 'con', 'INT': 'int', 'SAB': 'wis', 'CAR': 'cha' }[abbr] || 'str';
                  const nameMap = { 'FOR': 'Força (+2)', 'DES': 'Destreza (+2)', 'CON': 'Constituição (+2)', 'INT': 'Inteligência (+2)', 'SAB': 'Sabedoria (+2)', 'CAR': 'Carisma (+2)' };
                  return `<option value="${mapKey}" ${state.backgroundStatChoices?.plus2 === mapKey ? 'selected' : ''}>${nameMap[abbr]}</option>`;
                }).join('')}
              </select>
            </div>

            <div>
              <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Bônus Menor (+1):</span>
              <select id="select-bg-stat-plus1" class="form-select" style="width: 160px;">
                ${(currentBg.statsOptions || ['FOR', 'DES', 'CON']).map(abbr => {
                  const mapKey = { 'FOR': 'str', 'DES': 'dex', 'CON': 'con', 'INT': 'int', 'SAB': 'wis', 'CAR': 'cha' }[abbr] || 'con';
                  const nameMap = { 'FOR': 'Força (+1)', 'DES': 'Destreza (+1)', 'CON': 'Constituição (+1)', 'INT': 'Inteligência (+1)', 'SAB': 'Sabedoria (+1)', 'CAR': 'Carisma (+1)' };
                  return `<option value="${mapKey}" ${state.backgroundStatChoices?.plus1 === mapKey ? 'selected' : ''}>${nameMap[abbr]}</option>`;
                }).join('')}
              </select>
            </div>
          </div>
        </div>
      ` : `
        <!-- ESCOLHA DE ATRIBUTOS PARA HUMANO VARIANTE (2014) -->
        ${(currentRace.abilityBonus?.type === 'choice_2' && !state.useTashaCustomStats) ? `
          <div style="margin-top: 1.25rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="color: var(--primary); font-size: 0.95rem;">
                🧬 Bônus de Atributos de ${currentRace.name} (+1 em dois atributos):
              </strong>
              <span class="badge-origin">Regra D&D 2014</span>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <div>
                <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Primeiro Atributo (+1):</span>
                <select id="select-racial-stat1" class="form-select" style="width: 150px;">
                  <option value="str" ${state.racialStatChoices?.stat1 === 'str' ? 'selected' : ''}>Força (+1)</option>
                  <option value="dex" ${state.racialStatChoices?.stat1 === 'dex' ? 'selected' : ''}>Destreza (+1)</option>
                  <option value="con" ${state.racialStatChoices?.stat1 === 'con' ? 'selected' : ''}>Constituição (+1)</option>
                  <option value="int" ${state.racialStatChoices?.stat1 === 'int' ? 'selected' : ''}>Inteligência (+1)</option>
                  <option value="wis" ${state.racialStatChoices?.stat1 === 'wis' ? 'selected' : ''}>Sabedoria (+1)</option>
                  <option value="cha" ${state.racialStatChoices?.stat1 === 'cha' ? 'selected' : ''}>Carisma (+1)</option>
                </select>
              </div>
              <div>
                <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Segundo Atributo (+1):</span>
                <select id="select-racial-stat2" class="form-select" style="width: 150px;">
                  <option value="con" ${state.racialStatChoices?.stat2 === 'con' ? 'selected' : ''}>Constituição (+1)</option>
                  <option value="dex" ${state.racialStatChoices?.stat2 === 'dex' ? 'selected' : ''}>Destreza (+1)</option>
                  <option value="str" ${state.racialStatChoices?.stat2 === 'str' ? 'selected' : ''}>Força (+1)</option>
                  <option value="int" ${state.racialStatChoices?.stat2 === 'int' ? 'selected' : ''}>Inteligência (+1)</option>
                  <option value="wis" ${state.racialStatChoices?.stat2 === 'wis' ? 'selected' : ''}>Sabedoria (+1)</option>
                  <option value="cha" ${state.racialStatChoices?.stat2 === 'cha' ? 'selected' : ''}>Carisma (+1)</option>
                </select>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- REGRA DE CUSTOMIZAÇÃO DE ATRIBUTOS DE TASHA (CALDEIRÃO DE TASHA - TCoE - 2014) -->
        <div style="margin-top: 1.25rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer;">
            <input type="checkbox" id="check-tasha-custom" ${state.useTashaCustomStats ? 'checked' : ''} style="accent-color: var(--primary); width: 18px; height: 18px;">
            <strong style="color: var(--text-main); font-size: 0.95rem;">
              Personalizar Aumentos de Atributos de Linhagem (Regra do Caldeirão de Tasha - 2014)
            </strong>
          </label>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem; margin-left: 1.75rem;">
            Permite substituir os bônus raciais tradicionais por +2 em um atributo e +1 em outro, ou +1 em três atributos à sua escolha.
          </p>

          ${state.useTashaCustomStats ? `
            <div style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); display: flex; flex-direction: column; gap: 0.75rem; margin-left: 1.75rem;">
              <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.85rem;">
                  <input type="radio" name="tasha_type" value="plus2_plus1" ${state.tashaCustomChoice?.type === 'plus2_plus1' ? 'checked' : ''} style="accent-color: var(--primary);">
                  <span>+2 em um e +1 em outro</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.85rem;">
                  <input type="radio" name="tasha_type" value="plus1_each" ${state.tashaCustomChoice?.type === 'plus1_each' ? 'checked' : ''} style="accent-color: var(--primary);">
                  <span>+1 em três atributos</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.85rem;">
                  <input type="radio" name="tasha_type" value="plus1_two" ${state.tashaCustomChoice?.type === 'plus1_two' ? 'checked' : ''} style="accent-color: var(--primary);">
                  <span>+1 em dois atributos</span>
                </label>
              </div>

              <!-- Seletores de Atributos de Tasha -->
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <div>
                  <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Atributo A:</span>
                  <select id="select-tasha-stat-a" class="form-select" style="width: 140px;">
                    <option value="str" ${state.tashaCustomChoice?.statA === 'str' ? 'selected' : ''}>Força</option>
                    <option value="dex" ${state.tashaCustomChoice?.statA === 'dex' ? 'selected' : ''}>Destreza</option>
                    <option value="con" ${state.tashaCustomChoice?.statA === 'con' ? 'selected' : ''}>Constituição</option>
                    <option value="int" ${state.tashaCustomChoice?.statA === 'int' ? 'selected' : ''}>Inteligência</option>
                    <option value="wis" ${state.tashaCustomChoice?.statA === 'wis' ? 'selected' : ''}>Sabedoria</option>
                    <option value="cha" ${state.tashaCustomChoice?.statA === 'cha' ? 'selected' : ''}>Carisma</option>
                  </select>
                </div>

                <div>
                  <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Atributo B:</span>
                  <select id="select-tasha-stat-b" class="form-select" style="width: 140px;">
                    <option value="dex" ${state.tashaCustomChoice?.statB === 'dex' ? 'selected' : ''}>Destreza</option>
                    <option value="con" ${state.tashaCustomChoice?.statB === 'con' ? 'selected' : ''}>Constituição</option>
                    <option value="int" ${state.tashaCustomChoice?.statB === 'int' ? 'selected' : ''}>Inteligência</option>
                    <option value="wis" ${state.tashaCustomChoice?.statB === 'wis' ? 'selected' : ''}>Sabedoria</option>
                    <option value="cha" ${state.tashaCustomChoice?.statB === 'cha' ? 'selected' : ''}>Carisma</option>
                    <option value="str" ${state.tashaCustomChoice?.statB === 'str' ? 'selected' : ''}>Força</option>
                  </select>
                </div>

                ${state.tashaCustomChoice?.type === 'plus1_each' ? `
                  <div>
                    <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); display: block;">Atributo C (+1):</span>
                    <select id="select-tasha-stat-c" class="form-select" style="width: 140px;">
                      <option value="con" ${state.tashaCustomChoice?.statC === 'con' ? 'selected' : ''}>Constituição</option>
                      <option value="int" ${state.tashaCustomChoice?.statC === 'int' ? 'selected' : ''}>Inteligência</option>
                      <option value="wis" ${state.tashaCustomChoice?.statC === 'wis' ? 'selected' : ''}>Sabedoria</option>
                      <option value="cha" ${state.tashaCustomChoice?.statC === 'cha' ? 'selected' : ''}>Carisma</option>
                      <option value="str" ${state.tashaCustomChoice?.statC === 'str' ? 'selected' : ''}>Força</option>
                      <option value="dex" ${state.tashaCustomChoice?.statC === 'dex' ? 'selected' : ''}>Destreza</option>
                    </select>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      `}

      <!-- SELETOR DE PERÍCIAS DE CLASSE & ESPECIALIZAÇÃO (EXPERTISE) -->
      <div style="margin-top: 1.25rem; padding: 1.25rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-family: var(--font-title); font-size: 1.1rem; color: var(--primary);">
              🎯 Perícias da Classe (${firstClass.name})
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-muted);">
              Selecione <strong>${classSkillMaxCount}</strong> perícias da lista de ${firstClass.name}. Perícias do antecedente (${bgSkillNames.join(', ')}) já estão inclusas automaticamente!
            </p>
          </div>

          <span class="badge-origin">
            Selecionadas: ${(state.classChosenSkills || []).length} / ${classSkillMaxCount}
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 0.6rem;">
          ${SKILLS_LIST.map(skill => {
            const isFromBg = bgSkillIds.includes(skill.id);
            const isClassOption = classSkillOptions.includes(skill.id);
            const isChosen = (state.classChosenSkills || []).includes(skill.id);
            const isProficient = isFromBg || isChosen;
            const isExpert = (state.expertSkills || []).includes(skill.id);

            return `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.45rem 0.65rem; background: var(--bg-surface); border: 1px solid ${isProficient ? 'var(--primary-border)' : 'var(--border-color)'}; border-radius: var(--radius-sm); font-size: 0.85rem;">
                <label style="display: flex; align-items: center; gap: 0.45rem; cursor: ${isFromBg ? 'default' : 'pointer'};">
                  <input type="checkbox" class="class-skill-checkbox" value="${skill.id}"
                    ${isProficient ? 'checked' : ''}
                    ${isFromBg ? 'disabled title="Concedida pelo antecedente"' : (!isClassOption ? 'disabled title="Não pertence à lista da classe"' : '')}
                    style="accent-color: var(--primary);">
                  <span style="${isFromBg ? 'color: var(--accent-amber); font-weight: bold;' : (isChosen ? 'color: var(--primary); font-weight: bold;' : '')}">
                    ${skill.name}
                  </span>
                  ${isFromBg ? '<span style="font-size: 0.68rem; color: var(--text-dim);">[Antecedente]</span>' : ''}
                </label>

                <!-- Checkbox de Especialização (Expertise) -->
                ${maxExpertise > 0 ? `
                  <label title="Especialização (Dobra proficiência)" style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.72rem; cursor: pointer; color: ${isExpert ? 'var(--accent-rune)' : 'var(--text-dim)'};">
                    <input type="checkbox" class="expertise-checkbox" value="${skill.id}" ${isExpert ? 'checked' : ''} ${!isProficient ? 'disabled' : ''} style="accent-color: var(--accent-rune);">
                    <span>Esp.</span>
                  </label>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  setupIdentityEvents(container);
}

function setupIdentityEvents(container) {
  // Prevenção do bug de perda de foco:
  // Salva sem recriar o DOM inteiro a cada caractere
  const charNameInput = container.querySelector('#input-char-name');
  charNameInput?.addEventListener('input', (e) => {
    store.getState().characterName = e.target.value;
    store.saveState();
    // Atualiza apenas displays que exibem o nome sem destruir o input
    document.querySelectorAll('.sheet-char-name').forEach(el => el.textContent = e.target.value);
  });
  charNameInput?.addEventListener('blur', () => {
    store.notify();
  });

  const playerNameInput = container.querySelector('#input-player-name');
  playerNameInput?.addEventListener('input', (e) => {
    store.getState().playerName = e.target.value;
    store.saveState();
  });
  playerNameInput?.addEventListener('blur', () => {
    store.notify();
  });

  // Alinhamento
  container.querySelector('#select-alignment')?.addEventListener('change', (e) => {
    store.setState({ alignment: e.target.value });
  });

  // Edição (2024 vs 2014)
  container.querySelector('#select-edition')?.addEventListener('change', (e) => {
    const newEd = e.target.value;
    const allowedSources = getSourcesByEdition(newEd);
    const defaultRace = newEd === '2024' ? 'humano_2024' : 'humano_variante_2014';
    const defaultBg = newEd === '2024' ? 'soldado_2024' : 'soldado_2014';
    const bgChoices = newEd === '2024' ? { plus2: 'str', plus1: 'con' } : null;

    store.setState({
      edition: newEd,
      activeSources: allowedSources,
      raceId: defaultRace,
      subraceId: null,
      backgroundId: defaultBg,
      useTashaCustomStats: false,
      backgroundStatChoices: bgChoices
    });
  });

  // Bônus de Atributos do Antecedente (2024)
  container.querySelector('#select-bg-stat-plus2')?.addEventListener('change', (e) => {
    const bgChoices = { ...(store.getState().backgroundStatChoices || {}), plus2: e.target.value };
    store.setState({ backgroundStatChoices: bgChoices });
  });

  container.querySelector('#select-bg-stat-plus1')?.addEventListener('change', (e) => {
    const bgChoices = { ...(store.getState().backgroundStatChoices || {}), plus1: e.target.value };
    store.setState({ backgroundStatChoices: bgChoices });
  });

  // Escolha de Atributos Raciais para Humano Variante (2014)
  container.querySelector('#select-racial-stat1')?.addEventListener('change', (e) => {
    const rc = { ...(store.getState().racialStatChoices || {}), stat1: e.target.value };
    store.setState({ racialStatChoices: rc });
  });

  container.querySelector('#select-racial-stat2')?.addEventListener('change', (e) => {
    const rc = { ...(store.getState().racialStatChoices || {}), stat2: e.target.value };
    store.setState({ racialStatChoices: rc });
  });

  // Raça
  container.querySelector('#select-race')?.addEventListener('change', (e) => {
    const rId = e.target.value;
    const race = getRaceById(rId);
    const subId = (race && race.subraces && race.subraces.length > 0) ? race.subraces[0].id : null;
    store.setState({ raceId: rId, subraceId: subId });
  });

  // Sub-raça
  container.querySelector('#select-subrace')?.addEventListener('change', (e) => {
    store.setState({ subraceId: e.target.value });
  });

  // Antecedente
  container.querySelector('#select-background')?.addEventListener('change', (e) => {
    store.setState({ backgroundId: e.target.value });
  });

  // Talento de Humano Variante
  container.querySelector('#select-variant-human-feat')?.addEventListener('change', (e) => {
    store.setState({ variantHumanFeatId: e.target.value });
  });

  // Regra de Tasha para Atributos
  container.querySelector('#check-tasha-custom')?.addEventListener('change', (e) => {
    store.setState({ useTashaCustomStats: e.target.checked });
  });

  container.querySelectorAll('input[name="tasha_type"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const tc = { ...(store.getState().tashaCustomChoice || {}), type: e.target.value };
      store.setState({ tashaCustomChoice: tc });
    });
  });

  container.querySelector('#select-tasha-stat-a')?.addEventListener('change', (e) => {
    const tc = { ...(store.getState().tashaCustomChoice || {}), statA: e.target.value };
    store.setState({ tashaCustomChoice: tc });
  });

  container.querySelector('#select-tasha-stat-b')?.addEventListener('change', (e) => {
    const tc = { ...(store.getState().tashaCustomChoice || {}), statB: e.target.value };
    store.setState({ tashaCustomChoice: tc });
  });

  container.querySelector('#select-tasha-stat-c')?.addEventListener('change', (e) => {
    const tc = { ...(store.getState().tashaCustomChoice || {}), statC: e.target.value };
    store.setState({ tashaCustomChoice: tc });
  });

  // Seleção de Perícias da Classe
  container.querySelectorAll('.class-skill-checkbox:not(:disabled)').forEach(cb => {
    cb.addEventListener('change', () => {
      const current = [...(store.getState().classChosenSkills || [])];
      const val = cb.value;
      if (cb.checked) {
        if (!current.includes(val)) current.push(val);
      } else {
        const idx = current.indexOf(val);
        if (idx !== -1) current.splice(idx, 1);
      }
      store.setState({ classChosenSkills: current });
    });
  });

  // Seleção de Especialização (Expertise)
  container.querySelectorAll('.expertise-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const current = [...(store.getState().expertSkills || [])];
      const val = cb.value;
      if (cb.checked) {
        if (!current.includes(val)) current.push(val);
      } else {
        const idx = current.indexOf(val);
        if (idx !== -1) current.splice(idx, 1);
      }
      store.setState({ expertSkills: current });
    });
  });
}
