//check if something IS an array
let result = Array.isArray([1,2,3])
let result1 = Array.isArray("a")
console.log(result)
console.log(result1)

//every - ALL items must pass the test
let marks = [85,79,92]
let status = marks.every(s=>s>70);
console.log(status)
let marks2 = [65,73,90]
let status2 = marks2.every(s=>s>70);
console.log(status2)

//some - AT LEAST ONE item must pass the test
let someStatus = marks.some(s=>s>75);
console.log(someStatus)
let someStatus2 = marks2.some(s=>s>90);
console.log(someStatus2)