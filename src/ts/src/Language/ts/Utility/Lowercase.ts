/**
 * (TypeScript)
 * `Lowercase<S>` is an utility type that converts all characters in the string
 * type to a lowercase letter.
 *
 * Signature
 *
 * ```ts
 * Lowercase<S>
 * ```
 *
 * Where `S` is a given string type (`S extends string`).
 *
 * Example
 * Let's lowercase a random `string`:
 */

type lowered = Lowercase<"AbC">; // (type) => "abc"

export {};
