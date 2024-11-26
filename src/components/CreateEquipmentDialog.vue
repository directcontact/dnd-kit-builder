<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { WeaponSelect } from '@/lib/weapons'
import type { Weapon } from '@/typings/equip'
import { Dialog, Button, Select } from 'primevue'
import { RARITIES } from '@/lib/weapons'
import { MODIFIERS } from '@/lib/modifiers'
import type { CoreModifierSet } from '@/lib/modifiers'
import type { Slot } from '@/typings/slot'

type AttributedModifier = {
  stat: string
  statName: string
  statValue: number
}

type EquipmentDetails = {
  rarity: number
  modifiers: AttributedModifier[]
  weapon: Weapon | null
}

onMounted(() => {
  newEquipmentDetails.value.weapon = newEquipment.value?.weapons[0]
})

const newEquipment = ref<WeaponSelect | null>(null)
const newEquipmentDetails = ref<EquipmentDetails>({
  rarity: 0,
  modifiers: [],
  weapon: null,
})
const currentlySelectedModifier = ref(null)

const newEquipmentDetailSrc = computed(() => newEquipmentDetails.value.weapon?.src)
const dialogPotentialModifierList = computed(() => {
  if (newEquipment.value && newEquipmentDetails.value.weapon) {
    const modifierSets = MODIFIERS.filter((modifierSet: CoreModifierSet) =>
      modifierSet.slots.includes(newEquipmentDetails.value.weapon?.slot as Slot),
    )

    const modifiers = modifierSets.flatMap((modifierSet) => modifierSet.modifiers)
    const validModifiers = modifiers.filter((modifier) =>
      modifier.slots.includes(newEquipmentDetails.value.weapon?.slot as Slot),
    )
    return validModifiers.map((modifier) => ({ name: modifier.statName, modifier: modifier }))
  } else {
    return []
  }
})
const visible = ref(false)

function handleCreateEquipment(equipment: any) {
  newEquipment.value = equipment
  visible.value = true
}

function handleRarityChange(rarity: number) {
  newEquipmentDetails.value.rarity = rarity

  const potentialWeapons: Weapon[] = newEquipment.value?.weapons.filter(
    (weapon) => weapon.rarity === rarity,
  )
  newEquipmentDetails.value.weapon = potentialWeapons.find((weapon) => !weapon.crafted)
}

function handleAddModifier(modifier: CoreModifier) {
  currentlySelectedModifier.value = null
  console.log('huh')
}

defineExpose({
  handleCreateEquipment: handleCreateEquipment,
})
</script>

<template>
  <Dialog
    class="dark bg-surface-950 text-surface-400"
    v-model:visible="visible"
    modal
    :header="'Create New ' + (newEquipment ? newEquipment?.name : '')"
    :style="{ width: '25rem' }"
  >
    <div class="flex items-center flex-row">
      <img :src="newEquipmentDetailSrc" />
      <div class="flex flex-col mr-3">
        <div :class="RARITIES[newEquipmentDetails.rarity].color">
          {{ RARITIES[newEquipmentDetails.rarity].name }}
        </div>
        <Select
          @update:modelValue="handleRarityChange"
          :model-value="newEquipmentDetails.rarity"
          :options="[...Array(7).keys()]"
        />
      </div>
      <div class="flex flex-col">
        <div :class="RARITIES[newEquipmentDetails.rarity].color">Modifiers</div>
        <Select
          @update:modelValue="handleAddModifier"
          optionLabel="name"
          :options="dialogPotentialModifierList"
        />
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
  </Dialog>
</template>
