/**
 * (TypeScript)
 * The ampersand operator (&) in TypeScript when used on types (& also 
 * represents the bitwise AND operator for numbers), creates interesction 
 * types, or types that satisfy both interface definitions.
 *
 * Syntax
 * 
 * ```ts
 * A & B & C & ... & N
 * ```
 * Where `A`, `B`, `C`, ..., `N` are types.
 */
interface A {
  fieldA: number;
}

interface B {
  fieldB: number;
}

type C = A & B;

/**
 * Because C is the intersection of both A and B, it can be represented as a
 * single interface, and can be written like so:
 *
 * interface C {
 *   fieldA: number,
 *   fieldB: number
 * }
 *
 * We get the attribute `fieldA` from interface A and `fieldB` from interface
 * B. This is sometimes called the "union" type of A and B, as we group all
 * properties in C.
 */

export {};
