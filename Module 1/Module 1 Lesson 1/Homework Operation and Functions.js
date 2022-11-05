//  Task 1. Temperature converter

//You are asked to implement a feature for a weather app. This feature takes the
//temperature in Manila from the servers of PAGASA and converts it from one scale
//to another.

//Implement 2 functions:
//      - convertToKelvin(tempCelsius) that converts Celsius to Kelvin
//      - convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

 function convertToKelvin(tempCelsius){
    let TempKelvin = (tempCelsius + 273.15);
    return TempKelvin 
  }
  console.log(convertToKelvin(45))  


function ConvertToKelvin(tempFahrenheit){
    let TempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return TempKelvin
} 
   console.log(ConvertToKelvin(45))




   //Task 2. Tip calculator 

   //You are asked to design an app that enables you to leave a tip. The tip should be
   //10% of a meal cost. Write a code that shows the total tip to be paid based on the
   //food price.

   function computeTip(totalBill){
    let computeTip = (totalBill * 0.1);
    return computeTip
   }

console.log(computeTip(999))







