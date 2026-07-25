let results = ["pass", "fail", "error", "skip"];
//search for first matching element and returns the index, otherwise returns -1
console.log(results.indexOf("fail")); //1
console.log(results.indexOf("error")); //2
console.log(results.indexOf("skip")); //3
console.log(results.indexOf("pass")); //0
//last index of - searches from the end
console.log(results.lastIndexOf("skip ")); //3
//includes - return true or false
console.log(results.includes("skip")); //true

let nums = [10,25,30,45];
//find -   returns the first matching element
console.log(nums.find(x=>x>20)); //25

//findIndex - returns the index of first matching element
console.log(nums.findIndex(x=>x>20)); //1
//findLast, findLastIndex - returns the last matching element and index
console.log(nums.findLast(x=>x>30)); //45
console.log(nums.findLastIndex(x=>x>30)); //3