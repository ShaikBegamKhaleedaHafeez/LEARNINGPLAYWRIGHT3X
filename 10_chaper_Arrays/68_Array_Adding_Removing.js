let arr = [1,2,3]
console.log(arr)

//adding
arr.push(4)
console.log(arr)
//remove from end
arr.pop()
console.log(arr)
arr.push(5,6)
console.log(arr)
//remove to beginning
arr.shift()
console.log(arr)
//add to beginning
arr.unshift(88,9)
console.log(arr)
//splice - returns the deleted elements [88,9,2,3,5,6]
arr.splice(0,2)
console.log(arr)

arr.splice(2,0,99)
console.log(arr)