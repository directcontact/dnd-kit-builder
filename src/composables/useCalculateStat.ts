export function calculateHealth(
  vigor: number,
  strength: number,
  maxHealthAdd: number,
  maxHealthBonus: number,
) {
  const healthPoints: number = strength * 0.25 + vigor * 0.75
  let calculatedHealth = 0

  if (healthPoints >= 0 && healthPoints < 10) {
    calculatedHealth = 60 + 3 * Math.abs(healthPoints - 0)
  } else if (healthPoints >= 10 && healthPoints < 50) {
    calculatedHealth = 90 + 2 * Math.abs(healthPoints - 10)
  } else if (healthPoints >= 50 && healthPoints < 75) {
    calculatedHealth = 170 + 1 * Math.abs(healthPoints - 50)
  } else if (healthPoints >= 75 && healthPoints < 100) {
    calculatedHealth = 195 + 0.5 * Math.abs(healthPoints - 75)
  } else {
    throw new Error('Sum is out of range (0 ≤ Sum < 100).')
  }

  calculatedHealth = calculatedHealth * (1 + maxHealthBonus) + maxHealthAdd

  if (calculatedHealth > 207.5) {
    calculatedHealth = 207.5
  }

  return calculatedHealth.toFixed(2)
}

export function calculateMemoryCapacity(
  knowledge: number,
  memoryCapacityBonus: number,
  addMemoryCapacity: number,
): number {
  const memoryCapacityPoints = Math.ceil(knowledge * (1 + memoryCapacityBonus) + addMemoryCapacity)
  let calculatedMemoryCapacity = 0

  if (memoryCapacityPoints >= 0 && memoryCapacityPoints < 6) {
    calculatedMemoryCapacity = 0 + 0 * Math.abs(memoryCapacityPoints - 0) // Always 0
  } else if (memoryCapacityPoints >= 6 && memoryCapacityPoints < 100) {
    calculatedMemoryCapacity = 0 + 1 * Math.abs(memoryCapacityPoints - 6)
  }

  if (calculatedMemoryCapacity > 94) {
    calculatedMemoryCapacity = 94
  }

  return calculatedMemoryCapacity
}

export function calculateHealthRecoveryBonus(vigor: number) {
  let healthRecovery = 0

  if (vigor >= 0 && vigor < 5) {
    healthRecovery = -0.55 + 0.05 * Math.abs(vigor - 0)
  } else if (vigor >= 5 && vigor < 15) {
    healthRecovery = -0.3 + 0.03 * Math.abs(vigor - 5)
  } else if (vigor >= 15 && vigor < 25) {
    healthRecovery = 0 + 0.07 * Math.abs(vigor - 15)
  } else if (vigor >= 25 && vigor < 35) {
    healthRecovery = 0.7 + 0.05 * Math.abs(vigor - 25)
  } else if (vigor >= 35 && vigor < 84) {
    healthRecovery = 1.2 + 0.02 * Math.abs(vigor - 35)
  } else if (vigor >= 84 && vigor < 85) {
    healthRecovery = 2.18 + 0.01 * Math.abs(vigor - 84)
  } else if (vigor >= 85 && vigor < 86) {
    healthRecovery = 2.19 + 0.03 * Math.abs(vigor - 85)
  } else if (vigor >= 86 && vigor < 100) {
    healthRecovery = 2.22 + 0.02 * Math.abs(vigor - 86)
  }

  if (healthRecovery > 250) {
    healthRecovery = 250
  }

  return (healthRecovery * 100).toFixed(2)
}

