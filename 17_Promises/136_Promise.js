import { resolve } from "node:dns";

let order = new Promise(function(resolve, reject){
    let foodReady = false;
    if(foodReady){
        resolve("Pizza is delivered!")
    }
    else{
        reject("Order Cancelled")
    }
})

order
  .then(message => console.log(message))
  .catch(error => console.log(error));