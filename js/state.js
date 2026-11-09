/**
 * Gerenciador de Estado Reativo e Persistência do Personagem Creator
 */

import { getModifier, calculateMaxHp, calculateArmorClass, calculateSpellSlots, getProficiencyBonus } from './rules-engine.js';
import { getRaceById } from './data/races.js';
import { getClassById } from './data/classes.js';
import { getBackgroundById } from './data/backgrounds.js';
import { getFeatById } from './data/feats.js';
import { getSpellById } from './data/spells.js';
import { getManeuverById, getFightingStyleById, getMetamagicById, getInvocationById, getTotemSpiritById, getHunterPreyById } from './data/optionsCatalog.js';
import { findItemByNameOrId, calculateItemResaleValue, getArmorById } from './data/equipment.js';

const SOURCES_2014 = ['phb_2014', 'tcoe', 'xgte', 'bpg', 'mpmm', 'ftd', 'scag'];
const SOURCES_2024 = ['phb_2024'];
function getSourcesByEdition(edition) {
  return (edition === '2014') ? SOURCES_2014 : SOURCES_2024;
}

const STORAGE_KEY = 'personagem_creator_dnd_save_v2';

// Estado inicial padrão
const DEFAULT_STATE = {
  characterName: 'Aventureiro Sem Nome',
  playerName: '',
  edition: '2024', // '2024' ou '2014'
  alignment: 'Neutro e Bom',
  theme: 'dark', // 'dark' ou 'light'
  activeView: 'builder', // 'builder' ou 'sheet'
  
  // Fontes/Livros Ativos (apenas da edição 2024 por padrão)
  activeSources: ['phb_2024'],

  // Raça / Espécie
  raceId: 'humano_2024',
  subraceId: null,
  racialStatChoices: { stat1: 'str', stat2: 'con' },
  variantHumanFeatId: 'alerta',

  // Regra de Customização de Atributos de Tasha (TCoE - 2014)
  useTashaCustomStats: false,
  tashaCustomChoice: {
    type: 'plus2_plus1', // 'plus2_plus1' ou 'plus1_each' ou 'plus1_two'
    statA: 'str',
    statB: 'con',
    statC: 'dex'
  },

  // Antecedente
  backgroundId: 'soldado_2024',
  backgroundStatChoices: { plus2: 'str', plus1: 'con' },

  // Atributos Base
  statMode: 'point_buy', // 'point_buy' ou 'manual'
  baseStats: {
    str: 15,
    dex: 12,
    con: 14,
    int: 8,
    wis: 13,
    cha: 10
  },

  // Progressão Nível a Nível (Array de 1 a 20)
  levels: [
    {
      level: 1,
      classId: 'guerreiro',
      subclassId: null,
      hpMode: 'avg',
      hpManualRoll: 10,
      asiType: null, // 'stats_plus2', 'stats_plus1_two', 'feat'
      asiStats: {},
      featId: null
    }
  ],

  // Perícias
  classChosenSkills: ['atletismo', 'intimidacao'],
  proficientSkills: ['atletismo', 'intimidacao'],
  expertSkills: [],

  // Magias Escolhidas: [{ spellId, origin, sourceId }]
  knownSpells: [],

  // Escolhas dinâmicas por categoria (classes, subclasses, raça, antecedente, talentos)
  featureChoices: {
    race: {
      cantripId: null,
      skills: [],
      originFeatId: null,
      originFeatChoices: {}
    },
    background: {
      originFeatChoices: {}
    },
    classes: {},
    subclasses: {},
    feats: {}
  },

  // Regras Específicas do Patrulheiro ('tcoe' ou 'phb_2014')
  rangerOption: 'tcoe',

  // Moedas e Recursos Financeiros
  currency: {
    gp: 15,
    sp: 0,
    cp: 0
  },

  // Equipamentos e Combate
  armorId: 'cota_malha_pesada',
  hasShield: true,
  equippedWeapons: ['espada_longa'],
  inventory: ['Pacote de Masmorra', 'Adaga', 'Cota de Malha', 'Espada Longa', 'Escudo'],

  notes: ''
};

class StateStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const edition = (parsed.edition === '2014') ? '2014' : '2024';
        const allowedSources = getSourcesByEdition(edition);
        
        let activeSources = parsed.activeSources;
        if (!Array.isArray(activeSources) || activeSources.length === 0) {
          activeSources = allowedSources;
        } else {
          // Filtra fontes ativas para pertencerem estritamente à edição selecionada
          activeSources = activeSources.filter(srcId => allowedSources.includes(srcId));
          if (activeSources.length === 0) {
            activeSources = allowedSources;
          }
        }

        // Garante que a raça corresponda à edição selecionada
        let raceId = parsed.raceId;
        const race = getRaceById(raceId);
        if (!race || race.edition !== edition) {
          raceId = edition === '2024' ? 'humano_2024' : 'humano_variante_2014';
        }

        // Garante que o antecedente corresponda à edição selecionada
        let backgroundId = parsed.backgroundId;
        const bg = getBackgroundById(backgroundId);
        if (!bg || bg.edition !== edition) {
          backgroundId = edition === '2024' ? 'soldado_2024' : 'soldado_2014';
        }

        const featureChoices = {
          race: { cantripId: null, skills: [], originFeatId: null, originFeatChoices: {}, ...(parsed.featureChoices?.race || {}) },
          background: { originFeatChoices: {}, ...(parsed.featureChoices?.background || {}) },
          classes: { ...(parsed.featureChoices?.classes || {}) },
          subclasses: { ...(parsed.featureChoices?.subclasses || {}) },
          feats: { ...(parsed.featureChoices?.feats || {}) }
        };

        const rangerOption = parsed.rangerOption || 'tcoe';
        const currency = { gp: 15, sp: 0, cp: 0, ...(parsed.currency || {}) };
        return { ...DEFAULT_STATE, ...parsed, featureChoices, rangerOption, currency, edition, activeSources, raceId, backgroundId };
      }
    } catch (e) {
      console.warn('Erro ao carregar estado do localStorage', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Falha ao salvar no localStorage', e);
    }
  }

  getState() {
    return this.state;
  }

  setState(updates, options = { notify: true }) {
    this.state = { ...this.state, ...updates };
    this.saveState();
    if (options.notify !== false) {
      this.notify();
    }
  }

  setFeatureChoice(category, subKey, data) {
    const choices = { ...(this.state.featureChoices || {}) };
    if (!choices[category]) choices[category] = {};
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
      choices[category][subKey] = { ...(choices[category][subKey] || {}), ...data };
    } else {
      choices[category][subKey] = data;
    }
    this.setState({ featureChoices: choices });
  }

  getFeatureChoice(category, subKey) {
    return this.state.featureChoices?.[category]?.[subKey] || null;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state, this.getComputedStats());
    }
  }

  // Estatísticas calculadas dinamicamente
  getComputedStats() {
    const s = this.state;
    const race = getRaceById(s.raceId);
    const bg = getBackgroundById(s.backgroundId);
    
    // Nível total e contagem por classe
    const totalLevel = s.levels.length;
    const classLevels = {};
    const subclasses = {};

    s.levels.forEach(lvl => {
      classLevels[lvl.classId] = (classLevels[lvl.classId] || 0) + 1;
      if (lvl.subclassId) {
        subclasses[lvl.classId] = lvl.subclassId;
      }
    });

    // 1. Atributos Finais = Base + Raça (2014) ou Tasha + Antecedente (2024) + ASIs
    const finalStats = { ...s.baseStats };

    if (s.useTashaCustomStats && s.tashaCustomChoice) {
      // Regra de Customização de Linhagem de Tasha
      const tc = s.tashaCustomChoice;
      if (tc.type === 'plus2_plus1') {
        if (tc.statA && finalStats[tc.statA] !== undefined) finalStats[tc.statA] += 2;
        if (tc.statB && finalStats[tc.statB] !== undefined && tc.statB !== tc.statA) finalStats[tc.statB] += 1;
      } else if (tc.type === 'plus1_each') {
        if (tc.statA && finalStats[tc.statA] !== undefined) finalStats[tc.statA] += 1;
        if (tc.statB && finalStats[tc.statB] !== undefined) finalStats[tc.statB] += 1;
        if (tc.statC && finalStats[tc.statC] !== undefined) finalStats[tc.statC] += 1;
      } else if (tc.type === 'plus1_two') {
        if (tc.statA && finalStats[tc.statA] !== undefined) finalStats[tc.statA] += 1;
        if (tc.statB && finalStats[tc.statB] !== undefined) finalStats[tc.statB] += 1;
      }
    } else {
      // Bônus Raciais normais (principalmente 2014)
      if (race && race.abilityBonus) {
        if (race.abilityBonus.str) finalStats.str += race.abilityBonus.str;
        if (race.abilityBonus.dex) finalStats.dex += race.abilityBonus.dex;
        if (race.abilityBonus.con) finalStats.con += race.abilityBonus.con;
        if (race.abilityBonus.int) finalStats.int += race.abilityBonus.int;
        if (race.abilityBonus.wis) finalStats.wis += race.abilityBonus.wis;
        if (race.abilityBonus.cha) finalStats.cha += race.abilityBonus.cha;

        // Humano Variante 2014 ou Meio-Elfo escolha
        if (race.abilityBonus.type === 'choice_2' && s.racialStatChoices) {
          const { stat1, stat2 } = s.racialStatChoices;
          if (stat1 && finalStats[stat1] !== undefined) finalStats[stat1] += 1;
          if (stat2 && finalStats[stat2] !== undefined && stat2 !== stat1) finalStats[stat2] += 1;
        }

        // Bônus de Sub-raça (se houver)
        if (race.subraces && s.subraceId) {
          const sub = race.subraces.find(sr => sr.id === s.subraceId);
          if (sub && sub.abilityBonus) {
            if (sub.abilityBonus.str) finalStats.str += sub.abilityBonus.str;
            if (sub.abilityBonus.dex) finalStats.dex += sub.abilityBonus.dex;
            if (sub.abilityBonus.con) finalStats.con += sub.abilityBonus.con;
            if (sub.abilityBonus.int) finalStats.int += sub.abilityBonus.int;
            if (sub.abilityBonus.wis) finalStats.wis += sub.abilityBonus.wis;
            if (sub.abilityBonus.cha) finalStats.cha += sub.abilityBonus.cha;
          }
        }
      }
    }

    // Bônus de Antecedente (Regra 2024)
    if (s.edition === '2024' && s.backgroundStatChoices) {
      const { plus2, plus1, plusOneA, plusOneB, plusOneC } = s.backgroundStatChoices;
      if (plus2 && finalStats[plus2] !== undefined) {
        finalStats[plus2] += 2;
        if (plus1 && finalStats[plus1] !== undefined && plus1 !== plus2) {
          finalStats[plus1] += 1;
        }
      } else if (plusOneA && plusOneB && plusOneC) {
        if (finalStats[plusOneA] !== undefined) finalStats[plusOneA] += 1;
        if (finalStats[plusOneB] !== undefined) finalStats[plusOneB] += 1;
        if (finalStats[plusOneC] !== undefined) finalStats[plusOneC] += 1;
      }
    }

    // ASIs aplicados durante as subidas de níveis (+2 ou +1 em dois)
    s.levels.forEach(lvl => {
      if (lvl.asiType === 'stats_plus2' && lvl.asiStats) {
        for (const [st, val] of Object.entries(lvl.asiStats)) {
          if (finalStats[st] !== undefined) finalStats[st] += parseInt(val, 10) || 0;
        }
      } else if (lvl.asiType === 'stats_plus1_two' && lvl.asiStats) {
        for (const [st, val] of Object.entries(lvl.asiStats)) {
          if (finalStats[st] !== undefined) finalStats[st] += parseInt(val, 10) || 0;
        }
      } else if (lvl.asiType === 'stats' && lvl.asiStats) {
        // Compatibilidade legada
        for (const [st, val] of Object.entries(lvl.asiStats)) {
          if (finalStats[st] !== undefined) finalStats[st] += parseInt(val, 10) || 0;
        }
      }
    });

    // Bônus de atributos concedidos por talentos com escolha (ex: Resiliente, Especialista em Perícia)
    s.levels.forEach((lvl, idx) => {
      if (lvl.asiType === 'feat' && lvl.featId) {
        const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
        if (featChoice?.stat && finalStats[featChoice.stat] !== undefined) {
          finalStats[featChoice.stat] += 1;
        }
      }
    });

    // Modificadores
    const modifiers = {
      str: getModifier(finalStats.str),
      dex: getModifier(finalStats.dex),
      con: getModifier(finalStats.con),
      int: getModifier(finalStats.int),
      wis: getModifier(finalStats.wis),
      cha: getModifier(finalStats.cha)
    };

    // Bônus de Proficiência
    const profBonus = getProficiencyBonus(totalLevel);

    // PV Máximo
    const hasToughFeat = s.levels.some(l => l.featId === 'robusto') ||
                         (bg && bg.originFeatId === 'robusto') ||
                         (s.variantHumanFeatId === 'robusto');
    const hasDwarvenToughness = race && race.hpBonusPerLevel > 0;
    const maxHp = calculateMaxHp(s.levels, modifiers.con, {
      hasToughFeat,
      hasDwarvenToughness,
      isDraconicSorcerer: subclasses['feiticeiro'] === 'draconico'
    });

    // CA e Estilo de Luta Defesa
    const activeClassIds = Object.keys(classLevels);
    let hasDefenseStyle = false;
    for (const cId of activeClassIds) {
      if (s.featureChoices?.classes?.[cId]?.fightingStyle === 'defesa') {
        hasDefenseStyle = true;
      }
    }
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (featChoice?.fightingStyle === 'defesa') {
        hasDefenseStyle = true;
      }
    });

    const ac = calculateArmorClass({
      armorId: s.armorId,
      hasShield: s.hasShield,
      dexMod: modifiers.dex,
      conMod: modifiers.con,
      wisMod: modifiers.wis,
      activeClasses: activeClassIds,
      hasDefenseStyle
    });

    // Deslocamento (Speed)
    let speed = (race && race.speed) ? race.speed : 9;
    if (s.subraceId === 'elfo_floresta_2024' || s.subraceId === 'elfo_floresta_2014') speed += 1.5;
    if (classLevels['monge'] >= 2) speed += 3;
    if (classLevels['barbaro'] >= 5 && !['pesada'].includes(s.armorId)) speed += 3;

    // Espaços de Magia
    const spellSlotsData = calculateSpellSlots(classLevels, subclasses);

    // Perícias proficientes consolidadas
    const allProficientSkills = new Set(s.proficientSkills);
    if (s.classChosenSkills) {
      s.classChosenSkills.forEach(sk => allProficientSkills.add(sk));
    }
    if (bg && bg.skills) {
      // Normaliza nomes de perícias
      const skillNameMap = {
        'Acrobacia': 'acrobacia', 'Adestrar Animais': 'adestrar_animais', 'Arcanismo': 'arcanismo',
        'Atletismo': 'atletismo', 'Atuação': 'atuacao', 'Enganação': 'enganacao',
        'Furtividade': 'furtividade', 'História': 'historia', 'Intimidação': 'intimidacao',
        'Intuição': 'intuicao', 'Investigação': 'investigacao', 'Medicina': 'medicina',
        'Natureza': 'natureza', 'Percepção': 'percepcao', 'Persuasão': 'persuasao',
        'Prestidigitação': 'prestidigitacao', 'Religião': 'religiao', 'Sobrevivência': 'sobrevivencia'
      };
      bg.skills.forEach(skName => {
        const skId = skillNameMap[skName] || skName.toLowerCase();
        allProficientSkills.add(skId);
      });
    }

    // Perícias extras de Raça (Humano 2024 Versátil, Meio-Elfo)
    if (Array.isArray(s.featureChoices?.race?.skills)) {
      s.featureChoices.race.skills.forEach(sk => allProficientSkills.add(sk));
    }

    // Perícias extras de Antecedente (se talento Hábil)
    if (Array.isArray(s.featureChoices?.background?.originFeatChoices?.skills)) {
      s.featureChoices.background.originFeatChoices.skills.forEach(sk => allProficientSkills.add(sk));
    }

    // Perícias extras de Talentos de Nível (Hábil, Especialista em Perícia)
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (Array.isArray(featChoice?.skills)) {
        featChoice.skills.forEach(sk => allProficientSkills.add(sk));
      }
      if (featChoice?.skill) {
        allProficientSkills.add(featChoice.skill);
      }
    });

    // Perícias extras de Subclasses (ex: Colégio do Conhecimento)
    if (Array.isArray(s.featureChoices?.subclasses?.colegio_conhecimento?.skills)) {
      s.featureChoices.subclasses.colegio_conhecimento.skills.forEach(sk => allProficientSkills.add(sk));
    }

    // Especializações (Expertise) consolidadas
    const allExpertSkills = new Set(s.expertSkills);
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (featChoice?.expertise) {
        allExpertSkills.add(featChoice.expertise);
      }
    });

    // Percepção Passiva
    const isPerceptionProf = allProficientSkills.has('percepcao');
    const isPerceptionExpert = allExpertSkills.has('percepcao');
    let passivePerception = 10 + modifiers.wis;
    if (isPerceptionExpert) passivePerception += profBonus * 2;
    else if (isPerceptionProf) passivePerception += profBonus;

    // Salvaguardas Proficientes (da 1ª classe + Talento Resiliente)
    const firstClassId = s.levels[0]?.classId || 'guerreiro';
    const firstClass = getClassById(firstClassId);
    const baseSaves = firstClass ? [...firstClass.savingThrows] : ['FOR', 'CON'];

    s.levels.forEach((lvl, idx) => {
      if (lvl.asiType === 'feat' && lvl.featId === 'resiliente') {
        const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.['resiliente'];
        if (featChoice?.stat) {
          const map = { str: 'FOR', dex: 'DES', con: 'CON', int: 'INT', wis: 'SAB', cha: 'CAR' };
          const saveCode = map[featChoice.stat];
          if (saveCode && !baseSaves.includes(saveCode)) {
            baseSaves.push(saveCode);
          }
        }
      }
    });

    // Magias Concedidas por Talentos, Raças e Subclasses
    const grantedSpells = [];

    // 1. Raça (ex: Alto Elfo)
    if (s.featureChoices?.race?.cantripId) {
      const sp = getSpellById(s.featureChoices.race.cantripId);
      if (sp) grantedSpells.push({ spell: sp, origin: `Raça: ${race?.name || 'Alto Elfo'}`, category: 'Truque', sourceKey: 'race' });
    }

    // 2. Antecedente (ex: Acólito -> Iniciado em Magia Clérigo)
    const bgChoices = s.featureChoices?.background?.originFeatChoices;
    if (bgChoices) {
      if (Array.isArray(bgChoices.cantrips)) {
        bgChoices.cantrips.forEach(cId => {
          const sp = getSpellById(cId);
          if (sp) grantedSpells.push({ spell: sp, origin: `Antecedente: ${bg?.name || 'Origem'}`, category: 'Truque', sourceKey: 'background' });
        });
      }
      if (bgChoices.spell1) {
        const sp = getSpellById(bgChoices.spell1);
        if (sp) grantedSpells.push({ spell: sp, origin: `Antecedente: ${bg?.name || 'Origem'}`, category: '1º Círculo', sourceKey: 'background' });
      }
    }

    // 3. Talento Racial do Humano 2024 / Variante 2014
    const raceFeatChoices = s.featureChoices?.race?.originFeatChoices;
    if (raceFeatChoices) {
      if (Array.isArray(raceFeatChoices.cantrips)) {
        raceFeatChoices.cantrips.forEach(cId => {
          const sp = getSpellById(cId);
          if (sp) grantedSpells.push({ spell: sp, origin: `Talento Racial (${race?.name})`, category: 'Truque', sourceKey: 'race_feat' });
        });
      }
      if (raceFeatChoices.spell1) {
        const sp = getSpellById(raceFeatChoices.spell1);
        if (sp) grantedSpells.push({ spell: sp, origin: `Talento Racial (${race?.name})`, category: '1º Círculo', sourceKey: 'race_feat' });
      }
    }

    // 4. Talentos de Nível (Iniciado em Magia)
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (featChoice) {
        const featObj = getFeatById(lvl.featId);
        if (Array.isArray(featChoice.cantrips)) {
          featChoice.cantrips.forEach(cId => {
            const sp = getSpellById(cId);
            if (sp) grantedSpells.push({ spell: sp, origin: `Talento: ${featObj?.name || 'Iniciado em Magia'}`, category: 'Truque', sourceKey: `feat_${idx}` });
          });
        }
        if (featChoice.spell1) {
          const sp = getSpellById(featChoice.spell1);
          if (sp) grantedSpells.push({ spell: sp, origin: `Talento: ${featObj?.name || 'Iniciado em Magia'}`, category: '1º Círculo', sourceKey: `feat_${idx}` });
        }
      }
    });

    // Resumo de escolhas ativas formatadas para a ficha e interface
    const activeManeuvers = (s.featureChoices?.subclasses?.mestre_batalha?.maneuvers || [])
      .map(id => getManeuverById(id))
      .filter(Boolean);

    const activeFightingStyles = [];
    Object.values(s.featureChoices?.classes || {}).forEach(cData => {
      if (cData.fightingStyle) {
        const fs = getFightingStyleById(cData.fightingStyle);
        if (fs && !activeFightingStyles.some(x => x.id === fs.id)) activeFightingStyles.push(fs);
      }
    });
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (featChoice?.fightingStyle) {
        const fs = getFightingStyleById(featChoice.fightingStyle);
        if (fs && !activeFightingStyles.some(x => x.id === fs.id)) activeFightingStyles.push(fs);
      }
    });

    const activeMetamagic = [];
    const classMeta = s.featureChoices?.classes?.feiticeiro?.metamagic || [];
    classMeta.forEach(mId => {
      const m = getMetamagicById(mId);
      if (m && !activeMetamagic.some(x => x.id === m.id)) activeMetamagic.push(m);
    });
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      (featChoice?.metamagic || []).forEach(mId => {
        const m = getMetamagicById(mId);
        if (m && !activeMetamagic.some(x => x.id === m.id)) activeMetamagic.push(m);
      });
    });

    const activeInvocations = [];
    const classInvoc = s.featureChoices?.classes?.bruxo?.invocations || [];
    classInvoc.forEach(invId => {
      const inv = getInvocationById(invId);
      if (inv && !activeInvocations.some(x => x.id === inv.id)) activeInvocations.push(inv);
    });
    s.levels.forEach((lvl, idx) => {
      const featChoice = s.featureChoices?.feats?.[`level_${idx}`] || s.featureChoices?.feats?.[lvl.featId];
      if (featChoice?.invocation) {
        const inv = getInvocationById(featChoice.invocation);
        if (inv && !activeInvocations.some(x => x.id === inv.id)) activeInvocations.push(inv);
      }
    });

    const activeTotem = getTotemSpiritById(s.featureChoices?.subclasses?.totemico?.totemSpirit);
    const activeHunterPrey = getHunterPreyById(s.featureChoices?.subclasses?.cacador?.hunterPrey);

    return {
      totalLevel,
      classLevels,
      subclasses,
      finalStats,
      modifiers,
      profBonus,
      maxHp,
      ac,
      speed,
      spellSlotsData,
      passivePerception,
      savingThrowProficiencies: baseSaves,
      firstClass,
      allProficientSkills: Array.from(allProficientSkills),
      allExpertSkills: Array.from(allExpertSkills),
      grantedSpells,
      activeManeuvers,
      activeFightingStyles,
      activeMetamagic,
      activeInvocations,
      activeTotem,
      activeHunterPrey
    };
  }

  // Subir de Nível (Level Up)
  addLevel(classId, hpMode = 'avg', hpManual = null) {
    if (this.state.levels.length >= 20) return false;
    const nextLvlNum = this.state.levels.length + 1;
    const newLevel = {
      level: nextLvlNum,
      classId: classId || this.state.levels[this.state.levels.length - 1].classId,
      subclassId: null,
      hpMode,
      hpManualRoll: hpManual,
      asiType: null,
      asiStats: {},
      featId: null
    };

    const newLevels = [...this.state.levels, newLevel];
    this.setState({ levels: newLevels });
    return true;
  }

  // Remover Último Nível
  removeLastLevel() {
    if (this.state.levels.length <= 1) return false;
    const newLevels = this.state.levels.slice(0, -1);
    this.setState({ levels: newLevels });
    return true;
  }

  // Atualizar Nível Específico
  updateLevel(levelIndex, data) {
    const newLevels = [...this.state.levels];
    if (newLevels[levelIndex]) {
      newLevels[levelIndex] = { ...newLevels[levelIndex], ...data };
      this.setState({ levels: newLevels });
    }
  }

  // Resetar Personagem
  resetCharacter() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.saveState();
    this.notify();
  }

  // Exportar JSON

  setRangerOption(option) {
    this.setState({ rangerOption: option === 'phb_2014' ? 'phb_2014' : 'tcoe' });
  }

  setCurrency(currency) {
    const cur = this.state.currency || { gp: 0, sp: 0, cp: 0 };
    this.setState({ currency: { ...cur, ...currency } });
  }

  addCurrency(gp = 0, sp = 0, cp = 0) {
    const cur = this.state.currency || { gp: 0, sp: 0, cp: 0 };
    this.setState({
      currency: {
        gp: Math.max(0, Math.round(((cur.gp || 0) + gp) * 100) / 100),
        sp: Math.max(0, Math.round(((cur.sp || 0) + sp) * 100) / 100),
        cp: Math.max(0, Math.round(((cur.cp || 0) + cp) * 100) / 100)
      }
    });
  }

  buyItem(item, quantity = 1) {
    if (!item) return false;
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    const cur = this.state.currency || { gp: 0, sp: 0, cp: 0 };
    const unitCost = typeof item.cost === 'number' ? item.cost : (parseFloat(item.cost) || 0);
    const totalCost = Math.round((unitCost * qty) * 100) / 100;
    if ((cur.gp || 0) < totalCost) {
      return false; // Saldo insuficiente em PO
    }
    const newGp = Math.round(((cur.gp || 0) - totalCost) * 100) / 100;

    const inv = [...this.state.inventory];
    const baseName = (item.name || '').trim();

    // Procura se já existe um item equivalente no inventário para empilhar quantidade
    let foundIndex = -1;
    let existingQty = 0;

    for (let i = 0; i < inv.length; i++) {
      const entry = inv[i].trim();
      const parsed = findItemByNameOrId(entry);
      if (parsed && (parsed.id === item.id || parsed.name.toLowerCase() === baseName.toLowerCase())) {
        foundIndex = i;
        existingQty = parsed.quantity || 1;
        break;
      }
    }

    if (foundIndex >= 0) {
      const newTotalQty = existingQty + qty;
      inv[foundIndex] = `${newTotalQty}x ${baseName}`;
    } else {
      const entryName = qty > 1 ? `${qty}x ${baseName}` : baseName;
      inv.push(entryName);
    }

    this.setState({
      currency: { ...cur, gp: newGp },
      inventory: inv
    });
    return true;
  }

  sellInventoryItem(index, resaleGp = 0) {
    const inv = [...this.state.inventory];
    if (index >= 0 && index < inv.length) {
      inv.splice(index, 1);
      const cur = this.state.currency || { gp: 0, sp: 0, cp: 0 };
      const newGp = Math.round(((cur.gp || 0) + resaleGp) * 100) / 100;
      this.setState({
        inventory: inv,
        currency: { ...cur, gp: newGp }
      });
      return true;
    }
    return false;
  }

  sellAllStartingEquipment() {
    let totalGpRefund = 0;
    const remainingInventory = [];
    const inv = [...this.state.inventory];

    inv.forEach(itemStr => {
      const item = findItemByNameOrId(itemStr);
      if (item && item.cost > 0) {
        const resale = calculateItemResaleValue(item);
        totalGpRefund += resale;
      } else {
        remainingInventory.push(itemStr);
      }
    });

    if (totalGpRefund > 0) {
      const cur = this.state.currency || { gp: 0, sp: 0, cp: 0 };
      const newGp = Math.round(((cur.gp || 0) + totalGpRefund) * 100) / 100;
      this.setState({
        inventory: remainingInventory,
        currency: { ...cur, gp: newGp }
      });
    }
    return totalGpRefund;
  }

  exportJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `${this.state.characterName.replace(/\s+/g, '_')}_ficha_dnd.json`);
    dlAnchor.click();
  }

  // Importar JSON
  importJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      this.state = { ...DEFAULT_STATE, ...parsed };
      this.saveState();
      this.notify();
      return true;
    } catch (e) {
      alert("Arquivo JSON inválido.");
      return false;
    }
  }
}

export const store = new StateStore();
