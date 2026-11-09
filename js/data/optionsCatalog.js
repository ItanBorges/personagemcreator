/**
 * Catálogo Unificado de Opções de Classes, Subclasses, Talentos e Raças
 * Baseado no D&D 5e (2014) e D&D 5.5 (2024)
 * Referenciado a partir de dnd5e.wikidot.com e Livro do Jogador Oficial
 */

// ============================================================================
// 1. MANOBRAS DE MESTRE DE BATALHA (BATTLE MASTER MANEUVERS)
// ============================================================================
export const MANEUVERS = [
  {
    id: 'aparar',
    name: 'Aparar',
    nameEn: 'Parry',
    type: 'Reação',
    description: 'Quando outra criatura causar dano a você com um ataque corpo a corpo, você pode usar sua reação e gastar um dado de superioridade para reduzir o dano pelo resultado rolado no dado + seu modificador de Destreza.'
  },
  {
    id: 'ataque_ameacador',
    name: 'Ataque Ameaçador',
    nameEn: 'Menacing Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com um ataque de arma, gaste um dado de superioridade para adicionar o valor rolado ao dano. O alvo deve fazer uma salvaguarda de Sabedoria; se falhar, fica Amedrontado até o final do seu próximo turno.'
  },
  {
    id: 'ataque_desarmante',
    name: 'Ataque Desarmante',
    nameEn: 'Disarming Attack',
    type: 'No Acerto',
    description: 'Ao acertar um ataque com arma, gaste um dado de superioridade para somar o resultado ao dano. O alvo deve realizar uma salvaguarda de Força; se falhar, larga um objeto à sua escolha que esteja segurando em suas mãos.'
  },
  {
    id: 'ataque_empurrao',
    name: 'Ataque de Empurrão',
    nameEn: 'Pushing Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma, gaste um dado de superioridade para adicionar o valor ao dano. Se o alvo for de tamanho Grande ou menor, deve fazer uma salvaguarda de Força; se falhar, é empurrado até 4,5 metros (15 pés) para longe de você.'
  },
  {
    id: 'ataque_precisao',
    name: 'Ataque de Precisão',
    nameEn: 'Precision Attack',
    type: 'Na Jogada de Ataque',
    description: 'Ao fazer uma jogada de ataque com arma contra uma criatura, você pode gastar um dado de superioridade para adicionar o valor rolado à jogada de ataque (antes ou depois de ver a rolagem, mas antes de os efeitos se aplicarem).'
  },
  {
    id: 'ataque_varredura',
    name: 'Ataque de Varredura',
    nameEn: 'Sweeping Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma corpo a corpo, gaste um dado de superioridade para escolher outra criatura a até 1,5m do alvo original e ao seu alcance. Se a jogada original acertaria a CA dela, ela sofre dano igual ao valor rolado no dado de superioridade.'
  },
  {
    id: 'ataque_distrativo',
    name: 'Ataque Distrativo',
    nameEn: 'Distracting Strike',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma, gaste um dado de superioridade para somar o valor ao dano. A próxima jogada de ataque feita por um dos seus aliados contra essa criatura antes do início do seu próximo turno tem vantagem.'
  },
  {
    id: 'ataque_provocador',
    name: 'Ataque Provocador',
    nameEn: 'Goading Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma, gaste um dado de superioridade para somar o valor ao dano. O alvo deve fazer uma salvaguarda de Sabedoria; se falhar, tem desvantagem em todas as jogadas de ataque contra qualquer alvo que não seja você até o fim do seu próximo turno.'
  },
  {
    id: 'comandar_aliados',
    name: 'Comandar Aliados',
    nameEn: "Commander's Strike",
    type: 'Ação de Ataque',
    description: 'Ao realizar a Ação de Ataque no seu turno, você pode abdicar de um dos seus ataques para direcionar um companheiro que possa vê-lo ou ouvi-lo. Ele usa uma reação para fazer imediatamente um ataque com arma, somando o seu dado de superioridade à rolagem de dano.'
  },
  {
    id: 'derrubar',
    name: 'Derrubar (Golpe de Rasteira)',
    nameEn: 'Trip Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma, gaste um dado de superioridade para somar o valor ao dano. Se o alvo for de tamanho Grande ou menor, deve fazer uma salvaguarda de Força; se falhar, cai na condição Caído (Prone).'
  },
  {
    id: 'finta',
    name: 'Finta',
    nameEn: 'Feinting Attack',
    type: 'Ação Bônus',
    description: 'Como ação bônus, gaste um dado de superioridade e escolha uma criatura a até 1,5 metro de você. Você ganha vantagem na sua próxima jogada de ataque contra ela neste turno. Se acertar, adiciona o dado de superioridade ao dano.'
  },
  {
    id: 'manobra_ataque',
    name: 'Manobra de Ataque',
    nameEn: 'Maneuvering Attack',
    type: 'No Acerto',
    description: 'Ao acertar uma criatura com arma, gaste um dado de superioridade para somar o valor ao dano. Escolha um aliado amigável que possa vê-lo ou ouvi-lo; ele pode usar sua reação para se mover até metade do seu deslocamento sem provocar ataques de oportunidade do alvo do seu ataque.'
  },
  {
    id: 'riposta',
    name: 'Riposta',
    nameEn: 'Riposte',
    type: 'Reação',
    description: 'Quando uma criatura errar um ataque corpo a corpo contra você, você pode usar sua reação e gastar um dado de superioridade para realizar um ataque com arma corpo a corpo contra ela. Se acertar, adiciona o dado de superioridade à rolagem de dano.'
  },
  {
    id: 'isca_e_troca',
    name: 'Isca e Troca',
    nameEn: 'Bait and Switch',
    type: 'Movimento / Ação',
    description: 'No seu turno, ao estar a até 1,5m de um aliado voluntário, gaste 1,5m do seu deslocamento e um dado de superioridade para trocar de lugar com ele sem provocar ataques de oportunidade. Você ou o aliado (sua escolha) ganha um bônus na CA igual ao valor rolado no dado até o início do seu próximo turno.'
  },
  {
    id: 'passo_tatico',
    name: 'Passo Tático (Avaliação Tática)',
    nameEn: 'Tactical Assessment',
    type: 'Teste de Perícia',
    description: 'Ao realizar um teste de Inteligência (Investigação), Inteligência (História) ou Sabedoria (Intuição), você pode gastar um dado de superioridade e somar o resultado rolado ao total do seu teste.'
  },
  {
    id: 'presenca_comando',
    name: 'Presença de Comando',
    nameEn: 'Commanding Presence',
    type: 'Teste de Perícia',
    description: 'Ao realizar um teste de Carisma (Intimidação), Carisma (Persuasão) ou Carisma (Atuação), você pode gastar um dado de superioridade e somar o valor rolado ao total do teste.'
  },
  {
    id: 'emboscada',
    name: 'Emboscada',
    nameEn: 'Ambush',
    type: 'Iniciativa / Furtividade',
    description: 'Ao realizar um teste de Destreza (Furtividade) ou uma jogada de Iniciativa, você pode gastar um dado de superioridade e somar o número rolado ao resultado do teste, desde que não esteja incapacitado.'
  },
  {
    id: 'arremesso_rapido',
    name: 'Arremesso Rápido',
    nameEn: 'Quick Toss',
    type: 'Ação Bônus',
    description: 'Como uma ação bônus, você pode gastar um dado de superioridade e sacar uma arma com a propriedade Arremesso para desferir um ataque à distância com ela. Se acertar, soma o dado de superioridade ao dano da arma.'
  },
  {
    id: 'passo_evasivo',
    name: 'Passo Evasivo',
    nameEn: 'Evasive Footwork',
    type: 'Movimento',
    description: 'Quando você se mover no seu turno, pode gastar um dado de superioridade, somando o valor rolado à sua Classe de Armadura (CA) até que termine seu movimento atual.'
  }
];

