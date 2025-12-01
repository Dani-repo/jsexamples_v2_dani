// Example of a 2D array

const myArray2D = [
    [3, 2, 7],      /* row index 0 */
    [2, 9, 5],      /* row index 1 */
    [5, 1, 5]       /* row index 2 */
];
console.log(myArray2D);

/* another way of declaring 2D array */
const another2Darr = new Array(
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5]
)
console.log(another2Darr);

const e1 = myArray2D[1][1];  // [row] [column] index starts from 0
console.log(e1);  // results 9

const e2 = myArray2D[2][1];  // [row] [column] index starts from 0
console.log(e2);  // results 1

const e7 = myArray2D[2][0];  // 5
const e8 = myArray2D[2][1];  // 1
const e9 = myArray2D[2][2];  // 5
console.log(e7, e8, e9);

const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
];
console.log(myField);

// i as row
// j as column
// Dynamic 2D array
const rows = 5;
const cols = 5;
const arr2D = [];   /* generate new array */

// ==================================================
// Nested FOR loop (loop inside loop)

// outer loop manages row
for (let i = 0; i < rows; i++) {
    arr2D[i] = [];  //create the row

    // inner loop manages columns
    //populate with value per column for each row.
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = '░';
    }
}
console.log(arr2D);

// normal 1D array in JS is mutable
// 2D array in JS is inherently mutable only on the inner loop ("columns")
// outer loop ("rows") is somewhat immutable, error will occure when trying to add rows
// however using array push a row can be added
// initial row = 5 (row 0-4); column = 5 (column 0-4);
//console.log(arr2D);
//arr2D[3][6] = "X";  // row-3 (4th row) :[0, 0, 0, 0, 0, <1 empty item>, X]
//console.log(arr2D);
//arr2D[5][1] = "X";  // attempting to add row-5 (6th row) will result in error
console.log(arr2D);
arr2D.push(["XX"]);  // add row-5 (6th row) with "XX" - no error
console.log(arr2D);

let twoDArray = [
    [1, 2],
    [3, 4, 5]
];

// Mutating the outer array (adding a row)
twoDArray.push([6, 7]); // add new row with value 6 & 7:
console.log(twoDArray); 
// Output: [[1, 2], [3, 4, 5], [6, 7]]

// Mutating an inner array (adding an element to a row)
twoDArray[2].push(88);  // adding 8 to  last column of row 0
console.log(twoDArray);
// Output: [[1, 2, 8], [3, 4, 5], [6, 7]]

// Changing the length property directly
twoDArray[1].length = 2; // Truncates the second row
console.log(twoDArray);
// Output: [[1, 2, 8], [3, 4], [6, 7]]
