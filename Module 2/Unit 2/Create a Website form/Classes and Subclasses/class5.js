const Employee = require("./class2");

class TeamLead extends Employee{
    constructor(name, instructions){
        super(name);
        this.instructions = instructions
    }
    instruc(){
        console.log("Name: "+this.name)
        console.log("Instructions: "+ this.instructions)
        console.log("Company: "+this.companyName)
    }
}

let team = new TeamLead("Izuku", "Finish your work on time")
team.instruc()