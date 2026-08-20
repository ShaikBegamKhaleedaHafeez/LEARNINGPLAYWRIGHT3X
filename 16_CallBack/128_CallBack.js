function placeOrder(item, callBack){
    console.log("Order placed")
    callBack()
}
//Define
function print(){
    console.log("Normal Function - done with the order ")
}
//First way 
placeOrder("Burger", print)

//Second way - anonymous function
placeOrder("Burger", function(){
    console.log("Anonymous Function - Order is Ready! pick it up!")
})

//third way
placeOrder("Burger", ()=>{
    console.log("Arrow function, I'm function without name")
})