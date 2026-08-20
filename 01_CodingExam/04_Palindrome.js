let palindrom = ""
function palindrome(str){
    for(let i = str.length-1;i>=0;i--){
        palindrom = palindrom+str[i]
    }
    
    if(str===palindrom){
        console.log(`The string ${str} is a palindrome`)
    }
    else{
        console.log(`The string ${str} is not a palindrome`)
    }
}
palindrome("racecar")
palindrome("hello")