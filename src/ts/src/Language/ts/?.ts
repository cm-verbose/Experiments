/**
 * (TypeScript)
 * The "optional type operator" `?` denotes that a type is optional, in other
 * words, a type that might be `undefined`, or a value of that type.
 *
 * Syntax
 *
 * ```ts
 * T?
 * ```
 *
 * `T` is a given parameter or object key. The denoted type of that parameter
 * should avoid including `undefined` to avoid any redundancy.
 */

// Here b is number | undefined. Notice that `?` does not apply to an
// individual type and rather attaches itself to a parameter declaration.
function power(a: number, b?: number): number {
  if (b == undefined) {
    return Math.pow(a, 2);
  } else {
    return Math.pow(a, b);
  }
}

console.log(power(2, 3)); // 8
console.log(power(5)); // 25

// Here the key `notes` is marked as optional, might appear in an a value of
// type or not.
type Details = {
  id: number;
  name: string;
  description: string;
  notes?: string;
};

let obj: Details = {
  id: 1,
  name: "Cube",
  description: "a geometric shape",
  // Notice that notes is missing for this definition
};

// Notice that the object is still of type `Details`, but not has a `notes`
// attribute.
let detailed: Details = {
  ...obj,
  notes: "Has 6 sides",
};

console.log(detailed);

export {};
