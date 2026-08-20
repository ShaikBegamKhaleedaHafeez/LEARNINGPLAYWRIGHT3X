let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log("Number of browsers: " +  browser.length); // 5
console.log(browser);
browser.pop();
console.log("Browsers after removing last browser: ",   browser); // 4
//remove from beginning
let removed =browser.shift();
console.log("Browsers after removing first browser: ",   browser);
console.log(removed + " is removed from the beginning of the array");

for(let i=0;i < browser.length;i++){
    console.log(browser[i]);
    if(browser[i] === 'opera'){
        console.log("Opera is removed from the selenium!");
    }
}
