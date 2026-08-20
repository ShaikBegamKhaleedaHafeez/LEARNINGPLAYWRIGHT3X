// let env = "staging"
// function setupConfig(){
//     let timeout = 3000; //local scope
//     console.log(env) //can access global
//     console.log(timeout)//can access local
// }
// setupConfig();
// console.log(env)
// console.log(timeout)//cannot access local scope outside block

//-------
let g_x = 10;
function outer(){
    let x = 10;
    function inner(){
        let y = 20;
        console.log(y)
        console.log(x)
    }

    inner();
    // console.log(y);
}
outer()