type NumberType = 'real' | 'complex'

show('complex')

function show(nt: NumberType) {
  if (nt === 'complex') {
    console.log('very difficult!')
  } else if (nt === 'real') {
    console.log('tres simple!')
  } else {
    console.log('this should never happen', nt)
  }
}

// for (const nt of Object.keys(NumberType)) {
//   console.log(nt)
// }
