const Employee = require("./class2");

class ProductOwner extends Employee {
    project = [];
    constructor(){
        super()
    }
    newProjects (val){
        this.project.push(val);
    }
    currentProjects (){
        console.log(this.project);
        console.log("Company: "+this.companyName);
    }
}

let pro = new ProductOwner();
pro.newProjects("web Site");
pro.newProjects("CV");
pro.newProjects("Arts");
pro.currentProjects()