const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
let vowels = 0;
let consonants = 0
for (s of str) {
    if (/[a-z]/.test(s)) {
        if ("aeiou".includes(s)) {
            vowels += 1;
        } else {
            consonants += 1
        }
    }

}
console.log(`Vowels: `+ vowels)
console.log(`Consonants: `+consonants)