//Rule of thumb
// == -> loose equality operator
//=== -> strict equality operator
console.log("-- Confusing operator --")
console.log(5=="5")
console.log(5==="5")
console.log(0=="0")
console.log(0==="0")
console.log(null=="")
console.log(null==="")
console.log(0=="null")

console.log(null==undefined)//true - special rule in
console.log(null===undefined)//false - special rule in
console.log(null==0)
console.log(null>=0)
console.log(null == 0||null>0)