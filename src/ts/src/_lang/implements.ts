// (typescript)
// The "implements" keyword is used to enforce specific fields defined in an
// interface on a class
//
// Syntax:
// class C implements I

interface Vehicle {
  wheels: number;
}

// Here the class Car must have the field "wheels", or an error will be shown,
// because it implements the interface Vehicle.
class Car implements Vehicle {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}

const car = new Car(3);
console.log(car.wheels); // -> 3

export {};
