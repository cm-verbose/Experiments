/**
 * An `Array` is a dynamic array that contains elements of a given type.
 * TypeScript enforces every `Array` to have the same data type, but `any` can
 * be used as an array type to contain multiple types within the same array.
 * `Array`s are 0-indexed and can also be negatively indexed (an index of -1
 * returns the last element of the given array).
 *
 * Constructor Signatures
 *
 * ```ts
 * new (arrayLength?: number): any[];
 * ```
 *
 * Where `arrayLength` is a positive integer, that is smaller than 2^32. This
 * constructor creates an array which elements are of the `any` type.
 *
 * ```ts
 * new<T>(arrayLength?: number): T[];
 * ```
 *
 * Where `arrayLength` is a positive integer, that is smaller than 2^32. This
 * constructor creates an array which elements are the given parameterized
 * type.
 *
 * ```ts
 * new<T>(...items:T[]): T[];
 * ```
 *
 * Where `...items` are the given items to be added to the array.
 */

// Let's create an array `a` with 5 empty items.
const a = new Array(5);
console.log("a: ", a, a.length);

// We can also do so with a typed array. The elements are still empty though,
// but the elements in this `Array` are of type `number`.
const b = new Array<number>(4);
console.log("b: ", b, b.length);

// Now our array contains the elements `"Hello"` and `"World"`.
const message: string[] = new Array("Hello", "World");
console.log("c: ", message, message.length);

/**
 * An `Array` can also be created with the call signature of `Array`, as it
 * defines multiple ways of creating an `Array` directly.
 *
 * Call Signatures
 *
 * ```ts
 * (arrayLength?: number): any[];
 * ```
 *
 * Where `arrayLength` is a positive integer that is smaller than 2^32. This
 * is equivalent to the contructor with the same given parameters.
 *
 * ```ts
 * <T>(arrayLength: number): T[];
 * ```
 *
 * Where `arrayLength` is a positive integer that is smaller than 2^32. This
 * is equivalent to the constructor with the same given parameters.
 *
 * ```ts
 * <T>(...items: T[]): T[];
 * ```
 *
 * Where `...items` are the given items to be added to the `Array`, This is
 * equivalent to the constructor with the same given parameters.
 */

// Let's create an `Array` with its call signature
const a1 = Array(5);
console.log("a1: ", a1, a1.length);

// We can also create a typed array with its call signature. The elements
// inside are still empty though
const b1 = Array<number>(5);
console.log("b1: ", b1, b1.length);

// We can try creating a message again
const message1 = Array("Hello", "World");
console.log("message1: ", message1, message1.length);

export {};
