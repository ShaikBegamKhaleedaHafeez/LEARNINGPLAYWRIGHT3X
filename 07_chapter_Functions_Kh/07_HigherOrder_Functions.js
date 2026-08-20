function runWithLogging(testfn,testName){
    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished ${testName} -> ${result}`);
    return result;
}
function loginTest(){return "Pass";}
function loginTestFailed(){return "failed";}

runWithLogging(loginTest, "Login Test")