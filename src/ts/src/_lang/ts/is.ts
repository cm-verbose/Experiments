/**
 * (TypeScript)
 * The `is` keyword defines a user-defined type guard on a function. This
 * causes annotated function or method to have a return type of `boolean`
 * and sets a parameter type to a given type T.
 *
 * Syntax
 * [in a function's return type declaration]
 *
 * ```ts
 * p is T
 * ```
 *
 * Where `p` is the parameter to test against the type guard defined by the
 * function.
 */

class Car {
  constructor() {
    this.ini();
  }

  // Example methods
  private ini() {}
  public drive(): void {}
  public park(): void {}
}

function isCar(possibleCar: unknown): possibleCar is Car {
  return (
    possibleCar instanceof Car &&
    possibleCar.drive !== null &&
    possibleCar.park !== null
  );
}

export {};
