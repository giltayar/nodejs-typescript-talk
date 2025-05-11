import { Activation } from './Activation'

function foo(activation: Activation) {
  console.log(activation)
}

foo(Activation.Active) // Active
foo(Activation.Inactive) // Inactive
foo('Active')


function exhaustiveCheck(activation: Activation) {
  switch (activation) {
    case Activation.Active:
      console.log('Active');
      return;
  }
  console.log(activation)
}