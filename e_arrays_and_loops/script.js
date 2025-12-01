// ---------
// 1. ARRAYS
// ---------
// METHODS: .map .filter .sort

// Basic array
// This is just an example, the best practice is to store a single data type to an array
// const myArray = [1, 2, 3, 4, "Hello", true, null];
// console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];
const mulitplyArrBy10 = mappedArray.map(item => item * 10);   /*short-hand of the arrow function */
console.log(mulitplyArrBy10); // [10, 20, 30, 40, 50, 60]
console.log(mappedArray); // [1, 2, 3, 4, 5, 6] original arry dont change

const mulitplyArrBy100 = mappedArray.map((item) => {
    return item * 100;
});
console.log(mulitplyArrBy100); // [10, 20, 30, 40, 50, 60]

// ii - filter function of an array
// Implement your code here
// const vowels = ["a", "e", "i", "o"];
// const filteredVowels = vowels.filter(vowel=> vowel == "a" || vowel == "u");

// const filteredVowels = vowels.filter((vowel) => {
//      return (vowel == "a" || vowel == "u")
// });
// console.log(filteredVowels); // ["a"]

// ? re-write the example below using an arrow function (long-form)
const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
// arrays to sort
const nums = [4, 1, 3, 5, 2, 6];
const names = ["James", "Chris", "Max", "Lenon"];

console.log('\n=========================================================');
console.log('\nORIGINAL number array:');
console.log(nums);

// Sort by ascending order
const aNum1 = nums.sort((a, b) => a > b ? 1 : -1);
console.log('\nAscending numbers with method: ".sort((a, b) => a > b ? 1 : -1 );"');
console.log(aNum1); // [1, 2, 3, 4, 5, 6]

// Sort by ascending order
const aNum2 = nums.sort();
console.log('\nAscending numbers with method: ".sort();"');
console.log(aNum2); // [1, 2, 3, 4, 5, 6]

// Sort by descending order
// if a > b then a is placed earlier 
const dNum1 = nums.sort((a, b) => a > b ? -1 : 1);
console.log('\nDescending numbers with method: ".sort((a, b) => a > b ? -1 : 1 );"');
console.log(dNum1); // [6, 5, 4, 3, 2, 1]

//===================================================================
console.log('\n=========================================================');
console.log(`INITIAL names: ${names}`);
const name1 = names.toSorted();
console.log('code: "const name1 = names.toSorted();"');
console.log(`name1: ${name1}`); // ['Chris', 'James', 'Lenon', 'Max']
console.log(`names: ${names}`); // ["James", "Chris", "Max", "Lenon"];

// Sort by ascending order
console.log(`\nINITIAL names: ${names}`);
const name2 = names.sort((a, b) => a > b ? 1 : -1);
console.log('code: "const name2 = names.sort((a, b) => a > b ? 1 : -1 );"');
console.log(`name2: ${name2}`); // ['Chris', 'James', 'Lenon', 'Max']
console.log(`names: ${names}`); // ['Chris', 'James', 'Lenon', 'Max']

// Sort by decending order
console.log(`\nINITIAL names: ${names}`);
const name3 = names.sort((a, b) => a > b ? -1 : 1);
console.log('code: "const name3 = names.sort((a, b) => a > b ? -1 : 1 );"');
console.log(`name3: ${name3}`); // ['Max', 'Lenon', 'James', 'Chris']
console.log(`names: ${names}`); // ['Max', 'Lenon', 'James', 'Chris']

// Sort by ascending order
console.log(`\nINITIAL names: ${names}`);
const name4 = names.sort();
console.log('code: const name4 = names.sort();"');
console.log(`name4: ${name4}`); // ['Chris', 'James', 'Lenon', 'Max']
console.log(`names: ${names}`); // ['Chris', 'James', 'Lenon', 'Max']


// Sort by descending order
console.log(`\nINITIAL names: ${names}`);
const name5 = names.reverse();
console.log('code: "const name5 = names.reverse();"');
console.log(`name5: ${name5}`); // ['Max', 'Lenon', 'James', 'Chris']
console.log(`names: ${names}`); // ['Max', 'Lenon', 'James', 'Chris']

// Sort by descending order
console.log(`\nINITIAL names: ${names}`);
const name6 = names.toReversed();
console.log('code: "const name6 = names.toReversed();"');
console.log(`name6: ${name6}`); // ['Chris', 'James', 'Lenon', 'Max']
console.log(`names: ${names}`); // ['Max', 'Lenon', 'James', 'Chris']

// Sort by descending order????? NOT CORRECT.
console.log(`\nINITIAL names: ${names}`);
const name7 = names.reverse();
console.log('code: "const name7 = names.reverse();"');
console.log(`name7: ${name7}`); // ['Chris', 'James', 'Lenon', 'Max']
console.log(`names: ${names}`); // ['Chris', 'James', 'Lenon', 'Max']

