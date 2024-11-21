export function calculateHealth(
  vigor: number,
  strength: number,
  maxHealthAdd: number,
  maxHealthBonus: number,
): number {
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

  return calculatedHealth
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
  } else {
    throw new Error('Knowledge is out of range (0 ≤ Knowledge < 100).')
  }

  return calculatedMemoryCapacity
}

export function calculateHealthRecoveryBonus(vigor: number): number {
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
  } else {
    throw new Error('Vigor is out of range (0 ≤ Vigor < 100).')
  }

  return healthRecovery * 100
}

export function calculateSpellRecoveryBonus(knowledge: number): number {
  let memoryRecovery = 0

  if (knowledge >= 0 && knowledge < 28) {
    memoryRecovery = 0.43 + 0.015 * Math.abs(knowledge - 0)
  } else if (knowledge >= 28 && knowledge < 35) {
    memoryRecovery = 0.85 + 0.05 * Math.abs(knowledge - 28)
  } else if (knowledge >= 35 && knowledge < 84) {
    memoryRecovery = 1.2 + 0.02 * Math.abs(knowledge - 35)
  } else if (knowledge >= 84 && knowledge < 85) {
    memoryRecovery = 2.18 + 0.01 * Math.abs(knowledge - 84)
  } else if (knowledge >= 85 && knowledge < 86) {
    memoryRecovery = 2.19 + 0.03 * Math.abs(knowledge - 85)
  } else if (knowledge >= 86 && knowledge < 100) {
    memoryRecovery = 2.22 + 0.02 * Math.abs(knowledge - 86)
  } else {
    throw new Error('Knowledge is out of range (0 ≤ Knowledge < 100).')
  }

  return memoryRecovery * 100
}

export function calculateMoveSpeed(agility: number, moveSpeedBonus: number, moveSpeedAdd: number) {
  let moveSpeed = 0
  const baseMoveSpeed = 290

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

  console.log(agility)

  moveSpeed = moveSpeed * (1 + moveSpeedBonus) + moveSpeedAdd

  return { moveSpeed: moveSpeed, moveSpeedPercent: moveSpeed / 3 }
}
