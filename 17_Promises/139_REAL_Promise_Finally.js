// let apiCall = new Promise(function(resolve, reject){
//     resolve({status: 200})
// })

// apiCall.then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("I will be execute anyhow!")
// })

let testRun = new Promise(function(resolve,reject){
    reject("Assertion Failed")
});
testRun.then(function(status){
    console.log(status);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("I will be executed no matter what!")
})