// function reverse(str)  {
//     let length = str.length;
//     let stringReverse=""
//     for(let i = 0;i<length;i++){
//         stringReverse += str[length-1-i]
//     }
//     return stringReverse
// }

// let string = "Reverse"
// console.log(reverse(string))
let str = "Reverse"
let reversedString = ""
for(let i = 0;i<str.length;i++){
    reversedString += str[str.length-1-i]
}
console.log(reversedString)