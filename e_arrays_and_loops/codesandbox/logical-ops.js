let x = 5;
let y = 10;
console.log("AND operation:");
console.log(x > 0 && y > 0); // true
console.log(x > 0 && y < 0); // false
console.log(x < 0 && y > 0); // false
console.log(x < 0 && y < 0); // false
console.log("\n");

console.log("OR operation:");
let a = 5;
let b = 10;
console.log(a > 0 || b > 0); // true
console.log(a > 0 || b < 0); // true
console.log(a < 0 || b > 0); // true
console.log(a < 0 || b < 0); // false
console.log("\n");

console.log("NOT operation:");
let Yes = true; // true is treated the same as  1
let No = false; // false is treated the same as  0
console.log(!Yes); // false
console.log(!No); // true
