let fruit = [];
let browsers = ["chrome", "firefox", "safari", "edge"];
console.log(browsers[0]);//chrome
console.log(browsers.at(-2));//safari
console.log("Total browsers: " + browsers.length);
console.log(browsers[-1]);//undefined
console.log(browsers.at(0));//chrome


let arr = [10,20,30,40];
console.log("Number of elements in arr: " + arr.length);

let statuses = ["pass", "fail", "skip"];
console.log("Status at 0 index: " + statuses[0]); // pass
console.log("Status at 1 index: " + statuses[1]); // fail
console.log("Status at -1 index: " + statuses.at(-1)); // skip
console.log("Status at -4 index: " + statuses.at(-4)); // fail

//modify the item
statuses[1] = "pending";
console.log("Modified array: " , statuses); // ["pass", "pending", "skip"]