
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){
  //  implement your statement(s) here
<<<<<<< HEAD
  // returning "Mr.", "Mrs.", "Ms.", "Dr."
  //            [0]   [1]     [2]     [3]
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");

=======
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
    //  implement your statement(s) here
<<<<<<< HEAD
    return `Hi, ${salutation} ${user}`;
=======
    return `Hi, ${salutation} ${user}!`;
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/
<<<<<<< HEAD
function validateInputs(choice="", name=""){
      if(choice === "" || name === "")
        return false;   /* or just use return */
      
      return true;
      }
    
    // console.log(validateInputs("abc", "foo"));
    // console.log("test");

//in Arrow function
// const validateInputsArrow =(choice, name="")=>{
//       if(choice === "" || name==="")
//         return false;
//        return true;
//  }
    // console.log(validateInputsArrow("abc", ""));
    // console.log("test");

//other option:
// function validateInputs(choice = "", name = ""){

//   if(choice === "")
//     return;

//   if(name === "")
//     return;

//   return true;
// }
=======
function validateInputs(choice = "", name = ""){

  return choice !== "" && name !== "";

}
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
