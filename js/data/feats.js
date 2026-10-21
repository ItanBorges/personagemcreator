/**
 * Talentos (Feats) de D&D 5e (2014), D&D 5.5 (2024), Tasha e Bigby Presents: Glory of the Giants
 * Referenciado de dnd5e.wikidot.com
 */

export const FEATS = [
  // ==================== TALENTOS DE ORIGEM (Nível 1 - 2024 ou Humano Variante 2014) ====================
  {
    id: 'iniciado_magia_mago',
    name: 'Iniciado em Magia: Mago',
    nameEn: 'Magic Initiate: Wizard',
    category: 'origem',
    sourceId: 'phb_2024',
    grantsSpells: true,
    spellSourceClass: 'mago',
    cantripsCount: 2,
    spellsCount1: 1,
    spellcastingStat: 'INT',
    description: 'Escolha 2 truques e 1 magia de 1º círculo da lista de Mago (conjurável 1x ao dia sem espaço e também com espaços de magia).'
  },
  {
    id: 'iniciado_magia_clerigo',
    name: 'Iniciado em Magia: Clérigo',
    nameEn: 'Magic Initiate: Cleric',
    category: 'origem',
    sourceId: 'phb_2024',
    grantsSpells: true,
    spellSourceClass: 'clerigo',
    cantripsCount: 2,
    spellsCount1: 1,
    spellcastingStat: 'SAB',
    description: 'Escolha 2 truques e 1 magia de 1º círculo da lista de Clérigo.'
  },
  {
    id: 'iniciado_magia_druida',
    name: 'Iniciado em Magia: Druida',
    nameEn: 'Magic Initiate: Druid',
    category: 'origem',
    sourceId: 'phb_2024',
    grantsSpells: true,
    spellSourceClass: 'druida',
    cantripsCount: 2,
    spellsCount1: 1,
    spellcastingStat: 'SAB',
    description: 'Escolha 2 truques e 1 magia de 1º círculo da lista de Druida.'
  },
  {
    id: 'robusto',
    name: 'Robusto (Tough)',
    nameEn: 'Tough',
    category: 'origem',
    sourceId: 'phb_2024',
    hpBonusPerLevel: 2,
    description: 'Seus pontos de vida máximos aumentam em 2 × seu nível atual. A cada subida de nível, ganha +2 PV adicionais.'
  },
  {
    id: 'alerta',
    name: 'Alerta (Alert)',
    nameEn: 'Alert',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Adicione seu bônus de proficiência na sua rolagem de Iniciativa e pode trocar sua iniciativa com a de um aliado disposto após a rolagem!'
  },
  {
    id: 'sortudo',
    name: 'Sortudo (Lucky)',
    nameEn: 'Lucky',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Você possui pontos de sorte iguais ao seu bônus de proficiência para rolar dados extras com vantagem ou impor desvantagem em ataques contra você.'
  },
  {
    id: 'habil',
    name: 'Hábil (Skilled)',
    nameEn: 'Skilled',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Você ganha proficiência em qualquer combinação de 3 perícias ou ferramentas à sua escolha.'
  },
  {
    id: 'curandeiro',
    name: 'Curandeiro (Healer)',
    nameEn: 'Healer',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Ao usar um Kit de Primeiros Socorros para estabilizar uma criatura, ela também recupera 1 PV. Pode restaurar PV adicionais de aliados durante descansos.'
  },
  {
    id: 'selvageria',
    name: 'Selvageria em Combate (Savage Attacker)',
    nameEn: 'Savage Attacker',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Uma vez por turno, ao rolar o dano de um ataque com arma, role o dano duas vezes e escolha o maior resultado.'
  },
  {
    id: 'musico',
    name: 'Músico (Musician)',
    nameEn: 'Musician',
    category: 'origem',
    sourceId: 'phb_2024',
    description: 'Ao terminar um descanso curto ou longo tocando um instrumento, você concede Inspiração Heróica a aliados iguais ao seu bônus de proficiência.'
  },
  {
    id: 'golpe_gigante',
    name: 'Golpe dos Gigantes (Strike of the Giants)',
    nameEn: 'Strike of the Giants',
    category: 'origem',
    sourceId: 'bpg',
    description: 'Imbuído com poder ancestral de gigantes (Colina, Nuvem, Fogo, Gelo, Pedra ou Tempestade). Ao acertar um ataque com arma corpo a corpo ou arremessada, causa 1d6 de dano elemental extra e efeito único (empurrão, cegueira, lentidão ou queda).'
  },

  // ==================== TALENTOS GERAIS (Nível 4+) ====================
  {
    id: 'atirador_aguçado',
    name: 'Atirador Aguçado (Sharpshooter)',
    nameEn: 'Sharpshooter',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Destreza 13+',
    description: 'Ataques à distância ignoram meia cobertura e três quartos de cobertura. Disparar no alcance longo não impõe desvantagem. No 2014: penalidade -5 acerto para +10 dano.'
  },
  {
    id: 'mestre_armas_grandes',
    name: 'Mestre em Armas Grandes (Great Weapon Master)',
    nameEn: 'Great Weapon Master',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Força 13+',
    description: 'Ao conseguir um acerto crítico ou reduzir um alvo a 0 PV com arma corpo a corpo pesada, desfere um ataque com arma como ação bônus. Soma bônus no dano.'
  },
  {
    id: 'especialista_besta',
    name: 'Especialista em Besta (Crossbow Expert)',
    nameEn: 'Crossbow Expert',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Destreza 13+',
    description: 'Ignora a propriedade recarga de bestas. Estar a até 1,5m de um inimigo não impõe desvantagem em ataques à distância com besta. Ataque bônus com besta de mão.'
  },
  {
    id: 'mestre_armas_haste',
    name: 'Mestre de Armas de Haste (Polearm Master)',
    nameEn: 'Polearm Master',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Força ou Destreza 13+',
    description: 'Ao atacar com alabarda, glaive, bordão ou lança, pode usar ação bônus para atacar com a outra ponta (1d4 contusão). Criaturas provocam ataque de oportunidade ao entrarem no seu alcance.'
  },
  {
    id: 'conjurador_guerra',
    name: 'Conjurador de Guerra (War Caster)',
    nameEn: 'War Caster',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Capacidade de conjurar ao menos uma magia',
    description: 'Vantagem em salvaguardas de CON para concentração. Pode realizar componentes somáticos empunhando armas e escudo. Pode lançar magia em ataque de oportunidade.'
  },
  {
    id: 'sentinela',
    name: 'Sentinela (Sentinel)',
    nameEn: 'Sentinel',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Força ou Destreza 13+',
    description: 'Ao atingir com ataque de oportunidade, o deslocamento do inimigo vira 0. Ignora Desengajar. Pode contra-atacar inimigos que golpeiem aliados adjacentes.'
  },
  {
    id: 'tocado_fadas',
    name: 'Tocado pelas Fadas (Fey Touched)',
    nameEn: 'Fey Touched',
    category: 'geral',
    sourceId: 'tcoe',
    grantsSpells: true,
    fixedSpells: ['passo_nebuloso'],
    description: 'Aumente INT, SAB ou CAR em +1. Você aprende a magia Passo Nebuloso (Misty Step) e uma magia de 1º círculo de Adivinhação ou Encantamento à escolha, conjuráveis 1x ao dia sem espaço!'
  },
  {
    id: 'tocado_sombras',
    name: 'Tocado pelas Sombras (Shadow Touched)',
    nameEn: 'Shadow Touched',
    category: 'geral',
    sourceId: 'tcoe',
    grantsSpells: true,
    fixedSpells: ['invisibilidade'],
    description: 'Aumente INT, SAB ou CAR em +1. Você aprende a magia Invisibilidade e uma magia de 1º círculo de Ilusão ou Necromancia à escolha, conjuráveis 1x ao dia sem gastar espaço!'
  },
  {
    id: 'adepto_metamagia',
    name: 'Adepto de Metamagia (Metamagic Adept)',
    nameEn: 'Metamagic Adept',
    category: 'geral',
    sourceId: 'tcoe',
    reqDesc: 'Capacidade de conjurar magia',
    description: 'Você aprende duas opções de Metamagia da classe Feiticeiro e ganha 2 Pontos de Feitiçaria para alimentá-las (recarregam em descanso longo).'
  },
  {
    id: 'iniciado_sobrenatural',
    name: 'Iniciado Sobrenatural (Eldritch Adept)',
    nameEn: 'Eldritch Adept',
    category: 'geral',
    sourceId: 'tcoe',
    reqDesc: 'Capacidade de conjurar magia ou característica Magia de Pacto',
    description: 'Você aprende uma Invocação Sobrenatural da classe Bruxo à sua escolha.'
  },
  {
    id: 'iniciado_combate',
    name: 'Iniciado em Combate (Fighting Initiate)',
    nameEn: 'Fighting Initiate',
    category: 'geral',
    sourceId: 'tcoe',
    reqDesc: 'Proficiência com ao menos uma arma marcial',
    description: 'Você aprende um Estilo de Luta da classe Guerreiro à sua escolha (Arquearia, Defesa, Duelo, etc.).'
  },
  {
    id: 'lider_inspirador',
    name: 'Líder Inspirador (Inspiring Leader)',
    nameEn: 'Inspiring Leader',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Carisma 13+',
    description: 'Gaste 10 minutos discursando para até 6 aliados. Cada um ganha PV temporários iguais ao seu nível + seu modificador de Carisma.'
  },
  {
    id: 'mestre_armaduras_pesadas',
    name: 'Mestre em Armaduras Pesadas (Heavy Armor Master)',
    nameEn: 'Heavy Armor Master',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Proficiência com Armaduras Pesadas',
    description: 'Aumente Força em +1. Enquanto vestir armadura pesada, o dano contundente, cortante e perfurante não-mágico que você sofre é reduzido em 3 (ou pelo bônus de proficiência em 2024).'
  },
  {
    id: 'resiliente',
    name: 'Resiliente (Resilient)',
    nameEn: 'Resilient',
    category: 'geral',
    sourceId: 'phb_2024',
    description: 'Escolha um atributo: aumente seu valor em +1 e ganhe proficiência nas salvaguardas desse atributo (ex: CON para concentração, ou SAB contra encantos).'
  },
  {
    id: 'telecinetico',
    name: 'Telecinético (Telekinetic)',
    nameEn: 'Telekinetic',
    category: 'geral',
    sourceId: 'tcoe',
    grantsSpells: true,
    fixedSpells: ['maos_magicas'],
    description: 'Aumente INT, SAB ou CAR em +1. Você aprende o truque Mãos Mágicas invisível (alcance 18m). Como ação bônus, pode tentar empurrar ou puxar telecineticamente uma criatura a até 9m em 1,5m.'
  },
  {
    id: 'mestre_escudo',
    name: 'Mestre de Escudo (Shield Master)',
    nameEn: 'Shield Master',
    category: 'geral',
    sourceId: 'phb_2024',
    reqDesc: 'Proficiência com Escudos',
    description: 'Pode empurrar ou derrubar uma criatura com o escudo como ação bônus após atacar. Adiciona o bônus de CA do escudo a salvaguardas de DES contra efeitos que afetam apenas você.'
  },
  {
    id: 'vigor_gigantesco',
    name: 'Vigor dos Gigantes (Keenness of the Stone Giant)',
    nameEn: 'Keenness of the Stone Giant',
    category: 'geral',
    sourceId: 'bpg',
    reqDesc: 'Nível 4+, Talento Golpe dos Gigantes',
    description: 'Aumente FOR, CON ou SAB em +1. Você ganha visão no escuro de 18m e pode arremessar rochas telecinéticas ou mágicas que causam dano e atordoam o alvo.'
  }
];

export function getFeatById(id) {
  return FEATS.find(f => f.id === id);
}
