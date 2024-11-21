<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import {
  FIGHTER,
  RANGER,
  BARBARIAN,
  BARD,
  CLERIC,
  WARLOCK,
  DRUID,
  ROGUE,
  WIZARD,
} from '@/lib/dnd-class'
import {
  calculateHealth,
  calculateHealthRecoveryBonus,
  calculateMemoryCapacity,
  calculateSpellRecoveryBonus,
  calculateMoveSpeed,
} from '@/composables/useCalculateStat'

const userClass = ref(FIGHTER)
const currentStats = ref(userClass.value.stats)
const health = computed(() =>
  calculateHealth(currentStats.value.vigor, currentStats.value.strength, 0, 0),
)
const memCap = computed(() => calculateMemoryCapacity(currentStats.value.knowledge, 0, 0))
const healthRecovery = computed(() => calculateHealthRecoveryBonus(currentStats.value.vigor))
const memoryRecovery = computed(() => calculateSpellRecoveryBonus(currentStats.value.knowledge))
const moveSpeed = computed(() => calculateMoveSpeed(currentStats.value.agility, 0, 0))

const displayedStats = ref({
  strength: {
    label: 'Strength',
    value: currentStats.value.strength,
  },
  vigor: {
    label: 'Vigor',
    value: currentStats.value.vigor,
  },
  agility: {
    label: 'Agility',
    value: currentStats.value.agility,
  },
  dexterity: {
    label: 'Dexterity',
    value: currentStats.value.dexterity,
  },
  will: {
    label: 'Will',
    value: currentStats.value.will,
  },
  knowledge: {
    label: 'Knowledge',
    value: currentStats.value.knowledge,
  },
  resourcefulness: {
    label: 'Resourcefulness',
    value: currentStats.value.resourcefulness,
  },
  health: {
    label: 'Health',
    value: health,
  },
  memory_capacity: {
    label: 'Memory Capacity',
    value: memCap,
  },
  utility_effectiveness: {
    label: 'Utility Effectiveness',
    value: 0,
  },
  luck: {
    label: 'Luck',
    value: 0,
  },
  health_recovery_bonus: {
    label: 'Health Recovery Bonus',
    value: `${healthRecovery.value}%`,
  },
  spell_recovery_bonus: {
    label: 'Spell Recovery Bonus',
    value: `${memoryRecovery.value}%`,
  },
  move_speed: {
    label: 'Move Speed',
    value: `${moveSpeed.value.moveSpeed} (% ${moveSpeed.value.moveSpeedPercent})`,
  },
})
</script>

<template>
  <main class="text-dnd-white bg-dnd-blue w-screen h-screen flex justify-center items-center">
    <div class="w-4/5 bg-dnd-black h-4/5 p-3 rounded-md flex flex-row space-x-3">
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md p-3">
        <div class="w-full text-center">Class: {{ userClass.name }}</div>
        <div
          class="w-full flex justify-between"
          v-for="stat of displayedStats"
          v-bind:key="stat.label"
        >
          <div>{{ stat.label }}</div>
          <div>{{ stat.value }}</div>
        </div>
      </div>
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md">equip area</div>
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md">
        search items or saved items
      </div>
    </div>
  </main>
</template>
