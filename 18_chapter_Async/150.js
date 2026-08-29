async function testAPI(){
    try{
        let result = await Promise.reject("503 Service Unavailable");
        console.log('Result', result);
    }
    catch(error){
        console.log('Error', error);
    }
    finally{
        console.log('Clean up!')
    }

}
testAPI();

function step1(){
    console.log("Step1");
}
function step2(){
    console.log("Step2");
}
step1();
step2();

async function testResult(){
    try{
    let result = await Promise.resolve("You are passed!");
    console.log("Passed");
    }
    catch(error){
        console.log("Failed");
    }
    finally{
        console.log("Keep going")
    }

}
testResult();