/**
 * (TypeScript)
 * The `implements` keyword is used to indicate that a type implements given
 * attributes usually from an interface or other type. This allows for
 * polymorhism when working with types that all implement a common interface.
 *
 * Syntax
 *
 * ```ts
 * T implements I
 * ```
 *
 * Where `T` is an Object that implements the attributes defined in a type `I`,
 * usually an interface.
 */
interface Vehicle {
  wheels: number;
}

// Here the class `Car` must have the field "wheels", or an error will be
// shown, because it implements the interface Vehicle.
class Car implements Vehicle {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}

const car = new Car(3);
console.log(car.wheels); // -> 3

export {};
