//Type1 : No argument, No return
// function greet(){
//     console.log("Hi")
// }
// greet()
// let a = greet()
// console.log(a)

//Type 2 : With argument, No return
// function greetByName(name){
//     console.log(`Hi ${name}`)
// }
// greetByName("Khaleeda")

// //Type 3: No argument, with return
// function sayHello(){
//     console.log("Hi")
//     return "Hello"
// }
// let relative = sayHello();
// console.log(relative)

//Type 4 - With Arguments, With Return
// function sumofTwoNumbers(a,b){
//     return a+b;
// }
// let c = sumofTwoNumbers(10,20)
// console.log(c)

//Function as expression
const greet = function (name1){
    return `Hello, ${name1}`
}
console.log(greet("Khaleeda"))