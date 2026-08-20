// Primitives → Call by Value (independent copies).

// Objects → Call by Reference (shared memory reference).

let a = 10;
let b = a;
console.log(b)
b = 99;
console.log(a)
console.log(b);

console.log("-----")
//objects - the reference value is copied, so both variables point to the same object
//Reference - object, array, function
let obj1 = {val: 10}
let obj2 = obj1;
console.log(obj2)
obj2.val=20;
console.log("obj2: " + obj2.val)
console.log("obj1: "+obj1.val)
console.log(obj1)