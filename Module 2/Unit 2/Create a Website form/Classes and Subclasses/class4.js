const Employee = require("./class2");

class HumanResource extends Employee{
    constructor(){
        super();
    }  
    hired(hire){
        console.log(`${hire} is hired from this company called "${this.companyName}"`);
        return 
    }

}    
let hire = new HumanResource();
hire.hired("Kurt")