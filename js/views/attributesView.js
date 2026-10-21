/**
 * Painel de Atributos: Compra de Pontos (Point Buy 27 pts) e Preenchimento Manual
 */

import { store } from '../state.js';
import { calculatePointBuy, POINT_BUY_COSTS, formatModifier } from '../rules-engine.js';

const STATS_MAP = [
  { key: 'str', label: 'Força (FOR)', desc: 'Poder físico, carga e combate corpo a corpo' },
  { key: 'dex', label: 'Destreza (DES)', desc: 'Agilidade, reflexos, iniciativa e esquiva' },
  { key: 'con', label: 'Constituição (CON)', desc: 'Vigor, saúde e pontos de vida' },
  { key: 'int', label: 'Inteligência (INT)', desc: 'Raciocínio lógico, memória e magia de mago' },
  { key: 'wis', label: 'Sabedoria (SAB)', desc: 'Percepção, intuição e magia divina' },
  { key: 'cha', label: 'Carisma (CAR)', desc: 'Força de personalidade, persuasão e liderança' }
];

export function renderAttributesView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const pointBuyData = calculatePointBuy(state.baseStats);

  container.innerHTML = `
    <div class="builder-section">
      <div class="builder-section-header">
        <div>
          <h2 class="builder-section-title">📊 Atributos e Habilidades</h2>
          <p class="builder-section-subtitle">Escolha entre o método oficial de Compra de Pontos (27 pontos) ou Preenchimento Manual livre.</p>
        </div>

        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button class="btn btn-sm ${state.statMode === 'point_buy' ? 'btn-primary' : 'btn-outline'}" id="btn-mode-point-buy">
            Compra de Pontos (27 pts)
          </button>
          <button class="btn btn-sm ${state.statMode === 'manual' ? 'btn-primary' : 'btn-outline'}" id="btn-mode-manual">
            Preenchimento Manual
          </button>
        </div>
      </div>

      ${state.statMode === 'point_buy' ? `
        <div class="point-buy-header">
          <div class="point-buy-counter">
            <span>Pontos Restantes:</span>
            <span class="counter-pill" style="${pointBuyData.remaining < 0 ? 'background: var(--accent-crimson); color: #fff;' : ''}">
              ${pointBuyData.remaining} / 27
            </span>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline btn-sm" id="btn-preset-standard">
              ⭐ Conjunto Padrão (15, 14, 13, 12, 10, 8)
            </button>
            <button class="btn btn-outline btn-sm" id="btn-reset-points">
              Resetar para 8
            </button>
          </div>
        </div>
      ` : `
        <div class="point-buy-header">
          <div style="font-size: 0.9rem; color: var(--text-muted);">
            ✍️ <strong>Modo Manual:</strong> Digite os valores rolados na mesa de jogo (ex: 4d6 descartando o menor) ou determinados pelo Mestre.
          </div>
        </div>
      `}

      <!-- Grid de Cartões de Atributos -->
      <div class="stats-builder-grid">
        ${STATS_MAP.map(({ key, label, desc }) => {
          const baseVal = state.baseStats[key] || 8;
          const finalVal = computed.finalStats[key] || baseVal;
          const mod = computed.modifiers[key] || 0;
          const bonus = finalVal - baseVal;
          const cost = POINT_BUY_COSTS[baseVal] !== undefined ? POINT_BUY_COSTS[baseVal] : 0;

          return `
            <div class="stat-card-builder" data-stat="${key}">
              <div class="stat-card-title">${label}</div>
              
              ${state.statMode === 'point_buy' ? `
                <div class="stat-card-controls">
                  <button class="stat-btn-adjust btn-decrement" data-stat="${key}" ${baseVal <= 8 ? 'disabled' : ''}>-</button>
                  <span class="stat-val-display">${baseVal}</span>
                  <button class="stat-btn-adjust btn-increment" data-stat="${key}" ${baseVal >= 15 ? 'disabled' : ''}>+</button>
                </div>
                <div class="stat-sub-info">Custo: ${cost} pts</div>
              ` : `
                <div style="display: flex; justify-content: center; margin: 0.25rem 0;">
                  <input type="number" class="form-control manual-stat-input" data-stat="${key}" value="${baseVal}" min="3" max="24" style="width: 70px; text-align: center; font-size: 1.2rem; font-weight: bold;">
                </div>
              `}

              ${bonus !== 0 ? `
                <div class="stat-sub-info" style="color: var(--accent-rune);">
                  Bônus Racial/Antecedente: ${bonus > 0 ? `+${bonus}` : bonus}
                </div>
              ` : ''}

              <div>
                <span class="stat-final-badge">
                  Total: <strong>${finalVal}</strong> (${formatModifier(mod)})
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  setupAttributesEvents(container);
}

function setupAttributesEvents(container) {
  // Alternar Modos
  container.querySelector('#btn-mode-point-buy')?.addEventListener('click', () => {
    store.setState({ statMode: 'point_buy' });
  });

  container.querySelector('#btn-mode-manual')?.addEventListener('click', () => {
    store.setState({ statMode: 'manual' });
  });

  // Botões de Incremento / Decremento na Compra de Pontos
  container.querySelectorAll('.btn-increment').forEach(btn => {
    btn.addEventListener('click', () => {
      const stat = btn.getAttribute('data-stat');
      const current = store.getState().baseStats[stat] || 8;
      if (current < 15) {
        const updated = { ...store.getState().baseStats, [stat]: current + 1 };
        store.setState({ baseStats: updated });
      }
    });
  });

  container.querySelectorAll('.btn-decrement').forEach(btn => {
    btn.addEventListener('click', () => {
      const stat = btn.getAttribute('data-stat');
      const current = store.getState().baseStats[stat] || 8;
      if (current > 8) {
        const updated = { ...store.getState().baseStats, [stat]: current - 1 };
        store.setState({ baseStats: updated });
      }
    });
  });

  // Input Manual de Atributos (suporta digitação contínua sem perda de foco)
  container.querySelectorAll('.manual-stat-input').forEach(input => {
    input.addEventListener('input', () => {
      const stat = input.getAttribute('data-stat');
      const val = parseInt(input.value, 10);
      if (!isNaN(val)) {
        store.getState().baseStats[stat] = val;
        store.saveState();
      }
    });

    input.addEventListener('change', () => {
      const stat = input.getAttribute('data-stat');
      const val = Math.max(3, Math.min(24, parseInt(input.value, 10) || 10));
      input.value = val;
      const updated = { ...store.getState().baseStats, [stat]: val };
      store.setState({ baseStats: updated });
    });
  });

  // Conjunto Padrão (Standard Array)
  container.querySelector('#btn-preset-standard')?.addEventListener('click', () => {
    store.setState({
      baseStats: {
        str: 15,
        con: 14,
        dex: 13,
        wis: 12,
        cha: 10,
        int: 8
      }
    });
  });

  // Resetar Atributos para 8
  container.querySelector('#btn-reset-points')?.addEventListener('click', () => {
    store.setState({
      baseStats: {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
      }
    });
  });
}
