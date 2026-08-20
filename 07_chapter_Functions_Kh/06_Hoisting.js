//Hoisting - used for function declarations
console.log(greet("Khaleeda"))
function greet(name){
    return `Hi ${name}`
}

//Scope in functions
let env = "staging"
function setupConfig(){
    let timeout = 3000;//local scope
    console.log(env);
    console.log(timeout);
}
setupConfig();
console.log(env);
console.log(timeout);