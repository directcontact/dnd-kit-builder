<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { WeaponSelect } from '@/lib/weapons'
import type { Weapon } from '@/typings/equip'
import { Dialog, Button, Select, MultiSelect, InputText, Message } from 'primevue'
import { RARITIES } from '@/lib/weapons'
import { MODIFIERS } from '@/lib/modifiers'
import type { CoreModifier } from '@/typings/modifier'
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
const selectedModifiers = ref<CoreModifier[]>([])

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

function handleChangeModifier(modifiers: { name: string; modifier: CoreModifier }[]) {
  selectedModifiers.value = modifiers.map((modifierSelect) => modifierSelect.modifier)
}

function handleStatValueChange(
  value: string | undefined,
  min: number,
  max: number,
  wholeValues: boolean,
) {}

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
    :style="{ width: '50rem' }"
  >
    <div class="flex items-center flex-row mb-3">
      <img :src="newEquipmentDetailSrc" />
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col mr-3">
          <div :class="RARITIES[newEquipmentDetails.rarity].color">
            {{ RARITIES[newEquipmentDetails.rarity].name }}
          </div>
          <Select
            @update:modelValue="handleRarityChange"
            :modelValue="newEquipmentDetails.rarity"
            :options="[...Array(7).keys()]"
            class="w-fit"
          />
        </div>
        <div class="flex flex-col">
          <div :class="RARITIES[newEquipmentDetails.rarity].color">Modifiers</div>
          <MultiSelect
            @update:modelValue="handleChangeModifier"
            optionLabel="name"
            :options="dialogPotentialModifierList"
            class="w-fit"
            selectedItemsLabel="Modifiers on the right"
            :maxSelectedLabels="0"
            :selectionLimit="RARITIES[newEquipmentDetails.rarity].modifiers"
            :disabled="RARITIES[newEquipmentDetails.rarity].modifiers === 0"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-1/2 space-y-1">
        <div>{{ newEquipment ? newEquipment?.name : '' }}</div>
        <div
          class="flex flex-row justify-center items-center"
          v-for="selectedModifier of selectedModifiers"
          v-bind:key="selectedModifier.statName"
        >
          <div class="flex flex-col gap-2">
            <label :for="selectedModifier.stat">{{ selectedModifier.statName }}</label>
            <InputText
              :id="selectedModifier.stat"
              size="small"
              @update:modelValue="
                ($event) =>
                  handleStatValueChange(
                    $event,
                    selectedModifier.statValues[0],
                    selectedModifier.statValues[1],
                    selectedModifier.wholeValues,
                  )
              "
            />
            <Message
              class="border-0 bg-transparent text-black"
              size="small"
              severity="secondary"
              variant="simple"
            >
              Range: {{ selectedModifier.statValues[0] }} ~ {{ selectedModifier.statValues[1] }} |
              Whole Numbers:
              {{ selectedModifier.wholeValues ? 'Yes' : 'No' }}
            </Message>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
  </Dialog>
</template>
