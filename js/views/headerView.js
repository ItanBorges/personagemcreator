/**
 * Componente de Cabeçalho: Nome do Personagem, Alternador de Tema On/Off,
 * Modal de Filtro de Fontes e Botões de Arquivo (Exportar/Importar)
 */

import { store } from '../state.js';
import { SOURCES } from '../data/sources.js';

export function renderHeaderView(container) {
  const state = store.getState();

  const editionSources = SOURCES.filter(s => s.edition === state.edition);

  container.innerHTML = `
    <header class="app-header">
      <div class="brand-section">
        <div class="brand-icon">⚔️</div>
        <div class="brand-text">
          <h1>
            Personagem Creator
            <span class="brand-badge">${state.edition === '2024' ? 'D&D 5.5 (2024)' : 'D&D 5e (2014)'}</span>
          </h1>
          <div class="brand-sub">
            Criador de Fichas em Pt-Br baseado em <a href="https://dnd5e.wikidot.com/" target="_blank" rel="noopener noreferrer">dnd5e.wikidot.com</a>
          </div>
        </div>
      </div>

      <!-- Navegação de Abas -->
      <nav class="view-tabs-nav">
        <button class="tab-btn ${state.activeView === 'builder' ? 'active' : ''}" id="btn-tab-builder">
          🛠️ Construtor & Evolução
        </button>
        <button class="tab-btn ${state.activeView === 'sheet' ? 'active' : ''}" id="btn-tab-sheet">
          📜 Ficha de Personagem (Pt-Br)
        </button>
      </nav>

      <!-- Ações do Cabeçalho -->
      <div class="header-actions">
        <!-- Alternador Modo Claro / Escuro On/Off -->
        <div class="theme-switch-wrapper" title="Alternar entre Tema Escuro (Grimório) e Claro (Pergaminho)">
          <span class="theme-switch-label">
            <span id="theme-icon">${state.theme === 'dark' ? '🌙' : '☀️'}</span>
            <span id="theme-text">${state.theme === 'dark' ? 'Escuro' : 'Claro'}</span>
          </span>
          <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Alternar Modo Claro ou Escuro">
            <span class="toggle-handle"></span>
          </button>
        </div>

        <!-- Botão Filtro de Fontes de Livros -->
        <button class="btn btn-secondary btn-sm" id="btn-open-sources" title="Filtrar livros oficiais permitidos">
          📚 Fontes (${state.activeSources.length}/${editionSources.length})
        </button>

        <!-- Botões de Ação de Ficha -->
        <button class="btn btn-outline btn-sm" id="btn-export-json" title="Baixar arquivo JSON da ficha">
          💾 Salvar JSON
        </button>
        <button class="btn btn-outline btn-sm" id="btn-import-trigger" title="Carregar arquivo JSON salvo">
          📂 Abrir
        </button>
        <input type="file" id="input-import-file" accept=".json" style="display: none;" />

        <button class="btn btn-outline btn-sm" id="btn-print-sheet" title="Imprimir ficha ou salvar em PDF">
          🖨️ Imprimir
        </button>

        <button class="btn btn-danger btn-sm" id="btn-reset-char" title="Criar nova ficha em branco">
          🔄 Nova
        </button>
      </div>
    </header>

    <!-- Modal de Seleção de Fontes/Livros Oficiais -->
    <div class="modal-overlay" id="sources-modal">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title">📚 Seleção de Fontes e Livros Oficiais</h3>
          <button class="modal-close" id="btn-close-sources">&times;</button>
        </div>
        <div class="modal-body">
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            Livros e suplementos oficiais disponíveis para <strong>${state.edition === '2024' ? 'D&D 5.5 (2024)' : 'D&D 5e (2014)'}</strong>:
          </p>

          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <button class="btn btn-outline btn-sm" id="btn-select-all-sources">Marcar Todas</button>
            <button class="btn btn-outline btn-sm" id="btn-select-core-sources">Apenas Livro Básico (${state.edition === '2024' ? "PHB'24" : "PHB'14"})</button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${editionSources.map(source => `
              <label class="source-checkbox-item">
                <input type="checkbox" value="${source.id}" class="source-checkbox" ${state.activeSources.includes(source.id) ? 'checked' : ''}>
                <div class="source-info">
                  <h4>
                    <span class="badge-source" data-source="${source.id}">${source.code}</span>
                    ${source.name}
                  </h4>
                  <p>${source.description}</p>
                </div>
              </label>
            `).join('')}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" id="btn-save-sources">Salvar Fontes</button>
        </div>
      </div>
    </div>
  `;

  setupHeaderEvents(container);
}

function setupHeaderEvents(container) {
  // Alternador de Abas
  container.querySelector('#btn-tab-builder').addEventListener('click', () => {
    store.setState({ activeView: 'builder' });
  });

  container.querySelector('#btn-tab-sheet').addEventListener('click', () => {
    store.setState({ activeView: 'sheet' });
  });

  // Alternador ON/OFF Modo Claro / Escuro
  container.querySelector('#theme-toggle-btn').addEventListener('click', () => {
    const currentTheme = store.getState().theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    store.setState({ theme: newTheme });
  });

  // Modal de Fontes
  const sourcesModal = container.querySelector('#sources-modal');
  container.querySelector('#btn-open-sources').addEventListener('click', () => {
    sourcesModal.classList.add('active');
  });

  container.querySelector('#btn-close-sources').addEventListener('click', () => {
    sourcesModal.classList.remove('active');
  });

  container.querySelector('#btn-select-all-sources').addEventListener('click', () => {
    sourcesModal.querySelectorAll('.source-checkbox').forEach(cb => cb.checked = true);
  });

  container.querySelector('#btn-select-core-sources').addEventListener('click', () => {
    const targetCore = store.getState().edition === '2024' ? 'phb_2024' : 'phb_2014';
    sourcesModal.querySelectorAll('.source-checkbox').forEach(cb => {
      cb.checked = (cb.value === targetCore);
    });
  });

  container.querySelector('#btn-save-sources').addEventListener('click', () => {
    const selected = [];
    sourcesModal.querySelectorAll('.source-checkbox:checked').forEach(cb => {
      selected.push(cb.value);
    });

    if (selected.length === 0) {
      alert('Selecione ao menos um livro fonte.');
      return;
    }

    store.setState({ activeSources: selected });
    sourcesModal.classList.remove('active');
  });

  // Fechar modal ao clicar fora
  sourcesModal.addEventListener('click', (e) => {
    if (e.target === sourcesModal) {
      sourcesModal.classList.remove('active');
    }
  });

  // Salvar / Exportar JSON
  container.querySelector('#btn-export-json').addEventListener('click', () => {
    store.exportJson();
  });

  // Abrir / Importar JSON
  const fileInput = container.querySelector('#input-import-file');
  container.querySelector('#btn-import-trigger').addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        store.importJson(event.target.result);
      };
      reader.readAsText(file);
    }
  });

  // Imprimir Ficha
  container.querySelector('#btn-print-sheet').addEventListener('click', () => {
    store.setState({ activeView: 'sheet' });
    setTimeout(() => {
      window.print();
    }, 200);
  });

  // Resetar Personagem
  container.querySelector('#btn-reset-char').addEventListener('click', () => {
    if (confirm('Deseja iniciar uma nova ficha de personagem? As alterações não salvas serão perdidas.')) {
      store.resetCharacter();
    }
  });
}
