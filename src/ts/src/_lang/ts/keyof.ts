/**
 * (TypeScript)
 * The `keyof` operator obtains the keys to a given type and creates a union of
 * all keys, as the types of the keys.
 *
 * Syntax
 *
 * ```ts
 * keyof T
 * ```
 *
 * Where `T` is a type with keys.
 */

interface Car {
  name: string;
  seats: number;
  wheels: number;
}

type CarKeys = keyof Car; // => (type) "name" | "seats" | "wheels"

// This can be used to get an interface's values by accessing the interface
// using a `keyof` of that type:

type CarValues = Car[CarKeys]; // => (type) string | number

export {};
