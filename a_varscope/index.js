// 1. Primitive Data type

let pi = 3.142;         /*important(good practice) to use ";" to end a line */
console.log(typeof pi); /*display data type of pi */

let strValue = "Hello"; /*use best practice camelCase naming" */
console.log(typeof strValue);

let boolValue = true;
console.log(typeof boolValue);

let nullValue = null;       // null is an object data type 
console.log(typeof nullValue);  

let undefinedValue;     // variable that is declared but uninitialised 
console.log(typeof undefinedValue); 

// 1. Non-primitive Data type

let myArr = ["a", "b", "c"]; // Declare an array of 3 elements starting index: 0, 1, 2
console.log(myArr);

let faang = new Array();    // Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook";      //index 0;
faang[1] = "Amazon";        //index 1;
// faang[2] = "Ax";         //if index is not initialised then console shows "empty items"
// faang[3] = "Nx";
faang[4] = "Google";
console.log(faang); //display all indexes in array
console.log(faang[0]); //display only index 0

let person = {name: "Sam", age: "42"};
console.log("Person :", person.name);
console.log("Age :", person.age);

console.log(`Person : ${person.name}`); //Create a JS object with 2 keys
console.log(`Age : ${person.age}`);

let vehicle = new Object(); //Declaring a new instance of an Object called vehicle
vehicle.name = "Suzuki"; //Giving the vehicle object a PROPERTY called "name" and d assigning it a value : "Suzuki"
vehicle.model = "Swift";
vehicle.color = "Blue";

let announce = function(){
    console.log("Hello JS");
};
announce();

let announce1 = function () {   // declare a new object variable as a function
  console.log("Hello JS!");
}; 
announce1();

let announce2 = () => {            // declere a new object variable as an ARROW function
  console.log("Hello JS again!");
}; 
announce2();

// 3. Declaring variables using let, const and var
let PI = 3.14159;           // Declare a mutable variable called PI
PI = 3.142;                //Update value of PI because it is mutable
console.log(PI);

// const PI = 3.14159;           // Declare an immutable variable called PI
// PI = 3.142;                //Update value of PI will cause error because it is immutable
// console.log(PI);
function greet(){
    let greeting ="Welcome FSD learners";  //Greeting is locally scope variable within this function.
    console.log(greeting);
}
greet();

// console.log(greeting);           //greeting is locally scoped not global, cant be called outside its function.


// var variable

let localMsg = "Welcome FSD Developers" 
function welcome(){
    // var localMsg = "Welcome to FSD";
    console.log(localMsg);
}

console.log(localMsg); 
welcome();

// console.log(Number("0"));











