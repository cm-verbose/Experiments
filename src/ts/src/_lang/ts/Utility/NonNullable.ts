/**
 * (TypeScript)
 * `NonNullable<T>` is an utility type used to make a given type `T` exclude
 * the values null or undefined. This type is useful for specifying that a
 * value must exist before usage.
 *
 * Signature
 *
 * ```ts
 * NonNullable<T>
 * ```
 *
 * Where `T` is a type containing `null`, `undefined` or both values. Trying to
 * exclude a value without null or undefined is redundant.
 */

type Text = string | null;
type NonNullText = NonNullable<Text>; // => (type) string

function logText(text: NonNullText) {
  console.log(text);
}

// Notice that null and undefined cannot be used here
logText("Hello");

export {};
