/**
 * `push()` Adds one or more elements at the end of an `Array` and returns the
 * length of the modified `Array`. 
 * 
 * Signature
 *
 * ```ts
 * Array<T>.push(...items: T[]): number;
 * ```
 *
 * Where `T` is the given type of the elements in `Array<T>`. Any amount of
 * elements can be accepted, even no elements by definition.
 */

const array: number[] = [];

const length = array.push(4);
console.log(array, length); // => [4], 1

export {};
