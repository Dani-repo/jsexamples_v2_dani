
// a) create a person object
const person = {name: "John"};
console.log(person);

// b) create Person object
function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}


// instantiating new Person objects
const person1 = new Person ("John", "Doe")
const person2 = new Person ("Alice", "Smith")

console.log(person1);
console.log(person2);

// c) Add a new property to a Person function
// every object under Person will inherit the new property using .property keyword
// .property keyword is exclusively available in JS.
Person.prototype.gender= "Male";
console.log(person1.gender);  /* Male */
console.log(person2.gender);  /* Male */

//to change the inherited property value:
person2.gender = "Female";
console.log(person2.gender);  /* Female */

Person.prototype.membership = "Basic"

console.log(person1.firstName, person1.lastName, person1.membership);  /* John Doe Basic */
console.log(person2.firstName, person2.lastName, person2.membership);  /* Alice Smith Basic */

person2.membership = "Premium"; 
console.log(person2.firstName, person2.lastName, person2.membership);  /* Alice Smith Premium */

// d) Introduce a new method to Person using .prototype keyword
Person.prototype.getFullName = function(){
    return `Member: ${this.firstName} ${this.lastName}`;
}
console.log(person1.getFullName() + " " + person1.membership); /* John Doe Basic */
console.log(person2.getFullName() + " " + person2.membership); /* Alice Smith  Premium */

Person.prototype.getMembership =() => {
    return `Type: ${person1.membership}`;
}
console.log(person1.getMembership());  /* Type: Basic */


function animal(limbs, species){
    this.limb = limbs;
    this.species = species;
}

const iguana = new animal(4, "lizard");
console.log("Iguana limbs: ", iguana.limb, " Iguana species: ", iguana.species);