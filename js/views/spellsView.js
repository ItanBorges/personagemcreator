/**
 * Painel de Magias: Catálogo Completo, Filtros Inteligentes por Classe/Círculo,
 * Identificação de Origem e Livro Fonte, e Busca Textual em Tempo Real.
 * Sincronizado dinamicamente com o Nível e a Classe Conjuradora do Personagem.
 */

import { store } from '../state.js';
import { SPELLS, getSpellById } from '../data/spells.js';
import { SOURCES, getSourceById } from '../data/sources.js';
import { getClassById } from '../data/classes.js';

// Estado dos filtros locais da visualização
let activeCircleFilter = 'available'; // 'available', 'all', '0', '1', ..., '9'
let activeClassFilter = 'auto';       // 'auto', 'all', 'mago', 'clerigo', etc.
let searchQuery = '';
let onlyKnownFilter = false;

/**
 * Retorna o atributo de conjuração e o nome para a classe
 */
function getSpellcastingAbility(classId) {
  if (['mago', 'artifice'].includes(classId)) return { stat: 'int', name: 'INT', fullName: 'Inteligência' };
  if (['clerigo', 'druida', 'patrulheiro'].includes(classId)) return { stat: 'wis', name: 'SAB', fullName: 'Sabedoria' };
  if (['bardo', 'feiticeiro', 'bruxo', 'paladino'].includes(classId)) return { stat: 'cha', name: 'CAR', fullName: 'Carisma' };
  return { stat: 'int', name: 'INT', fullName: 'Inteligência' };
}

/**
 * Calcula o círculo máximo que o personagem tem espaços para conjurar
 */
function getMaxCastableCircle(computed) {
  let maxCircle = 0;

  // 1. Espaços regulares de conjurador (1º ao 9º círculo)
  if (computed.spellSlotsData && computed.spellSlotsData.slots) {
    computed.spellSlotsData.slots.forEach((count, idx) => {
      if (count > 0) {
        maxCircle = Math.max(maxCircle, idx + 1);
      }
    });
  }

  // 2. Espaços de Magia de Pacto do Bruxo
  if (computed.spellSlotsData && computed.spellSlotsData.pact && computed.spellSlotsData.pact.slots > 0) {
    maxCircle = Math.max(maxCircle, computed.spellSlotsData.pact.slotLevel);
  }

  return maxCircle;
}

/**
 * Retorna lista de classes conjuradoras ativas
 */
function getCasterClassesInfo(computed) {
  const casterClassIds = Object.keys(computed.classLevels || {}).filter(cId => {
    const cls = getClassById(cId);
    return cls && cls.casterType !== 'none';
  });

  // Subclasses com terço de conjuração (Cavaleiro Arcano / Trapaceiro Arcano)
  if (computed.subclasses?.['guerreiro'] === 'cavaleiro_arcano' || computed.subclasses?.['ladino'] === 'trapaceiro_arcano') {
    if (!casterClassIds.includes('mago')) {
      casterClassIds.push('mago');
    }
  }

  const firstClass = computed.firstClass || getClassById('guerreiro');
  const primaryCasterId = casterClassIds[0] || (firstClass && firstClass.casterType !== 'none' ? firstClass.id : null);
  const primaryCasterClass = primaryCasterId ? getClassById(primaryCasterId) : null;

  return { casterClassIds, primaryCasterId, primaryCasterClass, firstClass };
}

