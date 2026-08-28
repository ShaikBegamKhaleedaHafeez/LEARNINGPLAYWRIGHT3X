let apiCall = new Promise(function(resolve,reject){
    reject("500 Error");
})

apiCall.then(function(message){
    console.log("Data is success!!")
}).catch(function(error){
    console.log(error);
});