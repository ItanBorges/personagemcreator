/**
 * Ficha Oficial de Personagem D&D 5e e 5.5 em Português do Brasil (Pt-Br)
 * Layout Autêntico de 3 Colunas + Folha de Magias com Citação de Origem e Livros
 */

import { store } from '../state.js';
import { getRaceById } from '../data/races.js';
import { getClassById } from '../data/classes.js';
import { getBackgroundById } from '../data/backgrounds.js';
import { getSubclassesByClass } from '../data/subclasses.js';
import { getFeatById } from '../data/feats.js';
import { getSpellById } from '../data/spells.js';
import { getWeaponById, getArmorById } from '../data/equipment.js';
import { getSourceById } from '../data/sources.js';
import { SKILLS_LIST, formatModifier } from '../rules-engine.js';

export function renderSheetView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const race = getRaceById(state.raceId);
  const bg = getBackgroundById(state.backgroundId);

  // String de Classes e Níveis
  const classSummaryStr = Object.entries(computed.classLevels)
    .map(([cId, lvl]) => {
      const cls = getClassById(cId);
      const subId = computed.subclasses[cId];
      const sub = subId ? getSubclassesByClass(cId).find(s => s.id === subId) : null;
      return `${cls?.name || cId} ${lvl}${sub ? ` (${sub.name})` : ''}`;
    })
    .join(' / ');

  // Dados de Vida acumulados
  const hitDiceSummary = Object.entries(computed.classLevels)
    .map(([cId, lvl]) => {
      const cls = getClassById(cId);
      return `${lvl}d${cls?.hitDie || 8}`;
    })
    .join(' + ');

  // Coleta todas as características do personagem
  const allFeatures = [];

  // Traços Raciais
  if (race) {
    race.traits.forEach(t => {
      allFeatures.push({
        title: t.name,
        desc: t.description,
        source: race.sourceId,
        origin: `Raça / Espécie: ${race.name}`
      });
    });

    // Traços de Sub-raça
    if (race.subraces && state.subraceId) {
      const sub = race.subraces.find(sr => sr.id === state.subraceId);
      if (sub) {
        if (sub.traits) {
          sub.traits.forEach(st => {
            allFeatures.push({
              title: `${st.name} (${sub.name})`,
              desc: st.description,
              source: sub.sourceId || race.sourceId,
              origin: `Sub-raça: ${sub.name}`
            });
          });
        }
        if (sub.ancestryType) {
          allFeatures.push({
            title: `Ancestral Draconico: ${sub.name}`,
            desc: `Tipo de Dano / Sopro: ${sub.damageType || 'Elemental'}. Concede resistência a dano ${sub.damageType}.`,
            source: sub.sourceId || race.sourceId,
            origin: `Ancestralidade: ${sub.name}`
          });
        }
      }
    }
  }

  // Talento de Humano Variante ou Linhagem Customizada
  if (state.variantHumanFeatId && (state.raceId === 'humano_variante_2014' || state.raceId === 'linhagem_tasha' || race?.freeFeat)) {
    const feat = getFeatById(state.variantHumanFeatId);
    if (feat) {
      const featSource = (state.edition === '2014' && feat.sourceId === 'phb_2024') ? 'phb_2014' : feat.sourceId;
      allFeatures.push({
        title: `Talento Racial: ${feat.name}`,
        desc: feat.description,
        source: featSource,
        origin: `Raça: ${race?.name || 'Humano Variante'}`
      });
    }
  }

  // Traços de Antecedente
  if (bg) {
    if (state.edition === '2024' && bg.originFeatName) {
      allFeatures.push({
        title: `Talento de Origem: ${bg.originFeatName}`,
        desc: `Concedido pelo seu histórico de ${bg.name}.`,
        source: bg.sourceId,
        origin: `Antecedente: ${bg.name}`
      });
    }
    if (bg.featureName) {
      allFeatures.push({
        title: bg.featureName,
        desc: bg.featureDesc,
        source: bg.sourceId,
        origin: `Antecedente: ${bg.name}`
      });
    }
  }

  // Características de Classe por nível com separação estrita de regras por Edição
  state.levels.forEach(lvl => {
    const cls = getClassById(lvl.classId);
    if (!cls) return;
    const classLvl = state.levels.filter((l, i) => i <= lvl.level - 1 && l.classId === lvl.classId).length;

    if (cls.features && cls.features[classLvl]) {
      cls.features[classLvl].forEach(f => {
        // Separação estrita: no D&D 2014, nenhuma regra de 2024 aparece; no 2024, nenhuma de 2014 aparece
        if (state.edition === '2014') {
          if (f.source === 'phb_2024') return;
          if (f.name.includes('(2024)') || f.name.includes('(Regra 2024)') || f.name.includes('(Subclasse 2024)')) return;
        } else if (state.edition === '2024') {
          if (f.source === 'phb_2014') return;
          if (f.name.includes('(2014)') || f.name.includes('(Regra 2014)') || f.name.includes('(Subclasse 2014)')) return;
        }

        const featureSource = f.source || (state.edition === '2024' ? 'phb_2024' : 'phb_2014');

        allFeatures.push({
          title: f.name,
          desc: f.description,
          source: featureSource,
          origin: `Classe: ${cls.name} (Nível ${classLvl})`
        });
      });
    }

    // Subclasse
    if (lvl.subclassId) {
      const sub = getSubclassesByClass(lvl.classId).find(s => s.id === lvl.subclassId);
      if (sub && sub.features) {
        sub.features.forEach(sf => {
          if (sf.level <= classLvl) {
            const subSource = (state.edition === '2014' && sub.sourceId === 'phb_2024') ? 'phb_2014' : sub.sourceId;
            allFeatures.push({
              title: `${sf.name} (${sub.name})`,
              desc: sf.description,
              source: subSource,
              origin: `Subclasse: ${sub.name}`
            });
          }
        });
      }
    }

    // Talentos adquiridos por nível
    if (lvl.featId) {
      const feat = getFeatById(lvl.featId);
      if (feat) {
        const featSource = (state.edition === '2014' && feat.sourceId === 'phb_2024') ? 'phb_2014' : feat.sourceId;
        allFeatures.push({
          title: `Talento: ${feat.name}`,
          desc: feat.description,
          source: featSource,
          origin: `Evolução no Nível ${lvl.level}`
        });
      }
    }
  });

  // Cálculo de Ataques com Armas
  const attacksList = [];
  state.equippedWeapons.forEach(wId => {
    const wp = getWeaponById(wId);
    if (!wp) return;

    const isFinesseOrRanged = wp.properties.includes('Acuidade') || wp.type === 'ranged';
    const chosenMod = isFinesseOrRanged && computed.modifiers.dex > computed.modifiers.str
      ? computed.modifiers.dex
      : computed.modifiers.str;

    const atkBonus = computed.profBonus + chosenMod;
    const dmgBonus = chosenMod;

    attacksList.push({
      name: wp.name,
      atkBonus: formatModifier(atkBonus),
      damage: `${wp.damage} ${formatModifier(dmgBonus)} ${wp.damageType}`,
      properties: wp.properties.join(', ') + (wp.mastery ? ` | Maestria: ${wp.mastery}` : '')
    });
  });

  // Se não houver armas equipadas, adiciona Ataque Desarmado
  if (attacksList.length === 0) {
    attacksList.push({
      name: 'Ataque Desarmado',
      atkBonus: formatModifier(computed.profBonus + computed.modifiers.str),
      damage: `1 ${formatModifier(computed.modifiers.str)} contusão`,
      properties: 'Corpo a corpo'
    });
  }

  // Atributo de Conjuração Principal
  let spellStat = 'int';
  if (computed.classLevels['clerigo'] || computed.classLevels['druida'] || computed.classLevels['patrulheiro'] || computed.classLevels['monge']) {
    spellStat = 'wis';
  } else if (computed.classLevels['bardo'] || computed.classLevels['feiticeiro'] || computed.classLevels['bruxo'] || computed.classLevels['paladino']) {
    spellStat = 'cha';
  }
  const spellSaveDc = 8 + computed.profBonus + computed.modifiers[spellStat];
  const spellAtkBonus = formatModifier(computed.profBonus + computed.modifiers[spellStat]);

  container.innerHTML = `
    <div class="sheet-container">
      <!-- CABEÇALHO DA FICHA 5E -->
      <div class="sheet-header-grid">
        <div class="sheet-name-block">
          <div class="sheet-char-name">${state.characterName || 'Personagem Sem Nome'}</div>
          <div class="sheet-label-sub">NOME DO PERSONAGEM</div>
        </div>

        <div class="sheet-header-fields">
          <div class="header-field-item">
            <span class="header-field-val">${classSummaryStr}</span>
            <span class="sheet-label-sub">CLASSE & NÍVEL</span>
          </div>

          <div class="header-field-item">
            <span class="header-field-val">${bg?.name || 'Personalizado'}</span>
            <span class="sheet-label-sub">ANTECEDENTE</span>
          </div>

          <div class="header-field-item">
            <span class="header-field-val">${state.playerName || 'Jogador'}</span>
            <span class="sheet-label-sub">NOME DO JOGADOR</span>
          </div>

          <div class="header-field-item">
            <span class="header-field-val">${(() => {
              let name = race?.name || 'Humano';
              if (state.subraceId && race?.subraces) {
                const sub = race.subraces.find(sr => sr.id === state.subraceId);
                if (sub) name += ` (${sub.name})`;
              }
              return name;
            })()}</span>
            <span class="sheet-label-sub">RAÇA / ESPÉCIE</span>
          </div>

          <div class="header-field-item">
            <span class="header-field-val">${state.alignment}</span>
            <span class="sheet-label-sub">TENDÊNCIA</span>
          </div>

          <div class="header-field-item">
            <span class="header-field-val">${state.edition === '2024' ? 'D&D 5.5 (2024)' : 'D&D 5e (2014)'}</span>
            <span class="sheet-label-sub">EDIÇÃO BASE</span>
          </div>
        </div>
      </div>

      <!-- CORPO PRINCIPAL DE 3 COLUNAS -->
      <div class="sheet-main-grid">
        <!-- ==================== COLUNA 1 ==================== -->
        <div class="sheet-col-1">
          <!-- Pílulas de Atributos -->
          <div class="sheet-stats-column">
            ${[
              { key: 'str', label: 'FORÇA' },
              { key: 'dex', label: 'DESTREZA' },
              { key: 'con', label: 'CONSTITUIÇÃO' },
              { key: 'int', label: 'INTELIGÊNCIA' },
              { key: 'wis', label: 'SABEDORIA' },
              { key: 'cha', label: 'CARISMA' }
            ].map(({ key, label }) => `
              <div class="sheet-stat-pill">
                <span class="stat-pill-name">${label}</span>
                <span class="stat-pill-mod">${formatModifier(computed.modifiers[key])}</span>
                <span class="stat-pill-base">${computed.finalStats[key]}</span>
              </div>
            `).join('')}
          </div>

          <!-- Salvaguardas e Perícias -->
          <div class="sheet-skills-saves-block">
            <!-- Inspiração e Bônus de Proficiência -->
            <div class="sheet-box-inline">
              <span class="box-inline-val">★</span>
              <span class="box-inline-lbl">Inspiração Heróica</span>
            </div>

            <div class="sheet-box-inline">
              <span class="box-inline-val">+${computed.profBonus}</span>
              <span class="box-inline-lbl">Bônus de Proficiência</span>
            </div>

            <!-- Painel de Salvaguardas -->
            <div class="sheet-bordered-panel">
              <div class="panel-header-title">Salvaguardas (Testes de Resistência)</div>
              ${[
                { key: 'str', label: 'Força', code: 'FOR' },
                { key: 'dex', label: 'Destreza', code: 'DES' },
                { key: 'con', label: 'Constituição', code: 'CON' },
                { key: 'int', label: 'Inteligência', code: 'INT' },
                { key: 'wis', label: 'Sabedoria', code: 'SAB' },
                { key: 'cha', label: 'Carisma', code: 'CAR' }
              ].map(({ key, label, code }) => {
                const isProf = computed.savingThrowProficiencies.includes(code);
                const bonus = computed.modifiers[key] + (isProf ? computed.profBonus : 0);
                return `
                  <div class="check-item-row">
                    <div class="check-item-left">
                      <span class="prof-dot ${isProf ? 'active' : ''}"></span>
                      <span class="check-item-name">${label}</span>
                    </div>
                    <span class="check-item-val">${formatModifier(bonus)}</span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Painel de Perícias (18 Perícias Oficiais) -->
            <div class="sheet-bordered-panel">
              <div class="panel-header-title">Perícias (Skills)</div>
              ${SKILLS_LIST.map(skill => {
                const isProf = (computed.allProficientSkills || []).includes(skill.id);
                const isExp = (state.expertSkills || []).includes(skill.id);
                let bonus = computed.modifiers[skill.stat];
                if (isExp) bonus += computed.profBonus * 2;
                else if (isProf) bonus += computed.profBonus;

                return `
                  <div class="check-item-row">
                    <div class="check-item-left">
                      <span class="prof-dot ${isExp ? 'expert' : (isProf ? 'active' : '')}"></span>
                      <span class="check-item-name">${skill.name}</span>
                      <span class="check-item-stat">(${skill.stat.toUpperCase()})</span>
                      ${isExp ? '<span class="badge-origin" style="font-size: 0.6rem; padding: 0.1rem 0.35rem; margin-left: 0.25rem;">Especialista</span>' : ''}
                    </div>
                    <span class="check-item-val">${formatModifier(bonus)}</span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Percepção Passiva -->
            <div class="sheet-box-inline">
              <span class="box-inline-val">${computed.passivePerception}</span>
              <span class="box-inline-lbl">Sabedoria Passiva (Percepção)</span>
            </div>

            <!-- Outras Proficiências e Idiomas -->
            <div class="sheet-bordered-panel">
              <div class="panel-header-title">Outras Proficiências & Idiomas</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
                <p><strong>Idiomas:</strong> Comum e mais um idioma à sua escolha.</p>
                <p><strong>Armaduras:</strong> ${computed.firstClass?.multiclassProficiencies?.armor?.join(', ') || 'Armaduras de classe'}</p>
                <p><strong>Armas:</strong> ${computed.firstClass?.multiclassProficiencies?.weapons?.join(', ') || 'Armas simples e marciais'}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ==================== COLUNA 2 ==================== -->
        <div class="sheet-col-2">
          <!-- CA, Iniciativa, Deslocamento -->
          <div class="sheet-combat-top-row">
            <div class="combat-stat-badge">
              <span class="combat-stat-val">${computed.ac}</span>
              <span class="combat-stat-lbl">🛡️ CLASSE DE ARMADURA</span>
            </div>

            <div class="combat-stat-badge">
              <span class="combat-stat-val">${formatModifier(computed.modifiers.dex)}</span>
              <span class="combat-stat-lbl">⚡ INICIATIVA</span>
            </div>

            <div class="combat-stat-badge">
              <span class="combat-stat-val">${computed.speed}m</span>
              <span class="combat-stat-lbl">🏃 DESLOCAMENTO</span>
            </div>
          </div>

          <!-- Pontos de Vida (PV) -->
          <div class="hp-panel">
            <div class="hp-main-display">
              <div>
                <span class="sheet-label-sub">PONTOS DE VIDA MÁXIMOS:</span>
                <span style="font-weight: bold; color: var(--text-main); font-size: 1.1rem; margin-left: 0.25rem;">${computed.maxHp}</span>
              </div>
              <span class="badge-origin">100% Saudável</span>
            </div>

            <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
              <div style="flex: 1;">
                <span class="sheet-label-sub">PV ATUAIS:</span>
                <input type="number" class="form-control" value="${computed.maxHp}" min="0" max="${computed.maxHp}" style="font-size: 1.4rem; font-weight: bold; text-align: center; color: var(--accent-emerald);">
              </div>
              <div style="flex: 1;">
                <span class="sheet-label-sub">PV TEMPORÁRIOS:</span>
                <input type="number" class="form-control" value="0" min="0" style="font-size: 1.4rem; font-weight: bold; text-align: center;">
              </div>
            </div>
          </div>

          <!-- Dados de Vida e Salvaguardas contra Morte -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div class="sheet-bordered-panel" style="text-align: center;">
              <span class="sheet-label-sub">DADOS DE VIDA</span>
              <div style="font-family: var(--font-title); font-size: 1.25rem; font-weight: 700; color: var(--primary); margin-top: 0.25rem;">
                ${hitDiceSummary}
              </div>
            </div>

            <div class="sheet-bordered-panel" style="font-size: 0.75rem;">
              <span class="sheet-label-sub" style="display: block; text-align: center; margin-bottom: 0.35rem;">TESTES CONTRA MORTE</span>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span>Sucessos:</span>
                <div style="display: flex; gap: 0.25rem;"><input type="checkbox"><input type="checkbox"><input type="checkbox"></div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>Fracassos:</span>
                <div style="display: flex; gap: 0.25rem;"><input type="checkbox"><input type="checkbox"><input type="checkbox"></div>
              </div>
            </div>
          </div>

          <!-- Ataques & Conjuração -->
          <div class="sheet-bordered-panel">
            <div class="panel-header-title">Ataques & Conjuração</div>
            <table class="attacks-table">
              <thead>
                <tr>
                  <th>Arma / Magia</th>
                  <th>Ataque</th>
                  <th>Dano / Tipo</th>
                </tr>
              </thead>
              <tbody>
                ${attacksList.map(atk => `
                  <tr>
                    <td><strong>${atk.name}</strong></td>
                    <td style="color: var(--primary); font-weight: bold;">${atk.atkBonus}</td>
                    <td>${atk.damage}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Equipamento & Riqueza -->
          <div class="sheet-bordered-panel">
            <div class="panel-header-title">Equipamento & Riquezas</div>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; font-size: 0.8rem; background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div>PO: <strong>25</strong></div> &bull;
              <div>PP: <strong>10</strong></div> &bull;
              <div>PC: <strong>50</strong></div>
            </div>

            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
              <p><strong>Armadura Equipada:</strong> ${getArmorById(state.armorId).name} ${state.hasShield ? '+ Escudo' : ''}</p>
              <p><strong>Mochila:</strong> ${state.inventory.join(', ')}</p>
            </div>
          </div>
        </div>

        <!-- ==================== COLUNA 3 ==================== -->
        <div class="sheet-col-3">
          <!-- Características & Habilidades com Tags de Origem e Livros Oficiais -->
          <div class="sheet-bordered-panel">
            <div class="panel-header-title" style="display: flex; justify-content: space-between; align-items: center;">
              <span>Características & Habilidades</span>
              <span class="badge-origin">${allFeatures.length} Ativas</span>
            </div>

            <div class="features-list">
              ${allFeatures.map(feat => {
                const src = getSourceById(feat.source);
                return `
                  <div class="feature-item-card">
                    <div class="feature-title-row">
                      <span class="feature-name">${feat.title}</span>
                      <span class="badge-source" data-source="${feat.source}">${src.code}</span>
                    </div>
                    <div style="font-size: 0.72rem; color: var(--accent-rune); margin-bottom: 0.25rem;">
                      [Origem: ${feat.origin}] &bull; [Fonte: ${src.name}]
                    </div>
                    <p class="feature-desc">${feat.desc}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== SEÇÃO DE MAGIAS DA FICHA ==================== -->
      ${state.knownSpells.length > 0 || computed.spellSlotsData.casterLevel > 0 ? `
        <div class="sheet-spells-section page-break-after">
          <h3 style="font-family: var(--font-title); font-size: 1.5rem; color: var(--primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            📖 Folha de Magias do Personagem (Pt-Br)
          </h3>

          <!-- Barra de Estatísticas Mágicas -->
          <div class="spells-header-bar">
            <div>
              <span class="sheet-label-sub">ATRIBUTO DE CONJURAÇÃO:</span>
              <div style="font-size: 1.15rem; font-weight: bold; color: var(--text-main);">${spellStat.toUpperCase()}</div>
            </div>
            <div>
              <span class="sheet-label-sub">CD DE SALVAGUARDA DE MAGIA:</span>
              <div style="font-size: 1.25rem; font-weight: bold; color: var(--primary);">${spellSaveDc}</div>
            </div>
            <div>
              <span class="sheet-label-sub">BÔNUS DE ATAQUE MÁGICO:</span>
              <div style="font-size: 1.25rem; font-weight: bold; color: var(--primary);">${spellAtkBonus}</div>
            </div>
          </div>

          <!-- Tabela de Magias Agrupadas por Círculo -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(circle => {
              const spellsInCircle = state.knownSpells
                .map(item => ({ ...item, spell: getSpellById(item.spellId) }))
                .filter(item => item.spell && item.spell.level === circle);

              const totalSlots = circle === 0 ? 0 : (computed.spellSlotsData.slots[circle - 1] || 0);
              const pactSlotsThisCircle = computed.spellSlotsData.pact.slotLevel === circle ? computed.spellSlotsData.pact.slots : 0;

              if (spellsInCircle.length === 0 && totalSlots === 0 && pactSlotsThisCircle === 0) {
                return '';
              }

              const circleTitle = circle === 0 ? 'Truques (Sem Custo de Espaço)' : `${circle}º Círculo`;

              return `
                <div class="spells-circle-group">
                  <div class="circle-group-title">
                    <span>${circleTitle}</span>

                    ${totalSlots > 0 ? `
                      <div class="circle-slots-tracker">
                        <span>Espaços (${totalSlots}):</span>
                        ${Array.from({ length: totalSlots }).map(() => '<input type="checkbox" title="Marcar espaço gasto">').join('')}
                      </div>
                    ` : ''}

                    ${pactSlotsThisCircle > 0 ? `
                      <div class="circle-slots-tracker" style="color: var(--accent-amber);">
                        <span>Espaços de Pacto Bruxo (${pactSlotsThisCircle}):</span>
                        ${Array.from({ length: pactSlotsThisCircle }).map(() => '<input type="checkbox" title="Espaço de pacto gasto">').join('')}
                      </div>
                    ` : ''}
                  </div>

                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem;">
                    ${spellsInCircle.map(item => {
                      const sp = item.spell;
                      const src = getSourceById(sp.sourceId);
                      return `
                        <div class="feature-item-card" style="border-left-color: var(--accent-rune); background: var(--bg-surface-elevated);">
                          <div class="feature-title-row">
                            <strong style="color: var(--text-main); font-size: 0.95rem;">${sp.name}</strong>
                            <span class="badge-source" data-source="${sp.sourceId}">${src.code}</span>
                          </div>

                          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
                            <span class="badge-origin">${item.origin}</span>
                            <span style="font-size: 0.72rem; color: var(--text-dim);">[Fonte: ${src.name}]</span>
                          </div>

                          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.35rem;">
                            <strong>Tempo:</strong> ${sp.castingTime} &bull; <strong>Alcance:</strong> ${sp.range} &bull; <strong>Duração:</strong> ${sp.duration}
                            ${sp.concentration ? ' &bull; <strong style="color: var(--accent-amber);">[Concentração]</strong>' : ''}
                          </div>

                          <p class="feature-desc">${sp.description}</p>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
