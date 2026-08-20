let arr = [43,34,42,54,32,32,12,24,12]

let newArr = []

for(value of arr){
    if(!newArr.includes(value)){
        newArr.push(value)
    }
}

console.log(newArr);