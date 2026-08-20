//Find the Largest of three numbers
function largest(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else return c;
}
let largestNum = largest(29,92,92)
console.log(`The largest number is ${largestNum}`)