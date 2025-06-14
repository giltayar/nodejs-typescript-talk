namespace Numbers {
  export type Real = number
  export type Complex = { real: Real; imaginary: number }
}

const x: Numbers.Complex = { real: 4, imaginary: 5 }

console.log(x)