export function calculateSpellRecovery(knowledge: number) {
  let spellRecovery = 0

  if (knowledge >= 0 && knowledge < 28) {
    spellRecovery = 0.43 + 0.015 * Math.abs(knowledge - 0)
  } else if (knowledge >= 28 && knowledge < 35) {
    spellRecovery = 0.85 + 0.05 * Math.abs(knowledge - 28)
  } else if (knowledge >= 35 && knowledge < 84) {
    spellRecovery = 1.2 + 0.02 * Math.abs(knowledge - 35)
  } else if (knowledge >= 84 && knowledge < 85) {
    spellRecovery = 2.18 + 0.01 * Math.abs(knowledge - 84)
  } else if (knowledge >= 85 && knowledge < 86) {
    spellRecovery = 2.19 + 0.03 * Math.abs(knowledge - 85)
  } else if (knowledge >= 86 && knowledge < 100) {
    spellRecovery = 2.22 + 0.02 * Math.abs(knowledge - 86)
  } else {
    throw new Error('Knowledge is out of range (0 ≤ Knowledge < 100).')
  }

  if (spellRecovery > 250) {
    spellRecovery = 250
  }

  return (spellRecovery * 100).toFixed(2)
}

export function calculateMoveSpeed(agility: number, moveSpeedBonus: number, moveSpeedAdd: number) {
  let moveSpeed = 0
  const baseMoveSpeed = 300

  if (agility >= 0 && agility < 10) {
    moveSpeed = baseMoveSpeed + (-10 + 0.5 * agility)
  } else if (agility >= 10 && agility < 15) {
    moveSpeed = baseMoveSpeed + (-5 + 1 * (agility - 10))
  } else if (agility >= 15 && agility < 75) {
    moveSpeed = baseMoveSpeed + (0 + 0.75 * (agility - 15))
  } else if (agility >= 75 && agility < 100) {
    moveSpeed = baseMoveSpeed + (45 + 0.5 * (agility - 75))
  } else {
    throw new Error('Agility is out of range (0 ≤ Agility < 100).')
  }

  moveSpeed = moveSpeed * (1 + moveSpeedBonus) + moveSpeedAdd

  if (moveSpeed > 330) {
    moveSpeed = 330
  }

  return { moveSpeed: moveSpeed.toFixed(2), moveSpeedPercent: (moveSpeed / 3).toFixed(2) }
}

export function calculateActionSpeed(agility: number, dexterity: number, actionSpeedAdd: number) {
  const actionSpeedPoints: number = agility * 0.25 + dexterity * 0.75
  let actionSpeed = 0

  if (actionSpeedPoints >= 0 && actionSpeedPoints < 10) {
    actionSpeed = -0.38 + 0.03 * actionSpeedPoints
  } else if (actionSpeedPoints >= 10 && actionSpeedPoints < 13) {
    actionSpeed = -0.08 + 0.02 * (actionSpeedPoints - 10)
  } else if (actionSpeedPoints >= 13 && actionSpeedPoints < 25) {
    actionSpeed = -0.02 + 0.01 * (actionSpeedPoints - 13)
  } else if (actionSpeedPoints >= 25 && actionSpeedPoints < 41) {
    actionSpeed = 0.1 + 0.015 * (actionSpeedPoints - 25)
  } else if (actionSpeedPoints >= 41 && actionSpeedPoints < 50) {
    actionSpeed = 0.34 + 0.01 * (actionSpeedPoints - 41)
  } else if (actionSpeedPoints >= 50 && actionSpeedPoints < 100) {
    actionSpeed = 0.43 + 0.005 * (actionSpeedPoints - 50)
  }

  actionSpeed += actionSpeedAdd

  if (actionSpeed > 57.5) {
    actionSpeed = 57.5
  }

  return (actionSpeed * 100).toFixed(2)
}

export function calculateManualDexterity(dexterity: number) {
  let manualDexterity = 0

  if (dexterity >= 0 && dexterity < 15) {
    manualDexterity = -0.15 + 0.01 * dexterity
  } else if (dexterity >= 15 && dexterity < 23) {
    manualDexterity = 0 + 0.03 * (dexterity - 15)
  } else if (dexterity >= 23 && dexterity < 31) {
    manualDexterity = 0.24 + 0.02 * (dexterity - 23)
  } else if (dexterity >= 31 && dexterity < 37) {
    manualDexterity = 0.4 + 0.01 * (dexterity - 31)
  } else if (dexterity >= 37 && dexterity < 45) {
    manualDexterity = 0.46 + 0.005 * (dexterity - 37)
  } else if (dexterity >= 45 && dexterity < 95) {
    manualDexterity = 0.5 + 0.001 * (dexterity - 45)
  } else if (dexterity >= 95 && dexterity < 100) {
    manualDexterity = 0.55 + 0 * (dexterity - 95)
  }

  if (manualDexterity > 55) {
    manualDexterity = 55
  }

  return (manualDexterity * 100).toFixed(2)
}

