/**
 * In TypeScript, the `number` type represents a value of the number primitive
 * type in JavaScript. This type only accepts number literals under any form
 * (hexadecimal, octal etc.). `Number` is not considered a `number` as it is a
 * wrapper object for `number`s.
 *
 * Example
 * Declaring and manipulating a number
 */

let n: number = 9;
n = 1.2;

// Negative and float values
n = -1.2;

// Hexadecimal representation of 255
n = 0xff;

// Octal representation of 8
n = 0o10;

// Binary representation of 2
n = 0b10;

export {};
