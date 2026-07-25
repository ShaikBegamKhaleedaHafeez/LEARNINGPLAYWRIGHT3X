//for...in 

let students = ["khalee", "geeth", "afra", "durga" ];
for(let student in students){
    console.log(student, "->", students[student])
}

//for loop
let tests=["login", "search", "logout"]
for(let i = 0;i<tests.length;i++){
    console.log(tests[i])
}

//for..of
console.log("using for of ")
for(let test of tests){
    console.log(test);
}

//forEach(runs a function for each item)
tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
});

//entries()- gives both index and value
for(let [i,test] of tests.entries()){
    console.log(i,test)
}
//for..in gives the index as a string key
