const Complex = logClass(
  class Complex {
    real: number
    imaginary: number
    constructor(real: number, imaginary: number) {
      this.real = real
      this.imaginary = imaginary
    }

    add = log(function add(a: Complex): Complex {
      return new Complex(a.real + this.real, a.imaginary + this.imaginary)
    })
  },
)

function log(f: Function) {
  return function wrapper(...args: unknown[]) {
    console.log('calling', f.name, 'with', ...args)

    return f.apply(this, args)
  }
}

function logClass(clss: any): any {
  return class extends clss {
    constructor(...args: unknown[]) {
      super(...args)
      console.log('constructing', clss.name, 'with', ...args)
    }
  }
}

console.log(new Complex(4, 3).add(new Complex(5, 6)))
