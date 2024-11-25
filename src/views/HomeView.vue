<script setup lang="ts">
import { ref, computed } from 'vue'
import { ALL_CLASSES } from '@/lib/dnd-class'
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
import { ALL_WEAPONS_SELECT } from '@/lib/weapons'
import type { WeaponSelect } from '@/lib/weapons'
import { MultiSelect, Select, Tabs, TabList, Tab, TabPanels, TabPanel } from 'primevue'
import type { Weapon, Armor } from '@/typings/equip'
import DraggableEquipment from '@/components/DraggableEquipment.vue'
import { useDrop } from 'vue3-dnd'

const [collectedProps, drop] = useDrop(() => ({
  accept: ['BOX'],
}))

const selectedSearchWeapons = ref<WeaponSelect[]>([])
const selectedSearchArmor = ref<Armor[]>([])
const selectedSearchAccessories = ref<Weapon[]>([])
const selectedSavedWeapons = ref<WeaponSelect[]>([])
const selectedSavedArmor = ref<Armor[]>([])
const selectedSavedAccessories = ref<Weapon[]>([])

const userClass = ref(ALL_CLASSES[0])
const currentStats = computed(() => userClass.value.stats)
const armorRating = ref(0)
const luck = ref(0)
const armorPenetration = ref(0)
const magicPenetration = ref(0)
const headshotReduction = ref(0)
const projectileReduction = ref(0)
const health = computed(() =>
  calculateHealth(currentStats.value.vigor, currentStats.value.strength, 0, 0),
)
const memCap = computed(() => calculateMemoryCapacity(currentStats.value.knowledge, 0, 0))
const healthRecovery = computed(() => calculateHealthRecoveryBonus(currentStats.value.vigor))
const spellRecovery = computed(() => calculateSpellRecovery(currentStats.value.knowledge))
const moveSpeed = computed(() => calculateMoveSpeed(currentStats.value.agility, 0, 0))
const actionSpeed = computed(() =>
  calculateActionSpeed(currentStats.value.agility, currentStats.value.dexterity, 0),
)
const manualDexterity = computed(() => calculateManualDexterity(currentStats.value.dexterity))
const spellCastSpeed = computed(() => calculateSpellCastingSpeed(currentStats.value.knowledge, 0))
const itemEquipSpeed = computed(() => calculateItemEquipSpeed(currentStats.value.dexterity))
const regularInteractionSpeed = computed(() =>
  calculateRegularInteractionSpeed(
    currentStats.value.agility,
    currentStats.value.resourcefulness,
    0,
  ),
)
const magicalInteractionSpeed = computed(() =>
  calculateMagicalInteractionSpeed(currentStats.value.will, 0),
)
const persuasiveness = computed(() => calculatePersuasiveness(currentStats.value.resourcefulness))
const buffDuration = computed(() => calculateBuffDuration(currentStats.value.will, 0))
const debuffDuration = computed(() => calculateDebuffDuration(currentStats.value.will, 0))
const pdr = computed(() => calculatePhysicalDamageReduction(armorRating.value, 0))
const magicResistance = computed(() => calculateMagicResistance(currentStats.value.will, 0))
const mdr = computed(() => calculateMagicDamageReduction(magicResistance.value, 0))
const physicalPower = computed(() => calculatePhysicalPower(currentStats.value.strength, 0))
const physicalPowerBonus = computed(() => calculatePhysicalPowerBonus(physicalPower.value, 0))
const magicPower = computed(() => calculateMagicPower(currentStats.value.will, 0))
const magicPowerBonus = computed(() => calculateMagicPowerBonus(magicPower.value, 0))

const displayedStats = computed(() => ({
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
    value: luck,
  },
  health_recovery_bonus: {
    label: 'Health Recovery Bonus',
    value: `${healthRecovery.value}%`,
  },
  spell_recovery_bonus: {
    label: 'Spell Recovery Bonus',
    value: `${spellRecovery.value}%`,
  },
  move_speed: {
    label: 'Move Speed',
    value: `${moveSpeed.value.moveSpeed} (${moveSpeed.value.moveSpeedPercent}%)`,
  },
  action_speed: {
    label: 'Action Speed',
    value: `${actionSpeed.value}%`,
  },
  manual_dexterity: {
    label: 'Manual Dexterity',
    value: `${manualDexterity.value}%`,
  },
  spell_casting_speed: {
    label: 'Spell Casting Speed',
    value: `${spellCastSpeed.value}%`,
  },
  equip_speed: {
    label: 'Equip Speed',
    value: `${itemEquipSpeed.value}%`,
  },
  regular_interaction_speed: {
    label: 'Regular Interaction Speed',
    value: `${regularInteractionSpeed.value}%`,
  },
  magical_interaction_speed: {
    label: 'Magical Interaction Speed',
    value: `${magicalInteractionSpeed.value}%`,
  },
  persuasiveness: {
    label: 'Persuasiveness',
    value: persuasiveness,
  },
  buff_duration: {
    label: 'Buff Duration',
    value: `${buffDuration.value}%`,
  },
  debuff_duration: {
    label: 'Debuff Duration',
    value: `${debuffDuration.value}%`,
  },
  armor_penetration: {
    label: 'Armor Penetration',
    value: `${armorPenetration.value}%`,
  },
  magic_penetration: {
    label: 'Magic Penetration',
    value: `${magicPenetration.value}%`,
  },
  headshot_reduction: {
    label: 'Headshot Reduction',
    value: `${headshotReduction.value}%`,
  },
  projectile_reduction: {
    label: 'Projectile Reduction',
    value: `${projectileReduction.value}%`,
  },
  physical_damage_reduction: {
    label: 'Physical Damage Reduction',
    value: `${pdr.value}%`,
  },
  magic_resistance: {
    label: 'Magic Resistance',
    value: magicResistance.value,
  },
  magic_damage_reduction: {
    label: 'Magic Damage Reduction',
    value: `${mdr.value}%`,
  },
  physical_power: {
    label: 'Physical Power',
    value: physicalPower,
  },
  physical_power_bonus: {
    label: 'Physical Power Bonus',
    value: `${physicalPowerBonus.value}%`,
  },
  magic_power: {
    label: 'Magic Power',
    value: magicPower,
  },
  magic_power_bonus: {
    label: 'Magic Power Bonus',
    value: `${magicPowerBonus.value}%`,
  },
  primary_weapon: {
    label: 'Primary Weapon',
    value: 0,
  },
  secondary_weapon: {
    label: 'Secondary Weapon',
    value: 0,
  },
}))
</script>

<template>
  <main
    class="text-dnd-white bg-[url('@/assets/background.webp')] bg-cover w-screen h-screen flex justify-center items-center dark"
  >
    <div class="w-5/6 bg-dnd-black h-5/6 p-3 rounded-md flex flex-row space-x-3">
      <div class="border-2 border-black-500 w-1/3 h-full rounded-md p-3 overflow-y-scroll">
        <div class="w-full text-center">
          Class:
          <Select v-model="userClass" :options="ALL_CLASSES" optionLabel="name" size="small" />
        </div>
        <div
          class="w-full flex justify-between"
          v-for="stat of displayedStats"
          v-bind:key="stat.label"
        >
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
  </main>
</template>
