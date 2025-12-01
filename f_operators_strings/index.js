// 1. Trim a string
let wordWidthTrim = "         FSD        ";
console.log(`"${wordWidthTrim.trim()}"`);
console.log(`"${wordWidthTrim.trimStart()}"`);
console.log(`"${wordWidthTrim.trimEnd()}"`);

// 2. toString (convert a number to string)
let statusCode = 404;
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());  /* another method */

// 3. TypeCast Boolean data type to a string
let boolVal = true; /* a boolean does not have a toSTring method */
console.log(String(boolVal).toString());
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe";
let splitName = fullName.split(" ");
console.log(splitName); /* [ "John", "Doe" ] */
console.log(splitName.length);  /* 2 */
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Split a string and obtain the string by X elements;
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);  /* ["Hello", "World", "JS"] */

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0); /* [ 'H', 'e', 'l', 'l', 'o' ] */

// 6. slice date the Sstring based on today's date and render a custom message
const currDate = Date.now();        /* get current date and time */
console.log(currDate);              /* 1764321581055 */

const today = new Date(currDate);   /* new instance of Date */
console.log(today);                 /* 2025-11-28T09:12:45.466Z */

let splitToday = today.toDateString();
console.log(splitToday);            /* Fri Nov 28 2025 */

splitToday = splitToday.split(" "); /* [ 'Fri', 'Nov', '28', '2025' ] */
console.log(splitToday[0]);         /* Fri */

let msg = "";
switch (splitToday[0]) {
    case "Mon":
        msg = "Monday Blues";
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        msg = "Work, work!";
        break;
    case "Fri":
        msg = "TGIF";
        break;
    default:
        msg = "Yoohoo, it's weekend";
}

console.log(msg);
