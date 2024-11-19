import type { Class } from './class'

export interface Weapon {
  name: string
  rarity: number
  src: URL
  move_speed_reduction: number
  class: Class[]
}

export interface DoubleAxe extends Weapon {
  physical_weapon_damage_low: number
  physical_weapon_damage_high: number
}

export interface CrystalBall extends Weapon {
  magical_damage: number
  addition_physical_weapon_damage: number
  magic_penetration: number
}

export interface FlangedMace extends Weapon {
  armor_penetration: 15
}

export interface CyclopsVisionCrystal extends CrystalBall {
  dexterity: 2
  strength: 2
  knowledge: 2
}

export interface ManaSphere extends CrystalBall {
  will: number
  knowledge: number
  true_magical_damage_low: number
  true_magical_damage_high: number
}

export interface LightBringer extends FlangedMace {
  physical_weapon_damage_low: number
  physical_weapon_damage_high: number
  action_speed: number | null
}

export interface SilverWeapon extends Weapon {
  undead_damage_bonus: number
}

export interface Shield extends Weapon {
  armor_rating_low: number
  armor_rating_high: number
}

export interface Armor {
  name: string
  armor_rating_low: number
  armor_rating_high: number
}
