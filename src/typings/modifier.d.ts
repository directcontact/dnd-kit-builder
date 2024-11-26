import type { Slot } from './slot'

interface CoreModifier {
  stat: string
  statName: string
  statValues: number[]
  slots: Slot[]
  wholeValues: boolean
}
