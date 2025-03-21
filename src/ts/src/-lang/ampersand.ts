// (typescript)
// The ampersand operator (&) can be used with TypeScript types to

interface A {
  fieldA: number;
}

interface B {
  fieldB: number;
}

type C = A & B;

// This is the same as :
//
// interface C {
//   fieldA: number
//   fieldB: number
// }
//
// Or, as the union of both intefaces
