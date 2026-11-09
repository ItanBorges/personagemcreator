/**
 * Catálogo Completo de Armaduras, Armas, Pacotes e Equipamentos de Aventura de D&D 5e e 5.5 em Pt-Br
 * Valores oficiais de mercado em Peças de Ouro (PO), Prata (PP) e Cobre (PC) conforme PHB / Livro do Jogador
 */

export const ARMORS = [
  // SEM ARMADURA
  { id: 'sem_armadura', name: 'Sem Armadura', type: 'nenhuma', baseAc: 10, dexBonus: 'full', stealthDisadv: false, strReq: 0, weight: 0, cost: 0, costText: '0 po' },

  // ARMADURAS LEVES
  { id: 'acolchoada', name: 'Armadura Acolchoada (Padded)', type: 'leve', baseAc: 11, dexBonus: 'full', stealthDisadv: true, strReq: 0, weight: 4, cost: 5, costText: '5 po' },
  { id: 'couro', name: 'Armadura de Couro (Leather)', type: 'leve', baseAc: 11, dexBonus: 'full', stealthDisadv: false, strReq: 0, weight: 5, cost: 10, costText: '10 po' },
  { id: 'couro_batido', name: 'Couro Batido (Studded Leather)', type: 'leve', baseAc: 12, dexBonus: 'full', stealthDisadv: false, strReq: 0, weight: 6.5, cost: 45, costText: '45 po' },

  // ARMADURAS MÉDIAS
  { id: 'gibao_peles', name: 'Gibão de Peles (Hide)', type: 'media', baseAc: 12, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 6, cost: 10, costText: '10 po' },
  { id: 'camisa_cota_malha', name: 'Camisa de Cota de Malha (Chain Shirt)', type: 'media', baseAc: 13, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 10, cost: 50, costText: '50 po' },
  { id: 'brunea', name: 'Brúnea (Scale Mail)', type: 'media', baseAc: 14, dexBonus: 'max2', stealthDisadv: true, strReq: 0, weight: 22.5, cost: 50, costText: '50 po' },
  { id: 'peitoral_aco', name: 'Peitoral de Aço (Breastplate)', type: 'media', baseAc: 14, dexBonus: 'max2', stealthDisadv: false, strReq: 0, weight: 10, cost: 400, costText: '400 po' },
  { id: 'meia_armadura', name: 'Meia-Armadura (Half Plate)', type: 'media', baseAc: 15, dexBonus: 'max2', stealthDisadv: true, strReq: 0, weight: 20, cost: 750, costText: '750 po' },

  // ARMADURAS PESADAS
  { id: 'cota_aneis', name: 'Cota de Anéis (Ring Mail)', type: 'pesada', baseAc: 14, dexBonus: 'none', stealthDisadv: true, strReq: 0, weight: 20, cost: 30, costText: '30 po' },
  { id: 'cota_malha_pesada', name: 'Cota de Malha (Chain Mail)', type: 'pesada', baseAc: 16, dexBonus: 'none', stealthDisadv: true, strReq: 13, weight: 27, cost: 75, costText: '75 po' },
  { id: 'cota_talas', name: 'Cota de Talas (Splint)', type: 'pesada', baseAc: 17, dexBonus: 'none', stealthDisadv: true, strReq: 15, weight: 30, cost: 200, costText: '200 po' },
  { id: 'armadura_placas', name: 'Armadura de Placas Completa (Full Plate)', type: 'pesada', baseAc: 18, dexBonus: 'none', stealthDisadv: true, strReq: 15, weight: 32.5, cost: 1500, costText: '1.500 po' },

  // ESCUDO
  { id: 'escudo', name: 'Escudo (+2 CA)', type: 'escudo', acBonus: 2, weight: 3, cost: 10, costText: '10 po' }
];

