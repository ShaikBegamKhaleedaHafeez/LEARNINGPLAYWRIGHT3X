let scores = [43,54,91,60,73]
let grades = scores.map(score=>score>70? "pass":"fail")
console.log(grades)
console.log(scores)

//filter
let passing = scores.filter(s=>s>=70);
console.log(passing)