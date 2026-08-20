let apiCall = new Promise(function(resolve, reject){
    reject("500  error..")
})
apiCall.then(function (data){
    console.log("Data is success!")
}).catch(function (error){
    console.log("Error")
})