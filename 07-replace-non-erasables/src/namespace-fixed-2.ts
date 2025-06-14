const Greetings = (() => {
  function greet() {
    console.log('hello, world')
  }
  return {
    greet,
  }
})()

Greetings.greet()
