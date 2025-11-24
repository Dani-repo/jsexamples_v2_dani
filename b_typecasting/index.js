
console.log(Number("3.1419")); //output: 3.1419
console.log(Number(Math.PI)); // Math.PI use uppercase M and PI
console.log(Number("     ")); // output: 0
console.log(Number(""));        // output: 0
console.log(Number("88 88"));   // output: Nan
console.log(Number("Steve"));   // output: NaN

console.log((new Date())); //output UTC date and time: 2025-11-24T06:43:47.833Z
console.log(String(new Date())); //today's date; output: Mon Nov 24 2025 14:44:24 GMT+0800 (Singapore Standard Time)
console.log(String("98765")); //output: 98765
console.log(String(98765)); //output: 98765

// Converting values into Boolean
console.log(Boolean("1"));       // output: true (truthy response)
console.log(Boolean(1));         // output: true
console.log(Boolean("0"));       // output: true (tricky)
console.log(Boolean(0));         // output: false
console.log(Boolean(" "));       // output: true (truthy response)
console.log(Boolean(""));        // output: false
console.log(Boolean("John"));    // output: true

// let's try abit of a trivia using a prompt in the web browser
//Run it in web browser Console
//without trim()
//"     "   output: true
//"James"   output: true
//""        output: false

//with trim()
//"     "   output: false
//"James"   output: true
//""        output: false

function greetUser(){
    let userName = prompt("Please enter your name:");
    
    if(userName.trim()){    // "  " will be trimmed, and therefore a falsy is applied
        alert(`Welcome to FSD ${userName}!!!`);
    }
}
 
greetUser();
 