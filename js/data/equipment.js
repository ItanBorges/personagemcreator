/**
 * Catálogo Completo de Armaduras, Armas e Equipamentos de D&D 5e e 5.5 em Pt-Br
 * Referenciado a partir de dnd5e.wikidot.com
 */

export const ARMORS = [
  // SEM ARMADURA
  { id: 'sem_armadura', name: 'Sem Armadura', type: 'nenhuma', baseAc: 10, dexBonus: 'full', stealthDisadv: false, weight: 0 },

  // ARMADURAS LEVES
  { id: 'acolchoada', name: 'Armadura Acolchoada (Padded)', type: 'leve', baseAc: 11, dexBonus: 'full', stealthDisadv: true, strReq: 0, weight: 4 },
  { id: 'couro', name: 'Armadura de Couro (Leather)', type: 'leve', baseAc: 11, dexBonus: 'full', stealthDisadv: false, strReq: 0, weight: 5 },
  { id: 'couro_batido', name: 'Couro Batido (Studded Leather)', type: 'leve', baseAc: 12, dexBonus: 'full', stealthDisadv: false, strReq: 0, weight: 6.5 },

  // ARMADURAS MÉDIAS
  { id: 'gibao_peles', name: 'Gibão de Peles (Hide)', type: 'media', baseAc: 12, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 6 },
  { id: 'camisa_cota_malha', name: 'Camisa de Cota de Malha (Chain Shirt)', type: 'media', baseAc: 13, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 10 },
  { id: 'brunea', name: 'Brúnea (Scale Mail)', type: 'media', baseAc: 14, dexBonus: 'max2', stealthDisadv: true, strReq: 0, weight: 22.5 },
  { id: 'peitoral_aco', name: 'Peitoral de Aço (Breastplate)', type: 'media', baseAc: 14, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 10 },
  { id: 'meia_armadura', name: 'Meia-Armadura (Half Plate)', type: 'media', baseAc: 15, dexBonus: 'max2', stealthDisadv: true, strReq: 0, weight: 20 },

  // ARMADURAS PESADAS
  { id: 'cota_aneis', name: 'Cota de Anéis (Ring Mail)', type: 'pesada', baseAc: 14, dexBonus: 'none', stealthDisadv: true, strReq: 0, weight: 20 },
  { id: 'cota_malha_pesada', name: 'Cota de Malha (Chain Mail)', type: 'pesada', baseAc: 16, dexBonus: 'none', stealthDisadv: true, strReq: 13, weight: 27 },
  { id: 'cota_talas', name: 'Cota de Talas (Splint)', type: 'pesada', baseAc: 17, dexBonus: 'none', stealthDisadv: true, strReq: 15, weight: 30 },
  { id: 'armadura_placas', name: 'Armadura de Placas Completa (Full Plate)', type: 'pesada', baseAc: 18, dexBonus: 'none', stealthDisadv: true, strReq: 15, weight: 32.5 },

  // ESCUDO
  { id: 'escudo', name: 'Escudo (+2 CA)', type: 'escudo', acBonus: 2, weight: 3 }
];

