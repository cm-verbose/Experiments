// (TypeScript)
// The asserts keyword is used in functions or methods that want to narrow
// a certain type to another type.
//
// Syntax:
// asssert parameter_name is type

/**
 * Asserts if a provided value is a number
 * @param value The value to test
 */
function assertValidNumber<T extends Number>(
  value: unknown | any,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw TypeError("Invalid number");
  }

  if (!(value instanceof Number) || Number.isFinite(value)) {
    throw RangeError("Invalid number");
  }
}

assertValidNumber(1);

export {};
