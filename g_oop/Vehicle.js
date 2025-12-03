// *This is a parent class
// create a class called Vehicle - 
// note the use of Capital V in Vehicle for defining a Class
class Vehicle{
    // constructor (keyword) - only allow 1 constructor per class.
    // this (keyword)
    // a constructor is called when a new instance of the class is created
    constructor(make, model, year, distanceTraveled){
        this.make = make;   /* property */
        this.model = model; /* property */
        this.year = year;   /* property */
        this.distanceTraveled = distanceTraveled ? distanceTraveled : 0; /* default value upon instantiating */
    }

    //method common to all vehicles
    travel(distance){
        this.distanceTraveled += distance;  /* cumulatiely add distances passer in */
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} km`);
    }

    // method to get total distance traveled getTotalDistance() to get the distanceTraveled property
    getTotalDistance(){
        return this.distanceTraveled;
    }
}
// create a new instance of Vehicle and call its methods: travel() and getTotalDistance()
// const myTransport = new Vehicle("Toyota", "Raize", 2022); /* car */
// myTransport.travel(100); /* yesterday 100km */
// myTransport.travel(50); /* today 50km */
// console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km`);

// //this is for the 2nd constructor
// const myTransport2 = new Vehicle("Honda", "Vezel", "2013", 50); /* car */
// myTransport2.travel(10); /* yesterday 10km - access the travel() method*/
// myTransport2.travel(10); /* today 10km */
// console.log(`My second transport has travelled a total of ${myTransport2.getTotalDistance()} km`);

//  * class Vehicle is exported - so that can be invoked from child Class (using extends keyword) -- approach used prior to ES6
//module.exports = Vehicle; 

// *export class Car in ES6 and later approach 
export default Vehicle;