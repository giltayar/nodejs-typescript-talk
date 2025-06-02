interface Complex {
  real: number
  imaginary: number
}

export function add(a: Complex, b: Complex): Complex {
  return { real: a.real + b.real, imaginary: a.imaginary + b.imaginary }
}
