/**
 * new.target is a meta-property that obtains the constructor or the method 
 * that is called when an instance is instantiated using new. 
 */

class Example {
  constructor() {
    console.log(new.target == Example);
  }
}

new Example();
