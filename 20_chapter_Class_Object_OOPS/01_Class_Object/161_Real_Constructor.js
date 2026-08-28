class TestCase{
    constructor(name,status,priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display(){
        console.log(this.name + " -> "+this.status+" -> "+ this.priority)
    }
    static display(){
        console.log("Static method called on class")
    }
}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signUp_ref = new TestCase("Sign Up", "FAIL", "P1");
loginTest_ref.display();
signUp_ref.display();
TestCase.display();