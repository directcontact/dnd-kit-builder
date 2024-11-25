<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { defineProps } from 'vue'
import type { WeaponSelect } from '@/lib/weapons'

const props = defineProps<{ id: number; selectedWeapon: WeaponSelect }>()

const [collectedProps, dragSource, dragPreview] = useDrag(() => ({
  type: 'BOX',
  item: { id: props.id },
}))
</script>
<template>
  <div
    class="text-dnd-white flex items-center flex-col p-3 border-2 w-24 h-fit-content m-1"
    :ref="dragSource"
  >
    <img :src="props.selectedWeapon.weapons[0].src" />
    <div v-if="collectedProps.isDragging" :ref="dragPreview">
      <img :src="props.selectedWeapon.weapons[0].src" />
    </div>
    <div class="text-sm">{{ props.selectedWeapon.name }}</div>
  </div>
</template>
