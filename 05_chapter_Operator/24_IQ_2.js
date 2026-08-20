let environment = "staging";
let baseURL = environment == "Prod"? "https://www.prod.com": "https://www.staging.com";
console.log(baseURL);