export const WEAPONS = [
  // ARMAS SIMPLES CORPO A CORPO
  { id: 'adaga', name: 'Adaga', category: 'simples', type: 'melee', damage: '1d4', damageType: 'perfurante', properties: ['Acuidade', 'Leve', 'Arremesso (6/18m)'], weight: 0.5, cost: 2, costText: '2 po' },
  { id: 'azagaia', name: 'Azagaia (Javelin)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (9/36m)'], weight: 1, cost: 0.5, costText: '5 pp' },
  { id: 'bordao', name: 'Bordão (Quarterstaff)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'contusao', properties: ['Versátil (1d8)'], weight: 2, cost: 0.2, costText: '2 pp' },
  { id: 'clava', name: 'Clava (Club)', category: 'simples', type: 'melee', damage: '1d4', damageType: 'contusao', properties: ['Leve'], weight: 1, cost: 0.1, costText: '1 pp' },
  { id: 'foice_curta', name: 'Foice Curta (Sickle)', category: 'simples', type: 'melee', damage: '1d4', damageType: 'cortante', properties: ['Leve'], weight: 1, cost: 1, costText: '1 po' },
  { id: 'lanca', name: 'Lança (Spear)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (6/18m)', 'Versátil (1d8)'], weight: 1.5, cost: 1, costText: '1 po' },
  { id: 'maca', name: 'Maça (Mace)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'contusao', properties: [], weight: 2, cost: 5, costText: '5 po' },
  { id: 'machadinha', name: 'Machadinha (Handaxe)', category: 'simples', type: 'melee', damage: '1d6', damageType: 'cortante', properties: ['Leve', 'Arremesso (6/18m)'], weight: 1, cost: 5, costText: '5 po' },
  { id: 'martelo_leve', name: 'Martelo Leve (Light Hammer)', category: 'simples', type: 'melee', damage: '1d4', damageType: 'contusao', properties: ['Leve', 'Arremesso (6/18m)'], weight: 1, cost: 2, costText: '2 po' },
  { id: 'tacape', name: 'Tacape (Greatclub)', category: 'simples', type: 'melee', damage: '1d8', damageType: 'contusao', properties: ['Duas Mãos'], weight: 4.5, cost: 0.2, costText: '2 pp' },

  // ARMAS SIMPLES À DISTÂNCIA
  { id: 'arco_curto', name: 'Arco Curto (Shortbow)', category: 'simples', type: 'ranged', damage: '1d6', damageType: 'perfurante', properties: ['Munição (24/96m)', 'Duas Mãos'], weight: 1, cost: 25, costText: '25 po' },
  { id: 'besta_leve', name: 'Besta Leve (Light Crossbow)', category: 'simples', type: 'ranged', damage: '1d8', damageType: 'perfurante', properties: ['Munição (24/96m)', 'Recarga', 'Duas Mãos'], weight: 2.5, cost: 25, costText: '25 po' },
  { id: 'dardo', name: 'Dardo (Dart)', category: 'simples', type: 'ranged', damage: '1d4', damageType: 'perfurante', properties: ['Acuidade', 'Arremesso (6/18m)'], weight: 0.1, cost: 0.05, costText: '5 pc' },
  { id: 'funda', name: 'Funda (Sling)', category: 'simples', type: 'ranged', damage: '1d4', damageType: 'contusao', properties: ['Munição (9/36m)'], weight: 0, cost: 0.1, costText: '1 pp' },

  // ARMAS MARCIAIS CORPO A CORPO
  { id: 'alabarda', name: 'Alabarda (Halberd)', category: 'marcial', type: 'melee', damage: '1d10', damageType: 'cortante', properties: ['Pesada', 'Alcance (3m)', 'Duas Mãos'], weight: 3, cost: 20, costText: '20 po' },
  { id: 'alfanje', name: 'Alfanje / Cimitarra (Scimitar)', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'cortante', properties: ['Acuidade', 'Leve'], weight: 1.5, cost: 25, costText: '25 po' },
  { id: 'chicote', name: 'Chicote (Whip)', category: 'marcial', type: 'melee', damage: '1d4', damageType: 'cortante', properties: ['Acuidade', 'Alcance (3m)'], weight: 1.5, cost: 2, costText: '2 po' },
  { id: 'espada_curta', name: 'Espada Curta (Shortsword)', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Acuidade', 'Leve'], weight: 1, cost: 10, costText: '10 po' },
  { id: 'espada_longa', name: 'Espada Longa (Longsword)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'cortante', properties: ['Versátil (1d10)'], weight: 1.5, cost: 15, costText: '15 po' },
  { id: 'espadao', name: 'Espadão (Greatsword)', category: 'marcial', type: 'melee', damage: '2d6', damageType: 'cortante', properties: ['Pesada', 'Duas Mãos'], weight: 3, cost: 50, costText: '50 po' },
  { id: 'glaive', name: 'Glaive', category: 'marcial', type: 'melee', damage: '1d10', damageType: 'cortante', properties: ['Pesada', 'Alcance (3m)', 'Duas Mãos'], weight: 3, cost: 20, costText: '20 po' },
  { id: 'lanca_longa', name: 'Lança Longa / Pique (Pike)', category: 'marcial', type: 'melee', damage: '1d10', damageType: 'perfurante', properties: ['Pesada', 'Alcance (3m)', 'Duas Mãos'], weight: 4, cost: 5, costText: '5 po' },
  { id: 'lanca_montaria', name: 'Lança de Montaria (Lance)', category: 'marcial', type: 'melee', damage: '1d12', damageType: 'perfurante', properties: ['Alcance (3m)', 'Especial'], weight: 3, cost: 10, costText: '10 po' },
  { id: 'maca_estrela', name: 'Maça-Estrela (Morningstar)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: [], weight: 2, cost: 15, costText: '15 po' },
  { id: 'machado_batalha', name: 'Machado de Batalha (Battleaxe)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'cortante', properties: ['Versátil (1d10)'], weight: 2, cost: 10, costText: '10 po' },
  { id: 'machado_grande', name: 'Machado Grande (Greataxe)', category: 'marcial', type: 'melee', damage: '1d12', damageType: 'cortante', properties: ['Pesada', 'Duas Mãos'], weight: 3.5, cost: 30, costText: '30 po' },
  { id: 'malho', name: 'Malho / Marreta (Maul)', category: 'marcial', type: 'melee', damage: '2d6', damageType: 'contusao', properties: ['Pesada', 'Duas Mãos'], weight: 4.5, cost: 10, costText: '10 po' },
  { id: 'mangual', name: 'Mangual (Flail)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'contusao', properties: [], weight: 1, cost: 10, costText: '10 po' },
  { id: 'martelo_guerra', name: 'Martelo de Guerra (Warhammer)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'contusao', properties: ['Versátil (1d10)'], weight: 1, cost: 15, costText: '15 po' },
  { id: 'picareta_guerra', name: 'Picareta de Guerra (War Pick)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: [], weight: 1, cost: 5, costText: '5 po' },
  { id: 'rapieira', name: 'Rapieira (Rapier)', category: 'marcial', type: 'melee', damage: '1d8', damageType: 'perfurante', properties: ['Acuidade'], weight: 1, cost: 25, costText: '25 po' },
  { id: 'tridente', name: 'Tridente (Trident)', category: 'marcial', type: 'melee', damage: '1d6', damageType: 'perfurante', properties: ['Arremesso (6/18m)', 'Versátil (1d8)'], weight: 2, cost: 5, costText: '5 po' },

  // ARMAS MARCIAIS À DISTÂNCIA
  { id: 'arco_longo', name: 'Arco Longo (Longbow)', category: 'marcial', type: 'ranged', damage: '1d8', damageType: 'perfurante', properties: ['Munição (45/180m)', 'Pesada', 'Duas Mãos'], weight: 1, cost: 50, costText: '50 po' },
  { id: 'besta_mao', name: 'Besta de Mão (Hand Crossbow)', category: 'marcial', type: 'ranged', damage: '1d6', damageType: 'perfurante', properties: ['Munição (9/36m)', 'Leve', 'Recarga'], weight: 1.5, cost: 75, costText: '75 po' },
  { id: 'besta_pesada', name: 'Besta Pesada (Heavy Crossbow)', category: 'marcial', type: 'ranged', damage: '1d10', damageType: 'perfurante', properties: ['Munição (30/120m)', 'Pesada', 'Recarga', 'Duas Mãos'], weight: 4.5, cost: 50, costText: '50 po' },
  { id: 'rede', name: 'Rede (Net)', category: 'marcial', type: 'ranged', damage: '-', damageType: '-', properties: ['Especial', 'Arremesso (1,5/4,5m)'], weight: 1.5, cost: 1, costText: '1 po' },
  { id: 'zarabatana', name: 'Zarabatana (Blowgun)', category: 'marcial', type: 'ranged', damage: '1', damageType: 'perfurante', properties: ['Munição (7,5/30m)', 'Recarga'], weight: 0.5, cost: 10, costText: '10 po' }
];

export const GEAR_PACKS = [
  { id: 'pacote_explorador', name: 'Pacote de Explorador', description: 'Mochila, saco de dormir, kit de refeição, pederneira, 10 tochas, 10 dias de rações, cantil, 15m de corda de cânhamo.', cost: 10, costText: '10 po' },
  { id: 'pacote_masmorra', name: 'Pacote de Masmorra', description: 'Mochila, pé de cabra, martelo, 10 pítons, 10 tochas, pederneira, 10 dias de rações, cantil, 15m de corda de cânhamo.', cost: 12, costText: '12 po' },
  { id: 'pacote_sacerdote', name: 'Pacote de Sacerdote', description: 'Mochila, cobertor, 10 velas, pederneira, caixa de esmolas, incenso, incensário, vestes, 2 dias de rações, cantil.', cost: 19, costText: '19 po' },
  { id: 'pacote_estudioso', name: 'Pacote de Estudioso', description: 'Mochila, livro de conhecimento, tinteiro, pena de ave, 10 folhas de pergaminho, pequeno saco de areia, faca pequena.', cost: 40, costText: '40 po' },
  { id: 'pacote_assaltante', name: 'Pacote de Assaltante', description: 'Mochila, 1000 esferas de metal, 3m de barbante, sino, 5 velas, pé de cabra, martelo, 10 pítons, lanterna coberta, 2 frascos de óleo, 5 dias de rações, pederneira, cantil, 15m de corda.', cost: 16, costText: '16 po' },
  { id: 'pacote_diplomata', name: 'Pacote de Diplomata', description: 'Baú, 2 estojos de mapas/pergaminhos, roupas finas, tinteiro, pena de ave, lâmpada, 2 frascos de óleo, 5 folhas de papel, perfume, cera de lacre, sabão.', cost: 39, costText: '39 po' },
  { id: 'pacote_artista', name: 'Pacote de Artista', description: 'Mochila, saco de dormir, 2 fantasias, 5 velas, 5 dias de rações, cantil, kit de maquiagem artística.', cost: 40, costText: '40 po' }
];

export const ADVENTURING_GEAR = [
  // POÇÕES & ITENS ALQUÍMICOS
  { id: 'pocao_cura', name: 'Poção de Cura (Potion of Healing)', category: 'pocoes', cost: 50, costText: '50 po', weight: 0.25, description: 'Restaura 2d4 + 2 pontos de vida quando bebida.' },
  { id: 'pocao_cura_maior', name: 'Poção de Cura Maior (Greater Healing)', category: 'pocoes', cost: 150, costText: '150 po', weight: 0.25, description: 'Restaura 4d4 + 4 pontos de vida.' },
  { id: 'antitoxina', name: 'Antitoxina / Antídoto (Frasco)', category: 'pocoes', cost: 50, costText: '50 po', weight: 0.1, description: 'Vantagem em testes de resistência contra veneno por 1 hora.' },
  { id: 'fogo_alquimico', name: 'Fogo Alquímico (Frasco)', category: 'alquimia', cost: 50, costText: '50 po', weight: 0.5, description: 'Pode ser arremessado a até 6m. Causa 1d4 de dano de fogo a cada turno no alvo até ser apagado.' },
  { id: 'acido_frasco', name: 'Ácido (Frasco)', category: 'alquimia', cost: 25, costText: '25 po', weight: 0.5, description: 'Arremesso a até 6m causando 2d6 de dano de ácido.' },
  { id: 'agua_benta', name: 'Água Benta (Frasco)', category: 'alquimia', cost: 25, costText: '25 po', weight: 0.5, description: 'Causa 2d6 de dano radiante a ínferos ou mortos-vivos.' },

  // EQUIPAMENTOS GERAIS DE EXPLORAÇÃO
  { id: 'mochila', name: 'Mochila (Backpack)', category: 'geral', cost: 2, costText: '2 po', weight: 2, description: 'Capacidade de até 15 kg de equipamento.' },
  { id: 'saco_dormir', name: 'Saco de Dormir (Bedroll)', category: 'geral', cost: 1, costText: '1 po', weight: 3, description: 'Essencial para descansar no ermo mantendo aquecimento.' },
  { id: 'corda_canhamo', name: 'Corda de Cânhamo (15 metros)', category: 'geral', cost: 1, costText: '1 po', weight: 5, description: 'Resistente com 2 pontos de vida e CD 17 para arrebentar.' },
  { id: 'corda_seda', name: 'Corda de Seda (15 metros)', category: 'geral', cost: 10, costText: '10 po', weight: 2.5, description: 'Leve e extremamente resistente com CD 17 para arrebentar.' },
  { id: 'tocha', name: 'Tocha (1 unidade)', category: 'geral', cost: 0.01, costText: '1 pc', weight: 0.5, description: 'Queima por 1 hora, iluminando raio de 6m com luz plena e 6m penumbra.' },
  { id: 'lanterna_coberta', name: 'Lanterna Coberta (Bullseye)', category: 'geral', cost: 10, costText: '10 po', weight: 1, description: 'Emite um cone de luz plena a até 18 metros.' },
  { id: 'oleo_frasco', name: 'Óleo (Frasco)', category: 'geral', cost: 0.1, costText: '1 pp', weight: 0.5, description: 'Combustível para lanternas por 6 horas ou usado como explosivo de fogo.' },
  { id: 'pederneira_isqueiro', name: 'Pederneira e Isqueiro (Tinderbox)', category: 'geral', cost: 0.5, costText: '5 pp', weight: 0.5, description: 'Permite acender tochas e fogueiras facilmente.' },
  { id: 'pe_de_cabra', name: 'Pé de Cabra (Crowbar)', category: 'geral', cost: 2, costText: '2 po', weight: 2.5, description: 'Concede vantagem em testes de Força onde a alavanca puder ser aplicada.' },
  { id: 'algemas', name: 'Algemas de Ferro com Chave', category: 'geral', cost: 2, costText: '2 po', weight: 3, description: 'Prende criaturas Pequenas ou Médias (CD 20 para escapar ou arrombar).' },
  { id: 'cantil', name: 'Cantil de Água (Waterskin)', category: 'geral', cost: 0.2, costText: '2 pp', weight: 2.5, description: 'Capacidade para cerca de 2 litros de água fresca.' },
  { id: 'racao_viagem', name: 'Ração de Viagem (1 dia)', category: 'geral', cost: 0.5, costText: '5 pp', weight: 1, description: 'Alimentos secos nutritivos para sobreviver nas estradas.' },
  { id: 'tenda_duas_pessoas', name: 'Tenda de Acampamento (2 pessoas)', category: 'geral', cost: 2, costText: '2 po', weight: 10, description: 'Abrigo rústico para até dois aventureiros.' },
  { id: 'espelho_aco', name: 'Espelho de Aço Pequeno', category: 'geral', cost: 5, costText: '5 po', weight: 0.25, description: 'Útil para espiar esquinas e reflexos de criaturas.' },
  { id: 'kit_refeicao', name: 'Kit de Refeição (Mess Kit)', category: 'geral', cost: 0.2, costText: '2 pp', weight: 0.5, description: 'Tigela de metal, caneca e talheres de acampamento.' },

  // FOCOS DE CONJURAÇÃO & ITENS MÁGICOS
  { id: 'grimorio_mago', name: 'Grimório de Mago (Spellbook)', category: 'focos', cost: 50, costText: '50 po', weight: 1.5, description: 'Livro encadernado em couro com 100 páginas pergaminho para registrar magias.' },
  { id: 'bolsa_componentes', name: 'Bolsa de Componentes de Magia', category: 'focos', cost: 25, costText: '25 po', weight: 1, description: 'Contém todos os componentes materiais sem custo monetário exigidos por magias.' },
  { id: 'foco_arcano_varinha', name: 'Foco Arcano: Varinha', category: 'focos', cost: 10, costText: '10 po', weight: 0.5, description: 'Canalizador mágico para Magos, Bruxos e Feiticeiros.' },
  { id: 'foco_arcano_cristal', name: 'Foco Arcano: Cristal / Orbe', category: 'focos', cost: 10, costText: '10 po', weight: 0.5, description: 'Cristal lapidado para conjuração arcana.' },
  { id: 'simbolo_sagrado_amuleto', name: 'Símbolo Sagrado: Amuleto / Emblema', category: 'focos', cost: 5, costText: '5 po', weight: 0.5, description: 'Foco sagrado para Clérigos e Paladinos.' },
  { id: 'foco_druidico_visco', name: 'Foco Druídico: Ramo de Visco ou Totem', category: 'focos', cost: 1, costText: '1 po', weight: 0.1, description: 'Canalizador primordial para Druidas e Patrulheiros.' },

  // FERRAMENTAS & KITS ESPECIALIZADOS
  { id: 'kit_primeiros_socorros', name: 'Kit de Primeiros Socorros (10 usos)', category: 'ferramentas', cost: 5, costText: '5 po', weight: 1.5, description: 'Como ação, estabiliza uma criatura com 0 PV sem necessidade de teste de Medicina.' },
  { id: 'ferramentas_ladrao', name: 'Ferramentas de Ladrão (Thieves Tools)', category: 'ferramentas', cost: 25, costText: '25 po', weight: 0.5, description: 'Gazuas e alicates para desarmar armadilhas e abrir fechaduras.' },
  { id: 'kit_herbalismo', name: 'Kit de Herbalismo', category: 'ferramentas', cost: 5, costText: '5 po', weight: 1.5, description: 'Instrumentos botânicos necessários para preparar Poções de Cura e antídotos.' },
  { id: 'kit_disfarce', name: 'Kit de Disfarce', category: 'ferramentas', cost: 25, costText: '25 po', weight: 1.5, description: 'Maquiagem, perucas e roupas para criar identidades alternativas.' },
  { id: 'kit_falsificacao', name: 'Kit de Falsificação', category: 'ferramentas', cost: 15, costText: '15 po', weight: 2.5, description: 'Papéis especiais, tintas e carimbos para forjar selos e documentos.' },
  { id: 'kit_venenoso', name: 'Kit de Envenenador', category: 'ferramentas', cost: 50, costText: '50 po', weight: 1, description: 'Recipientes e reagentes para extrair e criar toxinas letais.' },
  { id: 'ferramentas_ferreiro', name: 'Ferramentas de Ferreiro', category: 'ferramentas', cost: 20, costText: '20 po', weight: 4, description: 'Bigorna portátil, martelos e tenazes para forjar e reparar metais.' },
  { id: 'alaude', name: 'Instrumento Musical: Alaúde (Lute)', category: 'instrumentos', cost: 35, costText: '35 po', weight: 1, description: 'Instrumento de cordas adorado por Bardos e trovadores.' },
  { id: 'flauta', name: 'Instrumento Musical: Flauta Doce', category: 'instrumentos', cost: 2, costText: '2 po', weight: 0.5, description: 'Instrumento de sopro melódico.' },

  // MUNIÇÕES
  { id: 'flechas_20', name: 'Flechas de Arco (Aljava com 20)', category: 'municao', cost: 1, costText: '1 po', weight: 0.5, description: 'Munição padrão para arcos curtos e arcos longos.' },
  { id: 'virotes_20', name: 'Virotes de Besta (Estojo com 20)', category: 'municao', cost: 1, costText: '1 po', weight: 0.75, description: 'Munição de aço e madeira para bestas leves, de mão ou pesadas.' },
  { id: 'balas_funda_20', name: 'Balas de Chumbo de Funda (20 unidades)', category: 'municao', cost: 0.04, costText: '4 pc', weight: 0.75, description: 'Esferas metálicas para fundas.' }
];

export function getArmorById(id) {
  return ARMORS.find(a => a.id === id) || ARMORS[0];
}

export function getWeaponById(id) {
  return WEAPONS.find(w => w.id === id);
}

export function getGearPackById(id) {
  return GEAR_PACKS.find(p => p.id === id);
}

export function getGearItemById(id) {
  return ADVENTURING_GEAR.find(g => g.id === id);
}

/**
 * Encontra qualquer item pelo ID ou nome aproximado no catálogo completo
 */
export function findItemByNameOrId(query) {
  if (!query) return null;
  let q = String(query).toLowerCase().trim();
  let quantity = 1;

  // Extrai quantidade no início (ex: '3x Poção' ou '10x Flecha') ou no fim (ex: '(x3)')
  const prefixMatch = q.match(/^(\d+)\s*x\s*(.+)$/i);
  if (prefixMatch) {
    quantity = parseInt(prefixMatch[1], 10) || 1;
    q = prefixMatch[2].trim();
  } else {
    const suffixMatch = q.match(/^(.+?)\s*\(\s*x\s*(\d+)\s*\)$/i);
    if (suffixMatch) {
      q = suffixMatch[1].trim();
      quantity = parseInt(suffixMatch[2], 10) || 1;
    }
  }

  // Verifica armas
  const wp = WEAPONS.find(w => w.id === q || w.name.toLowerCase().includes(q) || q.includes(w.name.toLowerCase()));
  if (wp) return { ...wp, itemType: 'weapon', quantity };

  // Verifica armaduras
  const arm = ARMORS.find(a => a.id === q || a.name.toLowerCase().includes(q) || q.includes(a.name.toLowerCase()));
  if (arm) return { ...arm, itemType: 'armor', quantity };

  // Verifica pacotes
  const pk = GEAR_PACKS.find(p => p.id === q || p.name.toLowerCase().includes(q) || q.includes(p.name.toLowerCase()));
  if (pk) return { ...pk, itemType: 'pack', quantity };

  // Verifica equipamentos de aventura
  const gr = ADVENTURING_GEAR.find(g => g.id === q || g.name.toLowerCase().includes(q) || q.includes(g.name.toLowerCase()));
  if (gr) return { ...gr, itemType: 'gear', quantity };

  return null;
}

/**
 * Calcula o valor de revenda de um item em PO (regra oficial de 50% do valor de mercado)
 */
export function calculateItemResaleValue(item) {
  if (!item) return 0;
  const unitCost = typeof item.cost === 'number' ? item.cost : (parseFloat(item.cost) || 0);
  const qty = item.quantity || 1;
  // 50% de acordo com o Livro do Jogador (p. 144) multiplicado pela quantidade
  return Math.round((unitCost * 0.5 * qty) * 100) / 100;
}
