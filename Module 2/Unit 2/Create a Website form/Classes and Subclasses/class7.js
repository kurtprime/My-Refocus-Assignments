const Employee = require("./class2");

class Marketer extends Employee {
    constructor(name, product, promotion){
        super(name);
        this.product = product;
        this.promotion = promotion;
    }
    promote(){
        console.log("Company Promote: "+this.promotion)
    }
    products (){
        console.log("Product: "+this.product )
        console.log("Company: "+this.companyName)
    }
}

let market = new Marketer("Kurt", "Motorcycle", "Marketing");
market.promote();
market.products();