export function calculateSpellCastingSpeed(knowledge: number, spellCastSpeedAdd: number) {
  let spellCastingSpeed = 0

  if (knowledge >= 0 && knowledge < 5) {
    spellCastingSpeed = -0.6 + 0.05 * knowledge
  } else if (knowledge >= 5 && knowledge < 10) {
    spellCastingSpeed = -0.35 + 0.04 * (knowledge - 5)
  } else if (knowledge >= 10 && knowledge < 20) {
    spellCastingSpeed = -0.15 + 0.03 * (knowledge - 10)
  } else if (knowledge >= 20 && knowledge < 50) {
    spellCastingSpeed = 0.15 + 0.025 * (knowledge - 20)
  } else if (knowledge >= 50 && knowledge < 80) {
    spellCastingSpeed = 0.9 + 0.02 * (knowledge - 50)
  } else if (knowledge >= 80 && knowledge < 100) {
    spellCastingSpeed = 1.5 + 0.015 * (knowledge - 80)
  }

  spellCastingSpeed += spellCastSpeedAdd

  if (spellCastingSpeed > 180) {
    spellCastingSpeed = 180
  }

  return (spellCastingSpeed * 100).toFixed(2)
}

export function calculateItemEquipSpeed(dexterity: number) {
  let itemEquipSpeed = 0

  if (dexterity >= 0 && dexterity < 1) {
    itemEquipSpeed = -0.95 + 0 * (dexterity - 0)
  } else if (dexterity >= 1 && dexterity < 2) {
    itemEquipSpeed = -0.95 + 0.04 * (dexterity - 1)
  } else if (dexterity >= 2 && dexterity < 15) {
    itemEquipSpeed = -0.91 + 0.07 * (dexterity - 2)
  } else if (dexterity >= 15 && dexterity < 35) {
    itemEquipSpeed = 0 + 0.05 * (dexterity - 15)
  } else if (dexterity >= 35 && dexterity < 70) {
    itemEquipSpeed = 1 + 0.02 * (dexterity - 35)
  } else if (dexterity >= 70 && dexterity < 100) {
    itemEquipSpeed = 1.7 + 0.01 * (dexterity - 70)
  }

  if (itemEquipSpeed > 200) {
    itemEquipSpeed = 200
  }

  return (itemEquipSpeed * 100).toFixed(2)
}

