// 1. Writing a function declaration

// function ftnGreeting(salutation, user){
//   const msg = `Hi, ${salutation} ${user}`;
//   return msg;
// }
// console.log(ftnGreeting("Mr.", "Jones"));

// 2. Does a function return undefined by default?
// function fNoReturn(a,b){
//     const result = a+b;
//     return undefined;
// }
// console.log(fNoReturn()); //result: undefined

//3. Function with 0/x parameters
// fsum takes in 2 PARAMETERS
// function fSum(a,b){
//     const result = a+b;
//     return result;
// }
// console.log(fSum(10, 5)); //send 2 ARGUMENTS result: 15
// console.log(fSum()); //send 0 argument, result: Nan
// console.log(typeof fSum()); //typeof NaN, result: number

//4. putting default value into a function
// a and b parameters are set to 0 in case the function receives no parameter 
// function fSum(a=0, b=0){
//     const result = a+b;
//     return result;
// }
// console.log(fSum(10, 5)); //send 2 ARGUMENTS result: 15
// console.log(fSum());  //send 0 argument result: 0
// console.log(typeof fSum()); //result: nummber

// test this in web browser - inspect -console.
// (function(){}).constructor === Function // returns true

// Arrow function

// const fGreeting =(salutation, name)=> {
//     // const msg= `Hello, ${salutation} ${name}.`;
//     //return msg;
//     return msg= `Hello, ${salutation} ${name}. Welsome to FSB Bootcamp`;
// }
// console.log(fGreeting("Ms.", "Mona"))


// Allow the function to handle non-existence arguments
const fGreeting = (salutation = "", name = "") => {

    if(salutation.length == 0 && name.length == 0)
        return "please enter your name and salutation.";
    return msg = `Hello, ${salutation} ${name}. Welcome to FSB Bootcamp`;
    //if the return line is placed on line 51, then line 51-53 will be greyed out by VS code as this will be  a logical error (function will exit by line 51)
};
console.log(fGreeting("Ms.", "Mona"));
console.log(fGreeting());

