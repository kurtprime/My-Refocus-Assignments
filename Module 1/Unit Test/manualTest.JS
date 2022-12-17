let kg = 0
let cm = 0




function calculateBMI(kg,cm){
    cm*=cm;
   let BMI = kg / cm
   return console.log("Your BMI is "+ BMI.toFixed(2))
}

calculateBMI(65,1.68)


/*
BMI = 65 / (1.68)^2 
BMI = 23
*/
