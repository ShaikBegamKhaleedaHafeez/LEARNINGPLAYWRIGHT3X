let apiCall = new Promise(function(resolve, reject){
    resolve({status: 200})
})

apiCall.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("I will be execute anyhow!")
})