/**
 * Motor de Regras Oficiais de D&D 5e e 5.5 (2024)
 * Cálculos de Atributos, Multiclasse, Pontos de Vida, CA e Magias
 */

import { getClassById } from './data/classes.js';
import { getArmorById } from './data/equipment.js';

// Tabela de Custo de Compra de Pontos (Point Buy) - 27 pontos
export const POINT_BUY_COSTS = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

export const POINT_BUY_TOTAL = 27;

/**
 * Calcula modificador de atributo: (valor - 10) / 2 arredondado para baixo
 */
export function getModifier(score) {
  const s = parseInt(score, 10) || 10;
  return Math.floor((s - 10) / 2);
}

/**
 * Formata modificador com sinal (+3, -1, +0)
 */
export function formatModifier(mod) {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

/**
 * Calcula bônus de proficiência baseado no nível total
 */
export function getProficiencyBonus(totalLevel) {
  const lvl = Math.max(1, Math.min(20, parseInt(totalLevel, 10) || 1));
  return Math.floor((lvl - 1) / 4) + 2;
}

/**
 * Validação de Compra de Pontos
 */
export function calculatePointBuy(baseStats) {
  let spent = 0;
  const errors = [];

  for (const [stat, value] of Object.entries(baseStats)) {
    if (value < 8 || value > 15) {
      errors.push(`${stat.toUpperCase()} deve estar entre 8 e 15 na compra de pontos.`);
    }
    spent += POINT_BUY_COSTS[value] !== undefined ? POINT_BUY_COSTS[value] : 99;
  }

  return {
    spent,
    remaining: POINT_BUY_TOTAL - spent,
    isValid: spent <= POINT_BUY_TOTAL && errors.length === 0,
    errors
  };
}

/**
 * Validação de Multiclasse
 * Regra oficial: O personagem deve cumprir os pré-requisitos tanto de TODAS as classes atuais
 * quanto da NOVA classe que deseja adquirir.
 */
export function validateMulticlass(existingClassIds, newClassId, finalStats) {
  const errors = [];
  const allClassesToCheck = [...new Set([...existingClassIds, newClassId])];

  // Se o personagem só tem uma classe (sem multiclasse), não exige pré-requisitos de multiclasse
  if (allClassesToCheck.length <= 1) {
    return { isValid: true, errors: [] };
  }

  for (const classId of allClassesToCheck) {
    const cls = getClassById(classId);
    if (!cls || !cls.multiclassReq) continue;

    const meetsReq = cls.multiclassReq.check(finalStats);
    if (!meetsReq) {
      errors.push(`A classe ${cls.name} requer: ${cls.multiclassReq.description} (Seus atributos atuais não atendem este critério).`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Cálculo de Pontos de Vida (PV Máximo)
 * Nível 1: dado máximo da 1ª classe + mod CON
 * Níveis seguintes: média fixa ou manual + mod CON (mínimo 1 por nível)
 * Bônus: Talento Robusto (+2 PV/nível), Anão da Colina (+1 PV/nível)
 */
export function calculateMaxHp(levelsHistory, conMod, options = {}) {
  if (!levelsHistory || levelsHistory.length === 0) return 10;

  let totalHp = 0;

  levelsHistory.forEach((lvl, index) => {
    const cls = getClassById(lvl.classId);
    if (!cls) return;

    if (index === 0) {
      // 1º Nível: dado de vida cheio + CON
      const baseHp = cls.hitDie;
      totalHp += Math.max(1, baseHp + conMod);
    } else {
      // Níveis 2+
      let gained = 0;
      if (lvl.hpMode === 'manual' && lvl.hpManualRoll) {
        gained = parseInt(lvl.hpManualRoll, 10) + conMod;
      } else {
        // Média Fixa
        gained = cls.hitDieAvg + conMod;
      }
      totalHp += Math.max(1, gained);
    }
  });

  const totalLevel = levelsHistory.length;

  // Bônus adicionais
  if (options.hasToughFeat) {
    totalHp += totalLevel * 2; // Talento Robusto (+2 por nível)
  }
  if (options.hasDwarvenToughness) {
    totalHp += totalLevel * 1; // Tenacidade Anã (+1 por nível)
  }
  if (options.isDraconicSorcerer) {
    const sorcererLevels = levelsHistory.filter(l => l.classId === 'feiticeiro').length;
    totalHp += sorcererLevels * 1;
  }

  return Math.max(1, totalHp);
}

/**
 * Cálculo da Classe de Armadura (CA)
 */
export function calculateArmorClass({ armorId, hasShield, dexMod, conMod, wisMod, activeClasses, hasDefenseStyle }) {
  const armor = getArmorById(armorId);
  let baseAc = 10;
  let dexContribution = dexMod;

  if (armor.type === 'nenhuma') {
    // Defesa sem Armadura de Bárbaro
    if (activeClasses.includes('barbaro')) {
      baseAc = 10 + dexMod + conMod;
      dexContribution = 0;
    }
    // Defesa sem Armadura de Monge (não permite escudo!)
    else if (activeClasses.includes('monge') && !hasShield) {
      baseAc = 10 + dexMod + wisMod;
      dexContribution = 0;
    } else {
      baseAc = 10 + dexMod;
      dexContribution = 0;
    }
  } else if (armor.type === 'leve') {
    baseAc = armor.baseAc + dexMod;
    dexContribution = 0;
  } else if (armor.type === 'media') {
    baseAc = armor.baseAc + Math.min(2, Math.max(0, dexMod));
    dexContribution = 0;
  } else if (armor.type === 'pesada') {
    baseAc = armor.baseAc;
    dexContribution = 0;
  }

  let totalAc = baseAc + dexContribution;

  // Escudo
  if (hasShield && (!activeClasses.includes('monge') || armor.type !== 'nenhuma')) {
    totalAc += 2;
  }

  // Estilo de Luta Defesa (+1 se estiver vestindo armadura)
  if (hasDefenseStyle && armor.type !== 'nenhuma') {
    totalAc += 1;
  }

  return totalAc;
}

/**
 * Tabela de Espaços de Magia Multiclasse (Níveis 1 ao 20)
 */
export const MULTICLASS_SPELL_SLOTS = [
  // Lvl: [1º, 2º, 3º, 4º, 5º, 6º, 7º, 8º, 9º]
  [2, 0, 0, 0, 0, 0, 0, 0, 0], // Lvl 1
  [3, 0, 0, 0, 0, 0, 0, 0, 0], // Lvl 2
  [4, 2, 0, 0, 0, 0, 0, 0, 0], // Lvl 3
  [4, 3, 0, 0, 0, 0, 0, 0, 0], // Lvl 4
  [4, 3, 2, 0, 0, 0, 0, 0, 0], // Lvl 5
  [4, 3, 3, 0, 0, 0, 0, 0, 0], // Lvl 6
  [4, 3, 3, 1, 0, 0, 0, 0, 0], // Lvl 7
  [4, 3, 3, 2, 0, 0, 0, 0, 0], // Lvl 8
  [4, 3, 3, 3, 1, 0, 0, 0, 0], // Lvl 9
  [4, 3, 3, 3, 2, 0, 0, 0, 0], // Lvl 10
  [4, 3, 3, 3, 2, 1, 0, 0, 0], // Lvl 11
  [4, 3, 3, 3, 2, 1, 0, 0, 0], // Lvl 12
  [4, 3, 3, 3, 2, 1, 1, 0, 0], // Lvl 13
  [4, 3, 3, 3, 2, 1, 1, 0, 0], // Lvl 14
  [4, 3, 3, 3, 2, 1, 1, 1, 0], // Lvl 15
  [4, 3, 3, 3, 2, 1, 1, 1, 0], // Lvl 16
  [4, 3, 3, 3, 2, 1, 1, 1, 1], // Lvl 17
  [4, 3, 3, 3, 3, 1, 1, 1, 1], // Lvl 18
  [4, 3, 3, 3, 3, 2, 1, 1, 1], // Lvl 19
  [4, 3, 3, 3, 3, 2, 2, 1, 1]  // Lvl 20
];

/**
 * Calcula espaços de magia de conjurador e espaços de pacto do Bruxo
 */
export function calculateSpellSlots(classLevelsMap, subclassesMap) {
  let casterLevelSum = 0;
  let pactSlots = { slots: 0, slotLevel: 0 };

  for (const [classId, level] of Object.entries(classLevelsMap)) {
    const cls = getClassById(classId);
    if (!cls) continue;

    if (cls.casterType === 'full') {
      casterLevelSum += level;
    } else if (cls.casterType === 'half') {
      // Paladino / Patrulheiro
      casterLevelSum += Math.floor(level / 2);
    } else if (cls.casterType === 'artificer') {
      // Artífice arredonda para cima!
      casterLevelSum += Math.ceil(level / 2);
    } else if (cls.casterType === 'pact') {
      // Bruxo: Pact Magic independente
      if (level >= 17) pactSlots = { slots: 4, slotLevel: 5 };
      else if (level >= 11) pactSlots = { slots: 3, slotLevel: 5 };
      else if (level >= 9) pactSlots = { slots: 2, slotLevel: 5 };
      else if (level >= 7) pactSlots = { slots: 2, slotLevel: 4 };
      else if (level >= 5) pactSlots = { slots: 2, slotLevel: 3 };
      else if (level >= 3) pactSlots = { slots: 2, slotLevel: 2 };
      else if (level >= 2) pactSlots = { slots: 2, slotLevel: 1 };
      else if (level >= 1) pactSlots = { slots: 1, slotLevel: 1 };
    }

    // Terço de Conjurador (Cavaleiro Arcano / Trapaceiro Arcano)
    const subclassId = subclassesMap[classId];
    if (subclassId === 'cavaleiro_arcano' || subclassId === 'trapaceiro_arcano') {
      casterLevelSum += Math.floor(level / 3);
    }
  }

  const standardSlots = casterLevelSum > 0 && casterLevelSum <= 20
    ? MULTICLASS_SPELL_SLOTS[casterLevelSum - 1]
    : [0, 0, 0, 0, 0, 0, 0, 0, 0];

  return {
    casterLevel: casterLevelSum,
    slots: standardSlots,
    pact: pactSlots
  };
}

/**
 * Lista de 18 Perícias Oficiais de D&D 5e e seus atributos correspondentes
 */
export const SKILLS_LIST = [
  { id: 'acrobacia', name: 'Acrobacia', stat: 'dex' },
  { id: 'adestrar_animais', name: 'Adestrar Animais', stat: 'wis' },
  { id: 'arcanismo', name: 'Arcanismo', stat: 'int' },
  { id: 'atletismo', name: 'Atletismo', stat: 'str' },
  { id: 'atuacao', name: 'Atuação', stat: 'cha' },
  { id: 'enganacao', name: 'Enganação', stat: 'cha' },
  { id: 'furtividade', name: 'Furtividade', stat: 'dex' },
  { id: 'historia', name: 'História', stat: 'int' },
  { id: 'intimidacao', name: 'Intimidação', stat: 'cha' },
  { id: 'intuicao', name: 'Intuição', stat: 'wis' },
  { id: 'investigacao', name: 'Investigação', stat: 'int' },
  { id: 'medicina', name: 'Medicina', stat: 'wis' },
  { id: 'natureza', name: 'Natureza', stat: 'int' },
  { id: 'percepcao', name: 'Percepção', stat: 'wis' },
  { id: 'persuasao', name: 'Persuasão', stat: 'cha' },
  { id: 'prestidigitacao', name: 'Prestidigitação', stat: 'dex' },
  { id: 'religiao', name: 'Religião', stat: 'int' },
  { id: 'sobrevivencia', name: 'Sobrevivência', stat: 'wis' }
];