// ============================================================================
// 2. ESTILOS DE LUTA (FIGHTING STYLES)
// ============================================================================
export const FIGHTING_STYLES = [
  {
    id: 'arquearia',
    name: 'Arquearia',
    nameEn: 'Archery',
    description: 'Você ganha um bônus de +2 em todas as jogadas de ataque realizadas com armas de ataque à distância.'
  },
  {
    id: 'defesa',
    name: 'Defesa',
    nameEn: 'Defense',
    description: 'Enquanto estiver usando armadura leve, média ou pesada, você ganha um bônus de +1 na Classe de Armadura (CA).'
  },
  {
    id: 'duelo',
    name: 'Duelo',
    nameEn: 'Dueling',
    description: 'Quando empunhar uma arma de ataque corpo a corpo em uma mão e nenhuma outra arma, você ganha um bônus de +2 nas rolagens de dano dessa arma.'
  },
  {
    id: 'luta_grandes_armas',
    name: 'Luta com Grandes Armas',
    nameEn: 'Great Weapon Fighting',
    description: 'Quando você rolar um 1 ou 2 no dado de dano em um ataque com uma arma de duas mãos ou versátil empunhada com ambas as mãos, pode rolar novamente o dado e deve usar a nova rolagem.'
  },
  {
    id: 'protecao',
    name: 'Proteção',
    nameEn: 'Protection',
    description: 'Quando uma criatura que você possa ver atacar um alvo que não seja você e que esteja a até 1,5 metro de você, você pode usar sua reação para impor desvantagem na jogada de ataque (requer empunhar um escudo).'
  },
  {
    id: 'luta_duas_armas',
    name: 'Luta com Duas Armas',
    nameEn: 'Two-Weapon Fighting',
    description: 'Ao lutar com duas armas leves, você pode adicionar seu modificador de habilidade ao dano do ataque desferido como ação bônus.'
  },
  {
    id: 'luta_cegas',
    name: 'Luta às Cegas',
    nameEn: 'Blind Fighting',
    description: 'Você possui percepção às cegas (Blindsight) com alcance de 3 metros (10 pés). Você pode enxergar criaturas invisíveis ou na escuridão total dentro desse raio.'
  },
  {
    id: 'intercepcao',
    name: 'Intercepção',
    nameEn: 'Interception',
    description: 'Quando uma criatura visível atingir um aliado a até 1,5m com um ataque, use sua reação para reduzir o dano recebido pelo aliado em 1d10 + seu bônus de proficiência (requer escudo ou arma marcial/simples).'
  },
  {
    id: 'luta_desarmada',
    name: 'Luta Desarmada',
    nameEn: 'Unarmed Fighting',
    description: 'Seus ataques desarmados causam 1d6 + mod Força em um acerto, ou 1d8 + mod Força se você não estiver empunhando nenhuma arma ou escudo. Causa 1d4 de dano automático a uma criatura que você agarrar no início do seu turno.'
  },
  {
    id: 'lancamento_armas',
    name: 'Lançamento de Armas',
    nameEn: 'Thrown Weapon Fighting',
    description: 'Você pode sacar uma arma com propriedade Arremesso como parte do ataque realizado com ela. Além disso, ao acertar um ataque à distância com arma de arremesso, ganha +2 de bônus no dano.'
  }
];

