/**
 * A SyntaxError is an `Error` representing an error in the syntax of the code.
 * Although this error is available, it is usually used by a JavaScript engine
 * and should not be used, unless in specific contexts. `SyntaxError` is
 * considered a native error.
 *
 * Signature
 *
 * ```ts
 * new SyntaxError(
 *  message?: string,
 *  options?: ErrorOptions
 * );
 * ```
 */

try {
  const err = new SyntaxError("Failed to interpret: ...");
  throw err;
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log(err.message);
  }
}

export {};