export function calculateRegularInteractionSpeed(
  agility: number,
  resourcefulness: number,
  regularInteractionSpeedAdd: number,
) {
  const regularInteractionSpeedPoints = agility * 0.4 + resourcefulness * 0.6
  let regularInteractionSpeed = 0

  if (regularInteractionSpeedPoints >= 0 && regularInteractionSpeedPoints < 7) {
    regularInteractionSpeed = -0.26 + 0.02 * (regularInteractionSpeedPoints - 0)
  } else if (regularInteractionSpeedPoints >= 7 && regularInteractionSpeedPoints < 15) {
    regularInteractionSpeed = -0.12 + 0.015 * (regularInteractionSpeedPoints - 7)
  } else if (regularInteractionSpeedPoints >= 15 && regularInteractionSpeedPoints < 20) {
    regularInteractionSpeed = 0 + 0.07 * (regularInteractionSpeedPoints - 15)
  } else if (regularInteractionSpeedPoints >= 20 && regularInteractionSpeedPoints < 25) {
    regularInteractionSpeed = 0.35 + 0.06 * (regularInteractionSpeedPoints - 20)
  } else if (regularInteractionSpeedPoints >= 25 && regularInteractionSpeedPoints < 30) {
    regularInteractionSpeed = 0.65 + 0.05 * (regularInteractionSpeedPoints - 25)
  } else if (regularInteractionSpeedPoints >= 30 && regularInteractionSpeedPoints < 35) {
    regularInteractionSpeed = 0.9 + 0.04 * (regularInteractionSpeedPoints - 30)
  } else if (regularInteractionSpeedPoints >= 35 && regularInteractionSpeedPoints < 40) {
    regularInteractionSpeed = 1.1 + 0.03 * (regularInteractionSpeedPoints - 35)
  } else if (regularInteractionSpeedPoints >= 40 && regularInteractionSpeedPoints < 45) {
    regularInteractionSpeed = 1.25 + 0.02 * (regularInteractionSpeedPoints - 40)
  } else if (regularInteractionSpeedPoints >= 45 && regularInteractionSpeedPoints < 100) {
    regularInteractionSpeed = 1.35 + 0.01 * (regularInteractionSpeedPoints - 45)
  }

  regularInteractionSpeed += regularInteractionSpeedAdd

  if (regularInteractionSpeed > 250) {
    regularInteractionSpeed = 250
  }

  return (regularInteractionSpeed * 100).toFixed(2)
}

export function calculateMagicalInteractionSpeed(will: number, magicalInteractionSpeedAdd: number) {
  let magicalInteractionSpeed = 0

  if (will >= 0 && will < 15) {
    magicalInteractionSpeed = -0.75 + 0.05 * (will - 0)
  } else if (will >= 15 && will < 25) {
    magicalInteractionSpeed = 0 + 0.07 * (will - 15)
  } else if (will >= 25 && will < 35) {
    magicalInteractionSpeed = 0.7 + 0.05 * (will - 25)
  } else if (will >= 35 && will < 84) {
    magicalInteractionSpeed = 1.2 + 0.02 * (will - 35)
  } else if (will >= 84 && will < 85) {
    magicalInteractionSpeed = 2.18 + 0.01 * (will - 84)
  } else if (will >= 85 && will < 86) {
    magicalInteractionSpeed = 2.19 + 0.03 * (will - 85)
  } else if (will >= 86 && will < 100) {
    magicalInteractionSpeed = 2.22 + 0.02 * (will - 86)
  }

  magicalInteractionSpeed += magicalInteractionSpeedAdd

  if (magicalInteractionSpeed > 250) {
    magicalInteractionSpeed = 250
  }

  return (magicalInteractionSpeed * 100).toFixed(2)
}

export function calculatePersuasiveness(resourcefulness: number) {
  let persuasiveness = 0

  if (resourcefulness >= 0 && resourcefulness < 35) {
    persuasiveness = 0 + 1 * (resourcefulness - 0)
  } else if (resourcefulness >= 35 && resourcefulness < 71) {
    persuasiveness = 35 + 0.5 * (resourcefulness - 35)
  } else if (resourcefulness >= 71 && resourcefulness < 99) {
    persuasiveness = 53 + 0.25 * (resourcefulness - 71)
  } else if (resourcefulness >= 99 && resourcefulness < 100) {
    persuasiveness = 60 + 0 * (resourcefulness - 99)
  }

  if (persuasiveness > 60) {
    persuasiveness = 60
  }

  return persuasiveness
}

export function calculateBuffDuration(will: number, buffDurationAdd: number) {
  let buffDuration = 0

  if (will >= 0 && will < 5) {
    buffDuration = -0.8 + 0.1 * (will - 0)
  } else if (will >= 5 && will < 7) {
    buffDuration = -0.3 + 0.05 * (will - 5)
  } else if (will >= 7 && will < 11) {
    buffDuration = -0.2 + 0.03 * (will - 7)
  } else if (will >= 11 && will < 15) {
    buffDuration = -0.08 + 0.02 * (will - 11)
  } else if (will >= 15 && will < 50) {
    buffDuration = 0 + 0.01 * (will - 15)
  } else if (will >= 50 && will < 100) {
    buffDuration = 0.35 + 0.005 * (will - 50)
  }

  buffDuration += buffDurationAdd

  if (buffDuration > 60) {
    buffDuration = 60
  }

  return (buffDuration * 100).toFixed(2)
}

