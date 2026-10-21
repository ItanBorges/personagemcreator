/**
 * Painel de Equipamentos: Pacotes Iniciais de Classe, Armaduras, Escudos e Inventário
 */

import { store } from '../state.js';
import { ARMORS, WEAPONS, GEAR_PACKS } from '../data/equipment.js';
import { getClassById } from '../data/classes.js';

export function renderEquipmentView(container) {
  const state = store.getState();
  const computed = store.getComputedStats();
  const firstClass = computed.firstClass || getClassById('guerreiro');

  container.innerHTML = `
    <div class="builder-section">
      <div class="builder-section-header">
        <div>
          <h2 class="builder-section-title">🛡️ Equipamentos Iniciais & Inventário</h2>
          <p class="builder-section-subtitle">
            Pacotes iniciais de <strong>${firstClass.name}</strong> &bull; Classe de Armadura (CA) Atual: <strong>${computed.ac}</strong>
          </p>
        </div>

        <span class="brand-badge">CA: ${computed.ac}</span>
      </div>

      <!-- Escolhas Iniciais da Classe -->
      ${firstClass.equipmentChoices && firstClass.equipmentChoices.length > 0 ? `
        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
          <h3 style="font-family: var(--font-title); font-size: 1.1rem; color: var(--primary); margin-bottom: 0.75rem;">
            Opções de Equipamento Inicial de ${firstClass.name}:
          </h3>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${firstClass.equipmentChoices.map((choice, cIdx) => `
              <div style="padding: 0.75rem; background: var(--bg-surface); border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
                <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Opção ${cIdx + 1}: ${choice.label}
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                  ${choice.options.map((opt, oIdx) => `
                    <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; font-size: 0.9rem; color: var(--text-main);">
                      <input type="radio" name="equip_choice_${choice.id}" value="${opt.id}" ${oIdx === 0 ? 'checked' : ''} style="accent-color: var(--primary);">
                      <span>${opt.name}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Equipamento em Uso (Armadura e Escudo para CA) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        <!-- Armadura Equipada -->
        <div class="form-group">
          <label class="form-label">Armadura Equipada (Define a CA):</label>
          <select id="select-equipped-armor" class="form-select">
            ${ARMORS.map(arm => `
              <option value="${arm.id}" ${arm.id === state.armorId ? 'selected' : ''}>
                ${arm.name} (CA ${arm.baseAc}${arm.dexBonus === 'full' ? ' + DES' : (arm.dexBonus === 'max2' ? ' + DES máx 2' : '')})
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Escudo -->
        <div class="form-group" style="justify-content: flex-end;">
          <label style="display: flex; align-items: center; gap: 0.65rem; background: var(--bg-surface-elevated); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); cursor: pointer;">
            <input type="checkbox" id="check-equipped-shield" ${state.hasShield ? 'checked' : ''} style="accent-color: var(--primary); width: 18px; height: 18px;">
            <span style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">Empunhando Escudo (+2 na CA)</span>
          </label>
        </div>
      </div>

      <!-- Lista de Itens no Inventário -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <label class="form-label">Itens na Mochila / Inventário:</label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="input-new-item" class="form-control" placeholder="Adicionar item (ex: Poção de Cura)..." style="width: 250px; padding: 0.35rem 0.65rem; font-size: 0.85rem;">
            <button class="btn btn-outline btn-sm" id="btn-add-item">➕ Adicionar</button>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
          ${state.inventory.map((item, idx) => `
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
              <span>${item}</span>
              <button class="btn-remove-item" data-index="${idx}" style="background: transparent; border: none; color: var(--accent-crimson); cursor: pointer; font-weight: bold;">&times;</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  setupEquipmentEvents(container);
}

function setupEquipmentEvents(container) {
  // Alterar Armadura
  container.querySelector('#select-equipped-armor')?.addEventListener('change', (e) => {
    store.setState({ armorId: e.target.value });
  });

  // Alternar Escudo
  container.querySelector('#check-equipped-shield')?.addEventListener('change', (e) => {
    store.setState({ hasShield: e.target.checked });
  });

  // Adicionar Item ao Inventário
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

  // Remover Item do Inventário
  container.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = [...store.getState().inventory];
      current.splice(idx, 1);
      store.setState({ inventory: current });
    });
  });
}