// ============================================================================
// 3. METAMAGIA DO FEITICEIRO (METAMAGIC)
// ============================================================================
export const METAMAGIC_OPTIONS = [
  {
    id: 'magia_rapida',
    name: 'Magia Rápida (Acelerada)',
    nameEn: 'Quickened Spell',
    cost: '2 Pontos de Feitiçaria',
    description: 'Ao conjurar uma magia que tenha tempo de conjuração de 1 ação, você pode gastar 2 pontos de feitiçaria para mudar o tempo de conjuração para 1 ação bônus.'
  },
  {
    id: 'magia_duplicada',
    name: 'Magia Duplicada',
    nameEn: 'Twinned Spell',
    cost: 'Pontos = Círculo da Magia (1 para Truque)',
    description: 'Ao conjurar uma magia que tenha como alvo apenas uma criatura e não tenha alcance "Pessoal", você pode gastar pontos de feitiçaria iguais ao círculo da magia para atingir uma segunda criatura ao alcance.'
  },
  {
    id: 'magia_sutil',
    name: 'Magia Sutil',
    nameEn: 'Subtle Spell',
    cost: '1 Ponto de Feitiçaria',
    description: 'Ao conjurar uma magia, você pode gastar 1 ponto de feitiçaria para conjurá-la sem quaisquer componentes verbais (V) ou somáticos (S).'
  },
  {
    id: 'magia_potencializada',
    name: 'Magia Potencializada',
    nameEn: 'Empowered Spell',
    cost: '1 Ponto de Feitiçaria',
    description: 'Ao rolar o dano de uma magia, você pode gastar 1 ponto de feitiçaria para rolar novamente um número de dados de dano até o seu modificador de Carisma (mínimo 1). Você deve usar as novas rolagens.'
  },
  {
    id: 'magia_cuidadosa',
    name: 'Magia Cuidadosa',
    nameEn: 'Careful Spell',
    cost: '1 Ponto de Feitiçaria',
    description: 'Ao conjurar uma magia que force outras criaturas a fazerem salvaguarda, gaste 1 ponto para escolher criaturas até seu mod Carisma; essas criaturas passam automaticamente na salvaguarda.'
  },
  {
    id: 'magia_distante',
    name: 'Magia Distante',
    nameEn: 'Distant Spell',
    cost: '1 Ponto de Feitiçaria',
    description: 'Ao conjurar uma magia com alcance de 1,5m ou mais, gaste 1 ponto para dobrar o alcance. Ao conjurar magia de toque, gaste 1 ponto para torná-la alcance de 9 metros.'
  },
  {
    id: 'magia_estendida',
    name: 'Magia Estendida',
    nameEn: 'Extended Spell',
    cost: '1 Ponto de Feitiçaria',
    description: 'Ao conjurar uma magia com duração de 1 minuto ou mais, você pode gastar 1 ponto de feitiçaria para dobrar sua duração, até um limite máximo de 24 horas.'
  },
  {
    id: 'magia_elevada',
    name: 'Magia Elevada',
    nameEn: 'Heightened Spell',
    cost: '3 Pontos de Feitiçaria',
    description: 'Ao conjurar uma magia que force uma criatura a fazer uma salvaguarda para resistir, gaste 3 pontos para dar desvantagem na primeira salvaguarda feita contra a magia a um alvo.'
  }
];

