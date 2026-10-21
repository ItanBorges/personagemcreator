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
    name: 'Mestre da Batalha',
    nameEn: 'Battle Master',
    sourceId: 'phb_2024',
    description: 'Estrategista marcial que executa manobras táticas (Derrubar, Desarmar, Riposta, Empurrar) com Dados de Superioridade.',
    features: [
      { level: 3, name: 'Superioridade em Combate', description: 'Ganha 4 dados d8 de superioridade para aplicar em manobras táticas de combate.' }
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
  }
];

export function getSubclassesByClass(classId) {
  return SUBCLASSES.filter(s => s.classId === classId);
}