export function calculateDebuffDuration(will: number, debuffDurationAdd: number) {
  let debuffDuration = 0

  if (will >= 0 && will < 1) {
    debuffDuration = 4 + -1.667 * Math.abs(will - 0)
  } else if (will >= 1 && will < 2) {
    debuffDuration = 2.333 + -0.833 * Math.abs(will - 1)
  } else if (will >= 2 && will < 3) {
    debuffDuration = 1.5 + -0.5 * Math.abs(will - 2)
  } else if (will >= 3 && will < 4) {
    debuffDuration = 1 + -0.333 * Math.abs(will - 3)
  } else if (will >= 4 && will < 5) {
    debuffDuration = 0.667 + -0.238 * Math.abs(will - 4)
  } else if (will >= 5 && will < 6) {
    debuffDuration = 0.429 + -0.096 * Math.abs(will - 5)
  } else if (will >= 6 && will < 7) {
    debuffDuration = 0.333 + -0.083 * Math.abs(will - 6)
  } else if (will >= 7 && will < 8) {
    debuffDuration = 0.25 + -0.045 * Math.abs(will - 7)
  } else if (will >= 8 && will < 9) {
    debuffDuration = 0.205 + -0.042 * Math.abs(will - 8)
  } else if (will >= 9 && will < 10) {
    debuffDuration = 0.163 + -0.039 * Math.abs(will - 9)
  } else if (will >= 10 && will < 11) {
    debuffDuration = 0.124 + -0.037 * Math.abs(will - 10)
  } else if (will >= 11 && will < 12) {
    debuffDuration = 0.087 + -0.023 * Math.abs(will - 11)
  } else if (will >= 12 && will < 14) {
    debuffDuration = 0.064 + -0.022 * Math.abs(will - 12)
  } else if (will >= 14 && will < 15) {
    debuffDuration = 0.02 + -0.02 * Math.abs(will - 14)
  } else if (will >= 15 && will < 17) {
    debuffDuration = 0 + -0.01 * Math.abs(will - 15)
  } else if (will >= 17 && will < 19) {
    debuffDuration = -0.02 + -0.009 * Math.abs(will - 17)
  } else if (will >= 19 && will < 20) {
    debuffDuration = -0.038 + -0.01 * Math.abs(will - 19)
  } else if (will >= 20 && will < 21) {
    debuffDuration = -0.048 + -0.009 * Math.abs(will - 20)
  } else if (will >= 21 && will < 22) {
    debuffDuration = -0.057 + -0.008 * Math.abs(will - 21)
  } else if (will >= 22 && will < 24) {
    debuffDuration = -0.065 + -0.009 * Math.abs(will - 22)
  } else if (will >= 24 && will < 29) {
    debuffDuration = -0.083 + -0.008 * Math.abs(will - 24)
  } else if (will >= 29 && will < 30) {
    debuffDuration = -0.123 + -0.007 * Math.abs(will - 29)
  } else if (will >= 30 && will < 31) {
    debuffDuration = -0.13 + -0.008 * Math.abs(will - 30)
  } else if (will >= 31 && will < 32) {
    debuffDuration = -0.138 + -0.007 * Math.abs(will - 31)
  } else if (will >= 32 && will < 33) {
    debuffDuration = -0.145 + -0.008 * Math.abs(will - 32)
  } else if (will >= 33 && will < 36) {
    debuffDuration = -0.153 + -0.007 * Math.abs(will - 33)
  } else if (will >= 36 && will < 37) {
    debuffDuration = -0.174 + -0.006 * Math.abs(will - 36)
  } else if (will >= 37 && will < 39) {
    debuffDuration = -0.18 + -0.007 * Math.abs(will - 37)
  } else if (will >= 39 && will < 41) {
    debuffDuration = -0.194 + -0.006 * Math.abs(will - 39)
  } else if (will >= 41 && will < 42) {
    debuffDuration = -0.206 + -0.007 * Math.abs(will - 41)
  } else if (will >= 42 && will < 46) {
    debuffDuration = -0.213 + -0.006 * Math.abs(will - 42)
  } else if (will >= 46 && will < 47) {
    debuffDuration = -0.237 + -0.005 * Math.abs(will - 46)
  } else if (will >= 47 && will < 49) {
    debuffDuration = -0.242 + -0.006 * Math.abs(will - 47)
  } else if (will >= 49 && will < 50) {
    debuffDuration = -0.254 + -0.005 * Math.abs(will - 49)
  } else if (will >= 50 && will < 52) {
    debuffDuration = -0.259 + -0.003 * Math.abs(will - 50)
  } else if (will >= 52 && will < 53) {
    debuffDuration = -0.265 + -0.002 * Math.abs(will - 52)
  } else if (will >= 53 && will < 55) {
    debuffDuration = -0.267 + -0.003 * Math.abs(will - 53)
  } else if (will >= 55 && will < 56) {
    debuffDuration = -0.273 + -0.002 * Math.abs(will - 55)
  } else if (will >= 56 && will < 58) {
    debuffDuration = -0.275 + -0.003 * Math.abs(will - 56)
  } else if (will >= 58 && will < 59) {
    debuffDuration = -0.281 + -0.002 * Math.abs(will - 58)
  } else if (will >= 59 && will < 60) {
    debuffDuration = -0.283 + -0.003 * Math.abs(will - 59)
  } else if (will >= 60 && will < 61) {
    debuffDuration = -0.286 + -0.002 * Math.abs(will - 60)
  } else if (will >= 61 && will < 62) {
    debuffDuration = -0.288 + -0.003 * Math.abs(will - 61)
  } else if (will >= 62 && will < 63) {
    debuffDuration = -0.291 + -0.002 * Math.abs(will - 62)
  } else if (will >= 63 && will < 64) {
    debuffDuration = -0.293 + -0.003 * Math.abs(will - 63)
  } else if (will >= 64 && will < 65) {
    debuffDuration = -0.296 + -0.002 * Math.abs(will - 64)
  } else if (will >= 65 && will < 66) {
    debuffDuration = -0.298 + -0.003 * Math.abs(will - 65)
  } else if (will >= 66 && will < 67) {
    debuffDuration = -0.301 + -0.002 * Math.abs(will - 66)
  } else if (will >= 67 && will < 68) {
    debuffDuration = -0.303 + -0.003 * Math.abs(will - 67)
  } else if (will >= 68 && will < 70) {
    debuffDuration = -0.306 + -0.002 * Math.abs(will - 68)
  } else if (will >= 70 && will < 71) {
    debuffDuration = -0.31 + -0.003 * Math.abs(will - 70)
  } else if (will >= 71 && will < 73) {
    debuffDuration = -0.313 + -0.002 * Math.abs(will - 71)
  } else if (will >= 73 && will < 74) {
    debuffDuration = -0.317 + -0.003 * Math.abs(will - 73)
  } else if (will >= 74 && will < 76) {
    debuffDuration = -0.32 + -0.002 * Math.abs(will - 74)
  } else if (will >= 76 && will < 77) {
    debuffDuration = -0.324 + -0.003 * Math.abs(will - 76)
  } else if (will >= 77 && will < 80) {
    debuffDuration = -0.327 + -0.002 * Math.abs(will - 77)
  } else if (will >= 80 && will < 81) {
    debuffDuration = -0.333 + -0.003 * Math.abs(will - 80)
  } else if (will >= 81 && will < 86) {
    debuffDuration = -0.336 + -0.002 * Math.abs(will - 81)
  } else if (will >= 86 && will < 87) {
    debuffDuration = -0.346 + -0.003 * Math.abs(will - 86)
  } else if (will >= 87 && will < 100) {
    debuffDuration = -0.349 + -0.002 * Math.abs(will - 87)
  }

  debuffDuration += debuffDurationAdd

  if (debuffDuration < -37.5) {
    debuffDuration = -37.5
  }

  return (debuffDuration * 100).toFixed(2)
}

