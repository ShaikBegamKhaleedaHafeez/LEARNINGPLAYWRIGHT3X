let vowels = "";
let count = 0;
function vowelsCount(str){
    for(s of str){
        if(s === 'a'||s==='e'||s==='i'||s==='o'||s==='u'){
            vowels=vowels+s;
            count++;
        }
    }
    console.log("The vowels in the string are: "+vowels)
    console.log("The number of vowels is: "+count)
}
vowelsCount("khaleeda")