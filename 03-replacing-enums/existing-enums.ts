enum Foo {
  Foobar = 'X',
  A = 'B',
}

console.log(Foo.Foobar); // A
console.log(Foo.A); // B
console.log(Foo['X']);
console.log(Foo); // { 'A': 'B', 'B': 'A', Foobar: 'A' }

enum FooNumber {
  Foobar = 1,
  A = 2,
}
console.log(FooNumber); // 1