// ============================================================================
// 4. INVOCAÇÕES SOBRENATURAIS DO BRUXO (ELDRITCH INVOCATIONS)
// ============================================================================
export const ELDRITCH_INVOCATIONS = [
  {
    id: 'rajada_agonizante',
    name: 'Rajada Agonizante',
    nameEn: 'Agonizing Blast',
    req: 'Truque Rajada Mística',
    description: 'Quando conjura Rajada Mística, adicione seu modificador de Carisma ao dano causado em cada acerto bem-sucedido.'
  },
  {
    id: 'armadura_sombras',
    name: 'Armadura de Sombras',
    nameEn: 'Armor of Shadows',
    req: 'Nenhum',
    description: 'Você pode conjurar Armadura Arcana (Mage Armor) em si mesmo à vontade, sem gastar espaços de magia ou componentes materiais.'
  },
  {
    id: 'visao_diabo',
    name: 'Visão do Diabo',
    nameEn: "Devil's Sight",
    req: 'Nenhum',
    description: 'Você pode enxergar normalmente na escuridão, tanto mágica quanto não-mágica, a uma distância de até 36 metros (120 pés).'
  },
  {
    id: 'olhos_guardiao_runas',
    name: 'Olhos do Guardião das Runas',
    nameEn: 'Eyes of the Rune Keeper',
    req: 'Nenhum',
    description: 'Você pode ler e compreender qualquer forma de escrita e idioma existente, mesmo que não os conheça verbalmente.'
  },
  {
    id: 'vigor_fiend',
    name: 'Vigor Mórbido',
    nameEn: 'Fiendish Vigor',
    req: 'Nenhum',
    description: 'Você pode conjurar Vitalidade Falsa (False Life) em si mesmo à vontade como uma magia de 1º círculo, sem gastar espaços de magia ou componentes materiais.'
  },
  {
    id: 'livro_segredos_antigos',
    name: 'Livro dos Segredos Antigos',
    nameEn: 'Book of Ancient Secrets',
    req: 'Pacto do Tomo',
    description: 'Você pode agora inscrever rituais mágicos no seu Livro das Sombras. Escolha duas magias de 1º círculo com descritor de Ritual de qualquer classe; você pode conjurá-las como rituais.'
  },
  {
    id: 'voz_mestre_corrente',
    name: 'Voz do Mestre das Correntes',
    nameEn: 'Voice of the Chain Master',
    req: 'Pacto da Corrente',
    description: 'Você pode se comunicar telepaticamente com seu familiar e perceber seus sentidos enquanto estiverem no mesmo plano de existência.'
  },
  {
    id: 'lamina_sedenta',
    name: 'Lâmina Sedenta',
    nameEn: 'Thirsting Blade',
    req: 'Nível 5, Pacto da Lâmina',
    description: 'Você pode atacar com sua arma de pacto duas vezes, em vez de uma, sempre que realizar a ação de Ataque no seu turno.'
  },
  {
    id: 'passo_feerico',
    name: 'Salto Transcendente',
    nameEn: 'Otherworldly Leap',
    req: 'Nível 9',
    description: 'Você pode conjurar Salto (Jump) em si mesmo à vontade, sem gastar espaços de magia ou componentes materiais.'
  }
];

