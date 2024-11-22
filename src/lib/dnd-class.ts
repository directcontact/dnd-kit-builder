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

export type DNDClass = {
  name: Class
  stats: {
    strength: number
    vigor: number
    agility: number
    dexterity: number
    will: number
    knowledge: number
    resourcefulness: number
  }
}

export const WIZARD: DNDClass = {
  name: 'Wizard',
  stats: {
    strength: 6,
    vigor: 7,
    agility: 15,
    dexterity: 17,
    will: 20,
    knowledge: 25,
    resourcefulness: 15,
  },
}
export const DRUID: DNDClass = {
  name: 'Druid',
  stats: {
    strength: 12,
    vigor: 13,
    agility: 12,
    dexterity: 12,
    will: 18,
    knowledge: 20,
    resourcefulness: 18,
  },
}
export const FIGHTER: DNDClass = {
  name: 'Fighter',
  stats: {
    strength: 15,
    vigor: 15,
    agility: 15,
    dexterity: 15,
    will: 15,
    knowledge: 15,
    resourcefulness: 15,
  },
}
export const CLERIC: DNDClass = {
  name: 'Cleric',
  stats: {
    strength: 11,
    vigor: 13,
    agility: 12,
    dexterity: 14,
    will: 23,
    knowledge: 20,
    resourcefulness: 12,
  },
}
export const WARLOCK: DNDClass = {
  name: 'Warlock',
  stats: {
    strength: 11,
    vigor: 14,
    agility: 14,
    dexterity: 15,
    will: 22,
    knowledge: 15,
    resourcefulness: 14,
  },
}
export const RANGER: DNDClass = {
  name: 'Ranger',
  stats: {
    strength: 12,
    vigor: 10,
    agility: 20,
    dexterity: 18,
    will: 10,
    knowledge: 12,
    resourcefulness: 23,
  },
}
export const BARBARIAN: DNDClass = {
  name: 'Barbarian',
  stats: {
    strength: 25,
    vigor: 25,
    agility: 13,
    dexterity: 12,
    will: 18,
    knowledge: 5,
    resourcefulness: 7,
  },
}
export const ROGUE: DNDClass = {
  name: 'Rogue',
  stats: {
    strength: 9,
    vigor: 10,
    agility: 21,
    dexterity: 25,
    will: 10,
    knowledge: 10,
    resourcefulness: 20,
  },
}
export const BARD: DNDClass = {
  name: 'Bard',
  stats: {
    strength: 13,
    vigor: 13,
    agility: 13,
    dexterity: 20,
    will: 11,
    knowledge: 20,
    resourcefulness: 15,
  },
}