export function calculatePhysicalDamageReduction(armorRating: number, pdrAdd: number) {
  let pdr = 0

  if (armorRating >= -300 && armorRating < -3) {
    pdr = -6.19 + 0.02 * Math.abs(armorRating - -300)
  } else if (armorRating >= -3 && armorRating < 22) {
    pdr = -0.25 + 0.01 * Math.abs(armorRating - -3)
  } else if (armorRating >= 22 && armorRating < 31) {
    pdr = 0 + 0.005 * Math.abs(armorRating - 22)
  } else if (armorRating >= 31 && armorRating < 42) {
    pdr = 0.045 + 0.004 * Math.abs(armorRating - 31)
  } else if (armorRating >= 42 && armorRating < 52) {
    pdr = 0.089 + 0.003 * Math.abs(armorRating - 42)
  } else if (armorRating >= 52 && armorRating < 62) {
    pdr = 0.119 + 0.002 * Math.abs(armorRating - 52)
  } else if (armorRating >= 62 && armorRating < 112) {
    pdr = 0.139 + 0.001 * Math.abs(armorRating - 62)
  } else if (armorRating >= 112 && armorRating < 175) {
    pdr = 0.189 + 0.002 * Math.abs(armorRating - 112)
  } else if (armorRating >= 175 && armorRating < 230) {
    pdr = 0.315 + 0.003 * Math.abs(armorRating - 175)
  } else if (armorRating >= 230 && armorRating < 317) {
    pdr = 0.453 + 0.002 * Math.abs(armorRating - 230)
  } else if (armorRating >= 317 && armorRating < 353) {
    pdr = 0.626 + 0.001 * Math.abs(armorRating - 317)
  } else if (armorRating >= 353 && armorRating < 368) {
    pdr = 0.662 + 0.001 * Math.abs(armorRating - 353)
  } else if (armorRating >= 368 && armorRating < 369) {
    pdr = 0.67 + 0 * Math.abs(armorRating - 368)
  } else if (armorRating >= 369 && armorRating < 370) {
    pdr = 0.67 + 0.001 * Math.abs(armorRating - 369)
  } else if (armorRating >= 370 && armorRating < 428) {
    pdr = 0.671 + 0 * Math.abs(armorRating - 370)
  } else if (armorRating >= 428 && armorRating < 429) {
    pdr = 0.7 + -0.001 * Math.abs(armorRating - 428)
  } else if (armorRating >= 429 && armorRating < 450) {
    pdr = 0.699 + 0 * Math.abs(armorRating - 429)
  } else if (armorRating >= 450 && armorRating < 500) {
    pdr = 0.705 + 0 * Math.abs(armorRating - 450)
  }

  pdr += pdrAdd

  if (pdr > 71.45) {
    pdr = 71.45
  }

  return (pdr * 100).toFixed(2)
}

