/**
 * A SyntaxError is an `Error` representing an error in the syntax of the code.
 * Although this error is available, it is usually used by a JavaScript engine
 * and should not be used, unless in specific contexts. `SyntaxError` is
 * considered a native error.
 *
 * Constructor Signature
 *
 * ```ts
 * new(message?: string, options?: ErrorOptions);
 * ```
 *
 * Where `message` is a `message` and `options` are equivalent to `Error`'s
 * message and option parameters.
 *
 * Call Signatures
 *
 * ```ts
 * (message?: string, options?: ErrorOptions);
 * ```
 *
 * This call signature is equivalent to the constructor with the same defined
 * parameters.
 *
 * Example
 * Using a `SyntaxError` in code
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
