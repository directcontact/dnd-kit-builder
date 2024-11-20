<script setup lang="ts">
import { ref } from 'vue'
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

const userClass = ref(FIGHTER)
const displayedStats = ref({
  strength: {
    label: 'Strength',
    value: 1,
  },
})
</script>

<template>
  <main class="text-dnd-white bg-dnd-blue w-screen h-screen flex justify-center items-center">
    <div class="w-4/5 bg-dnd-black h-4/5 p-3 rounded-md flex flex-row space-x-3">
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md p-3">
        <div class="w-full text-center">Class: {{ userClass }}</div>
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
