let rev = "";
function reverseString(name){
    for(let i=name.length-1;i>=0;i--){
        rev = rev+name[i];
    }
    return rev
}
console.log(reverseString("hello"))
