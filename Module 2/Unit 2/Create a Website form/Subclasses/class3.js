const Employee = require("./class2");

class Developer extends Employee{
    constructor(name, salary, specialty){
        // intialize name, salary, specialty
        super(name,salary);
        this.specialty = specialty;
    }

    specialize(){
        // print specialty of developer
        console.log("I am a web developer specializing in "+ this.specialty)
    }

    worksAt(){
        // Print the company of the employee
        console.log("I work at "+this.companyName)
    }
}

// initialize a new instance of developer
let izuku = new Developer("Izuku", "$2000", "front-end developer")
// perform these functions 
izuku.introduce();
izuku.printSalary();
izuku.specialize();
izuku.worksAt();
