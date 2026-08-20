function calculate(a,b,operation){
    return operation(a,b);
}
// let sum = calculate(10,5,function(x,y){
//     return  x + y;
// })
// console.log(sum)
function sum(x,y){
    return x+y
}
console.log(calculate(10,5,sum))