// let checkAuth = Promise.resolve("Auth OK")
// let checkDB = Promise.resolve("DB OK")
// let checkCache = Promise.resolve("Cache OK")
// Promise.all([checkAuth,checkDB,checkCache]).then(function (results){
//     console.log("All checks", results)
// })

let checkAuth = Promise.resolve("Auth OK")
let checkDB = Promise.reject("DB Down")
let checkCache = Promise.resolve("Cache OK")
Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All checks", results)
}).catch(function (error){
    console.log("error: ", error)
}).finally(function(results){
    console.log("I will execute anyways")
})