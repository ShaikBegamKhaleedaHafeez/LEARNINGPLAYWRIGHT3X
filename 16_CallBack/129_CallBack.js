function garimaStory(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy!")
    //....
    console.log("Store is empty!")
    callMeWhenStoreIsEmpty();
}

garimaStory("starting shoppping", ()=>{
     console.log("lets start shopping....")
});