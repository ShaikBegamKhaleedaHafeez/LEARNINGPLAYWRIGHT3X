greet("Alice"); 

function greet(name) {
    console.log('Hi');
    return `Hello, ${name}!`;
}
console.log(greet("Niyaz"))
sayHi("Bob"); // ❌ TypeError: sayHi is not a function

const sayHi = function (name) {
    return `Hi, ${name}!`;
};