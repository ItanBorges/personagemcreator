/**
 * Personagem Creator - Aplicação Principal
 * Orquestrador de Visualizações e Ciclo de Vida
 */

import { store } from './state.js';
import { renderHeaderView } from './views/headerView.js';
import { renderIdentityView } from './views/identityView.js';
import { renderAttributesView } from './views/attributesView.js';
import { renderLevelUpView } from './views/levelUpView.js';
import { renderSpellsView } from './views/spellsView.js';
import { renderEquipmentView } from './views/equipmentView.js';
import { renderSheetView } from './views/sheetView.js';
import { getClassById } from './data/classes.js';

class App {
  constructor() {
    this.headerContainer = document.getElementById('app-header-container');
    this.builderContainer = document.getElementById('builder-view-container');
    this.sheetContainer = document.getElementById('sheet-view-container');
  }

  init() {
    // Aplica o tema salvo no <html>
    const currentTheme = store.getState().theme || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Se inscreve para re-renderizar quando o estado for alterado
    store.subscribe((state, computed) => {
      this.render();
    });

    // Renderização inicial
    this.render();
  }

  render() {
    const scrollY = window.scrollY;

    // Captura o elemento em foco antes de re-renderizar para evitar perda de foco ao digitar
    const activeEl = document.activeElement;
    let focusInfo = null;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
      focusInfo = {
        id: activeEl.id || null,
        className: activeEl.className || null,
        dataStat: activeEl.getAttribute('data-stat') || null,
        dataLevelIndex: activeEl.getAttribute('data-level-index') || null,
        start: activeEl.selectionStart,
        end: activeEl.selectionEnd
      };
    }

    const state = store.getState();
    const computed = store.getComputedStats();

    // 1. Cabeçalho
    renderHeaderView(this.headerContainer);

    // 2. Alternância de Abas (Construtor vs Ficha Oficial Pt-Br)
    if (state.activeView === 'builder') {
      this.builderContainer.style.display = 'block';
      this.sheetContainer.style.display = 'none';
      this.renderBuilder(computed);
    } else {
      this.builderContainer.style.display = 'none';
      this.sheetContainer.style.display = 'block';
      renderSheetView(this.sheetContainer);
    }

    // Restaura o foco e posição do cursor após re-renderização
    if (focusInfo) {
      let target = null;
      if (focusInfo.id) {
        target = document.getElementById(focusInfo.id);
      } else if (focusInfo.dataStat) {
        target = document.querySelector(`input[data-stat="${focusInfo.dataStat}"]`);
      } else if (focusInfo.dataLevelIndex && focusInfo.className) {
        const firstClass = focusInfo.className.split(' ')[0];
        target = document.querySelector(`.${firstClass}[data-level-index="${focusInfo.dataLevelIndex}"]`);
      }
      if (target) {
        target.focus();
        if (focusInfo.start !== undefined && focusInfo.end !== undefined && target.setSelectionRange) {
          try {
            target.setSelectionRange(focusInfo.start, focusInfo.end);
          } catch (e) {}
        }
      }
    }

    // Restaura posição de rolagem para evitar pulos de tela ao atualizar
    if (scrollY > 0) {
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }

  renderBuilder(computed) {
    const state = store.getState();
    const firstClass = computed.firstClass || getClassById('guerreiro');

    // Monta o resumo superior do construtor
    const summaryHtml = `
      <div class="builder-quick-summary">
        <div class="summary-stat-box">
          <span class="stat-box-val" style="color: var(--primary);">Nível ${computed.totalLevel}</span>
          <span class="stat-box-lbl">NÍVEL TOTAL</span>
        </div>

        <div class="summary-stat-box">
          <span class="stat-box-val" style="color: var(--accent-emerald);">${computed.maxHp}</span>
          <span class="stat-box-lbl">PONTOS DE VIDA (PV)</span>
        </div>

        <div class="summary-stat-box">
          <span class="stat-box-val">${computed.ac}</span>
          <span class="stat-box-lbl">CLASSE DE ARMADURA</span>
        </div>

        <div class="summary-stat-box">
          <span class="stat-box-val">+${computed.profBonus}</span>
          <span class="stat-box-lbl">BÔNUS PROFICIÊNCIA</span>
        </div>

        <div class="summary-stat-box">
          <span class="stat-box-val">${computed.speed}m</span>
          <span class="stat-box-lbl">DESLOCAMENTO</span>
        </div>

        <div class="summary-stat-box">
          <span class="stat-box-val">${computed.passivePerception}</span>
          <span class="stat-box-lbl">PERCEPÇÃO PASSIVA</span>
        </div>
      </div>

      <div id="section-identity"></div>
      <div id="section-attributes"></div>
      <div id="section-level-up"></div>
      <div id="section-spells"></div>
      <div id="section-equipment"></div>
    `;

    this.builderContainer.innerHTML = summaryHtml;

    // Renderiza cada módulo na ordem do fluxo
    renderIdentityView(document.getElementById('section-identity'));
    renderAttributesView(document.getElementById('section-attributes'));
    renderLevelUpView(document.getElementById('section-level-up'));
    renderSpellsView(document.getElementById('section-spells'));
    renderEquipmentView(document.getElementById('section-equipment'));
  }
}

// Inicializa a aplicação ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
