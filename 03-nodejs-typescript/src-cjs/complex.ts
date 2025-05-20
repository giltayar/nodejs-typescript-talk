interface Complex {
  real: number
  imaginary: number
}

exports.add = function add(a: Complex, b: Complex): Complex {
  return { real: a.real + b.real, imaginary: a.imaginary + b.imaginary }
}

exports.addMany = function addMany(...args: Complex[]): Complex {
  return args.reduce((acc, curr) => exports.add(acc, curr), { real: 0, imaginary: 0 })
}

exports.dotProduct = function dotProduct(a: Complex, b: Complex): number {
  return a.real * b.real + a.imaginary * b.imaginary
}

