/**
 * Classes Oficiais de D&D 5e e 5.5 (2024)
 * Referenciado de dnd5e.wikidot.com
 */

export const CLASSES = [
  {
    id: 'guerreiro',
    name: 'Guerreiro',
    nameEn: 'Fighter',
    hitDie: 10,
    hitDieAvg: 6,
    primaryStats: ['FOR', 'DES'],
    savingThrows: ['FOR', 'CON'],
    skillChoices: { count: 2, options: ['acrobacia', 'adestrar_animais', 'atletismo', 'historia', 'intimidacao', 'intuicao', 'percepcao', 'sobrevivencia'] },
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 6, 8, 12, 14, 16, 19],
    casterType: 'none', // pode se tornar 'third' com Cavaleiro Arcano
    multiclassReq: {
      description: 'FOR 13 ou DES 13',
      check: (stats) => stats.str >= 13 || stats.dex >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias', 'Escudos'],
      weapons: ['Armas simples', 'Armas marciais'],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'armor_choice',
        label: 'Armadura Inicial',
        options: [
          { id: 'cota_malha', name: 'Cota de Malha (Pesada, CA 16)' },
          { id: 'couro_arco', name: 'Armadura de Couro Batido + Arco Longo e 20 Flechas' }
        ]
      },
      {
        id: 'weapon_choice',
        label: 'Armas Marciais',
        options: [
          { id: 'marcial_escudo', name: 'Uma arma marcial (ex: Espada Longa) e um Escudo (+2 CA)' },
          { id: 'duas_marciais', name: 'Duas armas marciais (ex: Espadão e Machado Grande)' }
        ]
      },
      {
        id: 'ranged_choice',
        label: 'Arma Secundária',
        options: [
          { id: 'besta_leve', name: 'Besta leve e 20 virotes' },
          { id: 'duas_machadinhas', name: 'Duas machadinhas de arremesso' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote de Equipamento',
        options: [
          { id: 'pacote_masmorra', name: 'Pacote de Masmorra' },
          { id: 'pacote_explorador', name: 'Pacote de Explorador' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Estilo de Luta', description: 'Você adota um estilo de combate particular (Arquearia, Defesa, Duelo, Luta com Duas Armas, etc.).' },
        { name: 'Retomar o Fôlego (Second Wind)', description: 'Você possui um poço limitado de vigor que pode usar para se proteger do perigo. Ação bônus para recuperar 1d10 + nível de guerreiro PV.' },
        { name: 'Maestria com Armas (Regra 2024)', description: 'No D&D 2024, você desbloqueia propriedades de Maestria em 3 tipos de armas (Tropear, Empurrar, Raspar, etc.).', source: 'phb_2024' }
      ],
      2: [
        { name: 'Surto de Ação (Action Surge)', description: 'Você pode ultrapassar seus limites normais. No seu turno, pode realizar uma ação adicional além da sua ação normal (1x descanso curto/longo).' },
        { name: 'Movimento Tático (Regra 2024)', description: 'Ao usar Retomar o Fôlego, você pode se mover até metade do seu deslocamento sem provocar ataques de oportunidade.', source: 'phb_2024' }
      ],
      3: [
        { name: 'Arquétipo Marcial (Subclasse)', description: 'Você escolhe um arquétipo que molda seu estilo de combate marcial (ex: Campeão, Mestre da Batalha, Cavaleiro Arcano).' }
      ],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente um atributo em +2, dois atributos em +1, ou escolha um Talento.' }],
      5: [{ name: 'Ataque Extra (Extra Attack)', description: 'Você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque no seu turno.' }],
      6: [{ name: 'Aumento no Valor de Habilidade Adicional (ASI Guerreiro)', description: 'Guerreiros ganham um aumento de atributo / talento extra no 6º nível.' }],
      7: [{ name: 'Característica de Subclasse', description: 'Benefício concedido pelo seu Arquétipo Marcial escolhido.' }],
      8: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente um atributo em +2, dois atributos em +1, ou escolha um Talento.' }],
      9: [{ name: 'Indomável (Indomitable)', description: 'Você pode rolar novamente uma salvaguarda que tenha falhado (em 2024, adiciona seu nível de guerreiro à nova rolagem!).' }],
      10: [{ name: 'Característica de Subclasse', description: 'Benefício concedido pelo seu Arquétipo Marcial.' }],
      11: [{ name: 'Ataque Extra Aprimorado (3 ataques)', description: 'Você pode atacar três vezes sempre que realizar a ação de Ataque no seu turno.' }],
      12: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      13: [{ name: 'Indomável (2 usos)', description: 'Você pode usar Indomável duas vezes entre descansos longos.' }],
      14: [{ name: 'Aumento no Valor de Habilidade Adicional (ASI Guerreiro)', description: 'Guerreiros ganham outro aumento de atributo / talento extra no 14º nível.' }],
      15: [{ name: 'Característica de Subclasse', description: 'Benefício concedido pelo seu Arquétipo Marcial.' }],
      16: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      17: [{ name: 'Surto de Ação (2 usos) & Indomável (3 usos)', description: 'Você ganha um segundo uso de Surto de Ação por descanso.' }],
      18: [{ name: 'Característica de Subclasse', description: 'Benefício máximo do seu Arquétipo Marcial.' }],
      19: [
        { name: 'Aumento no Valor de Habilidade (ASI)', description: 'Aumente um atributo em +2 ou dois atributos em +1.', source: 'phb_2014' },
        { name: 'Aumento no Valor de Habilidade (ASI) ou Talento Épico (Regra 2024)', description: 'No D&D 2024, você ganha acesso a Dádivas Épicas (Epic Boons) ou Aumento de Atributo.', source: 'phb_2024' }
      ],
      20: [{ name: 'Ataque Extra Supremo (4 ataques)', description: 'Você ataca quatro vezes sempre que realiza a ação de Ataque no seu turno!' }]
    }
  },
  {
    id: 'mago',
    name: 'Mago',
    nameEn: 'Wizard',
    hitDie: 6,
    hitDieAvg: 4,
    primaryStats: ['INT'],
    savingThrows: ['INT', 'SAB'],
    skillChoices: { count: 2, options: ['arcanismo', 'historia', 'intuicao', 'investigacao', 'medicina', 'religiao'] },
    subclassLevel2014: 2,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'full',
    spellcastingStat: 'INT',
    multiclassReq: {
      description: 'INT 13',
      check: (stats) => stats.int >= 13
    },
    multiclassProficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Inicial',
        options: [
          { id: 'bordao', name: 'Bordão (Dano 1d6 contusão, versátil 1d8)' },
          { id: 'adaga', name: 'Adaga (Dano 1d4 perfurante, acuidade, leve)' }
        ]
      },
      {
        id: 'focus_choice',
        label: 'Foco Arcano',
        options: [
          { id: 'foco_arcano', name: 'Orbe, Varinha ou Cajado (Foco Arcano)' },
          { id: 'bolsa_componentes', name: 'Bolsa de Componentes de Magia' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote de Itens',
        options: [
          { id: 'pacote_estudioso', name: 'Pacote de Estudioso + Grimório Arcano' },
          { id: 'pacote_explorador', name: 'Pacote de Explorador + Grimório Arcano' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Conjuração Ritual & Grimório', description: 'Você possui um grimório mágico. Pode conjurar magias rituais preparadas ou gravadas sem gastar espaços de magia.' },
        { name: 'Recuperação Arcana', description: 'Uma vez por dia após descanso curto, recupera espaços de magia somando metade do seu nível de mago arredondado para cima.' }
      ],
      2: [
        { name: 'Tradição Arcana (Subclasse 2014)', description: 'Escolha da escola arcana (Evocação, Abjuração, etc.). Em 2024, esta escolha ocorre no 3º nível.', source: 'phb_2014' }
      ],
      3: [
        { name: 'Tradição Arcana (Subclasse 2024)', description: 'Você escolhe sua Ordem/Tradição Arcana.', source: 'phb_2024' }
      ],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [{ name: 'Acesso a Magias de 3º Círculo', description: 'Poderosas magias como Bola de Fogo e Contra-mágica tornam-se disponíveis.' }],
      6: [{ name: 'Característica de Tradição Arcana', description: 'Habilidade da sua escola de magia.' }],
      8: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      10: [{ name: 'Característica de Tradição Arcana', description: 'Habilidade da sua escola de magia.' }],
      12: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      14: [{ name: 'Característica de Tradição Arcana', description: 'Poder máximo da sua Tradição Arcana.' }],
      16: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      18: [{ name: 'Domínio de Magia (Spell Mastery)', description: 'Escolha uma magia de 1º e uma de 2º círculo para conjurar à vontade sem gastar espaços.' }],
      19: [
        { name: 'Aumento no Valor de Habilidade (ASI)', description: 'Aumente atributos ou escolha um Talento.', source: 'phb_2014' },
        { name: 'Aumento de Atributo ou Dádiva Épica (2024)', description: 'Bônus épico de final de jogo no D&D 2024.', source: 'phb_2024' }
      ],
      20: [{ name: 'Assinatura Mágica (Signature Spells)', description: 'Duas magias de 3º círculo preparadas que podem ser lançadas 1x ao dia sem gastar espaços.' }]
    }
  },
  {
    id: 'clerigo',
    name: 'Clérigo',
    nameEn: 'Cleric',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['SAB'],
    savingThrows: ['SAB', 'CAR'],
    skillChoices: { count: 2, options: ['historia', 'intuicao', 'medicina', 'persuasao', 'religiao'] },
    subclassLevel2014: 1,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'full',
    spellcastingStat: 'SAB',
    multiclassReq: {
      description: 'SAB 13',
      check: (stats) => stats.wis >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias', 'Escudos'],
      weapons: [],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Inicial',
        options: [
          { id: 'maca', name: 'Maça de combate' },
          { id: 'martelo_guerra', name: 'Martelo de Guerra (se proficiente)' }
        ]
      },
      {
        id: 'armor_choice',
        label: 'Armadura Inicial',
        options: [
          { id: 'brunea', name: 'Brúnea (Armadura Média CA 14 + DES máx 2)' },
          { id: 'couro_cota', name: 'Cota de Malha (Armadura Pesada CA 16, se o domínio conceder)' }
        ]
      },
      {
        id: 'ranged_choice',
        label: 'Arma Secundária',
        options: [
          { id: 'besta_leve', name: 'Besta leve e 20 virotes' },
          { id: 'arma_simples', name: 'Qualquer arma simples' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Símbolo',
        options: [
          { id: 'pacote_sacerdote', name: 'Pacote de Sacerdote + Símbolo Sagrado' },
          { id: 'pacote_explorador', name: 'Pacote de Explorador + Símbolo Sagrado' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Conjuração Divina', description: 'Você canaliza a magia da sua divindade através de oração e devoção.' },
        { name: 'Domínio Divino (2014)', description: 'Escolha do seu Domínio da divindade (Vida, Luz, Guerra, etc.). Em 2024 ocorre no 3º nível.', source: 'phb_2014' },
        { name: 'Ordem Sagrada (Regra 2024)', description: 'Escolha no 1º nível: Protetor (armaduras pesadas e armas marciais) ou Erudito (bônus em perícias divinas).', source: 'phb_2024' }
      ],
      2: [
        { name: 'Canalizar Divindade (Channel Divinity)', description: 'Expulsar Mortos-Vivos e efeitos divinos adicionais (1x descanso curto/longo).' }
      ],
      3: [
        { name: 'Domínio Divino (Subclasse 2024)', description: 'Escolha da sua subclasse divina.', source: 'phb_2024' }
      ],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [{ name: 'Destruir Mortos-Vivos (CR 1/2)', description: 'Mortos-vivos fracos são instantaneamente destruídos quando expulsos.' }],
      6: [{ name: 'Canalizar Divindade (2 usos)', description: 'Dois usos de Canalizar Divindade por descanso.' }],
      8: [{ name: 'Golpe Divino / Conjuração Poderosa', description: 'Dano radiante extra em ataques com arma ou adiciona modificador de Sabedoria a truques.' }],
      10: [{ name: 'Intervenção Divina', description: 'Você pode suplicar diretamente à sua divindade por auxílio milagroso em situações de perigo extremo.' }],
      12: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      14: [{ name: 'Destruir Mortos-Vivos Aprimorado (CR 3)', description: 'Destrói mortos-vivos com ND até 3.' }],
      16: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      17: [{ name: 'Característica Suprema de Domínio', description: 'Habilidade máxima concedida pela subclasse.' }],
      18: [{ name: 'Canalizar Divindade (3 usos)', description: 'Três usos entre descansos.' }],
      19: [{ name: 'Aumento no Valor de Habilidade ou Dádiva Épica', description: 'Aprimoramento de final de jogo.' }],
      20: [{ name: 'Intervenção Divina Garantida', description: 'Sua súplica para a divindade tem sucesso automático sem necessidade de rolagem percentual.' }]
    }
  },
  {
    id: 'ladino',
    name: 'Ladino',
    nameEn: 'Rogue',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['DES'],
    savingThrows: ['DES', 'INT'],
    skillChoices: { count: 4, options: ['acrobacia', 'atletismo', 'atuacao', 'enganacao', 'furtividade', 'intimidacao', 'intuicao', 'investigacao', 'percepcao', 'persuasao', 'prestidigitacao'] },
    expertiseCount: 2,
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 10, 12, 16, 19],
    casterType: 'none', // pode se tornar 'third' com Trapaceiro Arcano
    multiclassReq: {
      description: 'DES 13',
      check: (stats) => stats.dex >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves'],
      weapons: [],
      tools: ['Ferramentas de ladrão'],
      skillsCount: 1 // Ladino ganha 1 perícia da lista ao fazer multiclasse!
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Principal',
        options: [
          { id: 'rapiada', name: 'Rapieira (Dano 1d8 perfurante, acuidade)' },
          { id: 'espada_curta', name: 'Espada Curta (Dano 1d6 perfurante, acuidade, leve)' }
        ]
      },
      {
        id: 'ranged_choice',
        label: 'Arma Secundária',
        options: [
          { id: 'arco_curto', name: 'Arco Curto e aljava com 20 flechas' },
          { id: 'espada_curta_extra', name: 'Espada Curta adicional (para lutar com duas armas)' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Ferramentas',
        options: [
          { id: 'ladrao_assaltante', name: 'Pacote de Assaltante + Ferramentas de Ladrão + Armadura de Couro + 2 Adagas' },
          { id: 'ladrao_explorador', name: 'Pacote de Explorador + Ferramentas de Ladrão + Armadura de Couro + 2 Adagas' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Especialização (Expertise)', description: 'Dobre seu bônus de proficiência em 2 perícias à escolha ou ferramentas de ladrão.' },
        { name: 'Ataque Furtivo (Sneak Attack 1d6)', description: 'Causa dano extra a cada turno ao acertar com arma de acuidade ou à distância com vantagem ou aliado adjacente.' },
        { name: 'Gíria de Ladrão (Thieves\' Cant)', description: 'Um dialeto secreto de sinais, gírias e símbolos para transmitir mensagens ocultas.' },
        { name: 'Maestria com Armas (2024)', description: 'Desbloqueia propriedades de Maestria em 2 armas (Vex, Nick, etc.).', source: 'phb_2024' }
      ],
      2: [
        { name: 'Ação Astuta (Cunning Action)', description: 'Ação bônus em cada turno para Disparar, Desengajar ou Esconder-se.' }
      ],
      3: [
        { name: 'Arquétipo Ladino (Subclasse)', description: 'Escolha de subclasse (ex: Assassino, Ladrão, Trapaceiro Arcano, Swashbuckler).' },
        { name: 'Ataque Furtivo (2d6)', description: 'Dano furtivo escala para 2d6.' }
      ],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [
        { name: 'Esquiva Sobrenatural (Uncanny Dodge)', description: 'Reação para reduzir pela metade o dano de um ataque que o acertar de um atacante visível.' },
        { name: 'Ataque Furtivo (3d6)', description: 'Dano furtivo escala para 3d6.' }
      ],
      6: [{ name: 'Especialização Adicional', description: 'Dobre a proficiência em mais 2 perícias ou ferramentas.' }],
      7: [
        { name: 'Evasão (Evasion)', description: 'Ao ser alvo de efeitos com salvaguarda de Destreza (como Bola de Fogo), não sofre dano em sucesso e metade em falha.' },
        { name: 'Ataque Furtivo (4d6)', description: 'Dano furtivo escala para 4d6.' }
      ],
      8: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      9: [
        { name: 'Característica de Subclasse', description: 'Habilidade do arquétipo ladino.' },
        { name: 'Ataque Furtivo (5d6)', description: 'Dano furtivo escala para 5d6.' }
      ],
      10: [{ name: 'Aumento no Valor de Habilidade Extra (ASI Ladino)', description: 'Ladinos ganham um aumento de atributo / talento extra no 10º nível.' }],
      11: [
        { name: 'Talento Confiável (Reliable Talent)', description: 'Qualquer rolagem de perícia em que seja proficiente com resultado 9 ou menor no d20 é tratada como um 10!' },
        { name: 'Ataque Furtivo (6d6)', description: 'Dano furtivo escala para 6d6.' }
      ],
      12: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      13: [{ name: 'Ataque Furtivo (7d6) & Subclasse', description: 'Dano furtivo 7d6 e habilidade de subclasse.' }],
      14: [{ name: 'Sentido Cego (Blindsense)', description: 'Percebe a localização exata de qualquer criatura oculta a até 9 metros.' }],
      15: [
        { name: 'Mente Escorregadia (Slippery Mind)', description: 'Ganha proficiência em salvaguardas de Sabedoria (e Carisma nas regras revisadas).' },
        { name: 'Ataque Furtivo (8d6)', description: 'Dano furtivo escala para 8d6.' }
      ],
      16: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      17: [{ name: 'Característica Suprema de Subclasse & Ataque Furtivo (9d6)', description: 'Habilidade máxima de subclasse e 9d6 de dano furtivo.' }],
      18: [{ name: 'Elusivo (Elusive)', description: 'Nenhum ataque contra você pode ter vantagem enquanto não estiver incapacitado.' }],
      19: [
        { name: 'Aumento no Valor de Habilidade & Ataque Furtivo (10d6)', description: 'Dano furtivo chega a 10d6!', source: 'phb_2014' },
        { name: 'Aumento de Atributo ou Dádiva Épica & Ataque Furtivo (10d6)', description: 'Dano furtivo chega a 10d6 e acesso a Dádivas Épicas em 2024.', source: 'phb_2024' }
      ],
      20: [{ name: 'Golpe de Sorte (Stroke of Luck)', description: 'Se errar um ataque, pode transformá-lo em acerto. Se falhar num teste de habilidade, trate como um 20 natural.' }]
    }
  },
  {
    id: 'barbaro',
    name: 'Bárbaro',
    nameEn: 'Barbarian',
    hitDie: 12,
    hitDieAvg: 7,
    primaryStats: ['FOR', 'CON'],
    savingThrows: ['FOR', 'CON'],
    skillChoices: { count: 2, options: ['adestrar_animais', 'atletismo', 'intimidacao', 'natureza', 'percepcao', 'sobrevivencia'] },
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'none',
    multiclassReq: {
      description: 'FOR 13',
      check: (stats) => stats.str >= 13
    },
    multiclassProficiencies: {
      armor: ['Escudos'],
      weapons: ['Armas marciais', 'Armas simples'],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Principal',
        options: [
          { id: 'machado_grande', name: 'Machado Grande (Dano 1d12 cortante, pesada, duas mãos)' },
          { id: 'espadão', name: 'Espadão (Dano 2d6 cortante, pesada, duas mãos)' }
        ]
      },
      {
        id: 'secondary_choice',
        label: 'Armas Secundárias',
        options: [
          { id: 'duas_machadinhas', name: 'Duas machadinhas' },
          { id: 'arma_simples', name: 'Qualquer arma simples' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote de Aventureiro',
        options: [
          { id: 'pacote_explorador', name: 'Pacote de Explorador e 4 azagaias' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Fúria (Rage)', description: 'Ação bônus para entrar em fúria: vantagem em testes e salvaguardas de Força, dano de fúria bônus (+2 a +4) e resistência a corte, perfuração e contusão.' },
        { name: 'Defesa Sem Armadura (Unarmored Defense)', description: 'Quando não estiver vestindo armadura, sua CA é igual a 10 + Modificador de DES + Modificador de CON. Você pode usar escudo.' },
        { name: 'Maestria com Armas (Regra 2024)', description: 'No D&D 2024, você desbloqueia propriedades de Maestria em 2 armas à sua escolha.', source: 'phb_2024' }
      ],
      2: [
        { name: 'Ataque Descuidado (Reckless Attack)', description: 'Vantagem em ataques com Força no seu turno, mas ataques contra você ganham vantagem até seu próximo turno.' },
        { name: 'Sentido de Perigo (Danger Sense)', description: 'Vantagem em salvaguardas de Destreza contra armadilhas e magias visíveis.' }
      ],
      3: [{ name: 'Caminho Primitivo (Subclasse)', description: 'Escolha de subclasse (ex: Furioso, Guerreiro Totêmico, Zelo Primitivo).' }],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [
        { name: 'Ataque Extra', description: 'Pode atacar duas vezes na ação de Ataque.' },
        { name: 'Movimento Rápido', description: 'Seu deslocamento aumenta em +3 metros enquanto não vestir armadura pesada.' }
      ],
      7: [{ name: 'Instinto Selvagem', description: 'Vantagem em rolagens de Iniciativa e não pode ser surpreendido.' }],
      8: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      9: [{ name: 'Crítico Brutal (Brutal Critical)', description: 'Rola 1 dado de dano adicional em acertos críticos com armas corpo a corpo.' }],
      12: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      15: [{ name: 'Fúria Persistente', description: 'Sua fúria só se encerra prematuramente se você cair inconsciente ou decidir encerrá-la.' }],
      16: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      18: [{ name: 'Poder Indômito', description: 'Se o total do seu teste de Força for menor que seu valor de Força, você pode usar seu valor de Força no lugar.' }],
      19: [{ name: 'Aumento no Valor de Habilidade ou Dádiva Épica', description: 'Aprimoramento de final de jogo.' }],
      20: [{ name: 'Campeão Primitivo (Primal Champion)', description: 'Seus valores de Força e Constituição aumentam em +4 cada! O valor máximo para esses atributos agora é 24.' }]
    }
  },
  {
    id: 'paladino',
    name: 'Paladino',
    nameEn: 'Paladin',
    hitDie: 10,
    hitDieAvg: 6,
    primaryStats: ['FOR', 'CAR'],
    savingThrows: ['SAB', 'CAR'],
    skillChoices: { count: 2, options: ['atletismo', 'intimidacao', 'intuicao', 'medicina', 'persuasao', 'religiao'] },
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'half',
    spellcastingStat: 'CAR',
    multiclassReq: {
      description: 'FOR 13 e CAR 13',
      check: (stats) => stats.str >= 13 && stats.cha >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias', 'Escudos'],
      weapons: ['Armas simples', 'Armas marciais'],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Principal',
        options: [
          { id: 'marcial_escudo', name: 'Arma marcial (ex: Espada Longa) e Escudo' },
          { id: 'duas_marciais', name: 'Duas armas marciais (ex: Espadão e Martelo)' }
        ]
      },
      {
        id: 'ranged_choice',
        label: 'Secundária',
        options: [
          { id: 'azagaias', name: 'Cinco azagaias' },
          { id: 'arma_simples', name: 'Qualquer arma corpo a corpo simples' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Armadura',
        options: [
          { id: 'cota_sacerdote', name: 'Cota de Malha + Pacote de Sacerdote + Símbolo Sagrado' },
          { id: 'cota_explorador', name: 'Cota de Malha + Pacote de Explorador + Símbolo Sagrado' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Sentido Divino (Divine Sense)', description: 'Detecta a localização de celestiais, corruptores e mortos-vivos próximos.' },
        { name: 'Cura Pelas Mãos (Lay on Hands)', description: 'Reserva de cura sagrada igual a 5 × nível de paladino. Pode também curar venenos e doenças.' },
        { name: 'Maestria com Armas (Regra 2024)', description: 'No D&D 2024, você desbloqueia propriedades de Maestria em 2 armas à sua escolha.', source: 'phb_2024' }
      ],
      2: [
        { name: 'Destruição Divina (Divine Smite)', description: 'Ao acertar um golpe, gasta espaço de magia para causar +2d8 de dano radiante (ou +1d8 contra mortos-vivos/fiends), escalando por nível de espaço.' },
        { name: 'Estilo de Luta & Conjuração Paladina', description: 'Estilo marcial (Defesa, Duelo, etc.) e acesso a magias preparadas com base em Carisma.' }
      ],
      3: [{ name: 'Juramento Sagrado (Subclasse)', description: 'Escolha de juramento sagrado (Devoção, Anciões, Vingança, Conquista, Quebrador de Juramento).' }],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [{ name: 'Ataque Extra', description: 'Dois ataques ao realizar a ação de Ataque.' }],
      6: [{ name: 'Aura de Proteção (Aura of Protection)', description: 'Você e aliados a até 3 metros somam seu Modificador de Carisma em TODAS as salvaguardas!' }],
      7: [{ name: 'Característica de Juramento (Aura)', description: 'Aura sagrada exclusiva do seu Juramento.' }],
      8: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      10: [{ name: 'Aura de Coragem', description: 'Você e aliados na aura não podem ser amedrontados.' }],
      11: [{ name: 'Destruição Divina Aprimorada', description: 'Todos os seus ataques com arma causam passivamente +1d8 de dano radiante adicional!' }],
      14: [{ name: 'Toque Purificador', description: 'Ação para encerrar magias ativas em você ou aliado (usos = CAR mod).' }],
      18: [{ name: 'Aumento de Alcance das Auras', description: 'Suas auras agora se estendem para 9 metros de raio (30 pés).' }],
      20: [{ name: 'Campeão Sagrado do Juramento', description: 'Transformação divina épica concedida pelo seu Juramento Sagrado.' }]
    }
  },
  {
    id: 'bardo',
    name: 'Bardo',
    nameEn: 'Bard',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['CAR', 'DES'],
    savingThrows: ['DES', 'CAR'],
    skillChoices: { count: 3, options: 'all' },
    expertiseCount: 2,
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'full',
    spellcastingStat: 'CAR',
    multiclassReq: {
      description: 'CAR 13',
      check: (stats) => stats.cha >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves'],
      weapons: [],
      tools: ['Um instrumento musical'],
      skillsCount: 1
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Principal',
        options: [
          { id: 'rapieira', name: 'Rapieira' },
          { id: 'espada_longa', name: 'Espada Longa' },
          { id: 'arma_simples', name: 'Qualquer arma simples' }
        ]
      },
      {
        id: 'instrument_choice',
        label: 'Instrumento Musical',
        options: [
          { id: 'alaude', name: 'Alaúde' },
          { id: 'flauta', name: 'Flauta ou outro instrumento' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Armadura',
        options: [
          { id: 'bardo_diplomata', name: 'Pacote de Diplomata + Armadura de Couro + Adaga' },
          { id: 'bardo_artista', name: 'Pacote de Artista + Armadura de Couro + Adaga' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Inspiração Bárdica (d6)', description: 'Ação bônus para conceder um dado d6 de inspiração para uma criatura adicionar a testes de d20 (usos = CAR mod).' },
        { name: 'Conjuração Bárdica', description: 'Magias versáteis com foco em encanto, ilusão e suporte usando Carisma.' }
      ],
      2: [
        { name: 'Pau pra Toda Obra (Jack of All Trades)', description: 'Adiciona metade do seu bônus de proficiência em qualquer teste de perícia no qual não seja proficiente.' },
        { name: 'Canção de Descanso (Song of Rest)', description: 'Cura adicional de 1d6 durante descansos curtos para aliados.' }
      ],
      3: [
        { name: 'Colégio Bárdico (Subclasse)', description: 'Escolha de Colégio (Conhecimento, Espadas, Bravura, Glamour, Eloquência).' },
        { name: 'Especialização (Expertise)', description: 'Dobre o bônus de proficiência em duas perícias.' }
      ],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      5: [{ name: 'Fonte de Inspiração (Font of Inspiration)', description: 'Sua Inspiração Bárdica passa a ser d8 e agora recarrega tanto em Descanso Curto quanto Longo!' }],
      6: [{ name: 'Contra-Charme & Habilidade de Colégio', description: 'Vantagem contra ser amedrontado ou enfeitiçado.' }],
      10: [{ name: 'Segredos Mágicos (Magical Secrets)', description: 'Aprenda 2 magias de QUALQUER classe no jogo (de qualquer lista!).' }],
      14: [{ name: 'Segredos Mágicos Adicionais', description: 'Mais 2 magias de qualquer lista de classe.' }],
      18: [{ name: 'Segredos Mágicos Supremos', description: 'Mais 2 magias de qualquer classe (até 9º círculo!).' }],
      20: [{ name: 'Inspiração Superior', description: 'Ao rolar iniciativa sem dados de inspiração restantes, você recupera um uso automaticamente.' }]
    }
  },
  {
    id: 'druida',
    name: 'Druida',
    nameEn: 'Druid',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['SAB', 'CON'],
    savingThrows: ['INT', 'SAB'],
    skillChoices: { count: 2, options: ['adestrar_animais', 'arcanismo', 'intuicao', 'medicina', 'natureza', 'percepcao', 'religiao', 'sobrevivencia'] },
    subclassLevel2014: 2,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'full',
    spellcastingStat: 'SAB',
    multiclassReq: {
      description: 'SAB 13',
      check: (stats) => stats.wis >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias (não-metálicas)', 'Escudos'],
      weapons: [],
      tools: ['Kit de Herbalismo'],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'shield_choice',
        label: 'Escudo e Arma',
        options: [
          { id: 'escudo_cimitarra', name: 'Escudo de madeira e Cimitarra' },
          { id: 'duas_simples', name: 'Duas armas simples corpo a corpo' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Armadura',
        options: [
          { id: 'druida_explorador', name: 'Armadura de Couro + Pacote de Explorador + Foco Druídico' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Druídico & Conjuração Druídica', description: 'Você conhece o idioma secreto druídico e canaliza as forças da natureza.' },
        { name: 'Ordem Primitiva (Regra 2024)', description: 'No D&D 2024, você escolhe entre Guardião (armaduras médias e armas marciais) ou Conjurador (truque extra e bônus em perícias).', source: 'phb_2024' }
      ],
      2: [
        { name: 'Forma Selvagem (Wild Shape)', description: 'Ação para se transformar magicamente em uma besta que já tenha visto (2x descanso curto/longo).' },
        { name: 'Círculo Druídico (Subclasse 2014)', description: 'Escolha de Círculo (da Terra, da Lua, dos Pastos, etc.). Em 2024 é no nível 3.', source: 'phb_2014' }
      ],
      3: [{ name: 'Círculo Druídico (Subclasse 2024)', description: 'Escolha de subclasse druídica.', source: 'phb_2024' }],
      4: [{ name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }],
      18: [{ name: 'Corpo Atemporal & Magia de Fera', description: 'Envelhece 10x mais devagar e pode conjurar magias mesmo em Forma Selvagem!' }],
      20: [{ name: 'Arquidruida (Archdruid)', description: 'Usos infinitos de Forma Selvagem sem limites por descanso!' }]
    }
  },
  {
    id: 'monge',
    name: 'Monge',
    nameEn: 'Monk',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['DES', 'SAB'],
    savingThrows: ['FOR', 'DES'],
    skillChoices: { count: 2, options: ['acrobacia', 'atletismo', 'furtividade', 'historia', 'intuicao', 'religiao'] },
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'none',
    multiclassReq: {
      description: 'DES 13 e SAB 13',
      check: (stats) => stats.dex >= 13 && stats.wis >= 13
    },
    multiclassProficiencies: {
      armor: [],
      weapons: ['Armas simples', 'Espadas curtas'],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Inicial',
        options: [
          { id: 'espada_curta', name: 'Espada Curta' },
          { id: 'bordao', name: 'Bordão' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Armas de Arremesso',
        options: [
          { id: 'monge_masmorra', name: 'Pacote de Masmorra e 10 dardos' },
          { id: 'monge_explorador', name: 'Pacote de Explorador e 10 dardos' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Defesa Sem Armadura (Monge)', description: 'Sua CA é igual a 10 + Modificador de DES + Modificador de SAB enquanto não vestir armadura nem usar escudo.' },
        { name: 'Artes Marciais (Martial Arts 1d4)', description: 'Usa Destreza para ataques desarmados e armas de monge; ataque desarmado adicional como ação bônus.' }
      ],
      2: [
        { name: 'Energia Ki / Foco (Ki Points)', description: 'Pontos de Ki (igual ao nível): Rajada de Golpes (Flurry of Blows), Defesa Paciente (Patient Defense) e Passo do Vento (Step of the Wind).' },
        { name: 'Movimento Sem Armadura (+3m)', description: 'Deslocamento aumentado em +3 metros.' }
      ],
      3: [
        { name: 'Tradição Monástica (Subclasse)', description: 'Escolha de Tradição Monástica (ex: Palma Aberta, Sombras, Quatro Elementos, Mestre Bêbado).' },
        { name: 'Desviar Projéteis (Deflect Missiles)', description: 'Reação para aparar ou pegar projéteis disparados contra você.' }
      ],
      4: [
        { name: 'Queda Suave (Slow Fall)', description: 'Reduz o dano de queda em 5 × nível de monge.' },
        { name: 'Aumento no Valor de Habilidade (ASI) ou Talento', description: 'Aumente atributos ou escolha um Talento.' }
      ],
      5: [
        { name: 'Ataque Extra', description: 'Dois ataques ao atacar.' },
        { name: 'Golpe Atordoante (Stunning Strike)', description: 'Gasta 1 Ki ao acertar para atordoar o alvo até o final do seu próximo turno.' }
      ],
      14: [{ name: 'Alma Diamantina (Diamond Soul)', description: 'Ganha proficiência em TODAS as salvaguardas!' }],
      20: [{ name: 'Perfeição do Eu', description: 'Ao rolar iniciativa sem Ki, recupera 4 pontos de Ki.' }]
    }
  },
  {
    id: 'patrulheiro',
    name: 'Patrulheiro',
    nameEn: 'Ranger',
    hitDie: 10,
    hitDieAvg: 6,
    primaryStats: ['DES', 'SAB'],
    savingThrows: ['FOR', 'DES'],
    skillChoices: { count: 3, options: ['adestrar_animais', 'atletismo', 'furtividade', 'intuicao', 'investigacao', 'natureza', 'percepcao', 'sobrevivencia'] },
    expertiseCount: 1,
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'half',
    spellcastingStat: 'SAB',
    multiclassReq: {
      description: 'DES 13 e SAB 13',
      check: (stats) => stats.dex >= 13 && stats.wis >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias', 'Escudos'],
      weapons: ['Armas simples', 'Armas marciais'],
      tools: [],
      skillsCount: 1
    },
    equipmentChoices: [
      {
        id: 'armor_choice',
        label: 'Armadura Inicial',
        options: [
          { id: 'brunea', name: 'Brúnea (CA 14 + DES máx 2)' },
          { id: 'couro', name: 'Armadura de Couro (CA 11 + DES)' }
        ]
      },
      {
        id: 'weapon_choice',
        label: 'Armas',
        options: [
          { id: 'duas_espadas_curtas', name: 'Duas espadas curtas' },
          { id: 'duas_armas_simples', name: 'Duas armas simples corpo a corpo' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Arco',
        options: [
          { id: 'arco_explorador', name: 'Arco Longo e 20 flechas + Pacote de Explorador' },
          { id: 'arco_masmorra', name: 'Arco Longo e 20 flechas + Pacote de Masmorra' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Inimigo Favorito (2014)', description: 'Vantagem em testes de Sobrevivência para rastrear seus inimigos favoritos e aprende seus idiomas.', source: 'phb_2014' },
        { name: 'Explorador Natural (2014)', description: 'Especialista em navegar pelo seu tipo de terreno favorito (viagem rápida, forragem duplicada).', source: 'phb_2014' },
        { name: 'Inimigo Favorito (Marca do Caçador 2024)', description: 'No D&D 2024, você tem a magia Marca do Caçador sempre preparada e pode lançá-la sem gastar espaços de magia.', source: 'phb_2024' },
        { name: 'Hábil (Deft Explorer - Regra 2024)', description: 'Especialização em 1 perícia e 2 idiomas adicionais no 1º nível.', source: 'phb_2024' },
        { name: 'Maestria com Armas (Regra 2024)', description: 'No D&D 2024, você desbloqueia propriedades de Maestria em 2 armas à sua escolha.', source: 'phb_2024' }
      ],
      2: [
        { name: 'Estilo de Luta & Conjuração de Patrulheiro', description: 'Estilo marcial (Arquearia +2 acerto) e magias da natureza.' }
      ],
      3: [{ name: 'Arquétipo de Patrulheiro (Subclasse)', description: 'Escolha de subclasse (Caçador, Mestre das Bestas, Andarilho do Horizonte, Gloom Stalker).' }],
      5: [{ name: 'Ataque Extra', description: 'Dois ataques ao realizar ação de Ataque.' }]
    }
  },
  {
    id: 'feiticeiro',
    name: 'Feiticeiro',
    nameEn: 'Sorcerer',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['CAR', 'CON'],
    savingThrows: ['CON', 'CAR'],
    skillChoices: { count: 2, options: ['arcanismo', 'enganacao', 'intimidacao', 'intuicao', 'persuasao', 'religiao'] },
    subclassLevel2014: 1,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'full',
    spellcastingStat: 'CAR',
    multiclassReq: {
      description: 'CAR 13',
      check: (stats) => stats.cha >= 13
    },
    multiclassProficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Inicial',
        options: [
          { id: 'besta_leve', name: 'Besta leve e 20 virotes' },
          { id: 'arma_simples', name: 'Qualquer arma simples' }
        ]
      },
      {
        id: 'focus_choice',
        label: 'Foco Arcano',
        options: [
          { id: 'foco_arcano', name: 'Foco Arcano (Cristal, Orbe ou Varinha)' },
          { id: 'bolsa_componentes', name: 'Bolsa de Componentes' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Adagas',
        options: [
          { id: 'feiticeiro_masmorra', name: 'Pacote de Masmorra + 2 Adagas' },
          { id: 'feiticeiro_explorador', name: 'Pacote de Explorador + 2 Adagas' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Origem de Feitiçaria (Subclasse 2014)', description: 'Linhagem Dracônica, Magia Selvagem, Alma Divina, Mente Aberrante, etc. No D&D 2024 ocorre no nível 3.', source: 'phb_2014' },
        { name: 'Feitiçaria Inata (Regra 2024)', description: 'Ação bônus para liberar magia bruta por 1 minuto: vantagem em ataques de magia e CD aumentada em +1.', source: 'phb_2024' }
      ],
      2: [
        { name: 'Fonte de Magia (Pontos de Feitiçaria)', description: 'Pontos de Feitiçaria (Sorcery Points) para converter em espaços de magia e vice-versa.' }
      ],
      3: [
        { name: 'Metamagia (Metamagic)', description: 'Altere suas magias em tempo real: Magia Acelerada, Magia Gêmea, Magia Sutil, etc.' },
        { name: 'Origem de Feitiçaria (Subclasse 2024)', description: 'Escolha de subclasse de feiticeiro.', source: 'phb_2024' }
      ],
      20: [{ name: 'Restauração da Feitiçaria', description: 'Recupera 4 pontos de feitiçaria em qualquer descanso curto.' }]
    }
  },
  {
    id: 'bruxo',
    name: 'Bruxo',
    nameEn: 'Warlock',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['CAR'],
    savingThrows: ['SAB', 'CAR'],
    skillChoices: { count: 2, options: ['arcanismo', 'enganacao', 'historia', 'intimidacao', 'investigacao', 'natureza', 'religiao'] },
    subclassLevel2014: 1,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'pact', // Magia de Pacto independente recarrega em descanso curto!
    spellcastingStat: 'CAR',
    multiclassReq: {
      description: 'CAR 13',
      check: (stats) => stats.cha >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves'],
      weapons: ['Armas simples'],
      tools: [],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Arma Inicial',
        options: [
          { id: 'besta_leve', name: 'Besta leve e 20 virotes' },
          { id: 'arma_simples', name: 'Qualquer arma simples' }
        ]
      },
      {
        id: 'focus_choice',
        label: 'Foco Arcano',
        options: [
          { id: 'foco_arcano', name: 'Foco Arcano' },
          { id: 'bolsa_componentes', name: 'Bolsa de Componentes' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Pacote e Armadura',
        options: [
          { id: 'bruxo_estudioso', name: 'Armadura de Couro + 2 Adagas + Pacote de Estudioso' },
          { id: 'bruxo_masmorra', name: 'Armadura de Couro + 2 Adagas + Pacote de Masmorra' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Patrono de Outro Mundo (Subclasse 2014)', description: 'Pacto com Corruptor, Arquifada, Grande Antigo, Lâmina Maldita, Gênio. No 2024 ocorre no nível 3.', source: 'phb_2014' },
        { name: 'Magia de Pacto (Pact Magic)', description: 'Espaços de magia de círculo fixo máximo que recarregam em Descanso Curto!' }
      ],
      2: [
        { name: 'Invocações Sobrenaturais (Eldritch Invocations)', description: 'Customizações mágicas profundas (Rajada Agonizante, Armadura das Sombras, Visão Diabólica, etc.).' }
      ],
      3: [
        { name: 'Dádiva do Pacto (Pact Boon)', description: 'Pacto da Lâmina (arma mágica), Pacto do Tomo (livro de rituais), Pacto da Corrente (familiar aprimorado) ou Pacto do Talismã.' },
        { name: 'Patrono de Outro Mundo (Subclasse 2024)', description: 'Escolha de patrono no 3º nível.', source: 'phb_2024' }
      ],
      11: [{ name: 'Arcano Místico (6º Círculo)', description: 'Escolha uma magia de 6º círculo para conjurar 1x ao dia sem gastar espaço.' }],
      13: [{ name: 'Arcano Místico (7º Círculo)', description: 'Uma magia de 7º círculo 1x ao dia.' }],
      15: [{ name: 'Arcano Místico (8º Círculo)', description: 'Uma magia de 8º círculo 1x ao dia.' }],
      17: [{ name: 'Arcano Místico (9º Círculo)', description: 'Uma magia de 9º círculo 1x ao dia.' }],
      20: [{ name: 'Mestre Sobrenatural (Eldritch Master)', description: 'Recupere todos os espaços de pacto com 1 minuto de concentração.' }]
    }
  },
  {
    id: 'artifice',
    name: 'Artífice',
    nameEn: 'Artificer',
    hitDie: 8,
    hitDieAvg: 5,
    primaryStats: ['INT', 'CON'],
    savingThrows: ['CON', 'INT'],
    skillChoices: { count: 2, options: ['arcanismo', 'historia', 'investigacao', 'medicina', 'natureza', 'percepcao', 'prestidigitacao'] },
    subclassLevel2014: 3,
    subclassLevel2024: 3,
    asiLevels: [4, 8, 12, 16, 19],
    casterType: 'artificer', // Meio-conjurador que conjura desde o nível 1 e arredonda para cima!
    spellcastingStat: 'INT',
    sourceId: 'tcoe',
    multiclassReq: {
      description: 'INT 13',
      check: (stats) => stats.int >= 13
    },
    multiclassProficiencies: {
      armor: ['Armaduras leves', 'Armaduras médias', 'Escudos'],
      weapons: ['Armas simples'],
      tools: ['Ferramentas de ladrão', 'Ferramentas de funileiro'],
      skillsCount: 0
    },
    equipmentChoices: [
      {
        id: 'weapon_choice',
        label: 'Armas Iniciais',
        options: [
          { id: 'duas_adagas', name: 'Duas adagas e uma besta leve com 20 virotes' },
          { id: 'duas_simples', name: 'Duas armas simples quaisquer' }
        ]
      },
      {
        id: 'pack_choice',
        label: 'Armadura e Ferramentas',
        options: [
          { id: 'artifice_completo', name: 'Armadura de Couro Batido + Ferramentas de Ladrão + Pacote de Masmorra' }
        ]
      }
    ],
    features: {
      1: [
        { name: 'Engenhosidade Mágica (Magical Tinkering)', description: 'Capacidade de imbuir pequenos objetos comuns com propriedades sensoriais mágicas.' },
        { name: 'Conjuração de Artífice', description: 'Canaliza magias através de ferramentas artesanais usando Inteligência.' }
      ],
      2: [
        { name: 'Infundir Itens (Infuse Item)', description: 'Capacidade de criar itens mágicos temporários como Armadura Aprimorada, Arma Radiante, Replicar Item Mágico.' }
      ],
      3: [{ name: 'Especialista de Artífice (Subclasse)', description: 'Alquimista, Armeiro (Armorer), Artilheiro (Artillerist) ou Ferreiro de Batalha (Battle Smith).' }],
      7: [{ name: 'Lampejo de Genialidade (Flash of Genius)', description: 'Reação para somar seu modificador de INT em salvaguardas ou testes de aliados a até 9m!' }]
    }
  }
];

export function getClassById(id) {
  return CLASSES.find(c => c.id === id);
}
