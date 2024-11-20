export type Class =
  | 'Wizard'
  | 'Druid'
  | 'Fighter'
  | 'Cleric'
  | 'Warlock'
  | 'Ranger'
  | 'Barbarian'
  | 'Rogue'
  | 'Bard'

export const WIZARD = {
  name: 'Wizard',
  stats: {},
}
export const DRUID = {
  name: 'Druid',
  stats: {},
}
export const FIGHTER = {
  name: 'Fighter',
  stats: {
    strength: 15,
    vigor: 15,
    agility: 15,
    dexterity: 15,
    will: 15,
    knowledge: 15,
    resourcefulness: 15,
    health: 100,
    memory_capacity: 9,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 65.5,
    move_speed: 300,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    
  },
}
export const CLERIC = {
  name: 'Cleric',
  stats: {},
}
export const WARLOCK = {
  name: 'Warlock',
  stats: {},
}
export const RANGER = {
  name: 'Ranger',
  stats: {},
}
export const BARBARIAN = {
  name: 'Barbarian',
  stats: {},
}
export const ROGUE = {
  name: 'Rogue',
  stats: {},
}
export const BARD = {
  name: 'Bard',
  stats: {},
}
