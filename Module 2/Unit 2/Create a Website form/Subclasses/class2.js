class Employee {
    companyName = 'MHA';

    constructor(name, salary){
        // Initialize name and salary
        this.name = name;
        this.salary = salary;
    }

    introduce(){
        // Print name
        console.log("Hi my name is "+ this.name)
    }

    printSalary(){
        // Print salary
        console.log(this.name+"'s salary is "+this.salary)
    }
}

module.exports = Employee; 
