function doubleMe(a){
    return 2*a;
}
doubleMe(3)
const doubtA = (a)=>a*2;
doubtA(2);

const getEnv = ()=>"staging"
console.log(getEnv())

//Multiline
const getResult = (score)=>{
    if(score>70) return "pass"
    return "fail"
}
console.log(getResult(50))