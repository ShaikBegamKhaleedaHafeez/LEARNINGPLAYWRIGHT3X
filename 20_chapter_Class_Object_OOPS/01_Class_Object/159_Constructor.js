class Car{
    //constructor(){
    //default contructor
    //}

    //parameterized contructor
    constructor(assigned_name){
        this.name = assigned_name;
    }

}
let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);

let hyundai_creta = new Car("creta");
console.log(hyundai_creta.name);

const a = new Car("i11");
const b = new Car("Nexon");
console.log(a.name);
console.log(b.name);