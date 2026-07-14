console.log(""==0); // Output: true (value is equal, type is not checked)
console.log(""===0); // Output: false (value is equal but type is not checked)

console.log(null==undefined); // Output: true (value is equal, type is not checked)
console.log(""=="0");   // Output: false (value is not equal, type is not checked)
console.log(""===0);   // Output: false (value is not equal, type is not checked)

//null vs undefined
console.log(null == undefined); // Output: true (value is equal, type is not checked)
//whe it is loosely compared, these two are equal, but when it is strictly compared, they are not equal
console.log(null==0); // Output: false (value is not equal, type is not checked)

console.log(null>0); // Output: false (value is not equal, type is not checked)