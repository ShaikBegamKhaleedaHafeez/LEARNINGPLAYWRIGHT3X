let original = [1,2,3];
let copy1 =[...original]//spread
let copy2 = original.slice();
let copy3 = Array.from(original);
let copy4 = original.concat();
copy1.push(99);
console.log(copy1)
console.log(original)

//Array Destructuring
