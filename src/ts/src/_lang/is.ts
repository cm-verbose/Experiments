// (typescript)
// The is keyword defines a user-defined type guard.
//
// Syntax:
// parameter_name is type

class Car {
  constructor() {
    this.ini();
  }

  private ini() {}

  public drive(): void {}
  public park(): void {}
}

function isCar(possibleCar: unknown): possibleCar is Car {
  return possibleCar instanceof Car && possibleCar.drive !== null && possibleCar.park !== null;
}

export {};