// ============================================================================
// 5. ESPÍRITOS TOTÊMICOS DO BÁRBARO (TOTEM SPIRITS / WILD HEART)
// ============================================================================
export const TOTEM_SPIRITS = [
  {
    id: 'urso',
    name: 'Espírito do Urso (Bear)',
    description: 'Enquanto estiver em Fúria, você ganha resistência a TODOS os tipos de dano, exceto dano psíquico. O espírito do urso concede tenacidade inabalável.'
  },
  {
    id: 'aguia',
    name: 'Espírito da Águia (Eagle)',
    description: 'Enquanto em Fúria e sem armadura pesada, outras criaturas têm desvantagem em ataques de oportunidade contra você, e você pode usar a ação de Disparada (Dash) como uma Ação Bônus.'
  },
  {
    id: 'lobo',
    name: 'Espírito do Lobo (Wolf)',
    description: 'Enquanto você estiver em Fúria, seus aliados têm vantagem em jogadas de ataque corpo a corpo contra qualquer criatura hostil a até 1,5 metro de você.'
  },
  {
    id: 'alce',
    name: 'Espírito do Alce (Elk)',
    description: 'Enquanto em Fúria e sem armadura pesada, seu deslocamento a pé aumenta em 4,5 metros (15 pés). Ideal para percorrer grandes campos de batalha.'
  },
  {
    id: 'tigre',
    name: 'Espírito do Tigre (Tiger)',
    description: 'Enquanto em Fúria, você pode adicionar 3 metros à distância dos seus saltos em distância e 0,9m aos seus saltos em altura.'
  }
];

// ============================================================================
// 6. PRESA DO CAÇADOR (HUNTER'S PREY - RANGER)
// ============================================================================
export const HUNTER_PREY_OPTIONS = [
  {
    id: 'assassino_colossos',
    name: 'Assassino de Colossos (Colossus Slayer)',
    description: 'Sua tenacidade desgasta os adversários mais ferrenhos. Uma vez por turno, ao acertar uma criatura com um ataque com arma, se ela estiver abaixo do seu máximo de PV, você causa 1d8 de dano extra.'
  },
  {
    id: 'matador_gigantes',
    name: 'Matador de Gigantes (Giant Killer)',
    description: 'Quando uma criatura de tamanho Grande ou maior a até 1,5m errar ou acertar um ataque contra você, você pode usar sua reação para desferir um ataque contra ela imediatamente.'
  },
  {
    id: 'quebrador_hordas',
    name: 'Quebrador de Hordas (Horde Breaker)',
    description: 'Uma vez em cada um dos seus turnos ao realizar um ataque com arma, você pode fazer outro ataque com a mesma arma contra uma criatura diferente que esteja a até 1,5 metro do alvo original e ao alcance da arma.'
  }
];

// ============================================================================
// 7. ORDENS DO CLÉRIGO E DRUIDA (REGRAS 2024)
// ============================================================================
export const DIVINE_ORDERS_2024 = [
  {
    id: 'protetor',
    name: 'Protetor (Protector)',
    description: 'Treinado para a linha de frente da batalha e defesa do templo. Concede proficiência com Armas Marciais e treino com Armaduras Pesadas.'
  },
  {
    id: 'taumaturgo',
    name: 'Taumaturgo (Thaumaturge)',
    description: 'Focado nos mistérios divinos do além. Você aprende um truque adicional da lista de Clérigo e ganha um bônus igual ao seu modificador de Sabedoria em testes de Inteligência (Arcanismo ou Religião).'
  }
];

export const PRIMAL_ORDERS_2024 = [
  {
    id: 'mago_primitivo',
    name: 'Mago Primitivo (Magician)',
    description: 'Canalizador místico das energias da terra. Você aprende um truque adicional da lista de Druida e adiciona seu modificador de Sabedoria em testes de Inteligência (Arcanismo ou Natureza).'
  },
  {
    id: 'guardiao',
    name: 'Guardião (Warden)',
    description: 'Defensor físico dos bosques sagrados. Você ganha proficiência com Armas Marciais e treino com Armaduras Médias.'
  }
];

// ============================================================================
// 8. TIPOS ELEMENTAIS (ADEPT ELEMENTAL / DRACONIC)
// ============================================================================
export const ELEMENTAL_TYPES = [
  { id: 'acido', name: 'Ácido (Acid)', description: 'Dissolve couraças e corrói estruturas orgânicas.' },
  { id: 'frio', name: 'Frio (Cold)', description: 'Gela o ar e congela os membros dos oponentes.' },
  { id: 'fogo', name: 'Fogo (Fire)', description: 'Chamas abrasadoras e devastação incandescente.' },
  { id: 'eletrico', name: 'Elétrico (Lightning)', description: 'Raios velozes e descargas de alta voltagem.' },
  { id: 'trovao', name: 'Trovão (Thunder)', description: 'Ondas de choque acústicas e estrondos ressonantes.' }
];

