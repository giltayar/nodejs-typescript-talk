class Complex {
  real: number
  imaginary: number
  constructor(real: number, imaginary: number) {
    this.real = real
    this.imaginary = imaginary
  }

  add(a: Complex): Complex {
    return new Complex(a.real + this.real, a.imaginary + this.imaginary)
  }
}

console.log(new Complex(4, 3).add(new Complex(5, 6)))
