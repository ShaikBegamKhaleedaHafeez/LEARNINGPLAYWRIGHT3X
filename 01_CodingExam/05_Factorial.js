let factorialNum = 1
function factorial(n){
    for(let i = 1;i<=n;i++){
        factorialNum *= i
    }
    return factorialNum
}
let result = factorial(5)
console.log("The factorial of the number is: "+result)