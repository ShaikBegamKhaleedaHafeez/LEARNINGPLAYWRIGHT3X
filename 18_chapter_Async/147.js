function openBrowser(){
    return new Promise(function (resolve){
        resolve("Browser Opened");
    });
}
function goToLogin(){
    return new Promise(function (resolve){
        resolve("Login Page Opened");
    });
}
function enterCredentials(){
    return new Promise(function (resolve){
        resolve("Credentials are entered");
    });
}
function clickLogin(){
    return new Promise(function (resolve){
        resolve("Logged in Successfully");
    });
}
async function runLoginFlow() {
    let msg1 = await openBrowser();
    console.log("Step1: "+ msg1);
    let msg2 = await goToLogin();
    console.log("Step2: "+ msg2);
    let msg3 = await enterCredentials();
    console.log("Step3: "+ msg3);
    let msg4 = await clickLogin();
    console.log("Step4: "+ msg4);
}
// runLoginFlow();

function apiRequest(){
    return new Promise(function(resolve){
        resolve({status: 200});
    });
}
async function runApiRequest(){
    let response1 = await apiRequest();
    console.log("API Status: "+ response1.status);
}
runApiRequest();

