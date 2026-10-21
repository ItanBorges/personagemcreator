/**
 * Catálogo Completo de Raças e Espécies de D&D 5e e 5.5 (2024)
 * Referenciado a partir de dnd5e.wikidot.com
 */

export const RACES = [
  // ==================== REGRAS DE 2024 (Player's Handbook 2024) ====================
  {
    id: 'humano_2024',
    name: 'Humano (Espécie 2024)',
    nameEn: 'Human (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Engenhosos e adaptáveis, os humanos contam com determinação incansável e inspiração heróica.',
    abilityBonus: { type: 'background' },
    traits: [
      { name: 'Inspiração Heróica', description: 'Você ganha Inspiração Heróica sempre que termina um Descanso Longo.' },
      { name: 'Talento Hábil (Origem)', description: 'Você ganha um Talento de Origem adicional à sua escolha no nível 1.' },
      { name: 'Versátil', description: 'Você ganha proficiência em uma perícia à sua escolha.' }
    ]
  },
  {
    id: 'elfo_2024',
    name: 'Elfo (Espécie 2024)',
    nameEn: 'Elf (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio',
    description: 'Seres ancestrais ligados ao Reino das Fadas com sentidos aguçados e magia inata.',
    abilityBonus: { type: 'background' },
    subraces: [
      {
        id: 'elfo_alto_2024',
        name: 'Alto Elfo (High Elf)',
        traits: [
          { name: 'Magia Élfica (Alto)', description: 'Conhece o truque Prestidigitação (ou outro truque de mago). No 3º nível: Passo Nebuloso. No 5º nível: Detectar Magia.' }
        ]
      },
      {
        id: 'elfo_floresta_2024',
        name: 'Elfo da Floresta (Wood Elf)',
        speedBonus: 1.5,
        traits: [
          { name: 'Velocidade Élfica', description: 'Seu deslocamento aumenta para 10,5 metros.' },
          { name: 'Magia Élfica (Floresta)', description: 'Conhece o truque Artifício de Druida. No 3º nível: Passo Longo. No 5º nível: Passos Sem Pegadas.' }
        ]
      },
      {
        id: 'drow_2024',
        name: 'Drow / Elfo Negro',
        traits: [
          { name: 'Visão no Escuro Superior (36m)', description: 'Alcance de 36 metros de visão no escuro.' },
          { name: 'Magia Drow', description: 'Conhece o truque Luzes Dançantes. No 3º nível: Fogo das Fadas. No 5º nível: Escuridão.' }
        ]
      }
    ],
    traits: [
      { name: 'Visão no Escuro', description: 'Enxerga na penumbra e escuridão a até 18 metros.' },
      { name: 'Sentidos Aguçados', description: 'Proficiência na perícia Percepção.' },
      { name: 'Ancestralidade Feérica', description: 'Vantagem em salvaguardas para evitar ou encerrar a condição Enfeitiçado.' },
      { name: 'Transe', description: 'Medita por 4 horas para obter os benefícios de um descanso longo completo.' }
    ]
  },
  {
    id: 'anao_2024',
    name: 'Anão (Espécie 2024)',
    nameEn: 'Dwarf (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio',
    description: 'Guerreiros e artesãos tenazes esculpidos na rocha, resistentes a toxinas e venenos.',
    abilityBonus: { type: 'background' },
    hpBonusPerLevel: 1,
    traits: [
      { name: 'Visão no Escuro Aprimorada (36m)', description: 'Enxerga no escuro a até 36 metros.' },
      { name: 'Resiliência Anã', description: 'Resistência a dano de veneno e vantagem em salvaguardas contra ser envenenado.' },
      { name: 'Dureza Anã', description: 'Seus pontos de vida máximos aumentam em 1 para cada nível que você tiver.' },
      { name: 'Sentido da Pedra', description: 'Ação bônus para ganhar sentido sísmico a 18m por 10 minutos (usos = bônus prof).' }
    ]
  },
  {
    id: 'halfling_2024',
    name: 'Halfling (Espécie 2024)',
    nameEn: 'Halfling (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Pequeno',
    description: 'Povo afável, corajoso e incrivelmente afortunado que escapa de perigos com agilidade.',
    abilityBonus: { type: 'background' },
    traits: [
      { name: 'Sortudo', description: 'Ao rolar um 1 natural num d20 para teste de d20, pode rolar novamente.' },
      { name: 'Corajoso', description: 'Vantagem em salvaguardas contra a condição Amedrontado.' },
      { name: 'Agilidade Halfling', description: 'Pode mover-se pelo espaço de qualquer criatura de tamanho maior que o seu.' },
      { name: 'Furtividade Natural', description: 'Pode tentar se esconder atrás de criaturas pelo menos uma categoria maiores que você.' }
    ]
  },
  {
    id: 'draconato_2024',
    name: 'Draconato (Espécie 2024)',
    nameEn: 'Dragonborn (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio',
    description: 'Nobres descendentes de dragões que empunham o sopro elemental e asas temporárias.',
    abilityBonus: { type: 'background' },
    subraces: [
      { id: 'draco_negro_2024', name: 'Dragão Negro (Ácido - Linha 9m)', element: 'Ácido' },
      { id: 'draco_azul_2024', name: 'Dragão Azul (Elétrico - Linha 9m)', element: 'Elétrico' },
      { id: 'draco_verde_2024', name: 'Dragão Verde (Veneno - Cone 4,5m)', element: 'Veneno' },
      { id: 'draco_vermelho_2024', name: 'Dragão Vermelho (Fogo - Cone 4,5m)', element: 'Fogo' },
      { id: 'draco_branco_2024', name: 'Dragão Branco (Frio - Cone 4,5m)', element: 'Frio' },
      { id: 'draco_latao_2024', name: 'Dragão de Latão (Fogo - Linha 9m)', element: 'Fogo' },
      { id: 'draco_bronze_2024', name: 'Dragão de Bronze (Elétrico - Linha 9m)', element: 'Elétrico' },
      { id: 'draco_cobre_2024', name: 'Dragão de Cobre (Ácido - Linha 9m)', element: 'Ácido' },
      { id: 'draco_ouro_2024', name: 'Dragão de Ouro (Fogo - Cone 4,5m)', element: 'Fogo' },
      { id: 'draco_prata_2024', name: 'Dragão de Prata (Frio - Cone 4,5m)', element: 'Frio' }
    ],
    traits: [
      { name: 'Arma de Sopro', description: 'Cone de 4,5m ou linha de 9m (1d10 dano elemental, escala com nível) substituindo um ataque.' },
      { name: 'Resistência a Dano', description: 'Resistência ao tipo de dano do seu ancestral dracônico escolhido.' },
      { name: 'Visão no Escuro', description: 'Enxerga no escuro até 18 metros.' },
      { name: 'Voo Dracônico (Nível 5)', description: 'No 5º nível, manifesta asas espectrais para voar por 10 minutos (1x descanso longo).' }
    ]
  },
  {
    id: 'gnomo_2024',
    name: 'Gnomo (Espécie 2024)',
    nameEn: 'Gnome (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Pequeno',
    description: 'Mentes brilhantes movidas por curiosidade insaciável e astúcia mágica.',
    abilityBonus: { type: 'background' },
    subraces: [
      { id: 'gnomo_floresta_2024', name: 'Gnomo da Floresta', traits: [{ name: 'Magia Natural', description: 'Truque Ilusão Menor e conjura Falar com Animais sem gastar espaços.' }] },
      { id: 'gnomo_rochas_2024', name: 'Gnomo das Rochas', traits: [{ name: 'Engenho Gnômico', description: 'Truques Conserto e Prestidigitação, e cria engenhocas funcionais.' }] }
    ],
    traits: [
      { name: 'Astúcia Gnômica', description: 'Vantagem em salvaguardas de Inteligência, Sabedoria e Carisma.' },
      { name: 'Visão no Escuro', description: 'Enxerga no escuro até 18 metros.' }
    ]
  },
  {
    id: 'tiefling_2024',
    name: 'Tiefling (Espécie 2024)',
    nameEn: 'Tiefling (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Marcados por herança planar dos Planos Inferiores com poderes mágicos inatos.',
    abilityBonus: { type: 'background' },
    subraces: [
      { id: 'tiefling_infernal_2024', name: 'Linhagem Infernal (Baator)', traits: [{ name: 'Magia Infernal', description: 'Resistência a Fogo. Truque Produzir Chama; Repreensão Infernal (3º); Escuridão (5º).' }] },
      { id: 'tiefling_abissal_2024', name: 'Linhagem Abissal (Abismo)', traits: [{ name: 'Magia Abissal', description: 'Resistência a Veneno. Truque Toque Macabro; Raio de Doença (3º); Manter Pessoa (5º).' }] },
      { id: 'tiefling_ctonico_2024', name: 'Linhagem Ctônica (Carceri/Hades)', traits: [{ name: 'Magia Ctônica', description: 'Resistência Necrótica. Truque Toque Frio; Falso Sentimento de Morte (3º); Invisibilidade (5º).' }] }
    ],
    traits: [
      { name: 'Visão no Escuro', description: 'Enxerga no escuro até 18 metros.' },
      { name: 'Taumaturgia', description: 'Conhece o truque Taumaturgia.' }
    ]
  },
  {
    id: 'golias_2024',
    name: 'Golias (Espécie 2024)',
    nameEn: 'Goliath (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 10.5,
    size: 'Médio',
    description: 'Gigantescos montanheses que canalizam poderes dos gigantes de Bigby e das montanhas.',
    abilityBonus: { type: 'background' },
    subraces: [
      { id: 'golias_nuvens', name: 'Ancestralidade Gigante das Nuvens (Passo Nebuloso)' },
      { id: 'golias_fogo', name: 'Ancestralidade Gigante do Fogo (+1d10 Fogo)' },
      { id: 'golias_gelo', name: 'Ancestralidade Gigante do Gelo (+1d6 Frio e Lentidão)' },
      { id: 'golias_colina', name: 'Ancestralidade Gigante da Colina (Derrubar Alvo)' },
      { id: 'golias_pedra', name: 'Ancestralidade Gigante da Pedra (Reação Resistência da Rocha)' },
      { id: 'golias_tempestade', name: 'Ancestralidade Gigante da Tempestade (Reação de Choque)' }
    ],
    traits: [
      { name: 'Poder de Gigante', description: 'Usa a habilidade do gigante ancestral escolhido (usos = bônus proficiência).' },
      { name: 'Forma Agigantada (Nível 5)', description: 'Ação bônus para se tornar Grande por 10 minutos, aumentando alcance e dano.' },
      { name: 'Corpulento', description: 'Conta como uma categoria de tamanho maior para peso de carga e arrasto.' }
    ]
  },
  {
    id: 'aasimar_2024',
    name: 'Aasimar (Espécie 2024)',
    nameEn: 'Aasimar (Species 2024)',
    edition: '2024',
    sourceId: 'phb_2024',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Tocados pela luz dos Planos Superiores, manifestando asas de luz ou energia radiante.',
    abilityBonus: { type: 'background' },
    subraces: [
      { id: 'aasimar_protetor', name: 'Aasimar Protetor (Asas Radiantes e Voo)' },
      { id: 'aasimar_flagelo', name: 'Aasimar Flagelo (Radiação Solar Ardente)' },
      { id: 'aasimar_caido', name: 'Aasimar Caído (Asas Esqueléticas e Aura de Medo)' }
    ],
    traits: [
      { name: 'Mãos Que Curam', description: 'Cura uma criatura com d4s iguais ao seu bônus de proficiência.' },
      { name: 'Portador da Luz', description: 'Conhece o truque Luz.' },
      { name: 'Resistência Celestial', description: 'Resistência a dano necrótico e dano radiante.' },
      { name: 'Revelação Celestial (Nível 3)', description: 'Transformação divina de 1 minuto concedendo dano radiante extra.' }
    ]
  },

  // ==================== LINHAGEM PERSONALIZADA (Caldeirão de Tasha - TCoE) ====================
  {
    id: 'linhagem_tasha',
    name: 'Linhagem Personalizada (Tasha)',
    nameEn: 'Custom Lineage (Tasha)',
    edition: '2014',
    sourceId: 'tcoe',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Permite criar qualquer conceito de personagem único com +2 em um atributo e 1 talento no nível 1.',
    abilityBonus: { type: 'custom_tasha' },
    freeFeat: true,
    traits: [
      { name: 'Talento Inicial', description: 'Você ganha um talento à sua escolha no nível 1.' },
      { name: 'Visão no Escuro ou Perícia', description: 'Você escolhe entre visão no escuro de 18 metros ou proficiência em uma perícia à sua escolha.' }
    ]
  },

  // ==================== REGRAS CLÁSSICAS DE 2014 (Player's Handbook 2014) ====================
  {
    id: 'humano_2014',
    name: 'Humano Padrão (2014)',
    nameEn: 'Human (Standard 2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Os humanos são os mais adaptáveis e ambiciosos entre as raças comuns.',
    abilityBonus: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    traits: [
      { name: 'Idiomas Extras', description: 'Fala Comum e mais um idioma à escolha.' }
    ]
  },
  {
    id: 'humano_variante_2014',
    name: 'Humano Variante (2014)',
    nameEn: 'Variant Human (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Ganha +1 em dois atributos, 1 perícia adicional e 1 Talento à sua escolha no 1º nível.',
    abilityBonus: { type: 'choice_2', amount: 1 },
    freeFeat: true,
    freeSkill: 1,
    traits: [
      { name: 'Talento Inicial de Nível 1', description: 'Ganha um talento à sua escolha no nível 1.' },
      { name: 'Perícia Extra', description: 'Proficiência em uma perícia à sua escolha.' }
    ]
  },
  {
    id: 'elfo_2014',
    name: 'Elfo Clássico (2014)',
    nameEn: 'Elf (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Povo mágico e longevo com sentidos sobrenaturais e graça élfica.',
    abilityBonus: { dex: 2 },
    subraces: [
      { id: 'alto_elfo_2014', name: 'Alto Elfo (+1 INT, Truque de Mago)', abilityBonus: { int: 1 } },
      { id: 'elfo_floresta_2014', name: 'Elfo da Floresta (+1 SAB, Vel 10,5m)', speedBonus: 1.5, abilityBonus: { wis: 1 } },
      { id: 'drow_2014', name: 'Drow (+1 CAR, Magia Drow, Visão 36m)', abilityBonus: { cha: 1 } },
      { id: 'eladrin_2014', name: 'Eladrin (Passo Feérico das Estações)', abilityBonus: { cha: 1 } },
      { id: 'shadar_kai', name: 'Shadar-kai (Teleporte com Resistência a Dano)', abilityBonus: { con: 1 } }
    ],
    traits: [
      { name: 'Sentidos Aguçados', description: 'Proficiência em Percepção.' },
      { name: 'Ancestralidade Feérica', description: 'Vantagem contra encantamentos e imune a sono mágico.' },
      { name: 'Transe', description: 'Descanso longo em apenas 4 horas de meditação.' }
    ]
  },
  {
    id: 'anao_2014',
    name: 'Anão Clássico (2014)',
    nameEn: 'Dwarf (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 7.5,
    size: 'Médio',
    description: 'Resistentes, fortes e inabaláveis montanheses e ferreiros.',
    abilityBonus: { con: 2 },
    subraces: [
      { id: 'anao_colina_2014', name: 'Anão da Colina (+1 SAB, +1 PV por nível)', abilityBonus: { wis: 1 }, hpBonusPerLevel: 1 },
      { id: 'anao_montanha_2014', name: 'Anão da Montanha (+2 FOR, Armaduras Médias)', abilityBonus: { str: 2 } },
      { id: 'duergar_2014', name: 'Duergar / Anão Cinzento (+1 FOR, Aumento de Tamanho)', abilityBonus: { str: 1 } }
    ],
    traits: [
      { name: 'Visão no Escuro', description: 'Enxerga no escuro a até 18 metros.' },
      { name: 'Resiliência Anã', description: 'Vantagem contra veneno e resistência a dano de veneno.' }
    ]
  },
  {
    id: 'halfling_2014',
    name: 'Halfling Clássico (2014)',
    nameEn: 'Halfling (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 7.5,
    size: 'Pequeno',
    description: 'Pequeninos ágeis, afortunados e amigáveis.',
    abilityBonus: { dex: 2 },
    subraces: [
      { id: 'halfling_pes_leves_2014', name: 'Pés-Leves (+1 CAR, Furtividade Natural)', abilityBonus: { cha: 1 } },
      { id: 'halfling_robusto_2014', name: 'Robusto (+1 CON, Resistência a Veneno)', abilityBonus: { con: 1 } },
      { id: 'halfling_fantasma_2014', name: 'Fantasmagórico (+1 SAB, Telepatia)', abilityBonus: { wis: 1 } }
    ],
    traits: [
      { name: 'Sortudo', description: 'Rola novamente 1s naturais no d20.' },
      { name: 'Bravura', description: 'Vantagem contra medo.' }
    ]
  },
  {
    id: 'draconato_2014',
    name: 'Draconato Clássico (2014 / Fizban)',
    nameEn: 'Dragonborn (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Orgulhosos guerreiros de linhagem de dragões com arma de sopro elemental.',
    abilityBonus: { str: 2, cha: 1 },
    subraces: [
      { id: 'draco_14_preto', name: 'Negro (Ácido - Linha 9m)', element: 'Ácido' },
      { id: 'draco_14_azul', name: 'Azul (Elétrico - Linha 9m)', element: 'Elétrico' },
      { id: 'draco_14_verde', name: 'Verde (Veneno - Cone 4,5m)', element: 'Veneno' },
      { id: 'draco_14_vermelho', name: 'Vermelho (Fogo - Cone 4,5m)', element: 'Fogo' },
      { id: 'draco_14_branco', name: 'Branco (Frio - Cone 4,5m)', element: 'Frio' },
      { id: 'draco_14_latao', name: 'Latão (Fogo - Linha 9m)', element: 'Fogo' },
      { id: 'draco_14_bronze', name: 'Bronze (Elétrico - Linha 9m)', element: 'Elétrico' },
      { id: 'draco_14_cobre', name: 'Cobre (Ácido - Linha 9m)', element: 'Ácido' },
      { id: 'draco_14_ouro', name: 'Ouro (Fogo - Cone 4,5m)', element: 'Fogo' },
      { id: 'draco_14_prata', name: 'Prata (Frio - Cone 4,5m)', element: 'Frio' },
      { id: 'draco_fizban_ametista', name: 'Ametista Gemático (Força - Fizban)', element: 'Força', sourceId: 'ftd' },
      { id: 'draco_fizban_cristal', name: 'Cristal Gemático (Radiante - Fizban)', element: 'Radiante', sourceId: 'ftd' },
      { id: 'draco_fizban_esmeralda', name: 'Esmeralda Gemático (Psíquico - Fizban)', element: 'Psíquico', sourceId: 'ftd' },
      { id: 'draco_fizban_safira', name: 'Safira Gemático (Trovão - Fizban)', element: 'Trovão', sourceId: 'ftd' },
      { id: 'draco_fizban_topazio', name: 'Topázio Gemático (Necrótico - Fizban)', element: 'Necrótico', sourceId: 'ftd' }
    ],
    traits: [
      { name: 'Arma de Sopro', description: 'Ataque de sopro elemental 2d6 (recarrega em descanso curto/longo).' },
      { name: 'Resistência a Dano Elemental', description: 'Resistência ao tipo elemental do seu ancestral dracônico.' }
    ]
  },
  {
    id: 'gnomo_2014',
    name: 'Gnomo Clássico (2014)',
    nameEn: 'Gnome (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 7.5,
    size: 'Pequeno',
    description: 'Pequenos mestres do intelecto, inventividade e ilusão.',
    abilityBonus: { int: 2 },
    subraces: [
      { id: 'gnomo_floresta_2014', name: 'Gnomo da Floresta (+1 DES, Ilusões)', abilityBonus: { dex: 1 } },
      { id: 'gnomo_rochas_2014', name: 'Gnomo das Rochas (+1 CON, Engenhocas)', abilityBonus: { con: 1 } },
      { id: 'svirfneblin_2014', name: 'Gnomo das Profundezas (+1 DES, Visão 36m)', abilityBonus: { dex: 1 } }
    ],
    traits: [
      { name: 'Esperteza Gnômica', description: 'Vantagem em salvaguardas de INT, SAB e CAR contra magias.' }
    ]
  },
  {
    id: 'meio_elfo_2014',
    name: 'Meio-Elfo (2014)',
    nameEn: 'Half-Elf (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Caminhando entre dois mundos com carisma elevado e versatilidade.',
    abilityBonus: { cha: 2, type: 'choice_2', amount: 1 },
    freeSkill: 2,
    traits: [
      { name: 'Versatilidade em Perícias', description: 'Proficiência em duas perícias à sua escolha.' },
      { name: 'Ancestralidade Feérica', description: 'Vantagem contra encantamentos e imune a sono mágico.' },
      { name: 'Visão no Escuro', description: '18 metros de visão no escuro.' }
    ]
  },
  {
    id: 'meio_orc_2014',
    name: 'Meio-Orc (2014)',
    nameEn: 'Half-Orc (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Ferozes e resilientes combatentes que se recusam a tombar em batalha.',
    abilityBonus: { str: 2, con: 1 },
    traits: [
      { name: 'Resistência Implacável', description: 'Cai para 1 PV em vez de 0 PV uma vez por descanso longo.' },
      { name: 'Ataques Selvagens', description: 'Rola 1 dado de dano adicional em acertos críticos corpo a corpo.' },
      { name: 'Ameaçador', description: 'Proficiência na perícia Intimidação.' }
    ]
  },
  {
    id: 'tiefling_2014',
    name: 'Tiefling Clássico (2014 / Mordenkainen)',
    nameEn: 'Tiefling (2014)',
    edition: '2014',
    sourceId: 'phb_2014',
    speed: 9,
    size: 'Médio',
    description: 'Herdeiros de pactos planares inferiores com chifres, cauda e magia demoníaca.',
    abilityBonus: { cha: 2, int: 1 },
    subraces: [
      { id: 'tief_asmodeus', name: 'Linhagem de Asmodeus (+1 INT, Fogo)' },
      { id: 'tief_baalzebul', name: 'Linhagem de Baalzebul (+1 INT, Raios)' },
      { id: 'tief_dispater', name: 'Linhagem de Dispater (+1 DES, Furtividade)' },
      { id: 'tief_fierna', name: 'Linhagem de Fierna (+1 SAB, Persuasão)' },
      { id: 'tief_glasya', name: 'Linhagem de Glasya (+1 DES, Ilusões)' },
      { id: 'tief_levistus', name: 'Linhagem de Levistus (+1 CON, Gelo)' },
      { id: 'tief_mammon', name: 'Linhagem de Mammon (+1 INT, Ouro)' },
      { id: 'tief_mephisto', name: 'Linhagem de Mephistopheles (+1 INT, Chamas)' },
      { id: 'tief_zariel', name: 'Linhagem de Zariel (+1 FOR, Smite Marcial)' }
    ],
    traits: [
      { name: 'Resistência Infernal', description: 'Resistência a dano de fogo.' },
      { name: 'Visão no Escuro', description: '18 metros de visão no escuro.' }
    ]
  },
  {
    id: 'genasi_mpmm',
    name: 'Genasi Elemental (MPMM)',
    nameEn: 'Genasi (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Herdeiros dos quatro planos elementais (Ar, Terra, Fogo ou Água).',
    abilityBonus: { type: 'choice_tasha' },
    subraces: [
      { id: 'genasi_ar', name: 'Genasi do Ar (Levitação e Respiração Eterna)' },
      { id: 'genasi_terra', name: 'Genasi da Terra (Caminhar na Terra e Passos sem Pegadas)' },
      { id: 'genasi_fogo', name: 'Genasi do Fogo (Resistência a Fogo e Produzir Chama)' },
      { id: 'genasi_agua', name: 'Genasi da Água (Anfíbio, Natação e Água Curativa)' }
    ],
    traits: [
      { name: 'Visão no Escuro', description: '18 metros de visão no escuro.' }
    ]
  },
  {
    id: 'tabaxi_mpmm',
    name: 'Tabaxi (MPMM)',
    nameEn: 'Tabaxi (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Humanoides felinos curiosos e extremamente velozes.',
    abilityBonus: { type: 'choice_tasha' },
    traits: [
      { name: 'Agilidade Felina', description: 'Dobra seu deslocamento no seu turno sem gastar ação (recarrega ao ficar parado 1 turno).' },
      { name: 'Garras de Gato', description: 'Deslocamento de escalada de 9m e ataque desarmado cortante 1d6.' },
      { name: 'Talento Felino', description: 'Proficiência nas perícias Furtividade e Percepção.' }
    ]
  },
  {
    id: 'forjado_belico_tcoe',
    name: 'Forjado Bélico (Warforged)',
    nameEn: 'Warforged (Eberron/Tasha)',
    edition: '2014',
    sourceId: 'tcoe',
    speed: 9,
    size: 'Médio',
    description: 'Autômatos vivos forjados em madeira e metal para a guerra.',
    abilityBonus: { con: 2, type: 'choice_1', amount: 1 },
    traits: [
      { name: 'Proteção Integrada', description: 'Você ganha um bônus permanente de +1 na Classe de Armadura (CA).' },
      { name: 'Resiliência Mecânica', description: 'Imune a doenças, não precisa comer, beber ou respirar, e vantagem contra venenos.' },
      { name: 'Repouso da Sentinela', description: 'Não precisa dormir; descansa longo em 6 horas de inatividade alerta.' }
    ]
  },
  {
    id: 'tortle_mpmm',
    name: 'Tartaruga (Tortle - MPMM)',
    nameEn: 'Tortle (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Répteis quelônios nômades protegidos por um casco natural impenetrável.',
    abilityBonus: { type: 'choice_tasha' },
    traits: [
      { name: 'Casco Natural (CA 17)', description: 'Sua carapaça concede CA básica fixa de 17. Não pode usar armadura, mas pode usar escudo (+2 CA).' },
      { name: 'Recolher-se ao Casco', description: 'Ação para se recolher: ganha +4 na CA e vantagem em salvaguardas de Força e Constituição.' }
    ]
  },
  {
    id: 'changeling_mpmm',
    name: 'Transmorfo (Changeling - MPMM)',
    nameEn: 'Changeling (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Mestres da ilusão física capazes de alterar sua forma corporal e voz à vontade.',
    abilityBonus: { type: 'choice_tasha' },
    freeSkill: 2,
    traits: [
      { name: 'Mudar de Forma', description: 'Como ação, pode alterar completamente sua aparência e voz para a de qualquer humanoide.' },
      { name: 'Instintos de Transmorfo', description: 'Proficiência em duas perícias entre Enganação, Intuição, Intimidação ou Persuasão.' }
    ]
  },
  {
    id: 'fada_mpmm',
    name: 'Fada (Fairy - MPMM)',
    nameEn: 'Fairy (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Pequeno',
    description: 'Criaturas de Faerie com asas translúcidas que empunham magia encantadora.',
    abilityBonus: { type: 'choice_tasha' },
    traits: [
      { name: 'Voo Feérico', description: 'Deslocamento de voo de 9 metros enquanto não estiver usando armadura média ou pesada.' },
      { name: 'Magia de Fada', description: 'Conhece Artifício de Druida. 3º nível: Fogo das Fadas. 5º nível: Aumentar/Reduzir.' }
    ]
  },
  {
    id: 'harengon_mpmm',
    name: 'Harengon / Povo-Coelho (MPMM)',
    nameEn: 'Harengon (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio ou Pequeno',
    description: 'Espíritos leporídeos ágeis e afortunados com reflexos prodigiosos.',
    abilityBonus: { type: 'choice_tasha' },
    traits: [
      { name: 'Gatilho de Lebre', description: 'Você adiciona seu bônus de proficiência nas suas rolagens de Iniciativa!' },
      { name: 'Salto de Coelho', description: 'Ação bônus para saltar até 5 × bônus de proficiência metros sem provocar ataques de oportunidade.' },
      { name: 'Sentidos de Presa', description: 'Proficiência na perícia Percepção.' }
    ]
  },
  {
    id: 'firbolg_mpmm',
    name: 'Firbolg (MPMM)',
    nameEn: 'Firbolg (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio',
    description: 'Guardiões gigantescos e tímidos das florestas que se camuflam magicamente.',
    abilityBonus: { type: 'choice_tasha' },
    traits: [
      { name: 'Passo Oculto', description: 'Ação bônus para ficar magicamente invisível até o início do seu próximo turno.' },
      { name: 'Fala de Fera e Folha', description: 'Pode se comunicar de forma simples com bestas e plantas.' },
      { name: 'Corpulento', description: 'Conta como Grande para peso de carga.' }
    ]
  },
  {
    id: 'shifter_mpmm',
    name: 'Shifter / Licantropo Menor (MPMM)',
    nameEn: 'Shifter (MPMM)',
    edition: '2014',
    sourceId: 'mpmm',
    speed: 9,
    size: 'Médio',
    description: 'Descendentes de licantropos capazes de despertar sua natureza bestial temporariamente.',
    abilityBonus: { type: 'choice_tasha' },
    subraces: [
      { id: 'shifter_beasthide', name: 'Pele de Fera (+1d6 PV temporários e +1 CA ao transformar)' },
      { id: 'shifter_longtooth', name: 'Dente Longo (Ataque de mordida como ação bônus)' },
      { id: 'shifter_swiftstride', name: 'Passo Ligeiro (+3m de velocidade e reação de recuo)' },
      { id: 'shifter_wildhunt', name: 'Caça Selvagem (Vantagem em Sabedoria e inimigos não têm vantagem)' }
    ],
    traits: [
      { name: 'Transformação Bestial', description: 'Ação bônus para manifestar sua forma bestial por 1 minuto, ganhando PV temporários e bônus da sub-raça.' }
    ]
  }
];

export function getRaceById(id) {
  return RACES.find(r => r.id === id);
}
