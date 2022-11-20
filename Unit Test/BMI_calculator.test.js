const myFunction = require("./BMI_calculator")

test("Checks if BMI is 19.3", ()=>{
    expect(myFunction(52,1.64)).toEqual(19.3);
});


test("Checks if BMI is 28.4", ()=>{
    expect(myFunction(87,1.75)).toEqual(28.4);
});






test("Check if statement is true", ()=>{
var status = true;
expect(status).toBe(true);
});