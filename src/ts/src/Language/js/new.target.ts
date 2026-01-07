/**
 * `new.target` is a meta-property that obtains the constructor or the method
 * that is called when an instance is instantiated using the `new` keyword.
 *
 * Value:
 * ```ts
 * new.target: C
 * ```
 *
 * Where `C` is the class that constructs the instance (and not an instance).
 */

class Example {
  constructor() {
    const target: typeof Example = new.target;
    console.log(target == Example);
  }
}

new Example();

export {};
