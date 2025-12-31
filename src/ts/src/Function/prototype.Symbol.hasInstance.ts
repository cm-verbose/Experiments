/**
 * `Function.prototype[Symbol.hasInstance]` represents the prototypical 
 * operation `O instanceof C`, where `O` is a value, often an object, and `C` a 
 * function, or, more often, a class (as a class is a function). This operations 
 * can also be used on other objects.
 *
 * Signature
 * 
 * ```ts
 * [Symbol.hasInstance](other: any): boolean;
 * ```
 *
 * `other` is the object on the left side of the `instanceof` operator, or the
 * object to test.
 */
class Vehicle {
  constructor() {}

  /// Example methods
  drive() {
    console.log("Drive (Vehicle)");
  }

  // Here we're only specifying that a method `drive()` has to defined on the
  // other object for it to be a `Vehicle`
  static [Symbol.hasInstance](other: any): other is Vehicle {
    return typeof other.drive === "function";
  }
}

const car: unknown = {
  drive() {
    // custom implementation
    console.log("Drive (Car)");
  },
};

if (car instanceof Vehicle) {
  // Passing this condition, car is inferred as a `Vehicle`
  car.drive();
}

export {};
