let fruits = ["banana", "apple","cherry"]
fruits.sort();
console.log(fruits)
//alphabetic by default

let score =[4,3,2]
score.sort()
console.log(score)

let nums = [10,2,21,2]
// nums.sort()
console.log(nums)
nums.sort((a,b)=>a-b)//ascending
console.log(nums)
// nums.sort((a,b)=>b-a)
nums.reverse()
console.log(nums)