/**
 * (TypeScript)
 * The `asserts` TypeScript keyword defines an assertion function to narrow
 * down parameters types to some other specified types. The function's return
 * value is then changed to undefined.
 *
 * Syntax
 * [in a function's return type declaration]
 *
 * ```ts
 * assert p is T
 * ```
 *
 * Where `p` is asserted to be the type `T`.
 *
 * Example
 * Validating a number
 */
function isNumber(a: unknown | any): asserts a is number {
  let message: string | null = null;
  switch (true) {
    case a == null || a == undefined:
      message = `${a} is null or undefined`;
      break;

    case typeof a != "number":
      message = `Type of ${a} is not "number"`;
      break;

    case Number.isNaN(a):
      message = `${a} is not an instance of a Number`;
      break;
  }
  if (message) {
    throw new TypeError(message);
  }
}

// at this point a is unknown
const a: unknown = 1;
isNumber(a);

// passing the assertion, a is now number
console.log(a + 1);

export {};