export function calculateMagicResistance(will: number, magicResistanceAdd: number) {
  let mr = 0

  if (will >= 0 && will < 5) {
    mr = -20 + 4 * Math.abs(will - 0)
  } else if (will >= 5 && will < 15) {
    mr = 0 + 3 * Math.abs(will - 5)
  } else if (will >= 15 && will < 33) {
    mr = 30 + 4 * Math.abs(will - 15)
  } else if (will >= 33 && will < 48) {
    mr = 102 + 3 * Math.abs(will - 33)
  } else if (will >= 48 && will < 58) {
    mr = 147 + 2 * Math.abs(will - 48)
  } else if (will >= 58 && will < 100) {
    mr = 167 + 1 * Math.abs(will - 58)
  }

  mr += magicResistanceAdd

  return mr.toFixed(2)
}

export function calculateMagicDamageReduction(magicResistance: number, mdrAdd: number) {
  let mdr = 0

  if (magicResistance >= -300 && magicResistance < -15) {
    mdr = -5.95 + 0.02 * Math.abs(magicResistance - -300)
  } else if (magicResistance >= -15 && magicResistance < 10) {
    mdr = -0.25 + 0.01 * Math.abs(magicResistance - -15)
  } else if (magicResistance >= 10 && magicResistance < 250) {
    mdr = 0 + 0.003 * Math.abs(magicResistance - 10)
  } else if (magicResistance >= 250 && magicResistance < 350) {
    mdr = 0.6 + 0.002 * Math.abs(magicResistance - 250)
  } else if (magicResistance >= 350 && magicResistance < 500) {
    mdr = 0.8 + 0.001 * Math.abs(magicResistance - 350)
  }

  mdr += mdrAdd

  if (mdr > 95) {
    mdr = 95
  }

  return (mdr * 100).toFixed(2)
}

