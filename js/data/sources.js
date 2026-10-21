/**
 * Catálogo de Livros e Fontes Oficiais de D&D 5e e 5.5 (2024)
 * Referenciado a partir do dnd5e.wikidot.com
 */
export const SOURCES = [
  {
    id: 'phb_2024',
    code: 'PHB 24',
    name: 'Livro do Jogador (2024)',
    nameEn: 'Players Handbook (2024)',
    edition: '2024',
    year: 2024,
    defaultActive: true,
    color: '#3b82f6',
    description: 'Regras revisadas de D&D 5.5 / 2024 com subclasses no 3º nível, talentos de origem e maestria com armas.'
  },
  {
    id: 'phb_2014',
    code: 'PHB 14',
    name: 'Livro do Jogador (2014)',
    nameEn: 'Players Handbook (2014)',
    edition: '2014',
    year: 2014,
    defaultActive: true,
    color: '#b91c1c',
    description: 'Regras clássicas da 5ª Edição de D&D lançadas em 2014.'
  },
  {
    id: 'tcoe',
    code: 'TCoE',
    name: 'Caldeirão de Todas as Coisas de Tasha (2020)',
    nameEn: 'Tasha s Cauldron of Everything',
    edition: '2014',
    year: 2020,
    defaultActive: true,
    color: '#8b5cf6',
    description: 'Regras opcionais de classe, classe Artífice, novas subclasses e customização de linhagem.'
  },
  {
    id: 'xgte',
    code: 'XGtE',
    name: 'Guia de Xanathar para Todas as Coisas (2017)',
    nameEn: 'Xanathar s Guide to Everything',
    edition: '2014',
    year: 2017,
    defaultActive: true,
    color: '#d97706',
    description: 'Novas subclasses populares, talentos raciais e magias adicionais.'
  },
  {
    id: 'mpmm',
    code: 'MPMM',
    name: 'Monstros do Multiverso de Mordenkainen (2022)',
    nameEn: 'Mordenkainen Presents: Monsters of the Multiverse',
    edition: '2014',
    year: 2022,
    defaultActive: true,
    color: '#10b981',
    description: 'Mais de 30 opções de raças/espécies do multiverso atualizadas.'
  },
  {
    id: 'scag',
    code: 'SCAG',
    name: 'Guia de Aventureiros da Costa da Espada (2015)',
    nameEn: 'Sword Coast Adventurer\'s Guide',
    edition: '2014',
    year: 2015,
    defaultActive: true,
    color: '#06b6d4',
    description: 'Opções temáticas dos Reinos Esquecidos e truques marciais como Lâmina Verdejante.'
  },
  {
    id: 'ftd',
    code: 'FTD',
    name: 'Tesouro dos Dragões de Fizban (2021)',
    nameEn: 'Fizban s Treasury of Dragons',
    edition: '2014',
    year: 2021,
    defaultActive: true,
    color: '#f97316',
    description: 'Subclasses dracônicas, raças de draconatos aprimoradas e magias dracônicas.'
  },
  {
    id: 'bpg',
    code: 'BPG',
    name: 'Bigby Apresenta: A Glória dos Gigantes (2023)',
    nameEn: 'Bigby Presents: Glory of the Giants',
    edition: '2014',
    year: 2023,
    defaultActive: true,
    color: '#0284c7',
    description: 'Subclasse Caminho do Gigante para Bárbaro, talentos colossais de gigantes e antecedentes temáticos.'
  }
];

export const Edition_2014_SOURCES = ['phb_2014', 'tcoe', 'xgte', 'bpg', 'mpmm', 'ftd', 'scag'];
export const Edition_2024_SOURCES = ['phb_2024'];
export const EDITION_2014_SOURCES = Edition_2014_SOURCES;
export const EDITION_2024_SOURCES = Edition_2024_SOURCES;

export function getSourcesByEdition(edition) {
  if (edition === '2014') {
    return SOURCES.filter(s => s.edition === '2014').map(s => s.id);
  }
  return SOURCES.filter(s => s.edition === '2024').map(s => s.id);
}

export function isSourceInEdition(sourceId, edition) {
  const src = SOURCES.find(s => s.id === sourceId);
  return src ? src.edition === edition : false;
}

export function getSourceById(id) {
  return SOURCES.find(s => s.id === id) || {
    id,
    code: id.toUpperCase(),
    name: id,
    edition: '2014',
    color: '#64748b'
  };
}

export default SOURCES;


