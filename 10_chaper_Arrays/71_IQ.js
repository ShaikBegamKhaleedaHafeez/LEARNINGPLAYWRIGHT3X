let nums = [10,25,30,45]
console.log(nums.find(x=>x>10))

//find index
let indexOf25 = nums.findIndex(x=>x>10)
console.log("index of 25 is: "+indexOf25)

last = nums.findLast(n=>n>10)
console.log(last)

lastIndex = nums.findLastIndex(temp => temp>25)
console.log(lastIndex)