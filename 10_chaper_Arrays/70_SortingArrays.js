//sort()- sorts alphabetically by default
let fruits = ["banana", "apple", "peach", "dragonfruit", "pomelo"];
let sortedFruits = fruits.sort();
console.log("sorted fruits: ", sortedFruits)

let nums = [10,3,23,52]
console.log(nums.sort())
console.log(nums.sort((a,b)=>a-b))
console.log(nums.sort((a,b)=>b-a))