export const WEAPONS = [
  // ARMAS SIMPLES CORPO A CORPO
  { id: 'adaga', name: 'Adaga', category: 'simples', type: 'melee', damage: '1d4', damageType: 'perfurante', properties: ['Acuidade', 'Leve', 'Arremesso (6/18m)'], weight: 0.5 },
  { id: 'bordao', name: 'Bordão', category: 'simples', type: 'melee', damage: '1d6', damageType: 'contusao', properties: ['Versátil (1d8)'], weight: 2 },
  { id: 'clava', name: 'Clava', category: 'simples', type: 'melee', damage: '1d4', damageType: 'contusao', properties: ['Leve'], weight: 1 },
  { id: 'lanca', name: 'Lança', category: 'simples', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (6/18m)', 'Versátil (1d8)'], weight: 1.5 },
  { id: 'maca', name: 'Maça', category: 'simples', type: 'melee', damage: '1d6', damageType: 'contusao', properties: [], weight: 2 },
  { id: 'machadinha', name: 'Machadinha', category: 'simples', type: 'melee', damage: '1d6', damageType: 'cortante', properties: ['Leve', 'Arremesso (6/18m)'], weight: 1 },
  { id: 'martelo_leve', name: 'Martelo Leve', category: 'simples', type: 'melee', damage: '1d4', damageType: 'contusao', properties: ['Leve', 'Arremesso (6/18m)'], weight: 1 },
  { id: 'foice_curta', name: 'Foice Curta', category: 'simples', type: 'melee', damage: '1d4', damageType: 'cortante', properties: ['Leve'], weight: 1 },
  { id: 'azagaia', name: 'Azagaia (Javelin)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (9/36m)'], weight: 1 },
  { id: 'tacape', name: 'Tacape (Greatclub)', category: 'simples', type: 'melee', damage: '1d8', damageType: 'contusao', properties: ['Duas Mãos'], weight: 4.5 },

  // ARMAS SIMPLES À DISTÂNCIA
  { id: 'arco_curto', name: 'Arco Curto', category: 'simples', type: 'ranged', damage: '1d6', damageType: 'perfurante', properties: ['Munição (24/96m)', 'Duas Mãos'], weight: 1 },
  { id: 'besta_leve', name: 'Besta Leve', category: 'simples', type: 'ranged', damage: '1d8', damageType: 'perfurante', properties: ['Munição (24/96m)', 'Recarga', 'Duas Mãos'], weight: 2.5 },
  { id: 'dardo', name: 'Dardo (Dart)', category: 'simples', type: 'ranged', damage: '1d4', damageType: 'perfurante', properties: ['Acuidade', 'Arremesso (6/18m)'], weight: 0.1 },
  { id: 'funda', name: 'Funda (Sling)', category: 'simples', type: 'ranged', damage: '1d4', damageType: 'contusao', properties: ['Munição (9/36m)'], weight: 0 },

  // ARMAS MARCIAIS CORPO A CORPO
  { id: 'alabarda', name: 'Alabarda (Halberd)', category: 'marcial', type: 'melee', damage: '1d10', damageType: 'cortante', properties: ['Pesada', 'Alcance (3m)', 'Duas Mãos'], weight: 3 },
  { id: 'cimitarra', name: 'Cimitarra', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'cortante', properties: ['Acuidade', 'Leve'], weight: 1.5 },
  { id: 'chicote', name: 'Chicote (Whip)', category: 'marcial', type: 'melee', damage: '1d4', damageType: 'cortante', properties: ['Acuidade', 'Alcance (3m)'], weight: 1.5 },
  { id: 'espada_curta', name: 'Espada Curta', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Acuidade', 'Leve'], weight: 1 },
  { id: 'espada_longa', name: 'Espada Longa', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'cortante', properties: ['Versátil (1d10)'], weight: 1.5 },
  { id: 'espadao', name: 'Espadão (Greatsword)', category: 'marcial', type: 'melee', damage: '2d6', damageType: 'cortante', properties: ['Pesada', 'Duas Mãos'], weight: 3 },
  { id: 'glaive', name: 'Glaive', category: 'marcial', type: 'melee', damage: '1d10', damageType: 'cortante', properties: ['Pesada', 'Alcance (3m)', 'Duas Mãos'], weight: 3 },
  { id: 'lanca_montaria', name: 'Lança de Montaria (Lance)', category: 'marcial', type: 'melee', damage: '1d12', damageType: 'perfurante', properties: ['Alcance (3m)', 'Especial'], weight: 3 },
  { id: 'machado_batalha', name: 'Machado de Batalha (Battleaxe)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'cortante', properties: ['Versátil (1d10)'], weight: 2 },
  { id: 'machado_grande', name: 'Machado Grande (Greataxe)', category: 'marcial', type: 'melee', damage: '1d12', damageType: 'cortante', properties: ['Pesada', 'Duas Mãos'], weight: 3.5 },
  { id: 'maca_estrela', name: 'Maça-Estrela (Morningstar)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: [], weight: 2 },
  { id: 'mangual', name: 'Mangual (Flail)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'contusao', properties: [], weight: 1 },
  { id: 'martelo_guerra', name: 'Martelo de Guerra (Warhammer)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'contusao', properties: ['Versátil (1d10)'], weight: 1 },
  { id: 'malho', name: 'Malho (Maul)', category: 'marcial', type: 'melee', damage: '2d6', damageType: 'contusao', properties: ['Pesada', 'Duas Mãos'], weight: 4.5 },
  { id: 'picareta_guerra', name: 'Picareta de Guerra', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: [], weight: 1 },
  { id: 'rapieira', name: 'Rapieira', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: ['Acuidade'], weight: 1 },
  { id: 'tridente', name: 'Tridente (Trident)', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (6/18m)', 'Versátil (1d8)'], weight: 2 },

  // ARMAS MARCIAIS À DISTÂNCIA
  { id: 'arco_longo', name: 'Arco Longo', category: 'marcial', type: 'ranged', damage: '1d8', damageType: 'perfurante', properties: ['Munição (45/180m)', 'Pesada', 'Duas Mãos'], weight: 1 },
  { id: 'besta_pesada', name: 'Besta Pesada', category: 'marcial', type: 'ranged', damage: '1d10', damageType: 'perfurante', properties: ['Munição (30/120m)', 'Pesada', 'Recarga', 'Duas Mãos'], weight: 4.5 },
  { id: 'besta_mao', name: 'Besta de Mão', category: 'marcial', type: 'ranged', damage: '1d6', damageType: 'perfurante', properties: ['Munição (9/36m)', 'Leve', 'Recarga'], weight: 1.5 },
  { id: 'zarabatana', name: 'Zarabatana (Blowgun)', category: 'marcial', type: 'ranged', damage: '1', damageType: 'perfurante', properties: ['Munição (7,5/30m)', 'Recarga'], weight: 0.5 },
  { id: 'rede', name: 'Rede (Net)', category: 'marcial', type: 'ranged', damage: '-', damageType: '-', properties: ['Especial', 'Arremesso (1,5/4,5m)'], weight: 1.5 }
];

export const GEAR_PACKS = [
  { id: 'pacote_explorador', name: 'Pacote de Explorador', description: 'Mochila, saco de dormir, kit de refeição, pederneira, 10 tochas, 10 dias de rações, cantil, 15m de corda de cânhamo.' },
  { id: 'pacote_masmorra', name: 'Pacote de Masmorra', description: 'Mochila, pé de cabra, martelo, 10 pítons, 10 tochas, pederneira, 10 dias de rações, cantil, 15m de corda.' },
  { id: 'pacote_sacerdote', name: 'Pacote de Sacerdote', description: 'Mochila, cobertor, 10 velas, pederneira, caixa de esmolas, incenso, incensário, vestes, 2 dias de rações, cantil.' },
  { id: 'pacote_estudioso', name: 'Pacote de Estudioso', description: 'Mochila, livro de conhecimento, tinteiro, pena de ave, 10 folhas de pergaminho, pequeno saco de areia, faca pequena.' },
  { id: 'pacote_assaltante', name: 'Pacote de Assaltante', description: 'Mochila, 1000 esferas de metal, 3m de barbante, sino, 5 velas, pé de cabra, martelo, 10 pítons, lanterna coberta, 2 frascos de óleo, 5 dias de rações, pederneira, cantil, 15m de corda.' },
  { id: 'pacote_diplomata', name: 'Pacote de Diplomata', description: 'Baú, 2 estojos de mapas/pergaminhos, roupas finas, tinteiro, pena de ave, lâmpada, 2 frascos de óleo, 5 folhas de papel, perfume, cera de lacre, sabão.' },
  { id: 'pacote_artista', name: 'Pacote de Artista', description: 'Mochila, saco de dormir, 2 fantasias, 5 velas, 5 dias de rações, cantil, kit de maquiagem artística.' }
];

export function getArmorById(id) {
  return ARMORS.find(a => a.id === id) || ARMORS[0];
}

export function getWeaponById(id) {
  return WEAPONS.find(w => w.id === id);
}