// Sort by descending order
console.log(`\nINITIAL names: ${names}`);
const name8 = names.toReversed();
console.log('code: "const name8 = names.toReversed();"');
console.log(`name8: ${name8}`); // ['Max', 'Lenon', 'James', 'Chris']
console.log(`names: ${names}`); // ['Chris', 'James', 'Lenon', 'Max']

// // ========================================================================
//CONCLUSION: Only .toSorted and .toReversed preserve the order of the original array (immutable )
// all other methods change the order of the original array (mutable).
// ========================================================================

const ascendNames = names.sort();   /* By default, array.sort() sorts in ascending order */
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);     // 24
console.log(product_of_arr);


// another approach of applying a reuduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
var sum_of_arr = numbers.reduce((a, b) => a + b); /*sum of all numbers in array*/
console.log(`\nSum: ${sum_of_arr}`); // 10

const numbers2 = new Array(1, 2, 3, 4);
var product_of_arr = numbers2.reduce((a, b) => a * b); /*product of all numbers in array*/
console.log(`Product: ${product_of_arr}`); // 10


const myArr = new Array(2, 3, 4, 5);
function product(a, b) {
    return a * b;
}
const resultOfProduct = myArr.reduce(product);
console.log(resultOfProduct);

const teamList = ["T", "S", "Z", "F"];
//teamList[4] = "A"; 
console.log(teamList);

teamList.push("A");  /* add an item to the last position an Array */
console.log(teamList);

teamList.pop();  /* remove last item (largest index) from an Array */
console.log(teamList);


const mag7 = ["FB", "AMZN", "AAPL", "NFLX", "GOOG"];
console.log(mag7);          // FB, AMZN, AAPL, NFLX, GOOG
console.log(mag7.shift());  // FB
console.log(mag7);          // AMZN, AAPL, NFLX, GOOG  (1st item has been removed)
mag7.unshift("META", "NVDA", "MSFT");  // META, NVDA, MSFT, AMZN, AAPL, NFLX, GOOG  (add 3 items to the beginning of the array)
console.log(mag7);

// splice data

const bbTeam = ["Jordan", "Pippen", "Bill"];
console.log(bbTeam);
const index = 2;
const newPlayer = "Carr";
bbTeam.splice(index, 0, newPlayer);  // 0 mean 0 item to be replaced (we are inserting)
console.log(bbTeam);

const newPlayer2 = "Rodman";
//bbTeam.splice(3, 1, newPlayer2);  // replace Bill with Rodman
bbTeam.splice(bbTeam.length - 1, 1, newPlayer2);  // replace Bill with Rodman
console.log(bbTeam);



function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];   // 0 - 3
teamList.push("Muhaimin");                                  // 0 - 4
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();                                             // intrinsically known to remove lst element
console.log(teamList.length);                               // 0 - 3 
console.log(teamList);                                      // 4 names

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());                                  // FB removed
console.log(mag7);                                          // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];             // 0 - 2
const index = 2;
const newPlayer = "Steve Carr";  
bballTeam.splice(index, 0, newPlayer);                      // ["Jordan", "Pippen", "Steve Carr", "Bill"]                           
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman");        // Replace "Bill" with "Rodman" 
console.log(bballTeam);

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
const max = 10;
for (let index = 0; index < max; index++) {
    console.log(index)
}

const max100 = 100;
for (let index = 10; index <= 100; index = index + 10) {
    console.log(index)
}

// count down 10-1 then print Merry X'Mas
const maxD = 10;
for (let index = maxD; index >= 0; index--) {
    if (index === 0) {
        console.log("Merry X'mas");
    } else { console.log(index) };
}

// count down 10-1 then print Merry X'mas with Tenary operation
const maxD2 = 10;
for (let index = maxD2; index >= 0; index--) {
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}

// ii - for-each loop
const tSymbols = ["META", "AMZN", "AAPL", "GOOG"]
// For loop without  string interpolation
for (let index = 0; index < tSymbols.length; index++) {
    console.log(index + 1 + "-" + tSymbols[index]);
}

// For loop with  string interpolation
for (let index = 0; index < tSymbols.length; index++) {
    console.log(`${index + 1}-${tSymbols[index]}`);
}

// For Each : using Arrow function with or without string interpolation
tSymbols.forEach(myElement => { console.log(myElement) });
tSymbols.forEach((myElement, index) => { console.log(`${index + 1} ${myElement}`) });

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (do first, check later)
// Implement your code here
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<=10);

// iv - while loop (check the conditions first before running the while loop)
let j = 0;
while (j<=10) {
    console.log(j);
    j++;
}

// Implement your code here
