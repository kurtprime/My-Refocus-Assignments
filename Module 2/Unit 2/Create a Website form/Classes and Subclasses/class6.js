const Employee = require("./class2");

class Tester extends Employee {
    constructor(result){
        super();
        this.result = result
    }
    trueOrFalse(){
        if(this.result == true){
            console.log("Code passed")
        }else {
            console.log("Code failed")
        }
        console.log("Company: "+this.companyName)
    }

}

let test = new Tester(false);
test.trueOrFalse();