/**
 * Painel de Progressão de Nível (Nível a Nível, Multiclasse, PV e Subclasses)
 */

import { store } from '../state.js';
import { CLASSES, getClassById } from '../data/classes.js';
import { SUBCLASSES, getSubclassesByClass } from '../data/subclasses.js';
import { FEATS, getFeatById } from '../data/feats.js';
import { validateMulticlass, formatModifier } from '../rules-engine.js';
import { getSourceById } from '../data/sources.js';

export function renderLevelUpView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();

  // Filtra classes disponíveis por fontes ativas e edição
  const availableClasses = CLASSES.filter(c => {
    if (!c.sourceId) return true;
    if (state.edition === '2024' && c.sourceId !== 'phb_2024') return false;
    return state.activeSources.includes(c.sourceId);
  });

  // Filtra subclasses por fontes ativas e edição (separação estrita)
  const availableSubclasses = SUBCLASSES.filter(s => {
    if (state.edition === '2024') {
      return s.sourceId === 'phb_2024';
    } else {
      return state.activeSources.includes(s.sourceId) || s.sourceId === 'phb_2024';
    }
  });

  // Filtra talentos por fontes ativas e edição
  const availableFeats = FEATS.filter(f => {
    if (state.edition === '2024') {
      return f.sourceId === 'phb_2024';
    } else {
      if (f.id === 'musico') return false;
      return state.activeSources.includes(f.sourceId) || f.sourceId === 'phb_2024';
    }
  });

  // Resumo de Classes
  const classSummaryStr = Object.entries(computed.classLevels)
    .map(([cId, lvl]) => {
      const cls = getClassById(cId);
      const subId = computed.subclasses[cId];
      const sub = subId ? SUBCLASSES.find(s => s.id === subId) : null;
      return `${cls?.name || cId} ${lvl}${sub ? ` (${sub.name})` : ''}`;
    })
    .join(' / ');

  container.innerHTML = `
    <div class="builder-section">
      <div class="builder-section-header">
        <div>
          <h2 class="builder-section-title">
            ⚔️ Progressão de Nível
            <span class="brand-badge">Nível Total: ${computed.totalLevel}</span>
          </h2>
          <p class="builder-section-subtitle">
            Evolução: <strong>${classSummaryStr}</strong> &bull; PV Total: <strong>${computed.maxHp}</strong>
          </p>
        </div>

        <div style="display: flex; gap: 0.5rem; align-items: center;">
          ${computed.totalLevel < 20 ? `
            <button class="btn btn-primary" id="btn-add-level">
              ➕ Subir de Nível (${computed.totalLevel + 1})
            </button>
          ` : `
            <span class="badge-source" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
              🏆 Nível Máximo (20) Alcançado!
            </span>
          `}

          ${computed.totalLevel > 1 ? `
            <button class="btn btn-danger btn-sm" id="btn-remove-level" title="Remover o último nível adquirido">
              ✖️ Descer Nível
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Lista de Níveis -->
      <div class="level-list">
        ${state.levels.map((lvl, index) => {
          const currentClass = getClassById(lvl.classId) || CLASSES[0];
          const priorClasses = state.levels.slice(0, index).map(l => l.classId);
          const isMulticlass = index > 0 && lvl.classId !== state.levels[0].classId;
          
          // Validação de multiclasse
          const validation = validateMulticlass(priorClasses, lvl.classId, computed.finalStats);

          // Verifica se este nível é o marco de subclasse
          const classLevelInThis = state.levels.slice(0, index + 1).filter(l => l.classId === lvl.classId).length;
          const subclassMilestone = state.edition === '2024' ? currentClass.subclassLevel2024 : currentClass.subclassLevel2014;
          const isSubclassLevel = classLevelInThis === subclassMilestone;
          const classSubclasses = availableSubclasses.filter(s => s.classId === lvl.classId);

          // Verifica se é nível de ASI / Talento
          const isAsiLevel = currentClass.asiLevels.includes(classLevelInThis);

          // Dados de vida e ganho de PV
          let hpGainText = '';
          if (index === 0) {
            hpGainText = `${currentClass.hitDie} (Máx) + ${computed.modifiers.con} (CON) = ${Math.max(1, currentClass.hitDie + computed.modifiers.con)} PV`;
          } else {
            if (lvl.hpMode === 'manual' && lvl.hpManualRoll) {
              const rollVal = parseInt(lvl.hpManualRoll, 10) || currentClass.hitDieAvg;
              hpGainText = `${rollVal} (Dado) + ${computed.modifiers.con} (CON) = ${Math.max(1, rollVal + computed.modifiers.con)} PV`;
            } else {
              hpGainText = `${currentClass.hitDieAvg} (Média) + ${computed.modifiers.con} (CON) = ${Math.max(1, currentClass.hitDieAvg + computed.modifiers.con)} PV`;
            }
          }

          // Características desbloqueadas neste nível da classe filtradas rigorosamente por Edição
          const rawFeaturesThisLevel = (currentClass.features && currentClass.features[classLevelInThis]) || [];
          const featuresThisLevel = rawFeaturesThisLevel.filter(f => {
            if (state.edition === '2014') {
              if (f.source === 'phb_2024') return false;
              if (f.name.includes('(2024)') || f.name.includes('(Regra 2024)') || f.name.includes('(Subclasse 2024)')) return false;
            } else if (state.edition === '2024') {
              if (f.source === 'phb_2014') return false;
              if (f.name.includes('(2014)') || f.name.includes('(Regra 2014)') || f.name.includes('(Subclasse 2014)')) return false;
            }
            return true;
          });

          return `
            <div class="level-item-card ${index === state.levels.length - 1 ? 'is-current' : ''}">
              <div class="level-card-header">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span class="level-badge-num">Nível ${lvl.level}</span>
                  <strong style="font-size: 1.05rem; color: var(--text-main);">
                    ${currentClass.name} (Nível ${classLevelInThis} na classe)
                  </strong>
                  ${isMulticlass ? `
                    <span class="badge-origin" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);">
                      Multiclasse
                    </span>
                  ` : ''}
                </div>

                <div style="font-size: 0.85rem; color: var(--text-muted);">
                  ❤️ Ganho de Vida: <strong>${hpGainText}</strong>
                </div>
              </div>

              <!-- Linha de Controles: Classe e Pontos de Vida -->
              <div class="level-controls-row">
                <!-- Seletor de Classe -->
                <div class="form-group">
                  <label class="form-label">Classe deste Nível:</label>
                  <select class="form-select select-level-class" data-level-index="${index}">
                    ${availableClasses.map(c => `
                      <option value="${c.id}" ${c.id === lvl.classId ? 'selected' : ''}>
                        ${c.name} (d${c.hitDie}) ${c.sourceId ? `[${getSourceById(c.sourceId).code}]` : ''}
                      </option>
                    `).join('')}
                  </select>
                </div>

                <!-- Escolha de Pontos de Vida (Média vs Manual) -->
                ${index > 0 ? `
                  <div class="form-group">
                    <label class="form-label">Pontos de Vida (PV):</label>
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                      <select class="form-select select-hp-mode" data-level-index="${index}" style="width: 140px;">
                        <option value="avg" ${lvl.hpMode === 'avg' ? 'selected' : ''}>Média (${currentClass.hitDieAvg})</option>
                        <option value="manual" ${lvl.hpMode === 'manual' ? 'selected' : ''}>Manual (Dado)</option>
                      </select>

                      ${lvl.hpMode === 'manual' ? `
                        <input type="number" class="form-control input-hp-manual" data-level-index="${index}"
                          min="1" max="${currentClass.hitDie}" value="${lvl.hpManualRoll || currentClass.hitDieAvg}"
                          style="width: 70px; text-align: center;" title="Valor tirado no dado d${currentClass.hitDie}">
                      ` : ''}
                    </div>
                  </div>
                ` : `
                  <div class="form-group">
                    <label class="form-label">Pontos de Vida no 1º Nível:</label>
                    <div style="font-size: 0.88rem; color: var(--text-muted); padding-top: 0.5rem;">
                      Dado Cheio d${currentClass.hitDie} + Mod CON (${formatModifier(computed.modifiers.con)})
                    </div>
                  </div>
                `}

                <!-- Escolha de Subclasse se for o marco -->
                ${isSubclassLevel ? `
                  <div class="form-group">
                    <label class="form-label" style="color: var(--primary);">
                      ⭐ Subclasse de ${currentClass.name}:
                    </label>
                    <select class="form-select select-subclass" data-level-index="${index}" data-class-id="${lvl.classId}">
                      <option value="">-- Selecione uma Subclasse --</option>
                      ${classSubclasses.map(sub => {
                        const subSource = (state.edition === '2014' && sub.sourceId === 'phb_2024') ? 'phb_2014' : sub.sourceId;
                        const src = getSourceById(subSource);
                        return `
                          <option value="${sub.id}" ${lvl.subclassId === sub.id ? 'selected' : ''}>
                            ${sub.name} [${src.code}]
                          </option>
                        `;
                      }).join('')}
                    </select>
                  </div>
                ` : ''}
              </div>

              <!-- ALERTA DE MULTICLASSE (Se for multiclasse) -->
              ${isMulticlass ? `
                <div class="multiclass-alert ${validation.isValid ? 'alert-success' : 'alert-warning'}">
                  <div class="multiclass-alert-icon">${validation.isValid ? '✅' : '⚠️'}</div>
                  <div>
                    ${validation.isValid ? `
                      <strong>Critérios de Multiclasse Atendidos!</strong> Seus atributos atendem aos requisitos de ${currentClass.name} e das suas classes anteriores.
                    ` : `
                      <strong>Atenção aos Pré-Requisitos de Multiclasse:</strong>
                      <ul style="margin: 0.25rem 0 0 1.25rem;">
                        ${validation.errors.map(err => `<li>${err}</li>`).join('')}
                      </ul>
                      <div style="font-size: 0.78rem; margin-top: 0.25rem; opacity: 0.85;">
                        Nota: Você ainda pode prosseguir se o Mestre permitir ou ignorar pré-requisitos na sua campanha.
                      </div>
                    `}
                  </div>
                </div>
              ` : ''}

              <!-- ESCOLHA DE ASI OU TALENTO (Se for nível de ASI) -->
              ${isAsiLevel ? `
                <div style="margin-top: 1rem; padding: 0.85rem; background: var(--bg-surface-hover); border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <label class="form-label" style="color: var(--primary); margin: 0; font-weight: 700;">
                      💡 Incremento de Valor de Habilidade (ASI) ou Talento (Feat):
                    </label>
                    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                      <button class="btn btn-sm ${lvl.asiType === 'feat' ? 'btn-primary' : 'btn-outline'} btn-toggle-asi" data-level-index="${index}" data-asi-type="feat">
                        🌟 Talento
                      </button>
                      <button class="btn btn-sm ${lvl.asiType === 'stats_plus2' || lvl.asiType === 'stats' ? 'btn-primary' : 'btn-outline'} btn-toggle-asi" data-level-index="${index}" data-asi-type="stats_plus2">
                        💪 +2 em 1 Atributo
                      </button>
                      <button class="btn btn-sm ${lvl.asiType === 'stats_plus1_two' ? 'btn-primary' : 'btn-outline'} btn-toggle-asi" data-level-index="${index}" data-asi-type="stats_plus1_two">
                        ✨ +1 em 2 Atributos (Tasha)
                      </button>
                    </div>
                  </div>

                  ${lvl.asiType === 'feat' ? `
                    <div class="form-group" style="margin-top: 0.5rem;">
                      <select class="form-select select-feat" data-level-index="${index}">
                        <option value="">-- Selecione um Talento --</option>
                        ${availableFeats.map(f => {
                          const src = getSourceById(f.sourceId);
                          return `
                            <option value="${f.id}" ${lvl.featId === f.id ? 'selected' : ''}>
                              ${f.name} [${src.code}] ${f.reqDesc ? `(${f.reqDesc})` : ''}
                            </option>
                          `;
                        }).join('')}
                      </select>
                      ${lvl.featId ? `
                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem;">
                          ${getFeatById(lvl.featId)?.description || ''}
                        </p>
                      ` : ''}
                    </div>
                  ` : (lvl.asiType === 'stats_plus2' || lvl.asiType === 'stats' ? `
                    <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem; flex-wrap: wrap;">
                      <span style="font-size: 0.85rem; color: var(--text-muted);">Aumentar em +2:</span>
                      <select class="form-select select-asi-stat-plus2" data-level-index="${index}" style="width: 170px;">
                        <option value="str" ${(lvl.asiStats?.str === 2) ? 'selected' : ''}>Força (+2)</option>
                        <option value="dex" ${(lvl.asiStats?.dex === 2) ? 'selected' : ''}>Destreza (+2)</option>
                        <option value="con" ${(lvl.asiStats?.con === 2) ? 'selected' : ''}>Constituição (+2)</option>
                        <option value="int" ${(lvl.asiStats?.int === 2) ? 'selected' : ''}>Inteligência (+2)</option>
                        <option value="wis" ${(lvl.asiStats?.wis === 2) ? 'selected' : ''}>Sabedoria (+2)</option>
                        <option value="cha" ${(lvl.asiStats?.cha === 2) ? 'selected' : ''}>Carisma (+2)</option>
                      </select>
                    </div>
                  ` : (lvl.asiType === 'stats_plus1_two' ? `
                    <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem; flex-wrap: wrap;">
                      <span style="font-size: 0.85rem; color: var(--text-muted);">Regra de Tasha: +1 em dois atributos diferentes:</span>
                      <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <select class="form-select select-asi-stat-a" data-level-index="${index}" style="width: 150px;">
                          ${(() => {
                            const keys = Object.keys(lvl.asiStats || {});
                            const statA = keys[0] || 'str';
                            return `
                              <option value="str" ${statA === 'str' ? 'selected' : ''}>Força (+1)</option>
                              <option value="dex" ${statA === 'dex' ? 'selected' : ''}>Destreza (+1)</option>
                              <option value="con" ${statA === 'con' ? 'selected' : ''}>Constituição (+1)</option>
                              <option value="int" ${statA === 'int' ? 'selected' : ''}>Inteligência (+1)</option>
                              <option value="wis" ${statA === 'wis' ? 'selected' : ''}>Sabedoria (+1)</option>
                              <option value="cha" ${statA === 'cha' ? 'selected' : ''}>Carisma (+1)</option>
                            `;
                          })()}
                        </select>
                        <span style="color: var(--text-muted);">&bull;</span>
                        <select class="form-select select-asi-stat-b" data-level-index="${index}" style="width: 150px;">
                          ${(() => {
                            const keys = Object.keys(lvl.asiStats || {});
                            const statB = keys.length > 1 ? keys[1] : (keys[0] === 'con' ? 'str' : 'con');
                            return `
                              <option value="str" ${statB === 'str' ? 'selected' : ''}>Força (+1)</option>
                              <option value="dex" ${statB === 'dex' ? 'selected' : ''}>Destreza (+1)</option>
                              <option value="con" ${statB === 'con' ? 'selected' : ''}>Constituição (+1)</option>
                              <option value="int" ${statB === 'int' ? 'selected' : ''}>Inteligência (+1)</option>
                              <option value="wis" ${statB === 'wis' ? 'selected' : ''}>Sabedoria (+1)</option>
                              <option value="cha" ${statB === 'cha' ? 'selected' : ''}>Carisma (+1)</option>
                            `;
                          })()}
                        </select>
                      </div>
                    </div>
                  ` : `
                    <div style="font-size: 0.8rem; color: var(--text-muted);">
                      Clique em "Talento", "+2 em 1 Atributo" ou "+1 em 2 Atributos" para aplicar os benefícios na ficha.
                    </div>
                  `))}
                </div>
              ` : ''}

              <!-- CARACTERÍSTICAS DESBLOQUEADAS NESTE NÍVEL -->
              ${featuresThisLevel.length > 0 ? `
                <div style="margin-top: 0.85rem; padding-top: 0.65rem; border-top: 1px solid var(--border-color);">
                  <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem;">
                    Habilidades Desbloqueadas no Nível ${classLevelInThis} de ${currentClass.name}:
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${featuresThisLevel.map(feat => {
                      const featSource = feat.source || (state.edition === '2024' ? 'phb_2024' : 'phb_2014');
                      const src = getSourceById(featSource);
                      return `
                        <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.35;">
                          <strong style="color: var(--text-main);">&bull; ${feat.name}:</strong> ${feat.description}
                          <span class="badge-source" data-source="${featSource}">${src.code}</span>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  setupLevelUpEvents(container);
}

function setupLevelUpEvents(container) {
  // Botão Subir de Nível
  container.querySelector('#btn-add-level')?.addEventListener('click', () => {
    store.addLevel();
  });

  // Botão Descer Nível
  container.querySelector('#btn-remove-level')?.addEventListener('click', () => {
    if (confirm('Deseja remover o último nível adquirido?')) {
      store.removeLastLevel();
    }
  });

  // Alterar Classe de um Nível
  container.querySelectorAll('.select-level-class').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      const newClassId = select.value;
      store.updateLevel(idx, { classId: newClassId, subclassId: null });
    });
  });

  // Alterar Modo de PV (Média vs Manual)
  container.querySelectorAll('.select-hp-mode').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      store.updateLevel(idx, { hpMode: select.value });
    });
  });

  // Alterar Valor Manual de PV
  container.querySelectorAll('.input-hp-manual').forEach(input => {
    input.addEventListener('change', () => {
      const idx = parseInt(input.getAttribute('data-level-index'), 10);
      store.updateLevel(idx, { hpManualRoll: parseInt(input.value, 10) || 5 });
    });
  });

  // Selecionar Subclasse
  container.querySelectorAll('.select-subclass').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      store.updateLevel(idx, { subclassId: select.value || null });
    });
  });

  // Alternar entre Talento e ASI
  container.querySelectorAll('.btn-toggle-asi').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-level-index'), 10);
      const asiType = btn.getAttribute('data-asi-type');
      store.updateLevel(idx, { asiType });
    });
  });

  // Selecionar Talento
  container.querySelectorAll('.select-feat').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      store.updateLevel(idx, { featId: select.value || null });
    });
  });

  // Selecionar Atributo para ASI +2
  container.querySelectorAll('.select-asi-stat-plus2').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      const stat = select.value;
      store.updateLevel(idx, { asiType: 'stats_plus2', asiStats: { [stat]: 2 } });
    });
  });

  // Selecionar Atributo A para ASI +1/+1 (Tasha)
  container.querySelectorAll('.select-asi-stat-a').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      const statA = select.value;
      const lvl = store.getState().levels[idx];
      const keys = Object.keys(lvl?.asiStats || {});
      let statB = keys.length > 1 ? keys[1] : (statA === 'con' ? 'str' : 'con');
      if (statB === statA) statB = statA === 'str' ? 'con' : 'str';
      store.updateLevel(idx, { asiType: 'stats_plus1_two', asiStats: { [statA]: 1, [statB]: 1 } });
    });
  });

  // Selecionar Atributo B para ASI +1/+1 (Tasha)
  container.querySelectorAll('.select-asi-stat-b').forEach(select => {
    select.addEventListener('change', () => {
      const idx = parseInt(select.getAttribute('data-level-index'), 10);
      const statB = select.value;
      const lvl = store.getState().levels[idx];
      const keys = Object.keys(lvl?.asiStats || {});
      let statA = keys[0] || (statB === 'str' ? 'con' : 'str');
      if (statA === statB) statA = statB === 'str' ? 'con' : 'str';
      store.updateLevel(idx, { asiType: 'stats_plus1_two', asiStats: { [statA]: 1, [statB]: 1 } });
    });
  });
}
