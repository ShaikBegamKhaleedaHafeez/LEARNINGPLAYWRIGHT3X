//Topic null vs undefined
/*
undefined: A variable that has been declared but has not yet been assigned a value is of type undefined. It means the variable exists but does not have a value.
null: null is an assignment value that represents the intentional absence of any object value. It is a primitive value that can be assigned to a variable as a representation of no value.
*/

// let profilePicture = null;
// var x 
// console.log(x)
// console.log(profilePicture)

// 1. undefined
let userName; // declared but not assigned
console.log(userName); // Output: undefined
console.log(typeof userName); // Output: undefined

function greet(){

}
console.log("The output of function greet "+ greet());  // Output: undefined

// Null
let nullVariable = null;
console.log(nullVariable);
console.log(typeof nullVariable);

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // "object"  <-- known JS quirk!
// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
