import type { CoreModifier } from '@/typings/modifier'
import { Slot } from '@/typings/slot'

export type CoreModifierSet = {
  modifiers: CoreModifier[]
  slots: Slot[]
  stat: string
}

export const STRENGTH: CoreModifier = {
  stat: 'strength',
  statName: 'Strength',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const AGILITY: CoreModifier = {
  stat: 'agility',
  statName: 'Agility',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const DEXTERITY: CoreModifier = {
  stat: 'dexterity',
  statName: 'Dexterity',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}
export const WILL: CoreModifier = {
  stat: 'will',
  statName: 'Will',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const KNOWLEDGE: CoreModifier = {
  stat: 'knowledge',
  statName: 'Knowledge',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const VIGOR: CoreModifier = {
  stat: 'vigor',
  statName: 'Vigor',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const RESOURCEFULNESS: CoreModifier = {
  stat: 'resourcefulness',
  statName: 'Resourcefulness',
  statValues: [1, 2],
  slots: [Slot.HEAD, Slot.CHEST, Slot.LEGS, Slot.HANDS, Slot.FEET],
  wholeValues: true,
}

export const ARMOR_PENETRATION_SET_1: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [2.5, 3.5],
  slots: [Slot.ONEMAIN, Slot.ONEOFF, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
  wholeValues: false,
}

export const ARMOR_PENETRATION_SET_2: CoreModifier = {
  stat: 'armor_penetration',
  statName: 'Armor Penetration',
  statValues: [4, 7],
  slots: [Slot.TWOMAIN_HYBRID, Slot.TWOMAIN_PHYSICAL],
  wholeValues: false,
}

export const ARMOR_PENETRATION: CoreModifierSet = {
  modifiers: [ARMOR_PENETRATION_SET_1, ARMOR_PENETRATION_SET_2],
  slots: [
    Slot.ONEMAIN,
    Slot.ONEOFF,
    Slot.CLOAK,
    Slot.NECKLACE,
    Slot.RING,
    Slot.TWOMAIN_HYBRID,
    Slot.TWOMAIN_PHYSICAL,
  ],
  stat: 'armor_penetration',
}

export const ADDITIONAL_PHYSICAL_DAMAGE_SET_1: CoreModifier = {
  stat: 'additional_physical_damage',
  statName: 'Additional Physical Damage',
  statValues: [1, 1],
  slots: [Slot.HANDS, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
  wholeValues: true,
}

export const ADDITIONAL_PHYSICAL_DAMAGE: CoreModifierSet = {
  modifiers: [ADDITIONAL_PHYSICAL_DAMAGE_SET_1],
  slots: [Slot.HANDS, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
  stat: 'additional_physical_damage',
}

export const TRUE_PHYSICAL_DAMAGE_SET_1: CoreModifier = {
  stat: 'true_physical_damage',
  statName: 'True Physical Damage',
  statValues: [1, 1],
  slots: [Slot.HANDS, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
  wholeValues: true,
}

export const TRUE_PHYSICAL_DAMAGE: CoreModifierSet = {
  modifiers: [TRUE_PHYSICAL_DAMAGE_SET_1],
  slots: [Slot.HANDS, Slot.CLOAK, Slot.NECKLACE, Slot.RING],
  stat: 'true_physical_damage',
}

export const PHYSICAL_DAMAGE_BONUS_SET_1: CoreModifier = {
  stat: 'physical_damage_bonus',
  statName: 'Physical Damage Bonus',
  statValues: [1.5, 2.5],
  slots: [Slot.ONESHIELD, Slot.ONEMAIN, Slot.ONEOFF, Slot.CHEST, Slot.LEGS],
  wholeValues: false,
}

export const PHYSICAL_DAMAGE_BONUS_SET_2: CoreModifier = {
  stat: 'physical_damage_bonus',
  statName: 'Physical Damage Bonus',
  statValues: [1, 1.5],
  slots: [Slot.HEAD, Slot.HANDS],
  wholeValues: false,
}

export const PHYSICAL_DAMAGE_BONUS_SET_3: CoreModifier = {
  stat: 'physical_damage_bonus',
  statName: 'Physical Damage Bonus',
  statValues: [2.5, 5],
  slots: [Slot.TWOMAIN_PHYSICAL, Slot.TWOMAIN_HYBRID],
  wholeValues: false,
}

export const PHYSICAL_DAMAGE_BONUS: CoreModifierSet = {
  modifiers: [
    PHYSICAL_DAMAGE_BONUS_SET_1,
    PHYSICAL_DAMAGE_BONUS_SET_2,
    PHYSICAL_DAMAGE_BONUS_SET_3,
  ],
  slots: [
    Slot.ONESHIELD,
    Slot.ONEMAIN,
    Slot.ONEOFF,
    Slot.CHEST,
    Slot.LEGS,
    Slot.HEAD,
    Slot.HANDS,
    Slot.TWOMAIN_PHYSICAL,
    Slot.TWOMAIN_HYBRID,
  ],
  stat: 'physical_damage_bonus',
}

export const ADDITIONAL_PHYSICAL_WEAPON_DAMAGE_SET_1: CoreModifier = {
  stat: 'additional_physical_weapon_damage',
  statName: 'Additional Weapon Damage',
  statValues: [1, 1],
  slots: [Slot.ONESHIELD, Slot.ONEMAIN, Slot.ONEOFF],
  wholeValues: true,
}

export const ADDITIONAL_PHYSICAL_WEAPON_DAMAGE_SET_2: CoreModifier = {
  stat: 'additional_physical_weapon_damage',
  statName: 'Additional Weapon Damage',
  statValues: [1, 2],
  slots: [Slot.TWOMAIN_PHYSICAL, Slot.TWOMAIN_HYBRID],
  wholeValues: true,
}

export const MODIFIERS: CoreModifierSet[] = [
  ARMOR_PENETRATION,
  TRUE_PHYSICAL_DAMAGE,
  ADDITIONAL_PHYSICAL_DAMAGE,
  PHYSICAL_DAMAGE_BONUS,
]
