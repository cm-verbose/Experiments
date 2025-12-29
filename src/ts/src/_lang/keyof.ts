// (TypeScript)
// The keyof operator gets the keys of an object type and joins them as
// an union of string or number literals
//
// Syntax:
// keyof K

interface Car {
  name: string;
  seats: number;
  wheels: number;
}

type _carKeys = keyof Car; // (type) "name" | "seats" | wheels

export {};
