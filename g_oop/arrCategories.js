// storing object inside another object
const arrCategories = new Array(
    {name: "Cat A", description: "Cars below 1600cc"}, /* JS object [0] */
    {name: "Cat B", description: "Cars above 1600cc"}, /* JS object [1] */
    {name: "Cat C", description: "Goods Vehicles and Busses"}, /* JS object [2] */

);   /* instantiating a new Array object */

// access arrCategories' length property
console.log(arrCategories.length);  /* 3 */

// access arrCategories' index 0's property called named and description
console.log(arrCategories[0].name, arrCategories[0].description); /* Cat A Cars below 1600cc*/
// print out all categories name and description
for (let index = 0; index < arrCategories.length; index++) {
    console.log(arrCategories[index]);
    console.log(arrCategories[index].name, arrCategories[index].description);
}

arrCategories.forEach((element) => {
    console.log(element.name, element.description);
});

arrCategories.push({name: "Cat E", description: "Open"});
console.log("log5: ", arrCategories);

const myArr = new Array(10, 20, 30, 40, 50, 60);
console.log(myArr);
 
