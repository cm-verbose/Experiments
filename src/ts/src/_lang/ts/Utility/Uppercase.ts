/**
 * (TypeScript)
 * `Uppercase<S>` is an utility type that converts all characters in the string
 * type to an uppercase letter.
 *
 * Syntax
 *
 * ```ts
 * Uppercase<S>
 * ```
 *
 * Where `S` is a given string type (`S extends string`).
 *
 * Example
 * Let's captalize a random string:
 */
type UpperAlpha = Uppercase<"abc">; // => (type) "ABC"

/**
 * The capitalization used seem to be using a Unicode character's Unicode
 * `Uppercase_Mapping` property to compute the values. Hence, with some special
 * characters such as "ß" - `00DF` LATIN SMALL LETTER SHARP S, the result is not
 * "ẞ" `1E9E` LATIN CAPITAL LETTER SHARP S, since the `Uppercase_Mapping` for
 * this character is `"SS"`.
 */

type special = Uppercase<"ß">; // => (type) "SS"

export {};
