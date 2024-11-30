import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ALL_CLASSES, type DNDClass } from '@/lib/dnd-class'
import {
  calculateHealth,
  calculateHealthRecoveryBonus,
  calculateMemoryCapacity,
  calculateSpellRecovery,
  calculateMoveSpeed,
  calculateActionSpeed,
  calculateManualDexterity,
  calculateSpellCastingSpeed,
  calculateItemEquipSpeed,
  calculateRegularInteractionSpeed,
  calculateMagicalInteractionSpeed,
  calculatePersuasiveness,
  calculateBuffDuration,
  calculateDebuffDuration,
  calculatePhysicalDamageReduction,
  calculateMagicResistance,
  calculateMagicDamageReduction,
  calculatePhysicalPowerBonus,
  calculatePhysicalPower,
  calculateMagicPower,
  calculateMagicPowerBonus,
} from '@/composables/useCalculateStat'

export const usePlayerStore = defineStore('player', () => {
  const playerClass = ref(ALL_CLASSES[0])
  const armorPenValue = ref(0)
  const magicPenValue = ref(0)
  const headshotReducValue = ref(0)
  const projectileReducValue = ref(0)
  const strength = ref({
    label: 'Strength',
    value: playerClass.value.stats.strength,
  })
  const vigor = ref({
    label: 'Vigor',
    value: playerClass.value.stats.vigor,
  })
  const agility = ref({
    label: 'Agility',
    value: playerClass.value.stats.agility,
  })
  const dexterity = ref({
    label: 'Dexterity',
    value: playerClass.value.stats.dexterity,
  })
  const will = ref({
    label: 'Will',
    value: playerClass.value.stats.will,
  })
  const knowledge = ref({
    label: 'Knowledge',
    value: playerClass.value.stats.knowledge,
  })
  const resourcefulness = ref({
    label: 'Resourcefulness',
    value: playerClass.value.stats.resourcefulness,
  })
  const armorRating = ref(0)
  const health = computed(() => ({
    label: 'Health',
    value: calculateHealth(vigor.value.value, strength.value.value, 0, 0),
  }))
  const memCap = computed(() => ({
    label: 'Memory Capacity',
    value: calculateMemoryCapacity(knowledge.value.value, 0, 0),
  }))
  const utilityEffectiveness = computed(() => ({
    label: 'Utility Effectiveness',
    value: 0,
  }))
  const luck = computed(() => ({
    label: 'Luck',
    value: 0,
  }))
  const healthRecovery = computed(() => ({
    label: 'Health Recovery Bonus',
    value: `${calculateHealthRecoveryBonus(vigor.value.value)}%`,
  }))
  const spellRecovery = computed(() => ({
    label: 'Spell Recovery Bonus',
    value: `${calculateSpellRecovery(knowledge.value.value)}%`,
  }))
  const moveSpeed = computed(() => ({
    label: 'Move Speed',
    value: `${calculateMoveSpeed(agility.value.value, 0, 0).moveSpeed} (${calculateMoveSpeed(agility.value.value, 0, 0).moveSpeedPercent}%)`,
  }))
  const actionSpeed = computed(() => ({
    label: 'Action Speed',
    value: `${calculateActionSpeed(agility.value.value, dexterity.value.value, 0)}%`,
  }))
  const manualDexterity = computed(() => ({
    label: 'Manual Dexterity',
    value: `${calculateManualDexterity(dexterity.value.value)}%`,
  }))
  const spellCastSpeed = computed(() => ({
    label: 'Spell Casting Speed',
    value: `${calculateSpellCastingSpeed(knowledge.value.value, 0)}%`,
  }))
  const itemEquipSpeed = computed(() => ({
    label: 'Equip Speed',
    value: `${calculateItemEquipSpeed(dexterity.value.value)}%`,
  }))
  const regularInteractionSpeed = computed(() => ({
    label: 'Regular Interaction Speed',
    value: `${calculateRegularInteractionSpeed(
      agility.value.value,
      resourcefulness.value.value,
      0,
    )}%`,
  }))
  const magicalInteractionSpeed = computed(() => ({
    label: 'Magical Interaction Speed',
    value: `${calculateMagicalInteractionSpeed(will.value.value, 0)}%`,
  }))
  const persuasiveness = computed(() => ({
    label: 'Persuasiveness',
    value: calculatePersuasiveness(resourcefulness.value.value),
  }))
  const buffDuration = computed(() => ({
    label: 'Buff Duration',
    value: `${calculateBuffDuration(will.value.value, 0)}%`,
  }))
  const debuffDuration = computed(() => ({
    label: 'Debuff Duration',
    value: `${calculateDebuffDuration(will.value.value, 0)}%`,
  }))
  const armorPenetration = computed(() => ({
    label: 'Armor Penetration',
    value: `${armorPenValue.value}%`,
  }))
  const magicPenetration = computed(() => ({
    label: 'Magic Penetration',
    value: `${magicPenValue.value}%`,
  }))
  const headshotReduction = computed(() => ({
    label: 'Headshot Reduction',
    value: `${headshotReducValue.value}%`,
  }))
  const projectileReduction = computed(() => ({
    label: 'Projectile Reduction',
    value: `${projectileReducValue.value}%`,
  }))
  const pdr = computed(() => ({
    label: 'Physical Damage Reduction',
    value: `${calculatePhysicalDamageReduction(armorRating.value, 0)}%`,
  }))
  const magicResistance = computed(() => ({
    label: 'Magic Resistance',
    value: calculateMagicResistance(will.value.value, 0),
  }))
  const mdr = computed(() => ({
    label: 'Magic Damage Reduction',
    value: `${calculateMagicDamageReduction(Number(magicResistance.value), 0)}%`,
  }))
  const physicalPower = computed(() => ({
    label: 'Physical Power',
    value: calculatePhysicalPower(strength.value.value, 0),
  }))
  const physicalPowerBonus = computed(() => ({
    label: 'Physical Power Bonus',
    value: `${calculatePhysicalPowerBonus(physicalPower.value.value, 0)}%`,
  }))
  const magicPower = computed(() => ({
    label: 'Magic Power',
    value: calculateMagicPower(will.value.value, 0),
  }))
  const magicPowerBonus = computed(() => ({
    label: 'Magic Power Bonus',
    value: `${calculateMagicPowerBonus(magicPower.value.value, 0)}%`,
  }))

  const stats = ref({
    strength,
    vigor,
    agility,
    dexterity,
    will,
    knowledge,
    resourcefulness,
    utilityEffectiveness,
    luck,
    health,
    memCap,
    healthRecovery,
    spellRecovery,
    moveSpeed,
    actionSpeed,
    manualDexterity,
    spellCastSpeed,
    itemEquipSpeed,
    regularInteractionSpeed,
    magicalInteractionSpeed,
    persuasiveness,
    buffDuration,
    debuffDuration,
    armorPenetration,
    magicPenetration,
    headshotReduction,
    projectileReduction,
    pdr,
    magicResistance,
    mdr,
    physicalPower,
    physicalPowerBonus,
    magicPower,
    magicPowerBonus,
  })

  function changePlayerClass(newClass: DNDClass) {
    playerClass.value = newClass
    strength.value.value = playerClass.value.stats.strength
    vigor.value.value = playerClass.value.stats.vigor
    agility.value.value = playerClass.value.stats.agility
    dexterity.value.value = playerClass.value.stats.dexterity
    will.value.value = playerClass.value.stats.will
    knowledge.value.value = playerClass.value.stats.knowledge
    resourcefulness.value.value = playerClass.value.stats.resourcefulness
  }

  return {
    playerClass,
    strength,
    vigor,
    agility,
    dexterity,
    will,
    knowledge,
    resourcefulness,
    utilityEffectiveness,
    luck,
    health,
    memCap,
    healthRecovery,
    spellRecovery,
    moveSpeed,
    actionSpeed,
    manualDexterity,
    spellCastSpeed,
    itemEquipSpeed,
    regularInteractionSpeed,
    magicalInteractionSpeed,
    persuasiveness,
    buffDuration,
    debuffDuration,
    armorPenetration,
    magicPenetration,
    headshotReduction,
    projectileReduction,
    pdr,
    magicResistance,
    mdr,
    physicalPower,
    physicalPowerBonus,
    magicPower,
    magicPowerBonus,
    stats,
    changePlayerClass,
  }
})