export function renderSpellsView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const { casterClassIds, primaryCasterId, primaryCasterClass, firstClass } = getCasterClassesInfo(computed);

  const spellAbility = primaryCasterClass
    ? getSpellcastingAbility(primaryCasterId)
    : { stat: 'int', name: 'INT', fullName: 'Inteligência' };
  const spellMod = computed.modifiers[spellAbility.stat] || 0;
  const spellSaveDc = 8 + computed.profBonus + spellMod;
  const spellAtkBonus = computed.profBonus + spellMod;

  const maxCastableCircle = getMaxCastableCircle(computed);

  // Se não houver classe conjuradora e o filtro estiver em 'auto', altera para 'all'
  if (casterClassIds.length === 0 && activeClassFilter === 'auto') {
    activeClassFilter = 'all';
  }

  // Resumo de espaços de magia
  const slotParts = [];
  if (computed.spellSlotsData && computed.spellSlotsData.slots) {
    computed.spellSlotsData.slots.forEach((s, idx) => {
      if (s > 0) {
        slotParts.push(`${idx + 1}º Círculo: <strong>${s}</strong>`);
      }
    });
  }
  if (computed.spellSlotsData && computed.spellSlotsData.pact && computed.spellSlotsData.pact.slots > 0) {
    slotParts.push(`Pacto (${computed.spellSlotsData.pact.slotLevel}º Círculo): <strong>${computed.spellSlotsData.pact.slots}</strong>`);
  }
  const slotsSummaryStr = slotParts.length > 0
    ? `Espaços Disponíveis: ${slotParts.join(' &bull; ')}`
    : `Espaços Disponíveis: <em>Nenhum espaço no nível atual</em>`;

  const totalCatalogCount = SPELLS.length;
  const filteredSpells = getFilteredSpells();
  const knownSpellIds = state.knownSpells.map(s => s.spellId);

  container.innerHTML = `
    <div class="builder-section">
      <div class="builder-section-header">
        <div>
          <h2 class="builder-section-title">
            ✨ Grimório & Seleção de Magias
            ${primaryCasterClass ? `<span class="brand-badge">${primaryCasterClass.name}</span>` : ''}
          </h2>
          <p class="builder-section-subtitle">
            Magias no Repertório: <strong>${state.knownSpells.length}</strong> &bull;
            ${slotsSummaryStr}
          </p>
        </div>

        ${primaryCasterClass ? `
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span class="brand-badge">CD de Salvaguarda (${spellAbility.name}): ${spellSaveDc}</span>
            <span class="brand-badge">Ataque Mágico: +${spellAtkBonus}</span>
          </div>
        ` : `
          <div>
            <span class="brand-badge" style="background: rgba(148, 163, 184, 0.15); color: var(--text-muted);">Classe sem Conjuração Nativa</span>
          </div>
        `}
      </div>

      <!-- Alerta informativo para classes sem conjuração nativa -->
      ${!primaryCasterClass ? `
        <div class="multiclass-alert alert-warning" style="margin-bottom: 1.25rem;">
          <div class="multiclass-alert-icon">💡</div>
          <div style="font-size: 0.85rem; line-height: 1.4;">
            <strong>Nota sobre Conjuração:</strong> Sua classe principal (<strong>${firstClass?.name || 'Guerreiro'}</strong>) não possui a característica de Conjuração de Magias nativa. O catálogo completo está disponível para você selecionar magias caso as adquira através de <strong>Talentos</strong> (ex: <em>Iniciado em Magia</em>) ou <strong>Traços Raciais</strong> (ex: <em>Alto Elfo, Tiefling, Genasi</em>).
          </div>
        </div>
      ` : ''}

      <!-- Alerta se livros fontes estiverem filtrados ocultando o catálogo -->
      ${state.activeSources && (!state.activeSources.includes('phb_2024') || state.activeSources.length < SOURCES.length) ? `
        <div class="multiclass-alert alert-warning" style="margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem;">
            <span style="font-size: 1.3rem;">📚</span>
            <div>
              <strong>Atenção às Fontes:</strong> Apenas <strong>${state.activeSources.length} de ${SOURCES.length} livros</strong> estão ativos.
              ${!state.activeSources.includes('phb_2024') ? `<span style="color: var(--accent-amber); font-weight: bold;">(O Livro do Jogador 2024 estava desativado, ocultando as magias básicas!)</span>` : ''}
            </div>
          </div>
          <button class="btn btn-sm btn-primary" id="btn-activate-all-books" style="white-space: nowrap;">
            ✨ Ativar Todos os Livros (Ver 125 Magias)
          </button>
        </div>
      ` : ''}

      <!-- Barra de Ações Rápidas de Filtro -->
      <div class="spells-quick-filters" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; align-items: center;">
        <button class="btn btn-sm ${activeCircleFilter === 'all' && activeClassFilter === 'all' && !onlyKnownFilter && !searchQuery ? 'btn-primary' : 'btn-outline'}" id="btn-filter-all-spells" title="Exibir todas as magias do 0 ao 9º círculo de todas as classes">
          ✨ Todas as Magias (${totalCatalogCount})
        </button>

        ${primaryCasterClass ? `
          <button class="btn btn-sm ${activeCircleFilter === 'available' && activeClassFilter === 'auto' && !onlyKnownFilter && !searchQuery ? 'btn-primary' : 'btn-outline'}" id="btn-filter-my-class" title="Filtrar magias da sua classe e círculos disponíveis">
            ⭐ Minha Classe (${primaryCasterClass.name})
          </button>
        ` : ''}

        <button class="btn btn-sm ${activeCircleFilter === 'available' && !onlyKnownFilter && !searchQuery ? 'btn-primary' : 'btn-outline'}" id="btn-filter-available" title="Filtrar apenas círculos que seu personagem pode conjurar">
          🎯 Círculos Disponíveis (${maxCastableCircle > 0 ? `0 a ${maxCastableCircle}º` : 'Truques'})
        </button>

        <button class="btn btn-sm ${onlyKnownFilter ? 'btn-primary' : 'btn-outline'}" id="btn-filter-known" title="Filtrar apenas magias já adicionadas ao seu repertório">
          📖 Meu Repertório (${state.knownSpells.length})
        </button>

        ${(activeCircleFilter !== 'available' || activeClassFilter !== (primaryCasterClass ? 'auto' : 'all') || searchQuery || onlyKnownFilter) ? `
          <button class="btn btn-sm btn-secondary" id="btn-filter-reset" title="Restaurar filtros recomendados">
            🔄 Restaurar Padrão
          </button>
        ` : ''}
      </div>

      <!-- Barra de Filtros de Magia (Busca + Círculo + Classe) -->
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem; align-items: center;">
        <!-- Busca em tempo real com botão de limpar -->
        <div style="flex: 1; min-width: 240px; position: relative;">
          <input type="text" id="spell-search-input" class="form-control" placeholder="🔍 Localizar magia por nome (Pt-Br / Inglês) ou efeito..." value="${searchQuery}" style="padding-right: 2.2rem;">
          <button id="btn-clear-search" style="display: ${searchQuery ? 'block' : 'none'}; position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 2px 6px;" title="Limpar busca">&times;</button>
        </div>

        <!-- Filtro por Círculo (Todos de 0 a 9) -->
        <div>
          <select id="spell-circle-select" class="form-select" style="min-width: 230px;">
            <option value="available" ${activeCircleFilter === 'available' ? 'selected' : ''}>
              ⭐ Círculos Disponíveis (${maxCastableCircle > 0 ? `Truques até ${maxCastableCircle}º` : 'Truques'})
            </option>
            <option value="all" ${activeCircleFilter === 'all' ? 'selected' : ''}>✨ Todos os Círculos (Grimório Completo 0 a 9º)</option>
            <option value="0" ${activeCircleFilter === '0' ? 'selected' : ''}>Truques (Nível 0)</option>
            <option value="1" ${activeCircleFilter === '1' ? 'selected' : ''}>1º Círculo</option>
            <option value="2" ${activeCircleFilter === '2' ? 'selected' : ''}>2º Círculo</option>
            <option value="3" ${activeCircleFilter === '3' ? 'selected' : ''}>3º Círculo</option>
            <option value="4" ${activeCircleFilter === '4' ? 'selected' : ''}>4º Círculo</option>
            <option value="5" ${activeCircleFilter === '5' ? 'selected' : ''}>5º Círculo</option>
            <option value="6" ${activeCircleFilter === '6' ? 'selected' : ''}>6º Círculo</option>
            <option value="7" ${activeCircleFilter === '7' ? 'selected' : ''}>7º Círculo</option>
            <option value="8" ${activeCircleFilter === '8' ? 'selected' : ''}>8º Círculo</option>
            <option value="9" ${activeCircleFilter === '9' ? 'selected' : ''}>9º Círculo</option>
          </select>
        </div>

        <!-- Filtro por Lista de Classe -->
        <div>
          <select id="spell-class-select" class="form-select" style="min-width: 200px;">
            ${primaryCasterClass ? `
              <option value="auto" ${activeClassFilter === 'auto' ? 'selected' : ''}>
                ⭐ Minha Classe (${primaryCasterClass.name})
              </option>
            ` : ''}
            <option value="all" ${activeClassFilter === 'all' ? 'selected' : ''}>✨ Todas as Classes (Catálogo Geral)</option>
            <option value="mago" ${activeClassFilter === 'mago' ? 'selected' : ''}>Mago</option>
            <option value="clerigo" ${activeClassFilter === 'clerigo' ? 'selected' : ''}>Clérigo</option>
            <option value="druida" ${activeClassFilter === 'druida' ? 'selected' : ''}>Druida</option>
            <option value="bardo" ${activeClassFilter === 'bardo' ? 'selected' : ''}>Bardo</option>
            <option value="bruxo" ${activeClassFilter === 'bruxo' ? 'selected' : ''}>Bruxo</option>
            <option value="feiticeiro" ${activeClassFilter === 'feiticeiro' ? 'selected' : ''}>Feiticeiro</option>
            <option value="paladino" ${activeClassFilter === 'paladino' ? 'selected' : ''}>Paladino</option>
            <option value="patrulheiro" ${activeClassFilter === 'patrulheiro' ? 'selected' : ''}>Patrulheiro</option>
            <option value="artifice" ${activeClassFilter === 'artifice' ? 'selected' : ''}>Artífice</option>
          </select>
        </div>
      </div>

      <!-- Barra de Status e Contagem de Resultados -->
      <div id="spells-status-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.82rem; color: var(--text-muted); flex-wrap: wrap; gap: 0.5rem;">
        <div>
          Exibindo <strong id="spells-count-matched" style="color: var(--primary);">${filteredSpells.length}</strong> de <strong>${totalCatalogCount}</strong> magias
          ${searchQuery ? ` &bull; <em>Resultados para busca: "${escapeHtml(searchQuery)}"</em>` : ''}
          ${onlyKnownFilter ? ` &bull; <em>Filtrado por: No Repertório</em>` : ''}
        </div>
        <div style="font-size: 0.78rem;">
          Clique em <strong>➕ Adicionar</strong> para incluir a magia no repertório do personagem
        </div>
      </div>

      <!-- Magias Selecionadas no Momento (Repertório) -->
      <div id="spells-repertoire-wrapper">
        ${renderRepertoireHtml(state.knownSpells)}
      </div>

      <!-- Grid de Magias do Catálogo -->
      <div class="spells-grid-container" id="spells-catalog-grid">
        ${renderSpellsCardsHtml(filteredSpells, knownSpellIds, maxCastableCircle, casterClassIds, primaryCasterClass)}
      </div>
    </div>
  `;

  setupSpellsEvents(container);
}

