/**
 * `Error` represents unrecoverable errors (SyntaxError, TypeError etc.) and
 * user-defined exceptions that are defined at run time. This class can be
 * extended to create custom errors.
 *
 * Constructor Signature
 *
 * ```ts
 * new (message?: string, options?: ErrorOptions): Error;
 * ```
 *
 * Where `message` is the given error message and `options` corresponds to the
 * error options object which contains a `cause` attribute.
 *
 * Call Signature
 *
 * ```ts
 * (message?: string, options?: ErrorOptions): Error;
 * ```
 *
 * This is the equivalent to the constructor signature with the same
 * parameters.
 *
 * Example
 * Let's create a new `Error` with the constructor:
 */

const err = new Error("The program failed", { cause: "The cause" });

// Simple example for getting the error with try (...) catch { ... }
try {
  throw err;
} catch (e) {
  if (e instanceof Error) {
    console.log(err.cause); // => "The cause"
  }
}

/**
 * Second example with a function's call signature instead of the constructor
 * function.
 */
const err2 = Error("The program failed");

try {
  throw err2;
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message); // => "The program failed"
  }
}

export {};
