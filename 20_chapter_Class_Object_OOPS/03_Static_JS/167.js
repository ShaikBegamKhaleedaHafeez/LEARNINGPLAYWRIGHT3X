class Student{
    static collegeName = "PW AT Batch";
    constructor(name){
        this.name = name;
    }
    static display(name){
        console.log(this.name+" is a part of "+ Student.collegeName);
    }
    nsf(){
        console.log(this.name);
    }
}
let amit = new Student("amit");
let miti = new Student("miti");
console.log(Student.collegeName);
// console.log(Student.display("miti"))
console.log(miti.name);
// console.log(miti.nsf());