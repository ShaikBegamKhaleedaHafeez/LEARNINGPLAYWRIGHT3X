let [first,second,third]=[10,20,30]
console.log(first)
console.log(second)
console.log(third)

let [a,b,...rest]=[10,20,30,40,50,60]
console.log(a)
console.log(b)
console.log(rest)

//default values are used only when the slots are undefined
let [x=1,y=2,z=99]=[10,20]
console.log(x,y,z)