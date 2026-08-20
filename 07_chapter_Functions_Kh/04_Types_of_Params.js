//Default, Rest and Spread Parameters
//Default
// function retry(testName, maxRetries = 3, delay = 1000){
//     console.log(`Retrying ${testName} up to ${maxRetries} retries ${delay} apart`)
// }
// retry("Login")
// retry("Login", 5)

//Rest Parameters - collects many arguments into single array
// function logResults(suiteName, ...results){
//     console.log(`Suite: ${suiteName}`)
//     console.log(`Results: ${results.join(",")}`)
// }
// logResults("Auth Site", "pass", "fail", "pass", "skip")

//spread - does the opposite, it unpacks an array into individual arguments
//spread in functions
// function add(a,b,c){
//     return a+b+c;
// }
// let nums = [2,3,5]
// console.log(add(...nums))

//spread in arrays
// let fruits = ["mango", "pineapple"]
// let moreFruits = ["strawberry", "coconut"]
// let allFruits = [...fruits, ...moreFruits]
// console.log(allFruits)
//spread in objects
// let student={name: "Anne", age : 15}
// let updatedStudent = {...student, grade: "A"}
// console.log(updatedStudent)

//spread with Rest Parameters
// function hasError(...codes){
//     return codes.some(c=>c>=400)
// }
// console.log(hasError(200,201,404))

function hasError(...codes){
    return codes.some(c=>c>=400)
}
let nums = [ 200,201,404]
console.log(hasError(...nums))