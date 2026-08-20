// //map(), filter(), reduce(), flat(), flatMap()
// let numbers =[1,2,3,4]
// let doubled = numbers.map(n => n*2);
// console.log("After using map()",doubled)

//filter()
let scores = [45,80,32,90];
let passed = scores.filter(s=>s>=80);
console.log(passed)

// //reduce()
// let coins = [1,2,5,10];
// let total = coins.reduce((sum, coin)=>sum+coin, 0 );
// console.log("total value of coins: ",total)

// //flat()
// let messy = [1, [2, 3], [4, [5]]];
// let neat = messy.flat(2);
// console.log(neat)

// let scores = [45, 82, 91, 60, 73]
// let grades = scores.map(s=>s>70 ? "pass":"fail")
// console.log(grades)

