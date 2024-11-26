import type { Class } from './dnd-class'
import type { Slot } from './slot'

export interface Weapon {
  name: string
  rarity: number
  src: URL
  move_speed_reduction: number
  class: Class[]
  slot: Slot
}

export interface Accessories {
  name: string
  rarity: number
  src: URL
  stat: string
  statName: string
  statValue: number
}

export interface Sword extends Weapon {
  physical_weapon_damage: number[]
}

export interface Polearm extends Weapon {
  physical_weapon_damage: number[]
}

export interface Axe extends Weapon {
  physical_weapon_damage: number[]
}

export interface Bow extends Weapon {
  physical_weapon_damage: number[]
  armor_penetration: number
}

export interface Crossbow extends Weapon {
  physical_weapon_damage: number[]
  armor_penetration: number
}

export interface Staff extends Weapon {
  physical_weapon_damage: number[]
  magical_healing: number
  magical_damage: number
  magic_penetration: number
}

export interface Spellbook extends Weapon {
  magical_damage: number
  magic_penetration: number
}

export interface Dagger extends Weapon {
  physical_weapon_damage: number[]
  armor_penetration: number
}

export interface CrystalSword extends Weapon {
  physical_weapon_damage: number[]
  magical_weapon_damage: number[]
}

export interface CrystalBall extends Weapon {
  magical_damage: number
  additional_physical_weapon_damage: number
  magic_penetration: number
}

export interface Mace extends Weapon {
  physical_weapon_damage: number[]
  armor_penetration: number[]
}

export interface Shield extends Weapon {
  armor_rating: number[]
}

export interface LanternShield extends Shield {
  physical_weapon_damage: number[]
}

export interface Armor {
  name: string
  armor_rating: number[]
}

export interface SpearOfRot extends Polearm {
  true_physical_damage: number
  crafted?: true
}

export interface DemonsGlee extends Sword {
  magical_weapon_damage: number
  crafted?: true
}

export interface TrollsBane extends Mace {
  max_health_bonus: number[]
  crafted?: true
}

export interface VoidBlade extends Sword {
  magical_weapon_damage: number[]
  crafted?: true
}

export interface SovereignsGhostblade extends CrystalSword {
  move_speed_bonus: number
  magical_healing: number
  crafted?: true
}

export interface IceFang extends Dagger {
  true_physical_damage: number
  crafted?: true
}

export interface CyclopsVisionCrystal extends CrystalBall {
  dexterity: 2
  strength: 2
  knowledge: 2
  crafted?: true
}

export interface ManaSphere extends CrystalBall {
  will: number
  knowledge: number
  true_magical_damage: number[]
  crafted?: true
}

export interface LightBringer extends Mace {
  action_speed: number[]
  crafted?: true
}

export interface Grimslayer extends Sword {
  undead_damage_bonus: number
  physical_power: number
  crafted?: true
}

export interface SilverWeapon extends Weapon {
  undead_damage_bonus: number
  crafted?: true
}

export interface GoldenWeapon extends Weapon {
  luck: number
  magical_damage_reduction: number
  crafted?: true
}

export type Rarity = {
  rarityIndex: number
  color: string
  name: string
}
