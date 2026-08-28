//Private fields (#) - Hidden data
//Public fields
let v = 10;
class Credentials{
    #apiKey; //Instance/Class variable
    user;
    constructor(user,key){
        this.user = user;
        this.#apiKey = key;

    }
    //custom made function
    pramodGetAuthHeader(){
        return "Bearer "+ this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key");
// console.log(cred.apikey)
console.log(cred.user);