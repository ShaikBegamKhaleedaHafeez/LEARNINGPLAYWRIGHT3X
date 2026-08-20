let tests = ["Login", "Checkout", "Search"]

for(let i = 0; i<tests.length;i++){
    console.log(i,tests[i])
}

console.log("---")
// for.. of (for values)
for(test of tests){
    console.log(test)
}

console.log("---")
//forEach (no return value)
tests.forEach((test,index)=>{
    console.log(`${index}: ${test}`)
})
console.log("---")

//entries() - index + value
for(let[i, test] of tests.entries()){

    console.log(i,test)
}
console.log("---")
let students = ["methis", "salman", "faiz","rahul"]
for(let student in students){
    console.log(student, "->", students[student])
}