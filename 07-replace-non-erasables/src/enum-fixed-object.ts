const NumberType = {
  Real: 'real',
  Complex: 'complex',
} as const

type PropertyValues<Obj> = Obj[keyof Obj]
type NumberType = PropertyValues<typeof NumberType>

show(NumberType.Complex)

function show(nt: NumberType) {
  if (nt === NumberType.Complex) {
    console.log('very difficult!')
  } else if (nt === NumberType.Real) {
    console.log('tres simple!')
  } else {
    console.log('this should never happen', nt)
  }
}

for (const nt of Object.keys(NumberType)) {
  console.log(nt)
}
