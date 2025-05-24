interface Complex {
  real: number
  imaginary: number
}

export function add(a: Complex, b: Complex): Complex {
  return { real: a.real + b.real, imaginary: a.imaginary + b.imaginary }
}

export function addMany(...args: Complex[]): Complex {
  return args.reduce((acc, curr) => add(acc, curr), { real: 0, imaginary: 0 })
}

export function dotProduct(a: Complex, b: Complex): number {
  return a.real * b.real + a.imaginary * b.imaginary
}
