/**
 * Catálogo Completo de Subclasses de D&D 5e e 5.5 (2024), Tasha, Xanathar e Bigby Presents: Glory of the Giants
 * Referenciado de dnd5e.wikidot.com
 */

export const SUBCLASSES = [
  // ==================== BÁRBARO ====================
  {
    id: 'gigante_barbaro',
    classId: 'barbaro',
    name: 'Caminho do Gigante (Path of the Giant)',
    nameEn: 'Path of the Giant',
    sourceId: 'bpg',
    description: 'Canaliza o poder colossal e primordial dos Gigantes de Bigby, aumentando seu tamanho e imbuindo armas com energia elemental.',
    features: [
      { level: 3, name: 'Poder dos Gigantes', description: 'Você aprende idioma Gigante ou um truque de druida. Ao entrar em fúria, seu tamanho se torna Grande e seu alcance aumenta em +1,5m.' },
      { level: 6, name: 'Arremesso Elemental', description: 'Ao entrar em fúria, imbui sua arma com dano extra (Ácido, Fogo, Frio, Elétrico ou Trovão) e qualquer arma ganha propriedade de Arremesso (6/18m) que retorna voando para sua mão após o golpe!' },
      { level: 10, name: 'Arremesso Poderoso', description: 'Como ação bônus, pode erguer e arremessar criaturas ou objetos a até 9 metros de distância, causando dano de impacto ou reposicionando aliados.' },
      { level: 14, name: 'Colosso Demiúrgico', description: 'Em fúria, seu tamanho pode se tornar Enorme (Huge), seu alcance aumenta em +3 metros e o dano elemental extra aumenta para 2d6!' }
    ]
  },
  {
    id: 'totemico',
    classId: 'barbaro',
    name: 'Guerreiro Totêmico / Coração Selvagem',
    nameEn: 'Totem Warrior / Wild Heart',
    sourceId: 'phb_2024',
    description: 'Guia espiritual animal concedendo a lendária resistência física do Urso ou agilidade da Águia.',
    choiceConfig: {
      type: 'totem_spirit',
      label: 'Espírito Totêmico (Nível 3)'
    },
    features: [
      { level: 3, name: 'Espírito Totêmico (Urso/Águia/Lobo)', description: 'Totem do Urso: Ganha resistência a TODOS os tipos de dano (exceto psíquico) enquanto estiver em Fúria!' },
      { level: 6, name: 'Aspecto da Besta', description: 'Visão aguçada da águia ou capacidade de carga monumental do urso.' },
      { level: 14, name: 'Sintonia Totêmica', description: 'Urso impõe desvantagem em ataques contra aliados; Águia ganha voo enquanto em fúria.' }
    ]
  },
  {
    id: 'furioso',
    classId: 'barbaro',
    name: 'Berserker / Furioso',
    nameEn: 'Berserker',
    sourceId: 'phb_2024',
    description: 'Fúria violenta e incontrolável que desfere ataques adicionais devastadores.',
    features: [
      { level: 3, name: 'Frenesi', description: 'Pode atacar com arma como ação bônus a cada turno de fúria (ou causa dano extra de dados de arma em 2024).' },
      { level: 6, name: 'Fúria Imperturbável', description: 'Imunidade a ser Enfeitiçado ou Amedrontado durante a fúria.' }
    ]
  },
  {
    id: 'zelo_primitivo',
    classId: 'barbaro',
    name: 'Zelo Primitivo (Zealot)',
    nameEn: 'Path of the Zealot',
    sourceId: 'xgte',
    description: 'Guerreiro abençoado por deuses da guerra; revive sem custo de material precioso e irradia chamas radiantes ou necróticas.',
    features: [
      { level: 3, name: 'Fúria Divina', description: 'O primeiro ataque com arma em cada turno causa 1d6 + metade do nível de bárbaro em dano Radiante ou Necrótico.' },
      { level: 3, name: 'Guerreiro dos Deuses', description: 'Magias para reviver você (como Reviver ou Ressurreição) não gastam componentes materiais caros!' },
      { level: 14, name: 'Fúria Além da Morte', description: 'Permanecer em 0 PV não o deixa inconsciente enquanto a fúria durar; você só morre se ainda estiver em 0 PV quando a fúria se encerrar.' }
    ]
  },
  {
    id: 'besta_barbaro',
    classId: 'barbaro',
    name: 'Caminho da Besta (Beast)',
    nameEn: 'Path of the Beast',
    sourceId: 'tcoe',
    description: 'Manifesta mutações bestiais físicas durante a fúria: mandíbula mordedora, garras rápidas ou cauda espinhosa.',
    features: [
      { level: 3, name: 'Forma da Besta', description: 'Ao entrar em fúria, manifesta Mordida (cura PV), Garras (ataque extra por turno) ou Cauda (alcance e reação de CA).' }
    ]
  },
  {
    id: 'guardiao_ancestral',
    classId: 'barbaro',
    name: 'Guardião Ancestral (Ancestral Guardian)',
    nameEn: 'Ancestral Guardian',
    sourceId: 'xgte',
    description: 'Espíritos dos seus ancestrais protegem você e impõem desvantagem a inimigos que tentarem atacar seus aliados.',
    features: [
      { level: 3, name: 'Protetores Ancestrais', description: 'O primeiro alvo que acertar em cada turno tem desvantagem em ataques contra qualquer criatura exceto você!' }
    ]
  },

  // ==================== BARDO ====================
  {
    id: 'colegio_conhecimento',
    classId: 'bardo',
    name: 'Colégio do Conhecimento (Lore)',
    nameEn: 'College of Lore',
    sourceId: 'phb_2024',
    description: 'Eruditos versados em todas as magias do multiverso, com Palavras Cortantes e Segredos Mágicos precoces.',
    features: [
      { level: 3, name: 'Perícias Extras & Palavras Cortantes', description: 'Ganha 3 perícias extras e gasta Inspiração Bárdica como reação para subtrair de ataques, danos ou testes inimigos.' },
      { level: 6, name: 'Segredos Mágicos Adicionais', description: 'Aprende 2 magias de qualquer classe no nível 6!' }
    ]
  },
  {
    id: 'colegio_espadas',
    classId: 'bardo',
    name: 'Colégio das Espadas (Swords)',
    nameEn: 'College of Swords',
    sourceId: 'xgte',
    description: 'Duelistas que transformam esgrima em dança acrobática graciosa usando Floresios de Lâmina.',
    features: [
      { level: 3, name: 'Estilo de Luta & Floresios de Lâmina', description: 'Proficiência em armadura média e cimitarra. Gasta inspiração bárdica para Floresio Defensivo (+CA), Cortante (+alvos) ou Móvel (+empurrão).' },
      { level: 6, name: 'Ataque Extra', description: 'Pode atacar duas vezes na ação de Ataque.' }
    ]
  },
  {
    id: 'colegio_eloquencia',
    classId: 'bardo',
    name: 'Colégio da Eloquência (Eloquence)',
    nameEn: 'College of Eloquence',
    sourceId: 'tcoe',
    description: 'Retóricos supremos cujas palavras nunca falham em persuasão e que reduzem as salvaguardas inimigas.',
    features: [
      { level: 3, name: 'Prata na Língua & Palavras Inquietantes', description: 'Rolagens de Enganação e Persuasão menores que 10 no d20 tornam-se 10. Gasta inspiração para subtrair da próxima salvaguarda do alvo!' }
    ]
  },
  {
    id: 'colegio_bravura',
    classId: 'bardo',
    name: 'Colégio da Bravura / Valor',
    nameEn: 'College of Valor',
    sourceId: 'phb_2024',
    description: 'Bardos de batalha com armaduras médias, escudos, armas marciais e incentivo marcial.',
    features: [
      { level: 3, name: 'Proficiências Marciais & Inspiração de Combate', description: 'Proficiência em armaduras médias, escudos e armas marciais. Aliados podem somar a inspiração no dano ou na CA!' },
      { level: 6, name: 'Ataque Extra', description: 'Pode atacar duas vezes por turno.' }
    ]
  },
  {
    id: 'colegio_glamour',
    classId: 'bardo',
    name: 'Colégio do Glamour',
    nameEn: 'College of Glamour',
    sourceId: 'xgte',
    description: 'Canaliza a beleza estonteante e o terror sedutor da Corte das Fadas.',
    features: [
      { level: 3, name: 'Manto de Inspiração', description: 'Gasta inspiração para conceder PV temporários e movimentação imediata sem ataques de oportunidade para vários aliados.' }
    ]
  },

  // ==================== CLÉRIGO ====================
  {
    id: 'dominio_vida',
    classId: 'clerigo',
    name: 'Domínio da Vida (Life)',
    nameEn: 'Life Domain',
    sourceId: 'phb_2024',
    description: 'Cura milagrosa superior com armaduras pesadas e bênçãos de vigor.',
    features: [
      { level: 3, name: 'Discípulo da Vida & Preservar a Vida', description: 'Suas magias de cura curam 2 + círculo da magia adicional. Canalizar Divindade para curar 5 × nível de clérigo.' },
      { level: 6, name: 'Curador Abençoado', description: 'Ao curar outra criatura, recupera PV para si mesmo.' }
    ]
  },
  {
    id: 'dominio_luz',
    classId: 'clerigo',
    name: 'Domínio da Luz (Light)',
    nameEn: 'Light Domain',
    sourceId: 'phb_2024',
    description: 'Empunha o fogo do sol e do alvorecer contra mortos-vivos e escuridão.',
    features: [
      { level: 3, name: 'Lampejo Guardião & Radiação do Alvorecer', description: 'Reação para impor desvantagem em atacantes. Canalizar divindade para causar 2d10 + nível radiante a 9m.' }
    ]
  },
  {
    id: 'dominio_guerra',
    classId: 'clerigo',
    name: 'Domínio da Guerra (War)',
    nameEn: 'War Domain',
    sourceId: 'phb_2024',
    description: 'Guerreiro santo abençoado com armaduras pesadas, armas marciais e ataques de ação bônus.',
    features: [
      { level: 3, name: 'Sacerdote da Guerra & Golpe Guiado', description: 'Pode atacar com arma como ação bônus (usos = SAB mod). Canalizar divindade concede +10 na rolagem de ataque!' }
    ]
  },
  {
    id: 'dominio_tempestade',
    classId: 'clerigo',
    name: 'Domínio da Tempestade (Tempest)',
    nameEn: 'Tempest Domain',
    sourceId: 'phb_2024',
    description: 'Controla trovões e relâmpagos com dano elétrico maximizado.',
    features: [
      { level: 3, name: 'Ira da Tempestade & Ira Destrutiva', description: 'Reação causa 2d8 elétrico a quem te acerta. Canalizar divindade maximiza todo o dano elétrico ou trovejante!' }
    ]
  },
  {
    id: 'dominio_crepusculo',
    classId: 'clerigo',
    name: 'Domínio do Crepúsculo (Twilight)',
    nameEn: 'Twilight Domain',
    sourceId: 'tcoe',
    description: 'Guardiões do manto estelar com visão no escuro de 90m e aura de PV temporários massivos.',
    features: [
      { level: 1, name: 'Olhos do Meio da Noite', description: 'Visão no escuro mágica de 90 metros compartilhável com o grupo.' },
      { level: 2, name: 'Santuário Crepuscular', description: 'Esfera de 9m que concede 1d6 + nível de clérigo de PV temporários a cada turno ou encerra charme/medo.' }
    ]
  },
  {
    id: 'dominio_paz',
    classId: 'clerigo',
    name: 'Domínio da Paz (Peace)',
    nameEn: 'Peace Domain',
    sourceId: 'tcoe',
    description: 'Forja laços de comunhão empática que somam d4 em testes e salvaguardas de aliados.',
    features: [
      { level: 1, name: 'Vínculo Encorajador (Emboldening Bond)', description: 'Une aliados: uma vez por turno, podem somar +1d4 em um ataque, teste ou salvaguarda (acumula com Bênção!).' }
    ]
  },
  {
    id: 'dominio_sepultura',
    classId: 'clerigo',
    name: 'Domínio da Sepultura (Grave)',
    nameEn: 'Grave Domain',
    sourceId: 'xgte',
    description: 'Guardiões da linha entre a vida e a morte; cancelam acertos críticos e dobram o dano sofrido por inimigos.',
    features: [
      { level: 1, name: 'Círculo de Mortalidade', description: 'Curas em criaturas com 0 PV sempre usam o valor máximo de cada dado rolado!' },
      { level: 2, name: 'Caminho para o Túmulo', description: 'Canalizar divindade amaldiçoa um alvo para ser vulnerável ao próximo ataque que sofrer (dobra todo o dano)!' }
    ]
  },
  {
    id: 'dominio_forja',
    classId: 'clerigo',
    name: 'Domínio da Forja (Forge)',
    nameEn: 'Forge Domain',
    sourceId: 'xgte',
    description: 'Artífices divinos que encantam armas e armaduras com +1 e ganham imunidade a fogo.',
    features: [
      { level: 1, name: 'Bênção da Forja', description: 'Transforma uma arma ou armadura em item mágico +1 em cada descanso longo.' }
    ]
  },

  // ==================== DRUIDA ====================
  {
    id: 'circulo_lua',
    classId: 'druida',
    name: 'Círculo da Lua (Moon)',
    nameEn: 'Circle of the Moon',
    sourceId: 'phb_2024',
    description: 'Especialista em Forma Selvagem de combate, transformando-se como ação bônus em Ursos Polares e Elementais.',
    features: [
      { level: 3, name: 'Forma de Combate', description: 'Transforma-se em Forma Selvagem como ação bônus com ND muito maior e pode gastar espaços de magia para curar PV na forma de besta.' },
      { level: 6, name: 'Golpe Primitivo', description: 'Ataques na forma de besta contam como mágicos para superar resistências.' },
      { level: 10, name: 'Forma Selvagem Elemental', description: 'Transforma-se em Elemental do Ar, Terra, Fogo ou Água!' }
    ]
  },
  {
    id: 'circulo_terra',
    classId: 'druida',
    name: 'Círculo da Terra (Land)',
    nameEn: 'Circle of the Land',
    sourceId: 'phb_2024',
    description: 'Conjurador primoroso sintonizado com biomas (Montanha, Pântano, Costa, Deserto, Floresta) com recuperação natural de espaços.',
    features: [
      { level: 3, name: 'Recuperação Natural & Magias do Bioma', description: 'Recupera espaços de magia após descanso curto e ganha magias preparadas automáticas da terra.' }
    ]
  },
  {
    id: 'circulo_estrelas',
    classId: 'druida',
    name: 'Círculo das Estrelas (Stars)',
    nameEn: 'Circle of the Stars',
    sourceId: 'tcoe',
    description: 'Guia-se pelo mapa estelar cósmico, assumindo Formas Estelares (Arqueiro, Cálice ou Dragão).',
    features: [
      { level: 2, name: 'Forma Estelar', description: 'Arqueiro (ataque radiante de ação bônus 1d8+SAB), Cálice (cura extra) ou Dragão (mínimo 10 em concentração).' }
    ]
  },
  {
    id: 'circulo_esporos',
    classId: 'druida',
    name: 'Círculo dos Esporos (Spores)',
    nameEn: 'Circle of Spores',
    sourceId: 'tcoe',
    description: 'Enxerga beleza no ciclo de decomposição, criando halos de esporos venenosos e reanimando zumbis fúngicos.',
    features: [
      { level: 2, name: 'Halo de Esporos & Entidade Simbiótica', description: 'Ganha 4 PV temporários por nível de druida e causa dano necrótico extra em ataques.' }
    ]
  },
  {
    id: 'circulo_fogo_selvagem',
    classId: 'druida',
    name: 'Círculo do Fogo Selvagem (Wildfire)',
    nameEn: 'Circle of Wildfire',
    sourceId: 'tcoe',
    description: 'Invoca um Espírito de Fogo Selvagem permanente em combate que teletransporta aliados e incinera inimigos.',
    features: [
      { level: 2, name: 'Invocar Espírito de Fogo Selvagem', description: 'Ação bônus para invocar espírito de fogo que ataca e teletransporta o grupo 4,5m deixando chamas para trás.' }
    ]
  },

  // ==================== GUERREIRO ====================
  {
    id: 'campeao',
    classId: 'guerreiro',
    name: 'Campeão',
    nameEn: 'Champion',
    sourceId: 'phb_2024',
    description: 'Focado em acertos críticos aprimorados (19-20 e 18-20) e vigor físico supremo.',
    features: [
      { level: 3, name: 'Crítico Aprimorado', description: 'Acertos críticos com armas corpo a corpo e à distância acontecem com rolagem de 19 ou 20 no d20.' },
      { level: 7, name: 'Atleta Notável', description: 'Soma metade da proficiência em testes físicos e ganha bônus de salto.' },
      { level: 15, name: 'Crítico Superior', description: 'Acertos críticos com 18, 19 ou 20 no d20!' }
    ]
  },
  {
    id: 'mestre_batalha',
    classId: 'guerreiro',
    name: 'Mestre da Batalha (Battle Master)',
    nameEn: 'Battle Master',
    sourceId: 'phb_2024',
    description: 'Estrategista marcial lendário que executa manobras táticas (Aparar, Derrubar, Desarmar, Riposta, Empurrar, Finta) alimentadas por Dados de Superioridade.',
    choiceConfig: {
      type: 'maneuvers',
      label: 'Manobras de Superioridade em Combate',
      description: 'Aprende 3 manobras no 3º nível (+2 no 7º, +2 no 10º, +2 no 15º nível). Não é permitido selecionar manobras repetidas.'
    },
    features: [
      { level: 3, name: 'Superioridade em Combate', description: 'Ganha 4 dados d8 de superioridade (aumentam para d10 no nível 10) e aprende 3 manobras táticas de combate à sua escolha.' },
      { level: 3, name: 'Estudioso da Guerra', description: 'Você ganha proficiência em um tipo de ferramenta de artesão à sua escolha.' },
      { level: 7, name: 'Conheça seu Inimigo', description: 'Aprende 2 manobras adicionais (total 5) e pode discernir estatísticas de criaturas fora de combate.' },
      { level: 10, name: 'Superioridade em Combate Aprimorada', description: 'Seus dados de superioridade aumentam para d10. Aprende 2 manobras adicionais (total 7).' },
      { level: 15, name: 'Incansável', description: 'Ao rolar iniciativa sem nenhum dado de superioridade restante, você recupera um dado imediatamente. Aprende 2 manobras adicionais (total 9).' }
    ]
  },
  {
    id: 'cavaleiro_arcano',
    classId: 'guerreiro',
    name: 'Cavaleiro Arcano',
    nameEn: 'Eldritch Knight',
    sourceId: 'phb_2024',
    description: 'Combina maestria de armas com magias arcanas de Evocação e Abjuração de Mago.',
    grantsSpellcasting: true,
    spellcastingStat: 'INT',
    features: [
      { level: 3, name: 'Conjuração & Vínculo com Arma', description: 'Espaços de magia de mago e invoca sua arma até as mãos como ação bônus.' },
      { level: 7, name: 'Magia de Guerra', description: 'Ao usar um truque, desfere um ataque com arma como ação bônus.' }
    ]
  },
  {
    id: 'cavaleiro_eco',
    classId: 'guerreiro',
    name: 'Cavaleiro do Eco',
    nameEn: 'Echo Knight',
    sourceId: 'tcoe',
    description: 'Projeta um eco translúcido de outra linha temporal para atacar e trocar de lugar instantaneamente.',
    features: [
      { level: 3, name: 'Manifestar Eco', description: 'Cria eco que ataca, realiza ataques de oportunidade e troca de posição com você como ação bônus.' }
    ]
  },
  {
    id: 'cavaleiro_runico',
    classId: 'guerreiro',
    name: 'Cavaleiro Rúnico (Rune Knight)',
    nameEn: 'Rune Knight',
    sourceId: 'tcoe',
    description: 'Entalha runas dos gigantes em seus equipamentos para se tornar Grande e prender inimigos.',
    features: [
      { level: 3, name: 'Entalhe Rúnico & Estatura de Gigante', description: 'Ação bônus para crescer para tamanho Grande ganhando dano extra 1d6 e runas mágicas (Nuvem, Fogo, Gelo, Pedra).' }
    ]
  },
  {
    id: 'samurai',
    classId: 'guerreiro',
    name: 'Samurai',
    nameEn: 'Samurai',
    sourceId: 'xgte',
    description: 'Determinação inquebrável concedendo vantagem automática em todos os ataques do turno.',
    features: [
      { level: 3, name: 'Espírito de Luta', description: 'Ação bônus para ganhar vantagem em todas as jogadas de ataque até o fim do turno e PV temporários.' }
    ]
  },
  {
    id: 'guerreiro_psiquico',
    classId: 'guerreiro',
    name: 'Guerreiro Psíquico (Psi Warrior)',
    nameEn: 'Psi Warrior',
    sourceId: 'tcoe',
    description: 'Armas psíquicas, telecinese de combate e barreiras telecinéticas de proteção.',
    features: [
      { level: 3, name: 'Poder Psíquico', description: 'Dados de energia psiônica para causar dano de força extra, proteger aliados ou mover objetos.' }
    ]
  },

  // ==================== LADINO ====================
  {
    id: 'ladrao',
    classId: 'ladino',
    name: 'Ladrão (Thief)',
    nameEn: 'Thief',
    sourceId: 'phb_2024',
    description: 'Mãos Rápidas para usar itens ou operar ferramentas como ação bônus e improvisação de itens mágicos.',
    features: [
      { level: 3, name: 'Mãos Rápidas & Segundo Andar', description: 'Usa a ação bônus para bater carteiras, operar ferramentas ou usar itens mágicos. Escalada sem penalidade.' }
    ]
  },
  {
    id: 'assassino',
    classId: 'ladino',
    name: 'Assassino',
    nameEn: 'Assassin',
    sourceId: 'phb_2024',
    description: 'Golpes críticos automáticos em inimigos surpresos e maestria com venenos letais.',
    features: [
      { level: 3, name: 'Emboscada Certeira (Assassinate)', description: 'Vantagem contra alvos que ainda não agiram no combate e acertos contra surpresos são críticos automáticos!' }
    ]
  },
  {
    id: 'trapaceiro_arcano',
    classId: 'ladino',
    name: 'Trapaceiro Arcano',
    nameEn: 'Arcane Trickster',
    sourceId: 'phb_2024',
    description: 'Mão das Bruxas invisível e magias arcanas de Ilusão e Encantamento.',
    grantsSpellcasting: true,
    spellcastingStat: 'INT',
    features: [
      { level: 3, name: 'Mão das Bruxas Furtiva', description: 'Sua Mão Mágica é invisível e pode arrombar fechaduras e furtar itens à distância.' }
    ]
  },
  {
    id: 'espadachim',
    classId: 'ladino',
    name: 'Espadachim / Duelista (Swashbuckler)',
    nameEn: 'Swashbuckler',
    sourceId: 'xgte',
    description: 'Soma Carisma na Iniciativa e aplica Ataque Furtivo em duelos mano a mano sem precisar de vantagem.',
    features: [
      { level: 3, name: 'Audácia Elegante & Jogo de Pés', description: 'Soma CAR na iniciativa; aplica ataque furtivo se estiver a até 1,5m do alvo sem outros inimigos por perto.' }
    ]
  },
  {
    id: 'fantasma_ladino',
    classId: 'ladino',
    name: 'Fantasma (Phantom)',
    nameEn: 'Phantom',
    sourceId: 'tcoe',
    description: 'Caminha com espíritos dos mortos, canalizando ecos necróticos e almas em berloques.',
    features: [
      { level: 3, name: 'Sussurros dos Mortos & Ecos da Sepultura', description: 'Ganha proficiência temporária em qualquer perícia ao meditar e causa dano necrótico secundário ao usar Ataque Furtivo.' }
    ]
  },
  {
    id: 'lamina_alma',
    classId: 'ladino',
    name: 'Lâmina da Alma (Soulknife)',
    nameEn: 'Soulknife',
    sourceId: 'tcoe',
    description: 'Manifesta lâminas psíquicas cintilantes das palmas das mãos e telepatia com o grupo.',
    features: [
      { level: 3, name: 'Lâminas Psíquicas', description: 'Invoca adagas psíquicas que causam dano psíquico (1d6) e realizam ataque bônus secundário (1d4).' }
    ]
  },

  // ==================== MONGE ====================
  {
    id: 'palma_aberta',
    classId: 'monge',
    name: 'Caminho da Palma Aberta',
    nameEn: 'Way of the Open Hand',
    sourceId: 'phb_2024',
    description: 'Golpes que derrubam, empurram e desestabilizam o Ki dos oponentes até a lendária Palma Trêmula mortal.',
    features: [
      { level: 3, name: 'Técnica da Palma Aberta', description: 'Ao acertar a Rajada de Golpes, pode derrubar o alvo, empurrá-lo 4,5m ou impedi-lo de ter reações.' }
    ]
  },
  {
    id: 'sombras_monge',
    classId: 'monge',
    name: 'Caminho das Sombras (Shadow)',
    nameEn: 'Way of Shadow',
    sourceId: 'phb_2024',
    description: 'Ninjas místicos que conjuram Escuridão e se teletransportam de sombra em sombra.',
    features: [
      { level: 3, name: 'Artes das Sombras', description: 'Gasta Ki para conjurar Escuridão, Passo Sem Pegadas, Visão no Escuro ou Silêncio.' },
      { level: 6, name: 'Passo das Sombras', description: 'Ação bônus para se teletransportar até 18m de uma sombra para outra sombra com vantagem no próximo ataque!' }
    ]
  },
  {
    id: 'misericordia',
    classId: 'monge',
    name: 'Caminho da Misericórdia (Mercy)',
    nameEn: 'Way of Mercy',
    sourceId: 'tcoe',
    description: 'Médicos mascarados que manipulam a força vital para curar feridos e infligir toques necrosantes.',
    features: [
      { level: 3, name: 'Mãos Que Curam & Mãos Que Ferem', description: 'Gasta Ki para curar aliados ao desferir golpes ou causar dano necrótico extra garantido.' }
    ]
  },
  {
    id: 'kensei',
    classId: 'monge',
    name: 'Caminho do Kensei',
    nameEn: 'Way of the Kensei',
    sourceId: 'xgte',
    description: 'Transforma armas marciais em armas de monge refinadas com arcos longos e espadas.',
    features: [
      { level: 3, name: 'Armas Kensei', description: 'Escolha armas marciais para contar como armas de monge com bônus de CA ao golpear desarmado.' }
    ]
  },

  // ==================== PALADINO ====================
  {
    id: 'juramento_devocao',
    classId: 'paladino',
    name: 'Juramento da Devoção (Devotion)',
    nameEn: 'Oath of Devotion',
    sourceId: 'phb_2024',
    description: 'Cavaleiro em armadura brilhante fiel à justiça, verdade e virtude com arma radiante sagrada.',
    features: [
      { level: 3, name: 'Arma Sagrada & Expulsar o Profano', description: 'Canalizar divindade soma Modificador de Carisma nas rolagens de ataque e emite luz mágica brilhante.' }
    ]
  },
  {
    id: 'juramento_vinganca',
    classId: 'paladino',
    name: 'Juramento da Vingança (Vengeance)',
    nameEn: 'Oath of Vengeance',
    sourceId: 'phb_2024',
    description: 'Punição impiedosa aos pecadores com Vow of Enmity para vantagem total nos ataques.',
    features: [
      { level: 3, name: 'Inimizade Jurada (Vow of Enmity)', description: 'Ação bônus para ganhar vantagem em todas as rolagens de ataque contra um alvo por 1 minuto!' }
    ]
  },
  {
    id: 'juramento_anciaos',
    classId: 'paladino',
    name: 'Juramento dos Anciões (Ancients)',
    nameEn: 'Oath of the Ancients',
    sourceId: 'phb_2024',
    description: 'Cavaleiro Verde ligado à luz primordial da natureza e das fadas com aura de resistência mágica.',
    features: [
      { level: 3, name: 'Ira da Natureza', description: 'Vinhas místicas aprisionam o inimigo com Canalizar Divindade.' },
      { level: 7, name: 'Aura Protetora dos Anciões', description: 'Você e aliados na aura têm RESISTÊNCIA a todo dano de magias!' }
    ]
  },
  {
    id: 'juramento_conquista',
    classId: 'paladino',
    name: 'Juramento da Conquista (Conquest)',
    nameEn: 'Oath of Conquest',
    sourceId: 'xgte',
    description: 'Guerreiros de disciplina férrea que paralisam inimigos com auras de terror absoluto.',
    features: [
      { level: 3, name: 'Presença Conquistadora', description: 'Canalizar divindade causa pavor em massa em todos os inimigos a até 9 metros.' },
      { level: 7, name: 'Aura de Conquista', description: 'Inimigos amedrontados na aura têm velocidade reduzida para 0 e sofrem dano psíquico contínuo.' }
    ]
  },

  // ==================== PATRULHEIRO ====================
  {
    id: 'gloom_stalker',
    classId: 'patrulheiro',
    name: 'Perseguidor Sombrio (Gloom Stalker)',
    nameEn: 'Gloom Stalker',
    sourceId: 'xgte',
    description: 'Mestres da emboscada no Subterrâneo; invisíveis para criaturas com visão no escuro e ataque extra devastador no 1º turno.',
    features: [
      { level: 3, name: 'Emboscador Noturno & Camuflagem Umbral', description: 'Soma Sabedoria na Iniciativa. No 1º turno de combate, +3m de velocidade e um ataque extra com +1d8 de dano. É invisível para visão no escuro!' }
    ]
  },
  {
    id: 'cacador',
    classId: 'patrulheiro',
    name: 'Caçador (Hunter)',
    nameEn: 'Hunter',
    sourceId: 'phb_2024',
    description: 'Especialista em táticas para abater colossos, hordas ou presas gigantescas.',
    choiceConfig: {
      type: 'hunter_prey',
      label: 'Presa do Caçador (Nível 3)'
    },
    features: [
      { level: 3, name: 'Presa do Caçador', description: 'Escolha: Matador de Colossos (+1d8 dano em alvos feridos), Matador de Hordas (ataque extra em alvo vizinho) ou Quebrador de Gigantes.' }
    ]
  },
  {
    id: 'andarilho_feerico',
    classId: 'patrulheiro',
    name: 'Andarilho Feérico (Fey Wanderer)',
    nameEn: 'Fey Wanderer',
    sourceId: 'tcoe',
    description: 'Abençoado com magia e lábia feérica: soma Sabedoria em testes de Carisma e causa dano psíquico.',
    features: [
      { level: 3, name: 'Golpes Temerários & Presença Sobrenatural', description: 'Causa +1d4 de dano psíquico por golpe e soma SAB em todos os testes de Carisma.' }
    ]
  },

  // ==================== FEITICEIRO ====================
  {
    id: 'feiticeiro_draconico',
    classId: 'feiticeiro',
    name: 'Linhagem Dracônica (Draconic)',
    nameEn: 'Draconic Bloodline',
    sourceId: 'phb_2024',
    description: 'Escamas dracônicas com CA básica 13 + DES, +1 PV por nível de feiticeiro e afinidade elemental.',
    features: [
      { level: 3, name: 'Resiliência Dracônica & Afinidade Elemental', description: 'Sua CA sem armadura é 13 + DES, ganha +1 PV por nível e soma CAR no dano do elemento dracônico.' }
    ]
  },
  {
    id: 'magia_selvagem',
    classId: 'feiticeiro',
    name: 'Magia Selvagem (Wild Magic)',
    nameEn: 'Wild Magic',
    sourceId: 'phb_2024',
    description: 'Caos mágico imprevisível que aciona Surto de Magia Selvagem e Marés do Caos com vantagem à vontade.',
    features: [
      { level: 3, name: 'Surto de Magia Selvagem & Marés do Caos', description: 'Role na tabela de Magia Selvagem após lançar magias. Ganhe vantagem em um d20 à vontade uma vez por descanso.' }
    ]
  },
  {
    id: 'alma_divina',
    classId: 'feiticeiro',
    name: 'Alma Divina (Divine Soul)',
    nameEn: 'Divine Soul',
    sourceId: 'xgte',
    description: 'Descendente de celestiais com acesso a TODAS as magias da lista de Clérigo além de Feiticeiro.',
    features: [
      { level: 1, name: 'Magia Divina & Favorecido pelos Deuses', description: 'Aprende magias de Clérigo e soma 2d4 em salvaguardas ou ataques falhos 1x por descanso.' }
    ]
  },
  {
    id: 'mente_aberrante',
    classId: 'feiticeiro',
    name: 'Mente Aberrante (Aberrant Mind)',
    nameEn: 'Aberrant Mind',
    sourceId: 'tcoe',
    description: 'Poder psíquico alienígena de mentes tentaculares com telepatia e conjuração sutil sem componentes.',
    features: [
      { level: 1, name: 'Fala Telepática & Feitiçaria Psíquica', description: 'Comunicação mental telepática e lança magias da mente gastando pontos de feitiçaria sem componentes V, S ou M!' }
    ]
  },

  // ==================== BRUXO ====================
  {
    id: 'lamina_maldita',
    classId: 'bruxo',
    name: 'Lâmina Maldita (Hexblade)',
    nameEn: 'The Hexblade',
    sourceId: 'xgte',
    description: 'Usa Carisma nas rolagens de ataque e dano com armas marciais e ganha armaduras médias e escudos.',
    features: [
      { level: 1, name: 'Guerreiro Maldito & Maldição do Hexblade', description: 'Proficiência em armaduras médias, escudos e armas marciais. Ataca e causa dano usando Carisma!' }
    ]
  },
  {
    id: 'corruptor',
    classId: 'bruxo',
    name: 'O Corruptor (The Fiend)',
    nameEn: 'The Fiend',
    sourceId: 'phb_2024',
    description: 'Pacto infernal que concede vigor ao matar inimigos e resistência adaptativa a danos.',
    features: [
      { level: 3, name: 'Bênção do Obscuro', description: 'Ao reduzir um inimigo a 0 PV, ganha PV temporários iguais a CAR mod + nível de bruxo.' }
    ]
  },
  {
    id: 'genio_bruxo',
    classId: 'bruxo',
    name: 'O Gênio (The Genie)',
    nameEn: 'The Genie',
    sourceId: 'tcoe',
    description: 'Pacto com um nobre Djinni, Efreeti, Dao ou Marid: vaso de gênio pessoal e dano elemental extra nos ataques.',
    features: [
      { level: 1, name: 'Recipiente do Gênio & Ira do Gênio', description: 'Você possui uma lâmpada ou anel mágico onde pode entrar e descansar, e causa dano elemental extra em ataques.' }
    ]
  },

  // ==================== MAGO ====================
  {
    id: 'escola_evocacao',
    classId: 'mago',
    name: 'Escola de Evocação',
    nameEn: 'School of Evocation',
    sourceId: 'phb_2024',
    description: 'Magias explosivas destruidoras protegendo aliados dos raios de explosão com Esculpir Magias.',
    features: [
      { level: 3, name: 'Esculpir Magias', description: 'Aliados na área da sua magia de evocação têm sucesso automático e não sofrem dano.' },
      { level: 10, name: 'Evocação Fortalecida', description: 'Soma Modificador de INT nas rolagens de dano de magias de evocação.' }
    ]
  },
  {
    id: 'escola_abjuracao',
    classId: 'mago',
    name: 'Escola de Abjuração',
    nameEn: 'School of Abjuration',
    sourceId: 'phb_2024',
    description: 'Mestres de proteção com barreira arcana absorvedora de dano e contra-mágica reforçada.',
    features: [
      { level: 3, name: 'Proteção Arcana (Arcane Ward)', description: 'Barreira mágica que absorve dano igual a 2 × nível de mago + INT mod.' }
    ]
  },
  {
    id: 'escola_adivinhacao',
    classId: 'mago',
    name: 'Escola de Adivinhação (Divination)',
    nameEn: 'School of Divination',
    sourceId: 'phb_2024',
    description: 'Presságio que rola dados d20 antecipadamente a cada manhã para substituir qualquer rolagem do jogo!',
    features: [
      { level: 3, name: 'Presságio (Portent)', description: 'Role dois dados d20 no início do dia. Você pode substituir qualquer rolagem de ataque, teste ou salvaguarda por um desses resultados!' }
    ]
  },
  {
    id: 'laminacanto',
    classId: 'mago',
    name: 'Lâmina-Canto (Bladesinging)',
    nameEn: 'Bladesinging',
    sourceId: 'tcoe',
    description: 'Dança de lâmina élfica que soma Inteligência na Classe de Armadura e permite lançar truques como parte do Ataque Extra.',
    features: [
      { level: 3, name: 'Canção da Lâmina', description: 'Ação bônus para ativar: soma INT na CA, velocidade aumentada em +3m e bônus de INT em salvaguardas de concentração.' },
      { level: 6, name: 'Ataque Extra Mágico', description: 'Pode atacar duas vezes e substituir um dos ataques por um truque mágico!' }
    ]
  },
  {
    id: 'escribas',
    classId: 'mago',
    name: 'Ordem dos Escribas (Order of Scribes)',
    nameEn: 'Order of Scribes',
    sourceId: 'tcoe',
    description: 'Seu grimório ganha consciência senciente mágica, alterando tipos de dano de magias instantaneamente.',
    features: [
      { level: 2, name: 'Grimório Desperto', description: 'Pode alterar o tipo de dano de qualquer magia de mago para o de outra magia gravada no livro!' }
    ]
  },

  // ==================== ARTÍFICE ====================
  {
    id: 'armeiro',
    classId: 'artifice',
    name: 'Armeiro (Armorer)',
    nameEn: 'Armorer',
    sourceId: 'tcoe',
    description: 'Transforma sua armadura em uma segunda pele tecnomágica no modelo Guardião (tanque com punhos de trovão) ou Infiltrador (raio de relâmpago furtivo).',
    features: [
      { level: 3, name: 'Armadura Arcana & Modelos de Armadura', description: 'Veste armadura pesada sem requisito de Força. Escolha entre modelo Guardião (punho de trovão impõe desvantagem) ou Infiltrador (+1,5m velocidade, raio elétrico 1d6).' }
    ]
  },
  {
    id: 'artilheiro',
    classId: 'artifice',
    name: 'Artilheiro (Artillerist)',
    nameEn: 'Artillerist',
    sourceId: 'tcoe',
    description: 'Cria canhões arcanos portáteis (Lança-Chamas, Balista de Força ou Protetor de PV temporários).',
    features: [
      { level: 3, name: 'Canhão Sobrenatural', description: 'Ação para criar canhão que atira como ação bônus: Balista de Força (2d8), Lança-Chamas (2d8 em cone) ou Protetor (1d8+INT PV temporários).' }
    ]
  },
  {
    id: 'ferreiro_batalha',
    classId: 'artifice',
    name: 'Ferreiro de Batalha (Battle Smith)',
    nameEn: 'Battle Smith',
    sourceId: 'tcoe',
    description: 'Ataca e causa dano com Inteligência usando armas mágicas e combate acompanhado por um Defensor de Aço mecânico.',
    features: [
      { level: 3, name: 'Prontidão de Batalha & Defensor de Aço', description: 'Proficiência em armas marciais. Ataca usando Inteligência com armas mágicas. Cria um robô Defensor de Aço quadrúpede que luta ao seu lado.' }
    ]
  },
  {
    id: 'alquimista',
    classId: 'artifice',
    name: 'Alquimista (Alchemist)',
    nameEn: 'Alchemist',
    sourceId: 'tcoe',
    description: 'Mestre das poções e elixires experimentais curativos, restauradores e voadores.',
    features: [
      { level: 3, name: 'Elixir Experimental', description: 'Cria elixires mágicos a cada descanso que concedem cura, voo, velocidade, transformação ou bônus de CA.' }
    ]
  },

  // ==================== NOVAS SUBCLASSES OFICIAIS ====================

  // --- BÁRBARO ---
  {
    id: 'arauto_tempestade',
    classId: 'barbaro',
    name: 'Caminho do Arauto da Tempestade (Storm Herald)',
    nameEn: 'Path of the Storm Herald',
    sourceId: 'xgte',
    description: 'Manifesta tempestades primordiais ao redor de si durante a fúria: Deserto escaldante, Mar eletrificante ou Tundra congelante.',
    features: [
      { level: 3, name: 'Aura da Tempestade', description: 'Ao entrar em fúria, emana uma aura mágica de 3m: Deserto causa dano de fogo; Mar causa choque elétrico; Tundra concede PV temporários a aliados.' },
      { level: 6, name: 'Alma da Tempestade', description: 'Ganha resistência passiva ao tipo elemental escolhido (fogo, elétrico ou frio) e habilidades de suporte ambiental.' },
      { level: 10, name: 'Escudo da Tempestade', description: 'Concede sua resistência elemental aos aliados dentro da sua aura durante a fúria.' },
      { level: 14, name: 'Fúria Tempestuosa', description: 'Atinge seu pico destrutivo: derruba inimigos, queima com fogo retaliatório ou congela oponentes no lugar.' }
    ]
  },
  {
    id: 'magia_selvagem_barbaro',
    classId: 'barbaro',
    name: 'Caminho da Magia Selvagem (Path of Wild Magic)',
    nameEn: 'Path of Wild Magic',
    sourceId: 'tcoe',
    description: 'Tocado pelas energias imprevisíveis de Faéria, liberando uma torrente de efeitos mágicos caóticos a cada fúria.',
    features: [
      { level: 3, name: 'Surto de Magia Selvagem', description: 'Ao entrar em fúria, rola na tabela de Magia Selvagem (1d8) para teletransporte, raios de luz, vinhas emaranhadas ou explosões místicas.' },
      { level: 6, name: 'Canalizar a Magia', description: 'Toca uma criatura para conceder bônus de ataque ou restaurar espaços de magia gastos (nível 1 a 3).' },
      { level: 10, name: 'Reação Instável', description: 'Quando sofre dano ou falha em salvaguarda na fúria, pode rolar novamente na tabela de magia selvagem como reação.' },
      { level: 14, name: 'Magia Selvagem Controlada', description: 'Rola 2d8 na tabela de surto e escolhe qual dos dois efeitos deseja ativar!' }
    ]
  },
  {
    id: 'combatente_batalha',
    classId: 'barbaro',
    name: 'Combatente da Fúria / Espinhos (Battlerager)',
    nameEn: 'Battlerager',
    sourceId: 'scag',
    description: 'Guerreiros anões ferozes que usam armaduras cravejadas de pontas de metal mortíferas para dilacerar inimigos no combate corporal.',
    features: [
      { level: 3, name: 'Armadura Espinhada', description: 'Ao usar armadura de espinhos em fúria, desfere um ataque com pontas como ação bônus (1d4 perfurante) e causa dano ao agarrar.' },
      { level: 6, name: 'Fúria Imprudente Espinhosa', description: 'Ganha pontos de vida temporários sempre que usar Ataque Imprudente durante a fúria.' },
      { level: 10, name: 'Investida Espinhosa', description: 'Pode realizar a ação de Disparada como ação bônus enquanto estiver em fúria.' },
      { level: 14, name: 'Retaliação Espinhosa', description: 'Inimigos que atinjam você com ataque corpo a corpo sofrem 3 de dano perfurante imediato da sua armadura.' }
    ]
  },
  {
    id: 'arvore_mundo',
    classId: 'barbaro',
    name: 'Caminho da Árvore do Mundo (Path of the World Tree)',
    nameEn: 'Path of the World Tree',
    sourceId: 'phb_2024',
    description: 'Sintonizado com Yggdrasil, fornecendo vitalidade curativa e raízes dimensionais para manipular e transportar o campo de batalha.',
    features: [
      { level: 3, name: 'Vitalidade da Árvore', description: 'Ao entrar em fúria, concede pontos de vida temporários a si e a um aliado no início de cada turno.' },
      { level: 6, name: 'Ramos de Yggdrasil', description: 'Pode teleportar ou puxar criaturas a até 9 metros com vinhas astrais fantasmagóricas.' },
      { level: 10, name: 'Raízes Enegrecidas', description: 'Aumenta o alcance da sua arma em +3 metros e reduz a velocidade de alvos atingidos a 0.' },
      { level: 14, name: 'Viagem pelas Raízes', description: 'Teleporta a si mesmo e aliados através das raízes cósmicas da grande árvore dimensional.' }
    ]
  },

  // --- BARDO ---
  {
    id: 'colegio_criacao',
    classId: 'bardo',
    name: 'Colégio da Criação (College of Creation)',
    nameEn: 'College of Creation',
    sourceId: 'tcoe',
    description: 'Manipula a Canção da Criação que deu origem ao cosmos, animando objetos inanimados e manifestando matéria do nada.',
    features: [
      { level: 3, name: 'Nota de Potência', description: 'Sua Inspiração de Bardo ganha efeitos adicionais baseados no teste (dano em área, bônus resiliente ou salvaguarda triunfante).' },
      { level: 3, name: 'Performance da Criação', description: 'Manifesta magicamente um item não mágico à sua escolha de até médio porte sem custo de material.' },
      { level: 6, name: 'Objeto Animado', description: 'Dá vida mágica a um objeto Grande ou Menor que voa, ataca e segue suas ordens com lealdade.' },
      { level: 14, name: 'Crescendo Criativo', description: 'Pode criar até 5 itens simultâneos de tamanho até Enorme sem restrições de valor de ouro!' }
    ]
  },
  {
    id: 'colegio_sussurros',
    classId: 'bardo',
    name: 'Colégio dos Sussurros (College of Whispers)',
    nameEn: 'College of Whispers',
    sourceId: 'xgte',
    description: 'Mestres de espionagem, extorsão e mentiras que desferem ataques psíquicos fatais e roubam a própria sombra das suas vítimas.',
    features: [
      { level: 3, name: 'Lâminas Psíquicas', description: 'Gasta um uso de Inspiração de Bardo para causar 3d6 (aumenta até 8d6) de dano psíquico extra com arma.' },
      { level: 3, name: 'Palavras de Terror', description: 'Sussurra em particular para assustar terrivelmente uma criatura por 1 hora sem que testemunhas percebam.' },
      { level: 6, name: 'Manto de Sombras', description: 'Captura a sombra de uma criatura que morre por perto, permitindo disfarçar-se perfeitamente nela e acessar suas memórias superficiais.' },
      { level: 14, name: 'Sussurro da Mente Oculta', description: 'Enfeitiça magicamente uma criatura fazendo-a acreditar que você conhece seu segredo mais sombrio e obedecê-lo com pavor.' }
    ]
  },
  {
    id: 'colegio_espiritos',
    classId: 'bardo',
    name: 'Colégio dos Espíritos (College of Spirits)',
    nameEn: 'College of Spirits',
    sourceId: 'tcoe',
    description: 'Canaliza almas do além através de cartas de tarô, ossos e tábuas espirituais para desencadear contos folclóricos e intervenções sobrenaturais.',
    features: [
      { level: 3, name: 'Foco Espiritual', description: 'Pode usar vela, tarô, crânio ou tabuleiro ouija como foco de conjuração arcano.' },
      { level: 3, name: 'Contos do Além', description: 'Consulta espíritos rolando 1d6 (1d12 em níveis altos) para conjurar histórias milagrosas: dragões, sombras, anjos ou heróis caídos.' },
      { level: 6, name: 'Sessão Espiritual', description: 'Realiza ritual de sessão com aliados para aprender temporariamente uma magia de adivinhação ou necromancia de qualquer classe!' },
      { level: 14, name: 'Conexão Mística', description: 'Rola dois dados ao consultar contos espirituais e escolhe o melhor resultado.' }
    ]
  },
  {
    id: 'colegio_danca',
    classId: 'bardo',
    name: 'Colégio da Dança (College of Dance)',
    nameEn: 'College of Dance',
    sourceId: 'phb_2024',
    description: 'Movimentos rítmicos hipnóticos que combinam acrobacia de combate com golpes desarmados e evasão ágil.',
    features: [
      { level: 3, name: 'Acrobata da Batalha', description: 'Sua CA se torna 10 + mod DES + mod CAR sem armadura. Pode desferir golpes desarmados usando dado de Inspiração de Bardo.' },
      { level: 6, name: 'Passo Inspirador', description: 'Quando você ou um aliado dentro de 18m sofre dano, você pode usar reação para se mover sem provocar ataques de oportunidade.' },
      { level: 14, name: 'Dança Evasiva Triunfal', description: 'Esquiva sobrenatural que compartilha Evasão com aliados e esquiva de qualquer golpe de área perigoso.' }
    ]
  },

  // --- BRUXO ---
  {
    id: 'arquifada',
    classId: 'bruxo',
    name: 'A Arquifada (The Archfey)',
    nameEn: 'The Archfey',
    sourceId: 'phb_2014',
    description: 'Pacto firmado com nobres feéricos de Faéria como Titânia ou a Rainha do Ar e da Escuridão, dominando encantos e ilusões.',
    features: [
      { level: 1, name: 'Presença Feérica', description: 'Como ação, criaturas em um cubo de 3m ao seu redor realizam salvaguarda de Sabedoria ou ficam enfeitiçadas/amedrontadas até o fim do seu próximo turno.' },
      { level: 6, name: 'Fuga Nebulosa', description: 'Ao sofrer dano, fica invisível e se teleporta a até 18 metros como reação.' },
      { level: 10, name: 'Defesa Sedutora', description: 'Imune a ser Enfeitiçado. Quando alguém tenta enfeitiçá-lo, você pode virar o feitiço contra a própria criatura!' },
      { level: 14, name: 'Delírio Sombrio', description: 'Mergulha a mente do inimigo em um reino ilusório de pesadelo feérico que o paralisa e aterroriza por 1 minuto.' }
    ]
  },
  {
    id: 'grande_antigo',
    classId: 'bruxo',
    name: 'O Grande Antigo (The Great Old One)',
    nameEn: 'The Great Old One',
    sourceId: 'phb_2014',
    description: 'Pacto com entidades cósmicas e inescrutáveis além do tempo e da realidade, como Cthulhu, Hadar ou Tharizdun.',
    features: [
      { level: 1, name: 'Mente Desperta', description: 'Comunica-se telepaticamente com qualquer criatura que possa ver a até 9 metros, independente do idioma compartilhado.' },
      { level: 6, name: 'Escudo Entrópico', description: 'Impõe desvantagem em uma jogada de ataque contra você; se errar, você ganha vantagem no próximo ataque contra o atacante.' },
      { level: 10, name: 'Escudo de Pensamentos', description: 'Seus pensamentos não podem ser lidos; recebe resistência a dano psíquico e reflete o dano psíquico de volta ao atacante.' },
      { level: 14, name: 'Criar Lacaio', description: 'Toca um humanoide incapacitado para enfeitiçá-lo permanentemente como seu lacaio telepático submisso.' }
    ]
  },
  {
    id: 'celestial',
    classId: 'bruxo',
    name: 'O Celestial (The Celestial)',
    nameEn: 'The Celestial',
    sourceId: 'xgte',
    description: 'Pacto selado com serafins, solares, unicórnios ou entidades sagradas dos Planos Superiores, concedendo chamas sagradas e cura.',
    features: [
      { level: 1, name: 'Luz e Chama Sagrada', description: 'Aprende os truques Luz e Chama Sagrada gratuitamente.' },
      { level: 1, name: 'Luz Curativa', description: 'Reserva de dados d6 igual a 1 + nível de bruxo para curar aliados à distância como ação bônus.' },
      { level: 6, name: 'Alma Radiante', description: 'Resistência a dano radiante e soma mod Carisma a uma rolagem de dano de fogo ou radiante de suas magias.' },
      { level: 10, name: 'Resiliência Celestial', description: 'Ganha pontos de vida temporários a cada descanso e concede PV temporários aos seus companheiros.' },
      { level: 14, name: 'Vingança Incandescente', description: 'Ao cair a 0 PV, explode em luz radiante cegando inimigos, causando 2d8 + mod CAR e se levantando com metade da vida!' }
    ]
  },
  {
    id: 'profundezas',
    classId: 'bruxo',
    name: 'As Profundezas / Insondável (The Fathomless)',
    nameEn: 'The Fathomless',
    sourceId: 'tcoe',
    description: 'Pacto com kraken, leviatãs ou senhores elementais das profundezas oceânicas, conjurando tentáculos monstruosos de água e sombras.',
    features: [
      { level: 1, name: 'Tentáculo das Profundezas', description: 'Ação bônus para criar um tentáculo espectral que desfere ataques de 1d8 frio e reduz o deslocamento do inimigo em 3 metros.' },
      { level: 1, name: 'Dádiva do Mar', description: 'Ganha deslocamento de natação de 12 metros e consegue respirar debaixo d\'água.' },
      { level: 6, name: 'Bobina Oceânica', description: 'Seu tentáculo pode usar reação para absorver dano desferido contra você ou seus aliados.' },
      { level: 10, name: 'Mergulho Segurado', description: 'Pode conjurar Teleporte Aquático através de poças d\'água para transportar o grupo instantaneamente.' },
      { level: 14, name: 'Presença do Kraken', description: 'Conjura as garras do kraken para estrangular múltiplos inimigos com dano devastador de frio e esmagamento.' }
    ]
  },
  {
    id: 'morto_vivo_bruxo',
    classId: 'bruxo',
    name: 'O Morto-Vivo (The Undead)',
    nameEn: 'The Undead',
    sourceId: 'tcoe',
    description: 'Pacto firmado com uma entidade de morte transcendental como Strahd von Zarovich, Azalin Rex ou o rei lich Vecna.',
    features: [
      { level: 1, name: 'Forma da Pavor', description: 'Assume um aspecto cadavérico terrificante como ação bônus: ganha PV temporários, imunidade a medo e amedronta inimigos que acertar.' },
      { level: 6, name: 'Toque Grave', description: 'Não precisa mais respirar, comer ou beber; converte dano das suas magias para necrótico e adiciona dado extra de dano.' },
      { level: 10, name: 'Cisão Necrótica', description: 'Resistência a dano necrótico (ou imunidade na Forma de Pavor); ao cair a 0 PV explode em trevas retornando a 1 PV.' },
      { level: 14, name: 'Projeção Espiritual', description: 'Separa sua alma incorpórea do corpo físico: voa através de paredes e cura ao causar dano necrótico.' }
    ]
  },
  {
    id: 'imortal',
    classId: 'bruxo',
    name: 'O Imortal (The Undying)',
    nameEn: 'The Undying',
    sourceId: 'scag',
    description: 'Pacto com mestres imortais que desvendaram os segredos de burlar a morte, garantindo vitalidade eterna e resistência a pragas.',
    features: [
      { level: 1, name: 'Entre os Mortos', description: 'Aprende o truque Poupar os Moribundos. Mortos-vivos precisam passar em salvaguarda de Sabedoria para conseguir atacá-lo!' },
      { level: 6, name: 'Desafiar a Morte', description: 'Recupera PV ao ser bem sucedido em salvaguarda contra a morte ou ao estabilizar um aliado.' },
      { level: 10, name: 'Natureza Imorredoura', description: 'Pode prender a respiração indefinidamente e não envelhece mais, imune à senilidade mágica.' },
      { level: 14, name: 'Vida Indestrutível', description: 'Como ação bônus no seu turno, recupera 1d8 + nível de bruxo de PV e pode recolocar membros amputados.' }
    ]
  },

  // --- CLÉRIGO ---
  {
    id: 'dominio_enganacao',
    classId: 'clerigo',
    name: 'Domínio da Enganação / Trapaça (Trickery Domain)',
    nameEn: 'Trickery Domain',
    sourceId: 'phb_2014',
    description: 'Devotos de divindades do caos, ilusão e travessura como Loki, Olidammara ou Tymora, especialistas em duplicatas ilusórias.',
    features: [
      { level: 1, name: 'Bênção do Trapaceiro', description: 'Como ação, toca uma criatura concedendo-lhe vantagem permanente em testes de Furtividade por 1 hora.' },
      { level: 2, name: 'Canalizar Divindade: Invocar Duplicata', description: 'Cria uma duplicata ilusória perfeita de si mesmo para desviar atenção e lançar magias através dela.' },
      { level: 6, name: 'Canalizar Divindade: Manto de Sombras', description: 'Torna-se invisível como ação até o final do seu próximo turno.' },
      { level: 8, name: 'Golpe Divino (Veneno/Psíquico)', description: 'Uma vez por turno adiciona 1d8 de dano elemental ao atingir com arma.' },
      { level: 17, name: 'Duplicata Aprimorada', description: 'Cria até 4 duplicatas simultâneas confundindo completamente os inimigos na batalha.' }
    ]
  },
  {
    id: 'dominio_conhecimento',
    classId: 'clerigo',
    name: 'Domínio do Conhecimento (Knowledge Domain)',
    nameEn: 'Knowledge Domain',
    sourceId: 'phb_2014',
    description: 'Servos de Oghma, Boccob ou Gond que buscam toda a sabedoria do multiverso e leem as mentes dos mortais.',
    features: [
      { level: 1, name: 'Bênção do Conhecimento', description: 'Aprende 2 idiomas adicionais e ganha proficiência e Especialização em duas perícias de erudição.' },
      { level: 2, name: 'Canalizar Divindade: Conhecimento das Eras', description: 'Ganha proficiência instantânea em qualquer perícia ou conjunto de ferramentas por 10 minutos.' },
      { level: 6, name: 'Canalizar Divindade: Ler Mentes', description: 'Lê pensamentos superficiais e pode conjurar Sugestão no alvo sem gastar espaço de magia.' },
      { level: 8, name: 'Conjuração Potente', description: 'Adiciona seu modificador de Sabedoria ao dano causado com qualquer truque de clérigo.' },
      { level: 17, name: 'Visões do Passado', description: 'Toca um objeto ou local e medita para presenciar eventos históricos detalhados ocorridos ali.' }
    ]
  },
  {
    id: 'dominio_natureza',
    classId: 'clerigo',
    name: 'Domínio da Natureza (Nature Domain)',
    nameEn: 'Nature Domain',
    sourceId: 'phb_2014',
    description: 'Protetores dos bosques sagrados sob deuses como Silvanus e Chauntea, comandando a flora, fauna e elementos.',
    features: [
      { level: 1, name: 'Acólito da Natureza', description: 'Aprende um truque de druida, uma perícia natural e ganha proficiência com armaduras pesadas.' },
      { level: 2, name: 'Canalizar Divindade: Encantar Animais e Plantas', description: 'Enfeitiça todas as bestas e plantas em um raio de 9 metros.' },
      { level: 6, name: 'Amortecer Elementos', description: 'Como reação, concede resistência a dano elemental a uma criatura próxima atacada.' },
      { level: 8, name: 'Golpe Divino (Elemental)', description: 'Adiciona 1d8 de dano de Fogo, Frio ou Elétrico aos seus ataques de arma.' }
    ]
  },
  {
    id: 'dominio_arcano',
    classId: 'clerigo',
    name: 'Domínio Arcano (Arcana Domain)',
    nameEn: 'Arcana Domain',
    sourceId: 'scag',
    description: 'União da fé com os mistérios arcanos sob Mystra ou Azuth, dominando truques arcanos e dissipando feitiçarias inimigas.',
    features: [
      { level: 1, name: 'Iniciado Arcano', description: 'Ganha proficiência em Arcanismo e aprende dois truques de Mago que contam como magias de clérigo.' },
      { level: 2, name: 'Canalizar Divindade: Romper Feitiçaria', description: 'Expulsa e bane celestiais, elementais, fadas e ínferos com poder arcano santificado.' },
      { level: 6, name: 'Cura Dissipadora', description: 'Ao curar um aliado com magia, você pode dissipar automaticamente um efeito mágico prejudicial nele!' },
      { level: 8, name: 'Conjuração Potente', description: 'Adiciona seu modificador de Sabedoria ao dano dos seus truques de clérigo.' },
      { level: 17, name: 'Mestre da Magia Arcana', description: 'Aprende uma magia de Mago de 6º, 7º, 8º e 9º nível que passam a ser preparadas permanentemente!' }
    ]
  },
  {
    id: 'dominio_ordem',
    classId: 'clerigo',
    name: 'Domínio da Ordem (Order Domain)',
    nameEn: 'Order Domain',
    sourceId: 'tcoe',
    description: 'Cruzados da lei estrita e disciplina absoluta sob Tyr ou Helm, coordenando ordens marciais imediatas para seus aliados.',
    features: [
      { level: 1, name: 'Voz da Autoridade', description: 'Ao lançar uma magia em um aliado, pode ordenar que ele use a reação para realizar um ataque com arma imediatamente!' },
      { level: 1, name: 'Proficiência Bônus', description: 'Ganha proficiência com armaduras pesadas e na perícia Intimidação ou Persuasão.' },
      { level: 2, name: 'Canalizar Divindade: Demanda da Ordem', description: 'Desarma e enfeitiça múltiplos inimigos em um raio de 9 metros sob sua presença autoritária.' },
      { level: 6, name: 'Comando Encarnado', description: 'Lança magias de encantamento como ação bônus em vez de ação normal.' },
      { level: 8, name: 'Golpe Divino (Psíquico)', description: 'Desfere +1d8 de dano psíquico ao acertar golpes com armas.' }
    ]
  },
  {
    id: 'dominio_morte',
    classId: 'clerigo',
    name: 'Domínio da Morte (Death Domain)',
    nameEn: 'Death Domain',
    sourceId: 'phb_2014',
    description: 'Devotos de Kelemvor, Myrkul ou Nerull que comandam a decadência física, necromancia ofensiva e drenagem vital.',
    features: [
      { level: 1, name: 'Segador', description: 'Aprende um truque de necromancia; quando o lançar em um alvo, pode atingir um segundo alvo adjacente!' },
      { level: 1, name: 'Proficiência Marcial', description: 'Ganha proficiência com todas as armas marciais.' },
      { level: 2, name: 'Canalizar Divindade: Toque da Morte', description: 'Ao acertar um ataque corpo a corpo, causa dano necrótico extra igual a 5 + (2 x nível de clérigo).' },
      { level: 6, name: 'Destruição Inevitável', description: 'O dano necrótico das suas magias e habilidades ignora qualquer resistência do alvo!' },
      { level: 8, name: 'Golpe Divino (Necrótico)', description: 'Adiciona +1d8 de dano necrótico aos seus ataques de arma.' }
    ]
  },

  // --- DRUIDA ---
  {
    id: 'circulo_sonhos',
    classId: 'druida',
    name: 'Círculo dos Sonhos (Circle of Dreams)',
    nameEn: 'Circle of Dreams',
    sourceId: 'xgte',
    description: 'Guardiões dos reinos oníricos feéricos de Faéria, curando feridas através da bênção dos sonhos e criando refúgios seguros.',
    features: [
      { level: 2, name: 'Bálsamo da Corte do Verão', description: 'Reserva de d6s igual ao nível de druida para curar aliados como ação bônus e conceder PV temporários.' },
      { level: 6, name: 'Lareira de Luz e Luar', description: 'Cria uma esfera de refúgio protetor para descanso com +5 em Furtividade e Percepção para o grupo.' },
      { level: 10, name: 'Caminhos Ocultos', description: 'Teleporta a si mesmo a até 18 metros ou um aliado a até 9 metros como ação bônus.' },
      { level: 14, name: 'Sonho Ambulante', description: 'Lança Sonho, Vidência ou Círculo de Teletransporte sem gastar espaços de magia após descansar.' }
    ]
  },
  {
    id: 'circulo_pastor',
    classId: 'druida',
    name: 'Círculo do Pastor (Circle of the Shepherd)',
    nameEn: 'Circle of the Shepherd',
    sourceId: 'xgte',
    description: 'Defensores dedicados dos animais selvagens que invocam espíritos totêmicos ancestrais e fortalecem criaturas convocadas.',
    features: [
      { level: 2, name: 'Língua da Floresta', description: 'Aprende o idioma Silvestre e consegue conversar fluidamente com todos os tipos de animais selvagens.' },
      { level: 2, name: 'Totem Espiritual', description: 'Invoca espírito do Urso (PV temporários), Falcão (vantagem em ataques) ou Unicórnio (cura em área potente).' },
      { level: 6, name: 'Invocador Poderoso', description: 'Criaturas convocadas por suas magias ganham PV aumentados e seus ataques contam como mágicos!' },
      { level: 10, name: 'Espírito Guardião', description: 'Seu totem cura automaticamente qualquer criatura convocada que encerre o turno dentro da área.' }
    ]
  },
  {
    id: 'circulo_mar',
    classId: 'druida',
    name: 'Círculo do Mar (Circle of the Sea)',
    nameEn: 'Circle of the Sea',
    sourceId: 'phb_2024',
    description: 'Canaliza a violência oceânica, tempestades e ondas colossais através da sua Forma Selvagem.',
    features: [
      { level: 2, name: 'Ira do Mar', description: 'Gasta uso de Forma Selvagem para manifestar uma tempestade ao seu redor que empurra e fere alvos com dano de frio/trovão.' },
      { level: 6, name: 'Navegador Aquático', description: 'Deslocamento de natação igual ao deslocamento e respira na água perfeitamente.' },
      { level: 10, name: 'Forma da Tempestade Oceânica', description: 'Ganha resistência a frio, elétrico e trovão, além de voo propulsionado por ventos costeiros.' }
    ]
  },

  // --- FEITICEIRO ---
  {
    id: 'mecanismo_cosmico',
    classId: 'feiticeiro',
    name: 'Mecanismo Cósmico / Alma Mecânica (Clockwork Soul)',
    nameEn: 'Clockwork Soul',
    sourceId: 'tcoe',
    description: 'Sintonizado com Mecânus e a ordem absoluta do Primus, restaurando o equilíbrio, anulando o caos e construindo escudos de engrenagens.',
    features: [
      { level: 1, name: 'Magia de Mecânus', description: 'Aprende magias adicionais automáticas de ordem, restauração e proteção a cada nível ímpar.' },
      { level: 1, name: 'Restaurar Equilíbrio', description: 'Quando uma criatura for rolar com vantagem ou desvantagem, você anula o efeito como reação!' },
      { level: 6, name: 'Baluarte da Lei', description: 'Gasta pontos de feitiçaria para criar uma blindagem mágica de engrenagens cósmicas que absorve danos no usuário ou aliado.' },
      { level: 14, name: 'Transe da Ordem', description: 'Por 1 minuto nenhum ataque contra você tem vantagem e qualquer rolagem de d20 sua abaixo de 9 é tratada como um 10 natural!' }
    ]
  },
  {
    id: 'sombras_feiticeiro',
    classId: 'feiticeiro',
    name: 'Feitiçaria das Sombras (Shadow Magic)',
    nameEn: 'Shadow Magic',
    sourceId: 'xgte',
    description: 'Imbuído com as sombras gélidas do Pendor das Sombras, com olhos que enxergam na escuridão pura e mastins fantasmagóricos.',
    features: [
      { level: 1, name: 'Olhos da Noite', description: 'Visão no Escuro de 36 metros e pode conjurar a magia Escuridão usando 2 pontos de feitiçaria, enxergando através dela!' },
      { level: 1, name: 'Força da Sepultura', description: 'Ao cair a 0 PV, realiza salvaguarda de Carisma para não cair inconsciente e retornar com 1 PV.' },
      { level: 6, name: 'Cão da Má Agouro', description: 'Conjura um cão espectral de sombras sombrias para perseguir um alvo e impor-lhe desvantagem em salvaguardas!' },
      { level: 14, name: 'Passo das Sombras', description: 'Teleporta-se de uma sombra para outra a até 36 metros como ação bônus sem custo de magia!' }
    ]
  },
  {
    id: 'tempestade_feiticeiro',
    classId: 'feiticeiro',
    name: 'Feitiçaria da Tempestade (Storm Sorcery)',
    nameEn: 'Storm Sorcery',
    sourceId: 'xgte',
    description: 'Herdeiro dos vendavais e trovões elementais, comandando o vento para planar pelo ar e desferir relâmpagos retaliatórios.',
    features: [
      { level: 1, name: 'Magia Tempestuosa', description: 'Sempre que lançar uma magia de 1º nível ou superior, pode voar 3 metros como ação bônus sem provocar ataques de oportunidade.' },
      { level: 6, name: 'Coração da Tempestade', description: 'Resistência a dano elétrico e de trovão; eletrocuta inimigos próximos ao lançar magias temáticas.' },
      { level: 6, name: 'Guia do Vento', description: 'Controla a chuva e ventos leves ao redor; pode desviar trajetórias de setas e rajadas com o pensamento.' },
      { level: 14, name: 'Fúria da Tempestade', description: 'Ao ser atingido corpo a corpo, retalia com dano elétrico massivo e arremessa o atacante a até 6 metros!' }
    ]
  },

  // --- GUERREIRO ---
  {
    id: 'arqueiro_arcano',
    classId: 'guerreiro',
    name: 'Arqueiro Arcano (Arcane Archer)',
    nameEn: 'Arcane Archer',
    sourceId: 'xgte',
    description: 'Mestres de tradições élficas ancestrais que tecem feitiçaria em cada flecha disparada de seus arcos.',
    features: [
      { level: 3, name: 'Tiro Arcano', description: 'Aprende 2 flechas mágicas (como Tiro Explosivo, Tiro de Sombra ou Tiro Perfurante) para disparar 2x por descanso.' },
      { level: 3, name: 'Tradição do Arqueiro', description: 'Proficiência em Arcanismo ou Natureza e aprende o truque Prestidigitação ou Druidismo.' },
      { level: 7, name: 'Flecha Mágica Curvada', description: 'Se errar um disparo de flecha, pode redirecionar a flecha como ação bônus para outro alvo a até 18 metros!' },
      { level: 15, name: 'Disparo Sempre Pronto', description: 'Ao rolar iniciativa sem tiros arcanos restantes, você recupera automaticamente 1 uso de Tiro Arcano.' }
    ]
  },
  {
    id: 'cavaleiro',
    classId: 'guerreiro',
    name: 'Cavaleiro / Cavalier (Cavalier)',
    nameEn: 'Cavalier',
    sourceId: 'xgte',
    description: 'Especialista em montaria e guarda-costas marcial supremo, interceptando golpes e punindo quem ousa atacar seus companheiros.',
    features: [
      { level: 3, name: 'Nascido na Sela', description: 'Montar ou desmontar custa apenas 1,5m de movimento; vantagem em testes para não cair da montaria.' },
      { level: 3, name: 'Marca Inabalável', description: 'Ao atingir uma criatura, você a marca: ela sofre desvantagem em ataques contra outros alvos que não você!' },
      { level: 7, name: 'Guarda do Protetor', description: 'Como reação, ergue seu escudo/arma para somar 1d8 à CA de um aliado adjacente ou reduzir o dano sofrido.' },
      { level: 10, name: 'Retaliação Rápida', description: 'Desfere ataque de oportunidade adicional quando inimigos se movem ou agridem aliados perto de você.' }
    ]
  },
  {
    id: 'cavaleiro_dragao_purpura',
    classId: 'guerreiro',
    name: 'Cavaleiro do Dragão Púrpura / Estandarte (Banneret)',
    nameEn: 'Purple Dragon Knight / Banneret',
    sourceId: 'scag',
    description: 'Líderes heróicos e cavaleiros de Cormyr que inspiram seus comandados na batalha e compartilham suas dádivas guerreiras.',
    features: [
      { level: 3, name: 'Grito de Reagrupamento', description: 'Ao usar Retomar o Fôlego, até 3 aliados próximos recuperam pontos de vida iguais ao seu nível de guerreiro!' },
      { level: 7, name: 'Emissário Real', description: 'Proficiência e Especialização na perícia Persuasão.' },
      { level: 10, name: 'Ataque Inspirador', description: 'Ao usar Surto de Ação, concede um ataque com arma imediato como reação para um aliado à sua escolha.' },
      { level: 15, name: 'Bastião Inabalável', description: 'Ao usar Indomável para repetir uma salvaguarda, um aliado que falhou no mesmo efeito também pode repetir o teste!' }
    ]
  },

  // --- LADINO ---
  {
    id: 'inquisitivo',
    classId: 'ladino',
    name: 'Inquisitivo (Inquisitive)',
    nameEn: 'Inquisitive',
    sourceId: 'xgte',
    description: 'Detetives brilhantes com olhos aguçados para desmascarar fraudes, ler intenções e desferir Ataques Furtivos através de pura dedução.',
    features: [
      { level: 3, name: 'Olho para o Detalhe', description: 'Pode usar ação bônus para fazer testes de Percepção para localizar criaturas ocultas ou Investigação para pistas.' },
      { level: 3, name: 'Luta Perspicaz', description: 'Rola Intuição contestada contra Enganação de um alvo; se vencer, pode aplicar Ataque Furtivo nele por 1 minuto sem precisar de vantagem!' },
      { level: 9, name: 'Olho Firme', description: 'Vantagem em Percepção e Investigação se você não se mover mais do que a metade do seu deslocamento.' },
      { level: 17, name: 'Mente Analítica Infalível', description: 'Seu dano de Ataque Furtivo aumenta em +3d6 contra alvos estudados pela sua Luta Perspicaz.' }
    ]
  },
  {
    id: 'mentor',
    classId: 'ladino',
    name: 'Mentor / Estrategista (Mastermind)',
    nameEn: 'Mastermind',
    sourceId: 'xgte',
    description: 'Mestres da intriga palaciana, manipulação verbal e comando tático, auxiliando companheiros à distância com precisão cirúrgica.',
    features: [
      { level: 3, name: 'Mestre da Intriga', description: 'Proficiência com kit de disfarce, kit de falsificação, um jogo e aprende 2 idiomas. Pode imitar sotaques com perfeição.' },
      { level: 3, name: 'Mestre de Táticas', description: 'Pode usar a ação de Ajudar como ação bônus e a até 9 metros de distância para dar vantagem no ataque de um aliado!' },
      { level: 9, name: 'Manipulador Perspicaz', description: 'Estuda um alvo por 1 minuto para deduzir seus atributos mentais em comparação com os seus.' },
      { level: 17, name: 'Cadeia de Mentiras Impenetrável', description: 'Sua mente não pode ser lida por telepatia nem por magia; imune a ser compelido a dizer a verdade.' }
    ]
  },
  {
    id: 'batedor',
    classId: 'ladino',
    name: 'Batedor (Scout)',
    nameEn: 'Scout',
    sourceId: 'xgte',
    description: 'Especialista em sobrevivência, florestas e táticas de guerrilha móvel, esquivando-se de inimigos que tentem encurralá-lo.',
    features: [
      { level: 3, name: 'Sobrevivente', description: 'Ganha proficiência e Especialização automática nas perícias Natureza e Sobrevivência.' },
      { level: 3, name: 'Escaramuça', description: 'Como reação quando um inimigo encerra o turno a até 1,5m de você, você se move até a metade do seu deslocamento sem provocar ataques!' },
      { level: 9, name: 'Mobilidade Superior', description: 'Seu deslocamento a pé e de escalada aumentam permanentemente em +3 metros.' },
      { level: 13, name: 'Mestre da Emboscada', description: 'Vantagem na rolagem de iniciativa; o primeiro ataque contra cada alvo na primeira rodada dá vantagem aos aliados.' },
      { level: 17, name: 'Ataque Repentino', description: 'Pode realizar um Ataque Furtivo adicional com ação bônus no mesmo turno se mirar em alvos diferentes!' }
    ]
  },

  // --- MAGO ---
  {
    id: 'escola_conjuracao',
    classId: 'mago',
    name: 'Escola de Conjuração (School of Conjuration)',
    nameEn: 'School of Conjuration',
    sourceId: 'phb_2014',
    description: 'Especialistas em materializar objetos do éter e transportar seres vivos através de portais instantâneos.',
    features: [
      { level: 2, name: 'Conjuração Menor', description: 'Como ação, cria um objeto inanimado não mágico à sua escolha de até 4,5 kg na sua mão ou no chão.' },
      { level: 6, name: 'Transposição Benigna', description: 'Teleporta-se a até 9 metros ou troca de lugar instantaneamente com um aliado voluntário.' },
      { level: 10, name: 'Conjuração Focada', description: 'Sua concentração em magias de conjuração não pode ser quebrada ao sofrer dano!' },
      { level: 14, name: 'Invocações Duradouras', description: 'Qualquer criatura que você convocar ou criar com magia ganha 30 pontos de vida temporários.' }
    ]
  },
  {
    id: 'escola_encantamento',
    classId: 'mago',
    name: 'Escola de Encantamento (School of Enchantment)',
    nameEn: 'School of Enchantment',
    sourceId: 'phb_2014',
    description: 'Mestres de enfeitiçar mentes, paralisando adversários com o olhar e alterando as memórias de quem os cerca.',
    features: [
      { level: 2, name: 'Olhar Hipnótico', description: 'Como ação, hipnotiza uma criatura a até 1,5m que fica Incapacitada e com velocidade 0 enquanto mantiver o olhar.' },
      { level: 6, name: 'Charme Instintivo', description: 'Como reação ao ser atacado por criatura próxima, redireciona o golpe para outro alvo adjacente.' },
      { level: 10, name: 'Encantamento Dividido', description: 'Ao conjurar uma magia de encantamento de 1º nível ou superior que mire 1 alvo, pode mirar 2 alvos simultaneamente!' },
      { level: 14, name: 'Modificar Memória Alterada', description: 'Criaturas enfeitiçadas por você não percebem que foram enfeitiçadas e você pode apagar memórias do evento.' }
    ]
  },
  {
    id: 'escola_ilusao',
    classId: 'mago',
    name: 'Escola de Ilusão (School of Illusion)',
    nameEn: 'School of Illusion',
    sourceId: 'phb_2014',
    description: 'Enganadores da percepção que tornam miragens tangíveis e moldam a realidade através da luz e sombra.',
    features: [
      { level: 2, name: 'Ilusão Aprimorada', description: 'Aprende o truque Ilusão Menor; pode criar som e imagem simultaneamente num único lançamento.' },
      { level: 6, name: 'Ilusões Maleáveis', description: 'Depois de conjurar uma magia de ilusão contínua, pode mudar a natureza da ilusão como uma ação.' },
      { level: 10, name: 'Duplicata Ilusória', description: 'Como reação ao sofrer um ataque, cria uma cópia ilusória que faz o golpe errar automaticamente!' },
      { level: 14, name: 'Realidade Ilusória', description: 'Pode escolher um objeto não mágico inanimado dentro de uma ilusão sua e torná-lo fisicamente real por 1 minuto!' }
    ]
  },
  {
    id: 'escola_necromancia',
    classId: 'mago',
    name: 'Escola de Necromancia (School of Necromancy)',
    nameEn: 'School of Necromancy',
    sourceId: 'phb_2014',
    description: 'Estudiosos das energias vitais e da morte que erguem legiões de esqueletos e zumbis incansáveis sob seu comando.',
    features: [
      { level: 2, name: 'Colheita Sombria', description: 'Uma vez por turno ao abater uma criatura com magia, recupera PV iguais ao dobro (ou triplo) do nível da magia.' },
      { level: 6, name: 'Guerreiros Mortos-Vivos', description: 'Aprende a magia Animar os Mortos; seus mortos-vivos criados têm PV aumentados e somam seu bônus de proficiência ao dano!' },
      { level: 10, name: 'Inured to Undeath', description: 'Resistência a dano necrótico e seu total de pontos de vida máximos não pode ser reduzido por nenhum meio.' },
      { level: 14, name: 'Comandar Mortos-Vivos', description: 'Como ação, tenta dobrar e controlar permanentemente qualquer morto-vivo sob sua vontade (salvaguarda de Carisma).' }
    ]
  },
  {
    id: 'escola_transmutacao',
    classId: 'mago',
    name: 'Escola de Transmutação (School of Transmutation)',
    nameEn: 'School of Transmutation',
    sourceId: 'phb_2014',
    description: 'Alquimistas arcanos que transformam substâncias, forjam a lendária Pedra do Transmutador e transmutam sua própria carne.',
    features: [
      { level: 2, name: 'Alquimia Menor', description: 'Converte temporariamente madeira, pedra, ferro, cobre ou prata de um objeto em outro desses materiais.' },
      { level: 6, name: 'Pedra do Transmutador', description: 'Cria uma pedra mágica que concede benefício contínuo: Visão no Escuro, +3m velocidade, proficiência em salvaguarda de CON ou resistência elemental.' },
      { level: 10, name: 'Metamorfoseador', description: 'Conjura a magia Metamorfose em si mesmo sem gastar espaço de magia para virar uma besta de ND 1 ou menor.' },
      { level: 14, name: 'Mestre Transmutador', description: 'Destrói sua pedra para: restaurar juventude, ressuscitar criatura morta, curar todas as doenças e ferimentos ou transmutar matéria total!' }
    ]
  },
  {
    id: 'magia_guerra',
    classId: 'mago',
    name: 'Magia de Guerra (War Magic)',
    nameEn: 'War Magic',
    sourceId: 'xgte',
    description: 'Doutrina bélica rigorosa que combina técnicas ofensivas de evocação com defesas reflexivas impenetráveis de abjuração.',
    features: [
      { level: 2, name: 'Deflexão Arcana', description: 'Como reação ao ser atingido ou falhar em salvaguarda, ganha +2 na CA ou +4 na salvaguarda!' },
      { level: 2, name: 'Inteligência Tática', description: 'Adiciona seu modificador de Inteligência à sua rolagem de iniciativa de combate.' },
      { level: 6, name: 'Surto de Poder', description: 'Ao dissipar magias ou anular feitiços inimigos, acumula surtos para causar dano de força extra em seus ataques.' },
      { level: 10, name: 'Magia Durável', description: 'Enquanto mantiver concentração em uma magia, ganha +2 de bônus contínuo na CA e em todas as salvaguardas!' }
    ]
  },
  {
    id: 'cronurgia',
    classId: 'mago',
    name: 'Magia da Cronurgia (Chronurgy Magic)',
    nameEn: 'Chronurgy Magic',
    sourceId: 'tcoe',
    description: 'Manipuladores do fluxo temporal de Exandria, retrocedendo segundos para alterar o destino e congelando inimigos no tempo.',
    features: [
      { level: 2, name: 'Mudança Temporal', description: 'Como reação quando uma criatura a até 9m rolar um d20, força-a a rolar novamente e usar a nova rolagem (2x por descanso).' },
      { level: 2, name: 'Consciência Temporal', description: 'Soma seu modificador de Inteligência à rolagem de iniciativa.' },
      { level: 6, name: 'Estase Momentânea', description: 'Como ação, prende uma criatura em uma esfera temporal paralisante até o final do seu próximo turno.' },
      { level: 10, name: 'Esfera Mágica Condensada', description: 'Armazena uma magia de 4º nível ou inferior numa pequena conta cinzenta para ser lançada por qualquer pessoa!' }
    ]
  },
  {
    id: 'graviturgia',
    classId: 'mago',
    name: 'Magia da Graviturgia (Graviturgy Magic)',
    nameEn: 'Graviturgy Magic',
    sourceId: 'tcoe',
    description: 'Mestres dos campos gravitacionais, atraindo e repelindo matéria para esmagar oponentes e alterar a densidade dos corpos.',
    features: [
      { level: 2, name: 'Ajustar Densidade', description: 'Como ação, dobra ou divide pela metade o peso e tamanho aparente de uma criatura ou objeto por 1 minuto.' },
      { level: 6, name: 'Atração Gravitacional', description: 'Ao atingir uma criatura com magia, pode puxá-la ou empurrá-la em até 1,5m em qualquer direção.' },
      { level: 10, name: 'Poço Gravitacional Violento', description: 'Causa dano de impacto adicional de 2d10 sempre que mover criaturas involuntariamente com suas magias.' }
    ]
  },

  // --- MONGE ---
  {
    id: 'dragao_ascendente',
    classId: 'monge',
    name: 'Caminho do Dragão Ascendente (Way of the Ascendant Dragon)',
    nameEn: 'Way of the Ascendant Dragon',
    sourceId: 'ftd',
    description: 'Transmuta seu Ki na fúria de dragões cromáticos e metálicos, disparando sopros elementais e voando com asas dracônicas.',
    features: [
      { level: 3, name: 'Sopro Dracônico', description: 'Substitui um ataque desarmado por um sopro elemental em cone de 6m ou linha de 9m (Ácido, Fogo, Frio, Elétrico ou Veneno).' },
      { level: 3, name: 'Presença Dracônica', description: 'Concede vantagem em testes de Intimidação ou Persuasão usando o poder do dragão.' },
      { level: 6, name: 'Asas Desdobradas', description: 'Ao usar Passo do Vento, manifesta asas dracônicas fantasmagóricas e ganha deslocamento de voo até o fim do turno.' },
      { level: 11, name: 'Aspecto de Terror', description: 'Emana uma aura dracônica de 3m que aterroriza inimigos ou concede resistência elemental aos seus aliados.' }
    ]
  },
  {
    id: 'eu_astral',
    classId: 'monge',
    name: 'Caminho do Eu Astral (Way of the Astral Self)',
    nameEn: 'Way of the Astral Self',
    sourceId: 'tcoe',
    description: 'Materializa sua alma e espírito na forma de braços, máscara e armadura espectrais de puro Ki translúcido.',
    features: [
      { level: 3, name: 'Braços do Eu Astral', description: 'Ação bônus para manifestar braços astrais: usa Sabedoria para testes de Força e ataques, alcance +1,5m e dano de Energia pura.' },
      { level: 6, name: 'Visagem do Eu Astral', description: 'Manifesta uma máscara espectral: enxerga na escuridão mágica e sua voz é ouvida a até 180 metros.' },
      { level: 11, name: 'Corpo do Eu Astral', description: 'Desfere 3 ataques com Rajada de Golpes e pode defletir danos elementais com sua armadura espiritual.' },
      { level: 17, name: 'Despertar Astral Completo', description: 'Manifestação astral suprema: +2 na CA e desfere mais um ataque adicional a cada turno!' }
    ]
  },
  {
    id: 'mestre_bebado',
    classId: 'monge',
    name: 'Caminho do Mestre Bêbado (Way of the Drunken Master)',
    nameEn: 'Way of the Drunken Master',
    sourceId: 'xgte',
    description: 'Imita os passos cambaleantes de um ébrio com movimentos imprevisíveis, esquivando-se de cercos e contra-atacando em turbilhão.',
    features: [
      { level: 3, name: 'Técnica do Ébrio', description: 'Ao usar Rajada de Golpes, ganha os benefícios da ação Desengajar e seu deslocamento aumenta em +3 metros.' },
      { level: 3, name: 'Proficiência Bônus', description: 'Ganha proficiência na perícia Atuação e com suprimentos de cervejeiro.' },
      { level: 6, name: 'Gingado Cambaleante', description: 'Levantar-se de caído custa apenas 1,5m de movimento; quando um inimigo errar um ataque contra você, pode fazê-lo acertar outro inimigo adjacente!' },
      { level: 11, name: 'Sorte do Bêbado', description: 'Gasta 2 pontos de Ki para cancelar qualquer desvantagem em um teste de d20 que realizar.' }
    ]
  },
  {
    id: 'quatro_elementos',
    classId: 'monge',
    name: 'Caminho dos Quatro Elementos (Way of the Four Elements)',
    nameEn: 'Way of the Four Elements',
    sourceId: 'phb_2014',
    description: 'Dobra e manipula os quatro elementos primordiais — Fogo, Água, Terra e Ar — desferindo rajadas elementais com seu Ki.',
    features: [
      { level: 3, name: 'Discípulo dos Elementos', description: 'Aprende disciplinas elementais (como Presas do Dragão de Fogo, Chicote d\'Água ou Varrer com o Vento) gastando Ki para lançá-las.' },
      { level: 6, name: 'Disciplinas Elementais do 6º', description: 'Desbloqueia poderes como Punho dos Quatro Trovões ou Abraço Esmagador da Terra.' },
      { level: 11, name: 'Chamas da Fênix', description: 'Pode conjurar Bola de Fogo e outras magias destrutivas avançadas canalizando Ki primordial.' },
      { level: 17, name: 'Forma dos Rios e Nuvens', description: 'Transforma seu corpo em névoa elemental ou rajadas cósmicas devastadoras.' }
    ]
  },
  {
    id: 'alma_sol',
    classId: 'monge',
    name: 'Caminho da Alma do Sol (Way of the Sun Soul)',
    nameEn: 'Way of the Sun Soul',
    sourceId: 'xgte',
    description: 'Canalizadores da luz radiante do sol interior, disparando dardos de energia luminosa e explosões solares à distância.',
    features: [
      { level: 3, name: 'Projétil Solar Radiante', description: 'Dispara raios de luz radiante a até 9 metros usando a ação de Ataque com dano de artes marciais.' },
      { level: 6, name: 'Golpe do Arco Ardente', description: 'Após usar a ação de Ataque, pode gastar 2 pontos de Ki para lançar Mãos Flamejantes como ação bônus.' },
      { level: 11, name: 'Explosão Solar Abrasadora', description: 'Cria uma esfera de luz estelar a até 45 metros causando dano radiante em área.' },
      { level: 17, name: 'Escudo do Sol Radiante', description: 'Emana uma aura brilhante que causa retaliação radiante a qualquer um que o ataque corpo a corpo.' }
    ]
  },
  {
    id: 'morte_longa',
    classId: 'monge',
    name: 'Caminho da Morte Longa (Way of the Long Death)',
    nameEn: 'Way of the Long Death',
    sourceId: 'scag',
    description: 'Monges obcecados pelos mistérios da morte que absorvem a força vital de criaturas abatidas e recusam-se a sucumbir.',
    features: [
      { level: 3, name: 'Toque da Morte', description: 'Ao abater uma criatura a até 1,5m de você, ganha pontos de vida temporários iguais ao mod Sabedoria + nível de monge.' },
      { level: 6, name: 'Hora do Pavor', description: 'Como ação, manifesta uma presença aterradora que amedronta todas as criaturas a até 9 metros.' },
      { level: 11, name: 'Mestria da Morte', description: 'Ao cair a 0 PV, pode gastar 1 ponto de Ki para cair para 1 PV em vez disso!' },
      { level: 17, name: 'Toque da Extinção Cósmica', description: 'Toca uma criatura gastando até 10 pontos de Ki para causar dano necrótico avassalador de até 20d10!' }
    ]
  },

  // --- PALADINO ---
  {
    id: 'juramento_gloria',
    classId: 'paladino',
    name: 'Juramento da Glória (Oath of Glory)',
    nameEn: 'Oath of Glory',
    sourceId: 'tcoe',
    description: 'Heróis lendários movidos pela busca da imortalidade através de feitos épicos, atletismo descomunal e inspiração aos companheiros.',
    features: [
      { level: 3, name: 'Canalizar Divindade: Atleta Incomparável', description: 'Concede vantagem em testes de Força e Atletismo, além de dobrar a distância dos seus saltos por 10 minutos.' },
      { level: 3, name: 'Canalizar Divindade: Golpe Conquistador', description: 'Ao acertar um Destruição Divina, concede pontos de vida temporários distribuídos aos aliados.' },
      { level: 7, name: 'Aura de Rapidez', description: 'Seu deslocamento e o de todos os aliados a até 3 metros de você aumentam em +3 metros!' },
      { level: 15, name: 'Defesa Gloriosa', description: 'Como reação quando você ou um aliado for atacado, adiciona mod CAR na CA e pode contra-atacar se o golpe errar!' },
      { level: 20, name: 'Lenda Viva', description: 'Assume a forma de semideus glorioso: vantagem em testes de Carisma, acertos transformados em sucessos e proteção divina.' }
    ]
  },
  {
    id: 'juramento_redencao',
    classId: 'paladino',
    name: 'Juramento de Redenção (Oath of Redemption)',
    nameEn: 'Oath of Redemption',
    sourceId: 'xgte',
    description: 'Diplomatas sagrados que pregam a paz e a misericórdia, usando a violência apenas como último recurso e protegendo com o próprio corpo.',
    features: [
      { level: 3, name: 'Canalizar Divindade: Emissário da Paz', description: 'Recebe um bônus sagrado de +5 em testes de Carisma (Persuasão) pelos próximos 10 minutos.' },
      { level: 3, name: 'Canalizar Divindade: Repelir Violência', description: 'Como reação quando um atacante fere um aliado, devolve o mesmo dano sofrido diretamente ao atacante!' },
      { level: 7, name: 'Aura do Guardião', description: 'Como reação quando um aliado a até 3m sofre dano, você toma o dano magicamente para si no lugar dele.' },
      { level: 15, name: 'Espírito Protetor', description: 'Recupera pontos de vida automaticamente a cada turno se estiver com menos da metade da vida.' }
    ]
  },
  {
    id: 'juramento_sentinelas',
    classId: 'paladino',
    name: 'Juramento dos Sentinelas (Oath of the Watchers)',
    nameEn: 'Oath of the Watchers',
    sourceId: 'tcoe',
    description: 'Guardiões juramentados contra invasões planares de aberrações, ínferos e fadas, com sentidos aguçados e reflexos anti-magia.',
    features: [
      { level: 3, name: 'Canalizar Divindade: Vontade do Sentinela', description: 'Concede a si e a aliados vantagem em todas as salvaguardas de Inteligência, Sabedoria e Carisma por 1 minuto.' },
      { level: 3, name: 'Canalizar Divindade: Repelir os Extraplanares', description: 'Expulsa aberrações, celestiais, elementais, fadas e ínferos como Canalizar Divindade.' },
      { level: 7, name: 'Aura do Sentinela', description: 'Você e seus aliados dentro da aura somam seu bônus de proficiência à jogada de iniciativa!' },
      { level: 15, name: 'Represália do Vigilante', description: 'Quando você ou um aliado passa em uma salvaguarda contra magia, retalia o conjurador com dano de energia.' }
    ]
  },
  {
    id: 'juramento_coroa',
    classId: 'paladino',
    name: 'Juramento da Coroa (Oath of the Crown)',
    nameEn: 'Oath of the Crown',
    sourceId: 'scag',
    description: 'Defensores da ordem cívica, do rei e das leis civilizadas, mantendo formações defensivas inabaláveis.',
    features: [
      { level: 3, name: 'Canalizar Divindade: Desafio dos Campeões', description: 'Impede inimigos a até 9 metros de se afastarem mais do que essa distância de você.' },
      { level: 3, name: 'Canalizar Divindade: Maré de Revigoramento', description: 'Cura todos os aliados com menos da metade dos PV como ação bônus.' },
      { level: 7, name: 'Fidelidade Divina', description: 'Como reação, absorve para si o dano infligido a um aliado adjacente.' }
    ]
  },
  {
    id: 'quebrador_juramento',
    classId: 'paladino',
    name: 'Quebrador de Juramento (Oathbreaker)',
    nameEn: 'Oathbreaker',
    sourceId: 'phb_2014',
    description: 'Paladinos corrompidos pela escuridão que traíram seus votos sagrados em favor de ambições malignas e necromancia tirânica.',
    features: [
      { level: 3, name: 'Canalizar Divindade: Controlar Morto-Vivo', description: 'Subjuga um morto-vivo hostil sob sua vontade incondicional por 24 horas.' },
      { level: 3, name: 'Canalizar Divindade: Aspecto do Pavor', description: 'Emana trevas que amedrontam criaturas em um raio de 9 metros por 1 minuto.' },
      { level: 7, name: 'Aura de Ódio', description: 'Você e todos os ínferos ou mortos-vivos aliados na aura somam seu modificador de Carisma ao dano com armas!' },
      { level: 15, name: 'Resistência Sobrenatural', description: 'Resistência a dano cortante, perfurante e contundente de ataques não mágicos.' }
    ]
  },

  // --- PATRULHEIRO ---
  {
    id: 'mestre_bestas',
    classId: 'patrulheiro',
    name: 'Mestre das Bestas (Beast Master)',
    nameEn: 'Beast Master',
    sourceId: 'phb_2014',
    description: 'Forma um vínculo místico com um companheiro animal lendário que luta e viaja ao seu lado com lealdade inabalável.',
    features: [
      { level: 3, name: 'Companheiro do Patrulheiro / Espírito Bestial', description: 'Ganha um companheiro animal leal (da Terra, do Céu ou do Mar) que obedece seus comandos de ataque com ação bônus e soma seu bônus de proficiência na CA, acerto e dano.' },
      { level: 7, name: 'Treinamento Excepcional', description: 'Se o companheiro animal não atacar, você pode comandá-lo com ação bônus para Disparar, Desengajar ou Ajudar.' },
      { level: 11, name: 'Fúria Bestial', description: 'Seu companheiro animal pode desferir dois ataques quando você o comanda a realizar a ação de Ataque!' },
      { level: 15, name: 'Compartilhar Magias', description: 'Sempre que você lançar uma magia com alcance pessoal em si mesmo, a magia também afeta seu animal companheiro!' }
    ]
  },
  {
    id: 'guardiao_enxames',
    classId: 'patrulheiro',
    name: 'Guardião dos Enxames (Swarmkeeper)',
    nameEn: 'Swarmkeeper',
    sourceId: 'tcoe',
    description: 'Conecta-se com a natureza profunda para abrigar um enxame mágico de espíritos (insetos, fadas, gravetos ou pássaros) que auxiliam em combate.',
    features: [
      { level: 3, name: 'Enxame Reunido', description: 'Uma vez em cada turno ao acertar um ataque, seu enxame causa 1d6 de dano perfurante, empurra o alvo em 4,5m ou move você em 1,5m.' },
      { level: 3, name: 'Magias do Enxame', description: 'Aprende magias adicionais: Mãos Mágicas, Fogo das Fadas, Teia e Forma Gasosa.' },
      { level: 7, name: 'Maré Rastejante', description: 'Como ação bônus, seu enxame o ergue concedendo voo de 3 metros e levitação por 1 minuto.' },
      { level: 11, name: 'Enxame Poderoso', description: 'O dano do seu enxame sobe para 1d8, derruba inimigos no chão ou concede meia-cobertura a você quando se teletransporta.' },
      { level: 15, name: 'Dissipação do Enxame', description: 'Como reação ao sofrer dano, desfaz-se no meio do enxame para ganhar resistência e teleportar-se a até 9 metros!' }
    ]
  },
  {
    id: 'andarilho_horizonte',
    classId: 'patrulheiro',
    name: 'Andarilho do Horizonte (Horizon Walker)',
    nameEn: 'Horizon Walker',
    sourceId: 'xgte',
    description: 'Guardião das fronteiras dimensionais que protege o Plano Material contra ameaças extraplanares e salta pelo éter em combate.',
    features: [
      { level: 3, name: 'Magia de Andarilho do Horizonte', description: 'Aprende magias planares como Passo Nebuloso, Projeção Etérea e Banimento.' },
      { level: 3, name: 'Guerreiro Etéreo', description: 'Como ação bônus, converte todo o dano do seu próximo ataque com arma em dano de Energia pura e adiciona +1d8 (2d8 no nvl 11) de dano!' },
      { level: 3, name: 'Detectar Portais', description: 'Como ação, detecta a distância e direção exata do portal planar mais próximo a até 1,5 km.' },
      { level: 7, name: 'Passo Etéreo', description: 'Como ação bônus, viaja temporariamente para o Plano Etéreo até o final do turno atual.' },
      { level: 11, name: 'Golpe Distante', description: 'Ao realizar a ação de Ataque, pode teleportar-se até 3 metros antes de cada ataque e desferir um terceiro ataque bônus se mirar em três alvos!' }
    ]
  },
  {
    id: 'matador_monstros',
    classId: 'patrulheiro',
    name: 'Matador de Monstros (Monster Slayer)',
    nameEn: 'Monster Slayer',
    sourceId: 'xgte',
    description: 'Especialista em caçar aberrações, vampiros, dragões e magos sombrios, anulando magias e salvaguardas inimigas.',
    features: [
      { level: 3, name: 'Senso de Caçador', description: 'Como ação, estuda uma criatura a até 18m para descobrir imediatamente todas as suas imunidades, resistências e vulnerabilidades!' },
      { level: 3, name: 'Presa do Matador', description: 'Como ação bônus, marca uma criatura para sofrer +1d6 de dano no primeiro golpe com arma que você desferir contra ela a cada turno.' },
      { level: 7, name: 'Defesa Sobrenatural', description: 'Soma +1d6 a qualquer salvaguarda que você fizer contra magias ou habilidades da criatura marcada.' },
      { level: 11, name: 'Nêmesis do Conjurador', description: 'Como reação quando a presa conjurar uma magia ou se teleportar, força-a a falhar no lançamento com salvaguarda de Sabedoria!' }
    ]
  },
  {
    id: 'guardiao_dragoes',
    classId: 'patrulheiro',
    name: 'Guardião dos Dragões (Drakewarden)',
    nameEn: 'Drakewarden',
    sourceId: 'ftd',
    description: 'Vínculo sagrado com um companheiro dracônico que cresce de um filhote a uma montaria alada colossal que cospe fogo ou gelo.',
    features: [
      { level: 3, name: 'Dádiva Dracônica', description: 'Aprende o truque Taumaturgia ou idioma Dracônico e ganha afinidade elemental à sua escolha.' },
      { level: 3, name: 'Companheiro Dracônico', description: 'Invoca um dragãozinho de companhia que luta em sincronia com você, ataca com ação bônus e adiciona dano elemental aos ataques.' },
      { level: 7, name: 'Asas do Vínculo', description: 'Seu companheiro dracônico cresce para tamanho Médio, ganha asas para voar e você pode montá-lo na batalha!' },
      { level: 11, name: 'Sopro do Dragão', description: 'Você ou seu dragão disparam um devastador cone de 9m ou linha de 18m de dano elemental (8d6 de dano).' },
      { level: 15, name: 'Dragão Perfeito', description: 'Seu dragão se torna Grande, seus sopros aumentam para 10d6 e vocês dois ganham resistência elemental constante.' }
    ]
  }

];

export function getSubclassesByClass(classId) {
  return SUBCLASSES.filter(s => s.classId === classId);
}
