const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);
// Write your solution here
function isPrime(num) {
    let isPrime = true
    if (num === 1 || num <1) {
        return `NO`
    }
    else {
        for (let i = 2; i < num - 1; i++){
            if (num % i === 0) {
                return `NO`
                isPrime = false
            }
        }
        if (isPrime) {
            return `YES`
        }
        else {
            return `NO`
        }
        
    }
}
console.log(isPrime(num))