// *this is  child class that uses Vehicle parent class

//import Vehicle.js to use the classes in it.
// *with require() method with path to parent class as the argument
//const Vehicle = require("./Vehicle.js");  /* approach used prior to ES6 */

import Vehicle from "./Vehicle.js"; /* ES6 or later approach */

// create a child class (Car) from Vehicle class
// *use extends keyword
class Car extends Vehicle {  /* Inherits the vehicle class */

    // Constructor

    constructor(make, model, year) {
        super(make, model, year); // * super (keyword) - refers to the parent class (Vehicle class) */
        // this. only available when super keyword is used because Car is the child class from the parent class (Vehicle)/super
        this.airbag = true;          /* property airbag is unique to car (child class) that is not available in the parent class  */
    }

    // a static method of a class can be used without instantiation
    // use static method for performing function without accessing property/method of the (parent) class
    // static method can be used for printing, logging,
    static welcomeStatement(msg){
        console.log(msg);
    }

    

    // Polymorphism (Override/customisation/changing the method of the parent classes in child class
    drive(distance) {
        super.travel(distance); /* Abstraction - drive method hides the implementation (travel in parent class) */
        console.log(`Driving complete. Status: ${this.airbag ? `Safety Check Passed.` : `Airbag absent`}`); /* this line of code is unique to child class, not available in the parent class */
    }
    // checkSafetyFeature() method is unique to Car class
    checkSafetyFeature() {
        return this.airbag;
    }
}

    // IMPLICIT INHERITANCE methods inherited here in Car class (from Vehicle class) include:
    // - travel()
    // getTotalDistance() - Abstraction, where we do not see the implementation of getTotalDistance(), yet we can invoke it
    // distanceTraveled property - Encapsulation, where the state of the property is managed by the parent class.

const myNewCar = new Car("Honda", "Civic", 2024);

//invoke welcomeStatement() static method
Car.welcomeStatement("\n***************\nHello car owner\n***************\n");

myNewCar.drive(200);
console.log(`Does my new car have safety feature: ${myNewCar.checkSafetyFeature()}`);
console.log(`My new car is driven ${myNewCar.getTotalDistance()} km.`);



// console.log(myNewCar);

//module.exports = Car;   /* export the class Car before ES6*/
//export default Car /* export class Car for ES6 and later approach */