/**
 * `push()` Adds one or more elements at the start of an `Array` and returns 
 * the length of the modified `Array`. 
 * 
 * Signature
 *
 * ```ts
 * Array<T>.unshift(...items: T[]): number;
 * ```
 *
 * Where `T` is the given type of the elements in `Array<T>`. Any amount of
 * elements can be accepted, even no elements by definition.
 */

const array: number[] = [1, 2, 3];

const length = array.unshift(4);
console.log(array, length); // => [4, 1, 2, 3], 1

export {};