// ============================================================================
// 9. DÁDIVAS DO PACTO (PACT BOONS - BRUXO)
// ============================================================================
export const PACT_BOONS = [
  {
    id: 'pacto_lamina',
    name: 'Pacto da Lâmina',
    nameEn: 'Pact of the Blade',
    description: 'Você pode usar sua ação para criar uma arma de pacto na sua mão vazia. Você é proficiente com ela enquanto a empunhar. Ela conta como mágica para ultrapassar resistências.'
  },
  {
    id: 'pacto_tomo',
    name: 'Pacto do Tomo',
    nameEn: 'Pact of the Tome',
    description: 'Seu patrono concede a você um grimório chamado Livro das Sombras. Você escolhe três truques de qualquer lista de magias de qualquer classe; eles contam como magias de bruxo para você.'
  },
  {
    id: 'pacto_corrente',
    name: 'Pacto da Corrente',
    nameEn: 'Pact of the Chain',
    description: 'Você aprende a magia Encontrar Familiar e pode conjurá-la como um ritual. Ao conjurá-la, pode escolher uma forma especial: Diabrete, Pseudodragão, Quasit ou Sprite.'
  }
];

// ============================================================================
// 10. RUNAS DO CAVALEIRO RÚNICO (RUNE KNIGHT)
// ============================================================================
export const RUNE_OPTIONS = [
  {
    id: 'runa_nuvem',
    name: 'Runa das Nuvens (Cloud Rune)',
    description: 'Vantagem em testes de Prestidigitação e Enganação. Como reação, quando você ou criatura a 9m for acertada por ataque, redireciona o ataque para outra criatura.'
  },
  {
    id: 'runa_fogo',
    name: 'Runa do Fogo (Fire Rune)',
    description: 'Dobra o bônus de proficiência em qualquer ferramenta que usar. Ao acertar um ataque com arma, evoca grilhões de fogo causando 2d6 dano de fogo e aprisionando o alvo.'
  },
  {
    id: 'runa_gelo',
    name: 'Runa do Gelo (Frost Rune)',
    description: 'Vantagem em testes de Adestrar Animais e Intimidação. Como ação bônus, invoca vigor gélido: +2 em testes de Força e Constituição e salvaguardas por 10 minutos.'
  },
  {
    id: 'runa_colina',
    name: 'Runa da Colina (Hill Rune)',
    description: 'Vantagem em salvaguardas contra veneno e resistência a dano de veneno. Como ação bônus, ganha resistência a dano de concussão, cortante e perfurante por 1 minuto.'
  },
  {
    id: 'runa_pedra',
    name: 'Runa da Pedra (Stone Rune)',
    description: 'Vantagem em testes de Intuição e 36m de Visão no Escuro. Como reação, quando criatura terminar turno a 9m, força salvaguarda de SAB ou fica encantada e estupefata.'
  },
  {
    id: 'runa_tempestade',
    name: 'Runa da Tempestade (Storm Rune)',
    description: 'Vantagem em testes de Arcanismo e não pode ser surpreendido. Entra em estado profético por 1 minuto para dar vantagem ou desvantagem a uma jogada de criatura a até 18m.'
  }
];

// ============================================================================
// FUNÇÕES AUXILIARES DE BUSCA
// ============================================================================
export function getManeuverById(id) {
  return MANEUVERS.find(m => m.id === id) || null;
}

export function getFightingStyleById(id) {
  return FIGHTING_STYLES.find(fs => fs.id === id) || null;
}

export function getMetamagicById(id) {
  return METAMAGIC_OPTIONS.find(m => m.id === id) || null;
}

export function getInvocationById(id) {
  return ELDRITCH_INVOCATIONS.find(i => i.id === id) || null;
}

export function getTotemSpiritById(id) {
  return TOTEM_SPIRITS.find(t => t.id === id) || null;
}

export function getHunterPreyById(id) {
  return HUNTER_PREY_OPTIONS.find(hp => hp.id === id) || null;
}

export function getRuneById(id) {
  return RUNE_OPTIONS.find(r => r.id === id) || null;
}

