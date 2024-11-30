<script setup lang="ts">
import { ref, computed } from 'vue'
import { ALL_CLASSES } from '@/lib/dnd-class'
import { ALL_WEAPONS_SELECT } from '@/lib/weapons'
import type { WeaponSelect } from '@/lib/weapons'
import { MultiSelect, Select, Tabs, TabList, Tab, TabPanels, TabPanel } from 'primevue'
import type { Weapon, Armor } from '@/typings/equip'
import DraggableEquipment from '@/components/DraggableEquipment.vue'
import { useDrop } from 'vue3-dnd'
import CreateEquipmentDialog from '@/components/CreateEquipmentDialog.vue'
import { usePlayerStore } from '@/stores/player'

const [collectedProps, drop] = useDrop(() => ({
  accept: ['BOX'],
}))

const { stats, playerClass, changePlayerClass } = usePlayerStore()

const selectedSearchWeapons = ref<WeaponSelect[]>([])
const selectedSearchArmor = ref<Armor[]>([])
const selectedSearchAccessories = ref<Weapon[]>([])
const selectedSavedWeapons = ref<WeaponSelect[]>([])
const selectedSavedArmor = ref<Armor[]>([])
const selectedSavedAccessories = ref<Weapon[]>([])
const dialogRef = ref(null)

function openCreateEquipmentDialog(equipment: any) {
  console.log(dialogRef.value)
  dialogRef.value.handleCreateEquipment(equipment)
}
</script>

<template>
  <main
    class="text-dnd-white bg-[url('@/assets/background.webp')] bg-cover w-screen h-screen flex justify-center items-center dark"
  >
    <div class="w-5/6 bg-dnd-black h-5/6 p-3 rounded-md flex flex-row space-x-3">
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md p-3 overflow-y-scroll">
        <div class="w-full text-center">
          Class:
          <Select
            :modelValue="playerClass"
            @update:modelValue="changePlayerClass"
            :options="ALL_CLASSES"
            optionLabel="name"
            size="small"
          />
        </div>
        <div class="w-full flex justify-between" v-for="stat of stats" v-bind:key="stat.label">
          <div>{{ stat.label }}</div>
          <div>{{ stat.value }}</div>
        </div>
      </div>
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md p-3 relative">
        <!-- HELMET -->
        <div class="border-2 w-24 h-24 absolute top-[10%] left-[41%]"></div>
        <!-- NECKLACE -->
        <div class="border-2 w-10 h-10 absolute top-[17.5%] left-[61.5%]"></div>
        <!-- FIRST SET OF WEAPON -->
        <div class="w-32 h-48 absolute left-4 top-12 flex flex-row">
          <div class="border-l-2 border-t-2 border-b-2 w-1/2" :ref="drop"></div>
          <div class="border-2 w-1/2" :ref="drop"></div>
        </div>
        <!-- TORSO -->
        <div class="border-2 w-36 h-56 absolute left-1/2 -translate-x-1/2 top-[24%]"></div>
        <!-- SECOND SET OF WEAPON -->
        <div class="w-32 h-48 absolute right-4 top-12 flex flex-row">
          <div class="border-l-2 border-t-2 border-b-2 w-1/2" :ref="drop"></div>
          <div class="border-2 w-1/2" :ref="drop"></div>
        </div>
        <!-- RING ONE -->
        <div class="border-2 w-10 h-10 absolute top-[48.2%] left-[25.3%]"></div>
        <!-- RING TWO -->
        <div class="border-2 w-10 h-10 absolute top-[48.2%] right-[25.3%]"></div>
        <!-- GLOVES -->
        <div class="border-2 w-24 h-24 absolute top-[55.5%] left-[14.5%]"></div>
        <!-- BOOTS -->
        <div class="border-2 w-24 h-24 absolute top-[55.5%] right-[14.5%]"></div>
        <!-- PANTS -->
        <div class="border-2 w-36 h-56 absolute left-1/2 -translate-x-1/2 top-[55.5%]"></div>
      </div>
      <div
        class="border-2 border-black-500 w-1/3 h-full rounded-md flex flex-col justify-start p-3 overflow-y-scroll"
      >
        <Tabs class="h-full" value="0">
          <TabList>
            <Tab value="0">Search Equipment</Tab>
            <Tab value="1">Saved Equipment</Tab>
          </TabList>
          <TabPanels class="h-full">
            <TabPanel class="h-full" value="0">
              <div class="w-full flex flex-row flex-wrap justify-normal items-start mb-3">
                <MultiSelect
                  v-model="selectedSearchWeapons"
                  :options="ALL_WEAPONS_SELECT"
                  optionLabel="name"
                  filter
                  placeholder="Select Weapon"
                  :maxSelectedLabels="3"
                  class="w-fit-content"
                  size="small"
                >
                </MultiSelect>
                <MultiSelect
                  v-model="selectedSearchArmor"
                  :options="[]"
                  optionLabel="name"
                  filter
                  placeholder="Select Armor"
                  :maxSelectedLabels="3"
                  class="w-fit-content"
                  size="small"
                >
                </MultiSelect>
                <MultiSelect
                  v-model="selectedSearchAccessories"
                  :options="[]"
                  optionLabel="name"
                  filter
                  placeholder="Select Accessories"
                  :maxSelectedLabels="3"
                  class="w-fit-content"
                  size="small"
                >
                </MultiSelect>
              </div>
              <div class="flex flex-row flex-wrap">
                <div
                  class="space-x-3"
                  v-for="(selectedWeapon, index) of selectedSearchWeapons"
                  v-bind:key="selectedWeapon.name"
                >
                  <div
                    class="text-dnd-white flex items-center flex-col p-3 border-2 w-24 h-fit-content m-1 cursor-pointer"
                    @click="openCreateEquipmentDialog(selectedWeapon)"
                  >
                    <img :src="selectedWeapon.weapons[0].src" />
                    <div class="text-sm">{{ selectedWeapon.name }}</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="w-full flex flex-row flex-wrap justify-normal items-start mb-3">
                <MultiSelect
                  v-model="selectedSavedWeapons"
                  optionLabel="name"
                  filter
                  placeholder="Select Weapon"
                  :maxSelectedLabels="3"
                  class="w-fit-content dark"
                  size="small"
                >
                </MultiSelect>
                <MultiSelect
                  v-model="selectedSavedArmor"
                  :options="[]"
                  optionLabel="name"
                  filter
                  placeholder="Select Armor"
                  :maxSelectedLabels="3"
                  class="w-fit-content dark"
                  size="small"
                >
                </MultiSelect>
                <MultiSelect
                  v-model="selectedSavedAccessories"
                  :options="[]"
                  optionLabel="name"
                  filter
                  placeholder="Select Accessories"
                  :maxSelectedLabels="3"
                  class="w-fit-content dark"
                  size="small"
                >
                </MultiSelect>
              </div>
              <div class="flex flex-row flex-wrap">
                <div
                  class="space-x-3"
                  v-for="(selectedWeapon, index) of selectedSavedWeapons"
                  v-bind:key="selectedWeapon.name"
                >
                  <DraggableEquipment :id="index" :selectedWeapon="selectedWeapon" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
    <CreateEquipmentDialog ref="dialogRef" />
  </main>
</template>
