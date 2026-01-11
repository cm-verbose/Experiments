/**
 * `[Symbol.hasInstance]` is a static method on objects that is called when
 * using the `instanceof` operator. This method takes one parameter which
 * represents the operator on the left side of the `instanceof` operator.
 *
 * Signature (static method)
 *
 * ```ts
 * static [Symbol.hasInstance](other: any): other is C
 * ```
 *
 * Where `other` is a value passed on the left side of hte `instanceof`
 * operator and `C` the type of the class. We can affirm this as TypeScript
 * will coerce `other` to `C` if the `instanceof` operator succeeds on `other`,
 * which calls `[Symbol.hasInstance]` to assert that `other` is in fact an
 * instance of `C`.
 *
 * Example
 * Custom class implementation
 */

class Bird {
  private static hasWings: true;

  constructor() {}

  /// Example method
  public fly() {
    console.log("[Bird]: Fly");
  }

  static [Symbol.hasInstance](other: any): other is Bird {
    return other.hasWings && typeof other.fly === "function";
  }
}

const pigeon = {
  hasWings: true,
  fly() {
    console.log("[Penguin]: Fly");
  },
};

if (pigeon instanceof Bird) {
  pigeon.fly();
}
