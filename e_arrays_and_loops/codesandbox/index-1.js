// let temperature = 25;

// if (temperature > 30) {
//   console.log("It's a hot day!");
// } else if (temperature > 20) {
//   console.log("It's a warm day!");
// } else if (temperature > 10) {
//   console.log("It's a cool day!");
// } else {
//   console.log("It's a cold day!");
// }

/* Challenge (convert the above into a switch-case block) */

let expression = 15;
switch (true) {
    case expression > 30:
        // code block 1
        console.log("It's a hot day!");
        break;
    case expression > 20:
        // code block 2
        console.log("It's a warm day!");
        break;
    case expression > 10:
        // code block 3
        console.log("It's a cool day!");
        break;
    default:
        // default code
        console.log("It's a cold day!");
}
