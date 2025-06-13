enum NumberType {
  Real = 'real',
  Complex = 'complex',
}

console.log(NumberType.Complex)

for (const nt of Object.keys(NumberType)) {
  console.log(nt)
}