export function calculatePhysicalPower(strength: number, physicalPowerAdd: number) {
  const physicalPower = strength + physicalPowerAdd

  return physicalPower
}

export function calculatePhysicalPowerBonus(physicalPower: number, physicalDamageBonusAdd: number) {
  let physicalPowerBonus

  if (physicalPower >= 0 && physicalPower < 5) {
    physicalPowerBonus = -0.8 + 0.1 * Math.abs(physicalPower - 0)
  } else if (physicalPower >= 5 && physicalPower < 7) {
    physicalPowerBonus = -0.3 + 0.05 * Math.abs(physicalPower - 5)
  } else if (physicalPower >= 7 && physicalPower < 11) {
    physicalPowerBonus = -0.2 + 0.03 * Math.abs(physicalPower - 7)
  } else if (physicalPower >= 11 && physicalPower < 15) {
    physicalPowerBonus = -0.08 + 0.02 * Math.abs(physicalPower - 11)
  } else if (physicalPower >= 15 && physicalPower < 50) {
    physicalPowerBonus = 0 + 0.01 * Math.abs(physicalPower - 15)
  } else if (physicalPower >= 50 && physicalPower < 100) {
    physicalPowerBonus = 0.35 + 0.005 * Math.abs(physicalPower - 50)
  } else {
    throw new Error('Physical Power value is out of range (0 ≤ P_hysicalPower < 100).')
  }

  physicalPowerBonus += physicalDamageBonusAdd

  if (physicalPowerBonus > 60) {
    physicalPowerBonus = 60
  }

  return (physicalPowerBonus * 100).toFixed(2)
}

export function calculateMagicPower(will: number, magicPowerAdd: number) {
  const magicPower = will + magicPowerAdd

  return magicPower
}

export function calculateMagicPowerBonus(magicPower: number, magicDamageBonus: number) {
  let magicPowerBonus

  if (magicPower >= 0 && magicPower < 1) {
    magicPowerBonus = -0.9 + 0 * Math.abs(magicPower - 0)
  } else if (magicPower >= 1 && magicPower < 5) {
    magicPowerBonus = -0.9 + 0.1 * Math.abs(magicPower - 1)
  } else if (magicPower >= 5 && magicPower < 15) {
    magicPowerBonus = -0.5 + 0.05 * Math.abs(magicPower - 5)
  } else if (magicPower >= 15 && magicPower < 21) {
    magicPowerBonus = 0 + 0.025 * Math.abs(magicPower - 15)
  } else if (magicPower >= 21 && magicPower < 40) {
    magicPowerBonus = 0.15 + 0.02 * Math.abs(magicPower - 21)
  } else if (magicPower >= 40 && magicPower < 50) {
    magicPowerBonus = 0.53 + 0.01 * Math.abs(magicPower - 40)
  } else if (magicPower >= 50 && magicPower < 100) {
    magicPowerBonus = 0.63 + 0.005 * Math.abs(magicPower - 50)
  } else {
    throw new Error('Magical Power value is out of range (0 ≤ M_agicalPower < 100).')
  }

  magicPowerBonus += magicDamageBonus

  if (magicPower > 88) {
    magicPower = 88
  }

  return (magicPowerBonus * 100).toFixed(2)
}
