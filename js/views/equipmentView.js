/**
 * Painel de Equipamentos: Venda de Equipamento Inicial, Catálogo Completo com Preços,
 * Gerenciamento de CA, Mochila e Carteira de Moedas (PO, PP, PC)
 */

import { store } from '../state.js';
import { ARMORS, WEAPONS, GEAR_PACKS, ADVENTURING_GEAR, getArmorById, getWeaponById, findItemByNameOrId, calculateItemResaleValue } from '../data/equipment.js';
import { getClassById } from '../data/classes.js';

// Estado de navegação e busca da loja mantido no escopo do módulo para persistência entre renders
let currentShopTab = 'armors';
let currentShopSearch = '';

export function renderEquipmentView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const firstClass = computed.firstClass || getClassById('guerreiro');
  const currency = state.currency || { gp: 0, sp: 0, cp: 0 };

  // Calcula quanto vale o equipamento inicial na mochila do personagem para venda (50% do valor)
  let initialItemsTotalValue = 0;
  let initialItemsResaleValue = 0;
  const initialItemsDetails = [];

  state.inventory.forEach((itemStr, idx) => {
    const item = findItemByNameOrId(itemStr);
    if (item && item.cost > 0) {
      const resale = calculateItemResaleValue(item);
      initialItemsTotalValue += item.cost;
      initialItemsResaleValue += resale;
      initialItemsDetails.push({ name: itemStr, cost: item.cost, resale, index: idx });
    }
  });

  container.innerHTML = `
    <div class="builder-section">
      <!-- CABEÇALHO DO PAINEL -->
      <div class="builder-section-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 class="builder-section-title">🛡️ Equipamentos, CA & Inventário</h2>
          <p class="builder-section-subtitle">
            Gerencie armaduras, armas, itens de aventura, compra/venda no mercador e acompanhe sua Classe de Armadura (CA) em tempo real.
          </p>
        </div>

        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <span class="brand-badge" style="font-size: 1rem; padding: 0.4rem 0.9rem;">
            🛡️ CA Total: <strong>${computed.ac}</strong>
          </span>
        </div>
      </div>

      <!-- CARTEIRA DE MOEDAS (PO, PP, PC) -->
      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="font-weight: 700; font-size: 1rem; color: var(--primary); display: flex; align-items: center; gap: 0.4rem;">
              <span>💰</span> Carteira de Moedas do Personagem
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
              Padrão D&D 5e: 1 Peça de Ouro (PO) = 10 Peças de Prata (PP) = 100 Peças de Cobre (PC)
            </div>
          </div>

          <!-- Caixas de Moedas Interativas -->
          <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
            <!-- PO -->
            <div style="display: flex; align-items: center; gap: 0.4rem; background: var(--bg-surface); border: 1px solid rgba(251, 191, 36, 0.4); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">
              <span style="font-size: 1.1rem;">🪙</span>
              <span style="font-weight: 700; font-size: 0.85rem; color: #fbbf24;">PO:</span>
              <input type="number" id="input-coin-gp" value="${currency.gp}" min="0" step="0.5" style="width: 75px; background: transparent; border: 1px solid var(--border-color); border-radius: 4px; color: #fbbf24; font-weight: 700; padding: 0.2rem 0.4rem; text-align: right;">
            </div>

            <!-- PP -->
            <div style="display: flex; align-items: center; gap: 0.4rem; background: var(--bg-surface); border: 1px solid rgba(203, 213, 225, 0.4); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">
              <span style="font-size: 1.1rem;">🥈</span>
              <span style="font-weight: 700; font-size: 0.85rem; color: #cbd5e1;">PP:</span>
              <input type="number" id="input-coin-sp" value="${currency.sp}" min="0" step="1" style="width: 60px; background: transparent; border: 1px solid var(--border-color); border-radius: 4px; color: #cbd5e1; font-weight: 700; padding: 0.2rem 0.4rem; text-align: right;">
            </div>

            <!-- PC -->
            <div style="display: flex; align-items: center; gap: 0.4rem; background: var(--bg-surface); border: 1px solid rgba(217, 119, 6, 0.4); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">
              <span style="font-size: 1.1rem;">🥉</span>
              <span style="font-weight: 700; font-size: 0.85rem; color: #d97706;">PC:</span>
              <input type="number" id="input-coin-cp" value="${currency.cp}" min="0" step="1" style="width: 60px; background: transparent; border: 1px solid var(--border-color); border-radius: 4px; color: #d97706; font-weight: 700; padding: 0.2rem 0.4rem; text-align: right;">
            </div>

            <!-- Botões Rápidos de Ajuste -->
            <div style="display: flex; gap: 0.35rem;">
              <button class="btn btn-outline btn-sm btn-quick-gold" data-amount="10" title="Adicionar 10 PO">+10 PO</button>
              <button class="btn btn-outline btn-sm btn-quick-gold" data-amount="50" title="Adicionar 50 PO">+50 PO</button>
            </div>
          </div>
        </div>
      </div>

      <!-- SEÇÃO: OPÇÃO DE VENDA DE EQUIPAMENTO INICIAL -->
      <div style="background: var(--bg-surface-elevated); border: 1px solid ${initialItemsResaleValue > 0 ? 'var(--primary)' : 'var(--border-color)'}; border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
              <span>⚖️</span> Venda de Equipamento Inicial (Regra Oficial D&D 5e)
            </div>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.3rem; max-width: 680px; line-height: 1.45;">
              De acordo com o <em>Livro do Jogador (PHB p. 144)</em>: <strong>"Armas, armaduras e outros equipamentos usados normalmente são vendidos por metade do seu custo de mercado"</strong>. 
              Você pode vender seu equipamento inicial para iniciar sua jornada com peças de ouro e adquirir exatamente os itens que desejar na loja.
            </p>
          </div>

          ${initialItemsResaleValue > 0 ? `
            <div style="text-align: right;">
              <button id="btn-sell-all-starting" class="btn btn-primary" style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700;">
                <span>💰</span> Vender Todos os Iniciais (+${initialItemsResaleValue.toFixed(1)} PO)
              </button>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
                Valor de mercado: ${initialItemsTotalValue} po &bull; Reembolso (50%): +${initialItemsResaleValue.toFixed(1)} po
              </div>
            </div>
          ` : `
            <span class="badge" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-muted); padding: 0.4rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.8rem;">
              Nenhum item inicial pendente para venda automática
            </span>
          `}
        </div>

        ${initialItemsDetails.length > 0 ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.2rem;">
              Itens do inventário identificados no catálogo oficial:
            </div>
            ${initialItemsDetails.map(it => `
              <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 0.3rem 0.65rem; border-radius: var(--radius-sm); font-size: 0.82rem;">
                <span>${it.name}</span>
                <span style="color: #fbbf24; font-weight: 600;">(Vale ${it.cost} po)</span>
                <button class="btn-sell-single-item" data-index="${it.index}" data-resale="${it.resale}" style="background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); color: #fbbf24; border-radius: 3px; cursor: pointer; padding: 0.15rem 0.4rem; font-size: 0.75rem; font-weight: 700;" title="Vender por 50% do valor">
                  Vender (+${it.resale} po)
                </button>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- SEÇÃO: EQUIPAMENTOS EM USO & CLASSE DE ARMADURA (CA) -->
      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h3 style="font-family: var(--font-title); font-size: 1.1rem; color: var(--primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🛡️</span> Equipamentos em Uso (Cálculo da Classe de Armadura - CA)
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          <!-- Armadura Equipada -->
          <div class="form-group">
            <label class="form-label" style="display: flex; justify-content: space-between;">
              <span>Armadura Vestida:</span>
              <span style="color: var(--primary); font-size: 0.8rem;">CA Atual: ${computed.ac}</span>
            </label>
            <select id="select-equipped-armor" class="form-select">
              ${ARMORS.map(arm => `
                <option value="${arm.id}" ${arm.id === state.armorId ? 'selected' : ''}>
                  ${arm.name} (CA ${arm.baseAc}${arm.dexBonus === 'full' ? ' + DES' : (arm.dexBonus === 'max2' ? ' + DES máx 2' : '')}) &bull; ${arm.costText} &bull; ${arm.weight} kg
                </option>
              `).join('')}
            </select>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.35rem;">
              ${(() => {
                const currentArm = getArmorById(state.armorId);
                const notes = [];
                if (currentArm.stealthDisadv) notes.push('⚠️ Desvantagem em Furtividade');
                if (currentArm.strReq > 0) notes.push(`Exige FOR ${currentArm.strReq}`);
                if (currentArm.type === 'nenhuma') notes.push('Sem penalidade de armadura');
                return notes.join(' &bull; ') || 'Armadura confortável sem restrições especiais.';
              })()}
            </div>
          </div>

          <!-- Escudo -->
          <div class="form-group" style="justify-content: flex-end;">
            <label style="display: flex; align-items: center; gap: 0.75rem; background: var(--bg-surface); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 2px solid ${state.hasShield ? 'var(--primary)' : 'var(--border-color)'}; cursor: pointer;">
              <input type="checkbox" id="check-equipped-shield" ${state.hasShield ? 'checked' : ''} style="accent-color: var(--primary); width: 20px; height: 20px;">
              <div>
                <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">Empunhando Escudo (+2 na CA)</div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.15rem;">Custo: 10 po &bull; Peso: 3 kg &bull; Ocupa uma mão</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- SEÇÃO: MOCHILA E INVENTÁRIO DO PERSONAGEM -->
      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <h3 style="font-family: var(--font-title); font-size: 1.1rem; color: var(--primary); margin: 0; display: flex; align-items: center; gap: 0.4rem;">
              <span>🎒</span> Mochila & Inventário Carregado (${state.inventory.length} Itens)
            </h3>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
              Itens guardados pelo personagem. Você pode vender qualquer item por 50% do valor ou descartá-lo.
            </div>
          </div>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <input type="text" id="input-new-item" class="form-control" placeholder="Adicionar item customizado..." style="width: 220px; padding: 0.35rem 0.65rem; font-size: 0.85rem;">
            <button class="btn btn-primary btn-sm" id="btn-add-item">➕ Adicionar</button>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${state.inventory.length === 0 ? `
            <div style="font-size: 0.88rem; color: var(--text-muted); padding: 1rem; width: 100%; text-align: center; background: var(--bg-surface); border-radius: var(--radius-sm);">
              Sua mochila está vazia. Adquira itens na loja abaixo ou adicione itens manualmente!
            </div>
          ` : state.inventory.map((itemStr, idx) => {
            const item = findItemByNameOrId(itemStr);
            const resale = item && item.cost > 0 ? calculateItemResaleValue(item) : 0;
            return `
              <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 0.4rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
                <span style="font-weight: 500; color: var(--text-main);">${itemStr}</span>
                ${resale > 0 ? `
                  <button class="btn-sell-single-item" data-index="${idx}" data-resale="${resale}" style="background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); color: #fbbf24; border-radius: 3px; cursor: pointer; padding: 0.15rem 0.45rem; font-size: 0.72rem; font-weight: 700;" title="Vender por metade do valor oficial">
                    Vender (+${resale} po)
                  </button>
                ` : ''}
                <button class="btn-remove-item" data-index="${idx}" title="Descartar item da mochila" style="background: transparent; border: none; color: var(--accent-crimson); cursor: pointer; font-weight: bold; font-size: 1.1rem; padding: 0 0.25rem;">&times;</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- SEÇÃO: CATÁLOGO COMPLETO & LOJA DO MERCADOR (TODOS OS ITENS COM VALORES) -->
      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <h3 style="font-family: var(--font-title); font-size: 1.2rem; color: var(--primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
              <span>🛒</span> Catálogo Completo & Loja Oficial de Equipamentos
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">
              Valores oficiais de mercado de D&D 5e em Peças de Ouro (PO). Clique em "Comprar" para debitar suas moedas e adicionar à mochila.
            </p>
          </div>

          <!-- Filtro de Busca de Itens -->
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <input type="text" id="input-shop-search" value="${currentShopSearch}" class="form-control" placeholder="Buscar no catálogo (ex: poção, espada)..." style="width: 260px; padding: 0.35rem 0.65rem; font-size: 0.85rem;">
          </div>
        </div>

        <!-- Abas de Categorias da Loja -->
        <div class="shop-tabs" style="display: flex; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem; overflow-x: auto;">
          <button class="btn btn-sm btn-shop-tab ${currentShopTab === 'armors' ? 'active' : ''}" data-tab="armors" style="font-weight: 600;">🛡️ Armaduras & Escudos (${ARMORS.length})</button>
          <button class="btn btn-sm btn-shop-tab ${currentShopTab === 'weapons' ? 'active' : ''}" data-tab="weapons" style="font-weight: 600;">⚔️ Armas Simples & Marciais (${WEAPONS.length})</button>
          <button class="btn btn-sm btn-shop-tab ${currentShopTab === 'gear' ? 'active' : ''}" data-tab="gear" style="font-weight: 600;">🧪 Itens de Aventura, Poções & Kits (${ADVENTURING_GEAR.length})</button>
          <button class="btn btn-sm btn-shop-tab ${currentShopTab === 'packs' ? 'active' : ''}" data-tab="packs" style="font-weight: 600;">🎒 Pacotes de Aventureiro (${GEAR_PACKS.length})</button>
        </div>

        <!-- CONTEÚDO DAS ABAS -->
        <div id="shop-catalog-content">
          <!-- Renderizado dinamicamente por renderShopTab -->
        </div>
      </div>
    </div>
  `;

  setupEquipmentEvents(container);
  renderShopTab(container, currentShopTab, currentShopSearch);
}

/**
 * Renderiza o catálogo de itens de acordo com a aba selecionada e filtro de busca
 */
function renderShopTab(container, tabName, filterQuery = '') {
  const shopContainer = container.querySelector('#shop-catalog-content');
  if (!shopContainer) return;

  const state = store.getState();
  const q = filterQuery.toLowerCase().trim();

  let html = '';

  if (tabName === 'armors') {
    const list = ARMORS.filter(a => !q || a.name.toLowerCase().includes(q) || a.type.toLowerCase().includes(q));
    html = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 0.85rem;">
        ${list.map(arm => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.6rem;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${arm.name}</div>
                <span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; font-weight: 700; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.78rem;">
                  ${arm.costText}
                </span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.4;">
                ${arm.type === 'escudo' ? `Bônus: +${arm.acBonus} na CA` : `CA Base: ${arm.baseAc}${arm.dexBonus === 'full' ? ' + Mod DES' : (arm.dexBonus === 'max2' ? ' + DES (máx 2)' : '')}`} &bull; Tipo: ${arm.type.toUpperCase()}<br>
                Peso: ${arm.weight} kg ${arm.strReq ? `&bull; Força Mín: ${arm.strReq}` : ''} ${arm.stealthDisadv ? '&bull; ⚠️ Desvantagem em Furtividade' : ''}
              </div>
            </div>

            <div class="shop-item-card-actions" style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.45rem;">
              <div class="shop-qty-control" style="display: inline-flex; align-items: center; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; background: var(--bg-surface-elevated); height: 32px; flex-shrink: 0;">
                <button type="button" class="btn-qty-minus" data-id="${arm.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">-</button>
                <input type="number" class="input-shop-qty" data-id="${arm.id}" data-unit-cost="${arm.cost}" value="1" min="1" max="999" style="width: 40px; height: 100%; text-align: center; border: none; background: transparent; color: var(--text-main); font-weight: 700; font-size: 0.85rem; padding: 0; outline: none; -moz-appearance: textfield;">
                <button type="button" class="btn-qty-plus" data-id="${arm.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">+</button>
              </div>
              <button class="btn btn-outline btn-sm btn-buy-item" data-item-id="${arm.id}" data-item-type="armor" data-unit-cost="${arm.cost}" style="flex: 1; font-weight: 600; height: 32px; padding: 0 0.5rem; font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                🛒 Comprar 1x (${arm.costText})
              </button>
              ${arm.id === state.armorId ? `
                <button class="btn btn-sm" disabled style="background: var(--accent-emerald, #10b981); color: #fff; border: none; font-weight: 600; height: 32px; padding: 0 0.6rem; font-size: 0.8rem;">
                  ✓ Equipada
                </button>
              ` : `
                <button class="btn btn-outline btn-sm btn-equip-armor" data-armor-id="${arm.id}" style="font-weight: 600; height: 32px; padding: 0 0.6rem; font-size: 0.8rem;" title="Equipar como armadura principal">
                  🛡️ Equipar
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'weapons') {
    const list = WEAPONS.filter(w => !q || w.name.toLowerCase().includes(q) || w.category.toLowerCase().includes(q) || w.damageType.toLowerCase().includes(q));
    html = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 0.85rem;">
        ${list.map(wp => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.6rem;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${wp.name}</div>
                <span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; font-weight: 700; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.78rem;">
                  ${wp.costText}
                </span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.4;">
                Dano: <strong>${wp.damage}</strong> (${wp.damageType}) &bull; ${wp.category.toUpperCase()} (${wp.type === 'melee' ? 'Corpo a Corpo' : 'À Distância'})<br>
                Peso: ${wp.weight} kg &bull; Propriedades: ${wp.properties.join(', ') || 'Nenhuma'}
              </div>
            </div>

            <div class="shop-item-card-actions" style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.45rem;">
              <div class="shop-qty-control" style="display: inline-flex; align-items: center; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; background: var(--bg-surface-elevated); height: 32px; flex-shrink: 0;">
                <button type="button" class="btn-qty-minus" data-id="${wp.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">-</button>
                <input type="number" class="input-shop-qty" data-id="${wp.id}" data-unit-cost="${wp.cost}" value="1" min="1" max="999" style="width: 40px; height: 100%; text-align: center; border: none; background: transparent; color: var(--text-main); font-weight: 700; font-size: 0.85rem; padding: 0; outline: none; -moz-appearance: textfield;">
                <button type="button" class="btn-qty-plus" data-id="${wp.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">+</button>
              </div>
              <button class="btn btn-outline btn-sm btn-buy-item" data-item-id="${wp.id}" data-item-type="weapon" data-unit-cost="${wp.cost}" style="flex: 1; font-weight: 600; height: 32px; padding: 0 0.5rem; font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                🛒 Comprar 1x (${wp.costText})
              </button>
              <button class="btn btn-outline btn-sm btn-equip-weapon" data-weapon-id="${wp.id}" style="font-weight: 600; height: 32px; padding: 0 0.6rem; font-size: 0.8rem;" title="Adicionar à lista de armas equipadas">
                ⚔️ Empunhar
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'gear') {
    const list = ADVENTURING_GEAR.filter(g => !q || g.name.toLowerCase().includes(q) || g.category.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
    html = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 0.85rem;">
        ${list.map(gr => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.6rem;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${gr.name}</div>
                <span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; font-weight: 700; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.78rem;">
                  ${gr.costText}
                </span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.4;">
                ${gr.description}<br>
                <span style="font-size: 0.75rem; color: var(--text-muted); opacity: 0.85;">Peso: ${gr.weight} kg &bull; Cat: ${gr.category.toUpperCase()}</span>
              </div>
            </div>

            <div class="shop-item-card-actions" style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.45rem;">
              <div class="shop-qty-control" style="display: inline-flex; align-items: center; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; background: var(--bg-surface-elevated); height: 32px; flex-shrink: 0;">
                <button type="button" class="btn-qty-minus" data-id="${gr.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">-</button>
                <input type="number" class="input-shop-qty" data-id="${gr.id}" data-unit-cost="${gr.cost}" value="1" min="1" max="999" style="width: 40px; height: 100%; text-align: center; border: none; background: transparent; color: var(--text-main); font-weight: 700; font-size: 0.85rem; padding: 0; outline: none; -moz-appearance: textfield;">
                <button type="button" class="btn-qty-plus" data-id="${gr.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">+</button>
              </div>
              <button class="btn btn-outline btn-sm btn-buy-item" data-item-id="${gr.id}" data-item-type="gear" data-unit-cost="${gr.cost}" style="flex: 1; font-weight: 600; height: 32px; padding: 0 0.5rem; font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                🛒 Comprar 1x (${gr.costText})
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'packs') {
    const list = GEAR_PACKS.filter(p => !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    html = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 0.85rem;">
        ${list.map(pk => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.6rem;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${pk.name}</div>
                <span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; font-weight: 700; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.8rem;">
                  ${pk.costText}
                </span>
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.4rem; line-height: 1.45;">
                ${pk.description}
              </div>
            </div>

            <div class="shop-item-card-actions" style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.45rem;">
              <div class="shop-qty-control" style="display: inline-flex; align-items: center; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; background: var(--bg-surface-elevated); height: 32px; flex-shrink: 0;">
                <button type="button" class="btn-qty-minus" data-id="${pk.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">-</button>
                <input type="number" class="input-shop-qty" data-id="${pk.id}" data-unit-cost="${pk.cost}" value="1" min="1" max="999" style="width: 40px; height: 100%; text-align: center; border: none; background: transparent; color: var(--text-main); font-weight: 700; font-size: 0.85rem; padding: 0; outline: none; -moz-appearance: textfield;">
                <button type="button" class="btn-qty-plus" data-id="${pk.id}" style="border: none; background: transparent; color: var(--text-main); font-weight: bold; width: 28px; height: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1;">+</button>
              </div>
              <button class="btn btn-outline btn-sm btn-buy-item" data-item-id="${pk.id}" data-item-type="pack" data-unit-cost="${pk.cost}" style="flex: 1; font-weight: 600; height: 32px; padding: 0 0.5rem; font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                🛒 Comprar 1x (${pk.costText})
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  shopContainer.innerHTML = html;
  setupShopItemEvents(container);
}

function setupShopItemEvents(container) {
  // Atualizador dinâmico de texto do botão de compra baseado na quantidade
  function updateBuyButtonText(card) {
    if (!card) return;
    const qtyInput = card.querySelector('.input-shop-qty');
    const buyBtn = card.querySelector('.btn-buy-item');
    if (!qtyInput || !buyBtn) return;
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    qtyInput.value = qty;
    const unitCost = parseFloat(qtyInput.getAttribute('data-unit-cost')) || 0;
    const totalCost = Math.round(unitCost * qty * 100) / 100;
    const costFormatted = totalCost.toFixed(2).replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
    buyBtn.innerHTML = `🛒 Comprar ${qty}x (${costFormatted} po)`;
  }

  // Controles de Quantidade (+ e -)
  container.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.shop-item-card-actions');
      const input = card?.querySelector('.input-shop-qty');
      if (input) {
        input.value = (parseInt(input.value, 10) || 1) + 1;
        updateBuyButtonText(card);
      }
    });
  });

  container.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.shop-item-card-actions');
      const input = card?.querySelector('.input-shop-qty');
      if (input) {
        const cur = parseInt(input.value, 10) || 1;
        if (cur > 1) {
          input.value = cur - 1;
          updateBuyButtonText(card);
        }
      }
    });
  });

  container.querySelectorAll('.input-shop-qty').forEach(input => {
    input.addEventListener('input', () => {
      const card = input.closest('.shop-item-card-actions');
      updateBuyButtonText(card);
    });
    input.addEventListener('change', () => {
      const card = input.closest('.shop-item-card-actions');
      updateBuyButtonText(card);
    });
  });

  // Botões de Compra com suporte a quantidade
  container.querySelectorAll('.btn-buy-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-item-id');
      const item = findItemByNameOrId(id);
      if (!item) return;

      const card = btn.closest('.shop-item-card-actions');
      const qtyInput = card?.querySelector('.input-shop-qty');
      const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;

      const success = store.buyItem(item, qty);
      if (!success) {
        const unitCost = typeof item.cost === 'number' ? item.cost : (parseFloat(item.cost) || 0);
        const total = Math.round(unitCost * qty * 100) / 100;
        alert(`Saldo insuficiente de Peças de Ouro (PO)! O custo total de ${qty}x ${item.name} é de ${total} PO, mas você possui apenas ${store.getState().currency?.gp || 0} PO.`);
      }
    });
  });

  // Botões de Equipar Armadura
  container.querySelectorAll('.btn-equip-armor').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-armor-id');
      store.setState({ armorId: id });
    });
  });

  // Botões de Empunhar Arma
  container.querySelectorAll('.btn-equip-weapon').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-weapon-id');
      const cur = store.getState().equippedWeapons || [];
      if (!cur.includes(id)) {
        store.setState({ equippedWeapons: [...cur, id] });
      }
    });
  });
}

function setupEquipmentEvents(container) {
  // Alterar Armadura Equipada
  container.querySelector('#select-equipped-armor')?.addEventListener('change', (e) => {
    store.setState({ armorId: e.target.value });
  });

  // Alternar Escudo
  container.querySelector('#check-equipped-shield')?.addEventListener('change', (e) => {
    store.setState({ hasShield: e.target.checked });
  });

  // Atualizar Moedas Manualmente
  container.querySelector('#input-coin-gp')?.addEventListener('change', (e) => {
    store.addCurrency(parseFloat(e.target.value) - (store.getState().currency?.gp || 0), 0, 0);
  });
  container.querySelector('#input-coin-sp')?.addEventListener('change', (e) => {
    store.addCurrency(0, parseInt(e.target.value, 10) - (store.getState().currency?.sp || 0), 0);
  });
  container.querySelector('#input-coin-cp')?.addEventListener('change', (e) => {
    store.addCurrency(0, 0, parseInt(e.target.value, 10) - (store.getState().currency?.cp || 0));
  });

  // Botões Rápidos de Adicionar Ouro
  container.querySelectorAll('.btn-quick-gold').forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = parseFloat(btn.getAttribute('data-amount')) || 10;
      store.addCurrency(amount, 0, 0);
    });
  });

  // Vender Todos os Equipamentos Iniciais
  container.querySelector('#btn-sell-all-starting')?.addEventListener('click', () => {
    const totalRefund = store.sellAllStartingEquipment();
    alert(`Equipamento inicial vendido com sucesso por metade do preço oficial! Você recebeu +${totalRefund.toFixed(1)} PO na sua carteira.`);
  });

  // Vender Item Individual do Inventário
  container.querySelectorAll('.btn-sell-single-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const resale = parseFloat(btn.getAttribute('data-resale')) || 0;
      store.sellInventoryItem(idx, resale);
    });
  });

  // Adicionar Item Customizado ao Inventário
  const addItemBtn = container.querySelector('#btn-add-item');
  const itemInput = container.querySelector('#input-new-item');

  const handleAdd = () => {
    const val = itemInput.value.trim();
    if (val) {
      const current = store.getState().inventory;
      store.setState({ inventory: [...current, val] });
      itemInput.value = '';
    }
  };

  addItemBtn?.addEventListener('click', handleAdd);
  itemInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAdd();
  });

  // Remover / Descartar Item do Inventário
  container.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = [...store.getState().inventory];
      current.splice(idx, 1);
      store.setState({ inventory: current });
    });
  });

  // Alternância de Abas da Loja com persistência no módulo
  container.querySelectorAll('.btn-shop-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      container.querySelectorAll('.btn-shop-tab').forEach(b => b.classList.remove('active'));
      tabBtn.classList.add('active');
      currentShopTab = tabBtn.getAttribute('data-tab');
      renderShopTab(container, currentShopTab, currentShopSearch);
    });
  });

  // Campo de Busca na Loja com persistência no módulo
  container.querySelector('#input-shop-search')?.addEventListener('input', (e) => {
    currentShopSearch = e.target.value;
    renderShopTab(container, currentShopTab, currentShopSearch);
  });
}
