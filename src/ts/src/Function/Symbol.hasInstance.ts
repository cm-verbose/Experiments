interface CarSpecification {
  wheels: number;
}

class Car {
  static MIN_WHEELS = 0;
  static MAX_WHEELS = 6;
  wheels: number;

  constructor(details: CarSpecification) {
    this.wheels = details.wheels;
  }

  /**
   * This static method changes the behavior of the following operation :
   * F instanceof V
   *
   * where :
   * @this Car - V (the value of this)
   * @param carInstance - F (an instance to check against)
   */
  static [Symbol.hasInstance](carInstance: Car): boolean {
    let validWheels =
      carInstance.wheels > this.MIN_WHEELS &&
      carInstance.wheels < this.MAX_WHEELS;
    return validWheels;
  }
}

const car_instance = new Car({ wheels: 15 });

// This expression returns false as we have overwritten the instanceof
// operation on this class. This is because the number of wheels doesn't
// satisfy our defined condition.
console.log(car_instance instanceof Car);

export {};
