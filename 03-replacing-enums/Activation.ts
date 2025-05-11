const Active = Symbol()
const Inactive = Symbol()

export const Activation = {
  __proto__: null,
  Active: 'Active',
  Inactive: Inactive,
  SemiActive: 'SemiActive',
} as const

export type Activation = PropertyValues<typeof Activation>

type PropertyValues<Obj> = Obj[Exclude<keyof Obj, '__proto__'>]
