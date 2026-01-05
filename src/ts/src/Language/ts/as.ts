/**
 * (TypeScript)
 * The `as` keyword allows to unsafely coerce a type to another. This is an
 * unsafe procedure as the coerced target type cannot be checked to be the
 * specified value at runtime unless the original value's type is known. Hence,
 * this feature should only be used when the type cannot be automatically or
 * safely defined, but is known to always be a given type.
 *
 * Syntax
 *
 * ```ts
 * V as T
 * ```
 *
 * Where `V` is a given value with a given type, that is then unsafely coerced
 * to `T`. `V` is then interpreted as a `T`, even if it isn't `T`.
 */

const string = "abc";

// Here we are converting a string into a number by first converting it into
// `unknown` and then into `number`, as converting to `number` directly will
// cause a type error.
const a: number = string as unknown as number;

// `valueOf()` is shared between `number` and `string`, so this can be safely
// be used despite the coersion.
console.log(a.valueOf()); // => "abc"

export {};
