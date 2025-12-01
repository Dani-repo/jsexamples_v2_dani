let myString = "0123456789";
let myResult = "";

console.log(`\nmyString: ${myString}`);
myResult = myString.slice(3,5);
console.log(`myString: ${myString}`);
console.log(`myResult: ${myResult}`);

console.log(`\nmyString: ${myString}`);
myResult = myString.substring(3,5);
console.log(`myString: ${myString}`);
console.log(`myResult: ${myResult}`);

const myStartIndex = 3;
let myNumberOfChar = 3;
console.log(`\nmyString: ${myString}`);
myResult = myString.slice(myStartIndex,myStartIndex+myNumberOfChar);
console.log(`myString: ${myString}`);
console.log(`myResult: ${myResult}`);