/**
 * `pop()` Removes the last element of an `Array` and returns that element.
 * This modifies the original `Array`.
 *
 * Signature
 *
 * ```ts
 * Array<T>.pop(): T | undefined;
 * ```
 *
 * Where `T` is the given type of the elements in `Array<T>`. The returned
 * element is `undefined` if there are no elements and is of type `T`
 * otherwise.
 */

const a = [1, 2, 3];

a.pop();
console.log(a);

export {};
