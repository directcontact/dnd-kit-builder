import type { CoreModifier } from '@/typings/modifier'
import { Slot } from '@/typings/slot'

export const STRENGTH: CoreModifier = {
  stat: 'strength',
  statName: 'Strength',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const AGILITY: CoreModifier = {
  stat: 'agility',
  statName: 'Agility',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const DEXTERITY: CoreModifier = {
  stat: 'dexterity',
  statName: 'Dexterity',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}
export const WILL: CoreModifier = {
  stat: 'will',
  statName: 'Will',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const KNOWLEDGE: CoreModifier = {
  stat: 'knowledge',
  statName: 'Knowledge',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const VIGOR: CoreModifier = {
  stat: 'vigor',
  statName: 'Vigor',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const RESOURCEFULNESS: CoreModifier = {
  stat: 'resourcefulness',
  statName: 'Resourcefulness',
  statValues: [1, 2],
  slot: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
}

export const ARMOR_PENETRATION_SET_1: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [2.5, 3.5],
  slot: [Slot.ONEMAIN, Slot.ONEOFF, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
}

export const ARMOR_PENETRATION_SET_2: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [4, 7],
  slot: [Slot.TWOMAIN_HYBRID, Slot.TWOMAIN_PHYSICAL],
}

export const ARMOR_PENETRATION = [ARMOR_PENETRATION_SET_1, ARMOR_PENETRATION_SET_2]

export const ADDITIONAL_PHYSICAL_DAMAGE_SET_1: CoreModifier = {
  stat: 'additional_physical_damage',
  statName: 'Additional Physical Damage',
  statValues: [1, 1],
  slot: [Slot.HANDS, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
}
