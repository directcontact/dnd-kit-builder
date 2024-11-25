import type { CoreModifier } from '@/typings/modifier'
import { HEAD, CHEST, LEGS, HANDS, FEET, ONEMAIN, TWOMAIN, ONEOFF } from '@/typings/slot'

export const STRENGTH: CoreModifier = {
  stat: 'strength',
  statName: 'Strength',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const AGILITY: CoreModifier = {
  stat: 'agility',
  statName: 'Agility',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const DEXTERITY: CoreModifier = {
  stat: 'dexterity',
  statName: 'Dexterity',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}
export const WILL: CoreModifier = {
  stat: 'will',
  statName: 'Will',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const KNOWLEDGE: CoreModifier = {
  stat: 'knowledge',
  statName: 'Knowledge',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const VIGOR: CoreModifier = {
  stat: 'vigor',
  statName: 'Vigor',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const RESOURCEFULNESS: CoreModifier = {
  stat: 'resourcefulness',
  statName: 'Resourcefulness',
  statValues: [1, 2],
  slot: [HEAD, CHEST, LEGS, HANDS, FEET],
  type: 'Armor',
}

export const ARMOR_PENETRATION_WEAPONS_ONEHAND: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [2.5, 3.5],
  slot: [ONEMAIN, ONEOFF],
  type: 'Weapon',
}

export const ARMOR_PENETRATION_WEAPONS_TWOHAND: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [4, 7],
  slot: [TWOMAIN],
  type: 'Weapon',
}

export const ARMOR_PENETRATION_ARMOR: CoreModifier = {}

export const ARMOR_PENETRATION_ACCESSORIES: CoreModifier = {}
