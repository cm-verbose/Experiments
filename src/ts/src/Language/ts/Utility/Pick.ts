/**
 * (TypeScript)
 * `Pick<T, K>` is an utilitary type used to create another type by taking a
 * specific key `K` in `T`. `Pick` can be used on any type that contains keys.
 *
 * Signature
 *
 * ```ts
 * Pick<T, K>
 * ```
 *
 * Where `T` is the given type where the key `K` is being picked from. In this
 * context, `K` extends `keyof T`, as the keys of a type `T` as the picked keys
 * have to be part of the type.
 *
 * Example
 * Picking specific useful keys
 */

interface Example {
  a: number;
  b: string;
}

// Here we are only allowing the key of `a` to exist on `Example`.
type ExampleOnlyA = Pick<Example, "a">;

export {};
