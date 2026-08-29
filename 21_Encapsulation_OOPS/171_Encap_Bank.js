class ICICI{
    #balance;
    constructor(name, balance){
        this.name=name;
        this.#balance=balance;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance,isCashier){
        if(isCashier){
            this.#balance=balance;
        }else{
            console.log("Not allowed");
        }
        
    }

}
let khaleeda = new ICICI("Khaleeda", 10000);
console.log(khaleeda.getBalance());
khaleeda.setBalance(100000, true);
console.log(khaleeda.getBalance());