function renderRepertoireHtml(knownSpells) {
  if (!knownSpells || knownSpells.length === 0) {
    return '';
  }

  return `
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
      <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.6rem; display: flex; justify-content: space-between; align-items: center;">
        <span>Magias no Seu Repertório (${knownSpells.length}):</span>
        <span style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted); text-transform: none;">Sincronizado automaticamente com a Ficha</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${knownSpells.map(item => {
          const spell = getSpellById(item.spellId);
          if (!spell) return '';
          const src = getSourceById(spell.sourceId);
          const circleBadge = spell.level === 0 ? 'Truque' : `${spell.level}º`;
          return `
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--bg-surface); border: 1px solid var(--border-color-highlight); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.82rem;">
              <span style="font-size: 0.72rem; color: var(--primary); font-weight: 700;">[${circleBadge}]</span>
              <strong>${spell.name}</strong>
              <span class="badge-origin" style="font-size: 0.68rem;">${item.origin}</span>
              <span class="badge-source" data-source="${spell.sourceId}" style="font-size: 0.65rem;">${src.code}</span>
              <button class="btn-remove-spell" data-spell-id="${item.spellId}" style="background: transparent; border: none; color: var(--accent-crimson); cursor: pointer; font-weight: bold; margin-left: 0.2rem; font-size: 1rem; line-height: 1;" title="Remover magia do repertório">&times;</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderSpellsCardsHtml(spellsList, knownSpellIds, maxCastableCircle, casterClassIds, primaryCasterClass) {
  const state = store.getState();
  if (!spellsList || spellsList.length === 0) {
    return `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
        <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-main);">Nenhuma magia encontrada</div>
        <div style="font-size: 0.88rem; margin-top: 0.35rem; color: var(--text-muted); max-width: 460px; margin-left: auto; margin-right: auto; line-height: 1.4;">
          Nenhuma magia corresponde aos filtros atuais ou termo de busca. Clique abaixo para ver o catálogo completo ou restaurar os filtros.
        </div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-sm btn-primary" id="btn-empty-show-all">✨ Ver Todas as Magias</button>
          <button class="btn btn-sm btn-outline" id="btn-empty-clear">Limpar Busca e Filtros</button>
        </div>
      </div>
    `;
  }

  return spellsList.map(spell => {
    const isSelected = knownSpellIds.includes(spell.id);
    const spellSource = (state.edition === '2014' && spell.sourceId === 'phb_2024') ? 'phb_2014' : spell.sourceId;
    const src = getSourceById(spellSource);
    const circleText = spell.level === 0 ? 'Truque' : `${spell.level}º Círculo`;
    const isAboveLevel = maxCastableCircle > 0 && spell.level > maxCastableCircle;
    const isOutOfClass = casterClassIds && casterClassIds.length > 0 && !spell.classes.some(c => casterClassIds.includes(c));

    // Escapa aspas para segurança do atributo title
    const safeDesc = escapeHtml(spell.description);

    return `
      <div class="spell-select-card ${isSelected ? 'selected' : ''}" data-spell-id="${spell.id}">
        <div class="spell-card-header">
          <div>
            <div class="spell-card-title">${spell.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); font-style: italic;">${spell.nameEn}</div>
          </div>
          <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
            ${isAboveLevel ? `
              <span class="badge-source" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);" title="Seu personagem ainda não possui espaços de magia deste círculo no nível atual">
                🔒 Nível Superior
              </span>
            ` : ''}
            <span class="badge-source" data-source="${spellSource}">${src.code}</span>
          </div>
        </div>

        <div class="spell-card-meta">
          <span>⭐ ${circleText} (${spell.school})</span> &bull;
          <span>⏱️ ${spell.castingTime}</span> &bull;
          <span>🎯 ${spell.range}</span>
          ${spell.concentration ? '&bull; <span style="color: var(--accent-amber);">Concentração</span>' : ''}
          ${spell.ritual ? '&bull; <span style="color: var(--accent-rune);">Ritual</span>' : ''}
        </div>

        <div class="spell-card-desc" title="${safeDesc}">
          ${spell.description}
        </div>

        <div class="spell-card-footer">
          <span style="color: var(--text-muted); font-size: 0.72rem;">
            ${isOutOfClass ? `⚠️ Outras Classes: ` : `Classes: `}
            ${spell.classes.map(c => getClassById(c)?.name || c).join(', ')}
          </span>
          <button class="btn btn-sm ${isSelected ? 'btn-danger' : 'btn-outline'} btn-toggle-spell" data-spell-id="${spell.id}">
            ${isSelected ? '✖️ Remover' : '➕ Adicionar'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Filtra magias garantindo acesso dinâmico e sem travas
 */
function getFilteredSpells() {
  const state = store.getState();
  const computed = store.getComputedStats();
  const { casterClassIds } = getCasterClassesInfo(computed);
  const maxCastableCircle = getMaxCastableCircle(computed);

  // Filtra magias estritamente por Edição (2014 vs 2024) e fontes ativas
  const activeSpells = SPELLS.filter(sp => {
    if (state.edition === '2024') {
      return sp.sourceId === 'phb_2024';
    } else {
      // 2014: aceita livros 2014 ativos ou magias clássicas do PHB
      return state.activeSources.includes(sp.sourceId) || sp.sourceId === 'phb_2024';
    }
  });

  // 1. Se o filtro for apenas para magias no repertório
  if (onlyKnownFilter) {
    const knownIds = state.knownSpells.map(s => s.spellId);
    return activeSpells.filter(sp => knownIds.includes(sp.id));
  }

  // 2. Se houver termo de busca, busca globalmente para não bloquear localização de magias
  if (searchQuery.trim() !== '') {
    const q = searchQuery.trim().toLowerCase();
    return activeSpells.filter(sp => {
      const matchName = sp.name.toLowerCase().includes(q) || sp.nameEn.toLowerCase().includes(q);
      const matchDesc = sp.description.toLowerCase().includes(q);
      const matchSchool = sp.school && sp.school.toLowerCase().includes(q);
      const matchClass = sp.classes && sp.classes.some(c => {
        const cls = getClassById(c);
        return (cls && cls.name.toLowerCase().includes(q)) || c.toLowerCase().includes(q);
      });
      return matchName || matchDesc || matchSchool || matchClass;
    });
  }

  // 3. Filtro regular por Círculo e Classe
  return activeSpells.filter(sp => {
    // Filtro por Círculo
    if (activeCircleFilter === 'available') {
      if (maxCastableCircle > 0) {
        if (sp.level > maxCastableCircle) return false;
      } else {
        // Para classes sem espaços de magia nativos (ex: bárbaro, guerreiro), mostra truques no modo disponíveis
        if (sp.level !== 0) return false;
      }
    } else if (activeCircleFilter !== 'all') {
      const targetLvl = parseInt(activeCircleFilter, 10);
      if (!isNaN(targetLvl) && sp.level !== targetLvl) {
        return false;
      }
    }

    // Filtro por Classe
    if (activeClassFilter === 'auto') {
      if (casterClassIds && casterClassIds.length > 0) {
        const matches = sp.classes.some(c => casterClassIds.includes(c));
        if (!matches) return false;
      }
    } else if (activeClassFilter !== 'all') {
      if (!sp.classes.includes(activeClassFilter)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Atualiza o catálogo na tela sem perder foco ou quebrar eventos
 */
function refreshSpellsGrid(container) {
  const grid = container.querySelector('#spells-catalog-grid');
  if (!grid) return;

  const computed = store.getComputedStats();
  const { casterClassIds, primaryCasterClass } = getCasterClassesInfo(computed);
  const maxCastableCircle = getMaxCastableCircle(computed);

  const filtered = getFilteredSpells();
  const knownSpellIds = store.getState().knownSpells.map(s => s.spellId);

  // Renderiza cards
  grid.innerHTML = renderSpellsCardsHtml(filtered, knownSpellIds, maxCastableCircle, casterClassIds, primaryCasterClass);

  // Atualiza botão de limpar busca
  const btnClearSearch = container.querySelector('#btn-clear-search');
  if (btnClearSearch) {
    btnClearSearch.style.display = searchQuery ? 'block' : 'none';
  }

  // Atualiza contador de magias e barra de status
  const countMatchedEl = container.querySelector('#spells-count-matched');
  if (countMatchedEl) {
    countMatchedEl.textContent = filtered.length;
  }

  // Atualiza botões de ação rápida de filtro ativos
  updateQuickFilterButtonsState(container);

  // Sincroniza selects se os filtros tiverem sido alterados programaticamente
  const circleSelect = container.querySelector('#spell-circle-select');
  if (circleSelect && circleSelect.value !== activeCircleFilter) {
    circleSelect.value = activeCircleFilter;
  }

  const classSelect = container.querySelector('#spell-class-select');
  if (classSelect && classSelect.value !== activeClassFilter) {
    classSelect.value = activeClassFilter;
  }

  // Associa eventos nos novos botões gerados
  bindGridCardButtons(container);
}

function updateQuickFilterButtonsState(container) {
  const btnAll = container.querySelector('#btn-filter-all-spells');
  const btnMyClass = container.querySelector('#btn-filter-my-class');
  const btnAvail = container.querySelector('#btn-filter-available');
  const btnKnown = container.querySelector('#btn-filter-known');

  const isAll = activeCircleFilter === 'all' && activeClassFilter === 'all' && !onlyKnownFilter && !searchQuery;
  const isMyClass = activeCircleFilter === 'available' && activeClassFilter === 'auto' && !onlyKnownFilter && !searchQuery;
  const isAvail = activeCircleFilter === 'available' && activeClassFilter === 'all' && !onlyKnownFilter && !searchQuery;

  if (btnAll) {
    btnAll.className = `btn btn-sm ${isAll ? 'btn-primary' : 'btn-outline'}`;
  }
  if (btnMyClass) {
    btnMyClass.className = `btn btn-sm ${isMyClass ? 'btn-primary' : 'btn-outline'}`;
  }
  if (btnAvail) {
    btnAvail.className = `btn btn-sm ${isAvail ? 'btn-primary' : 'btn-outline'}`;
  }
  if (btnKnown) {
    btnKnown.className = `btn btn-sm ${onlyKnownFilter ? 'btn-primary' : 'btn-outline'}`;
  }
}

function bindGridCardButtons(container) {
  container.querySelectorAll('#spells-catalog-grid .btn-toggle-spell').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const spellId = btn.getAttribute('data-spell-id');
      toggleSpell(spellId, container);
    });
  });

  // Botões do estado vazio
  container.querySelector('#btn-empty-show-all')?.addEventListener('click', () => {
    activeCircleFilter = 'all';
    activeClassFilter = 'all';
    searchQuery = '';
    onlyKnownFilter = false;
    const searchInput = container.querySelector('#spell-search-input');
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  container.querySelector('#btn-empty-clear')?.addEventListener('click', () => {
    resetFilters(container);
  });
}

function resetFilters(container) {
  const computed = store.getComputedStats();
  const { casterClassIds } = getCasterClassesInfo(computed);
  activeCircleFilter = 'available';
  activeClassFilter = casterClassIds.length > 0 ? 'auto' : 'all';
  searchQuery = '';
  onlyKnownFilter = false;
  const searchInput = container.querySelector('#spell-search-input');
  if (searchInput) searchInput.value = '';
  refreshSpellsGrid(container);
}

function setupSpellsEvents(container) {
  // 1. Busca em tempo real
  const searchInput = container.querySelector('#spell-search-input');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    onlyKnownFilter = false;
    refreshSpellsGrid(container);
  });

  // Botão limpar busca
  container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  // 2. Filtro Círculo
  const circleSelect = container.querySelector('#spell-circle-select');
  circleSelect?.addEventListener('change', (e) => {
    activeCircleFilter = e.target.value;
    onlyKnownFilter = false;

    // Se o usuário selecionou 'Todos os Círculos (Grimório Completo)' e o filtro de classe estava em 'auto',
    // muda também classe para 'all' para garantir que todas as magias sejam puxadas para a tela!
    if (activeCircleFilter === 'all' && activeClassFilter === 'auto') {
      activeClassFilter = 'all';
      const classSelect = container.querySelector('#spell-class-select');
      if (classSelect) classSelect.value = 'all';
    }

    refreshSpellsGrid(container);
  });

  // 3. Filtro Classe
  const classSelect = container.querySelector('#spell-class-select');
  classSelect?.addEventListener('change', (e) => {
    activeClassFilter = e.target.value;
    onlyKnownFilter = false;

    // Se o usuário selecionou 'Todas as Classes' e o filtro de círculo estava em 'disponíveis',
    // expande para 'all' para permitir ver o catálogo completo
    if (activeClassFilter === 'all' && activeCircleFilter === 'available') {
      activeCircleFilter = 'all';
      if (circleSelect) circleSelect.value = 'all';
    }

    refreshSpellsGrid(container);
  });

  // 4. Ações Rápidas de Filtro
  container.querySelector('#btn-filter-all-spells')?.addEventListener('click', () => {
    activeCircleFilter = 'all';
    activeClassFilter = 'all';
    searchQuery = '';
    onlyKnownFilter = false;
    // Garante que todas as fontes estejam ativas no store para exibir 125 magias
    const currentSources = store.getState().activeSources;
    if (!currentSources || currentSources.length < SOURCES.length || !currentSources.includes('phb_2024')) {
      store.setState({ activeSources: SOURCES.map(s => s.id) });
    }
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  // Botão do banner para ativar todos os livros
  container.querySelector('#btn-activate-all-books')?.addEventListener('click', () => {
    store.setState({ activeSources: SOURCES.map(s => s.id) });
  });

  container.querySelector('#btn-filter-my-class')?.addEventListener('click', () => {
    activeCircleFilter = 'available';
    activeClassFilter = 'auto';
    searchQuery = '';
    onlyKnownFilter = false;
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  container.querySelector('#btn-filter-available')?.addEventListener('click', () => {
    activeCircleFilter = 'available';
    searchQuery = '';
    onlyKnownFilter = false;
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  container.querySelector('#btn-filter-known')?.addEventListener('click', () => {
    onlyKnownFilter = !onlyKnownFilter;
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    refreshSpellsGrid(container);
  });

  container.querySelector('#btn-filter-reset')?.addEventListener('click', () => {
    resetFilters(container);
  });

  // 5. Botões Remover do Repertório
  container.querySelectorAll('.btn-remove-spell').forEach(btn => {
    btn.addEventListener('click', () => {
      const spellId = btn.getAttribute('data-spell-id');
      removeSpell(spellId, container);
    });
  });

  // 6. Botões Adicionar / Remover Magia no grid inicial
  bindGridCardButtons(container);
}

function toggleSpell(spellId, container) {
  const state = store.getState();
  const exists = state.knownSpells.some(s => s.spellId === spellId);

  if (exists) {
    removeSpell(spellId, container);
  } else {
    // Identifica de forma inteligente a origem da magia
    const spell = getSpellById(spellId);
    let defaultOrigin = 'Talento / Antecedente';

    const characterClassIds = state.levels.map(l => l.classId);
    const matchedClassId = spell ? spell.classes.find(c => characterClassIds.includes(c)) : null;

    if (matchedClassId) {
      const cls = getClassById(matchedClassId);
      defaultOrigin = `Classe: ${cls?.name || matchedClassId}`;
    }

    const newKnown = [...state.knownSpells, {
      spellId,
      origin: defaultOrigin,
      sourceId: spell ? spell.sourceId : 'phb_2024'
    }];

    store.setState({ knownSpells: newKnown });

    // Atualiza o componente localmente
    if (container) {
      updateRepertoireWrapper(container, newKnown);
      refreshSpellsGrid(container);
    }
  }
}

function removeSpell(spellId, container) {
  const state = store.getState();
  const updated = state.knownSpells.filter(s => s.spellId !== spellId);
  store.setState({ knownSpells: updated });

  if (container) {
    updateRepertoireWrapper(container, updated);
    refreshSpellsGrid(container);
  }
}

function updateRepertoireWrapper(container, knownSpells) {
  const repWrapper = container.querySelector('#spells-repertoire-wrapper');
  if (repWrapper) {
    repWrapper.innerHTML = renderRepertoireHtml(knownSpells);
    repWrapper.querySelectorAll('.btn-remove-spell').forEach(btn => {
      btn.addEventListener('click', () => {
        const spellId = btn.getAttribute('data-spell-id');
        removeSpell(spellId, container);
      });
    });
  }

  // Atualiza o contador de conhecidas no botão do repertório
  const btnKnown = container.querySelector('#btn-filter-known');
  if (btnKnown) {
    btnKnown.textContent = `📖 Meu Repertório (${knownSpells.length})`;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
