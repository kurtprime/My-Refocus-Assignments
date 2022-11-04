//Task 1. Pulse oximeter reading (part 1)
 
 //You are asked to develop a JavaScript app compatible with smartwatches. You use
 //the sensor data of its pulse oximeter to tell a user that their oxygen level is normal
 //or alarming. Write a function that alerts a user of their oxygen saturation.

 //≥ 96%                      Normal reading.
 //  95%                      Acceptable to continue home monitoring.
 //  93–94%                   Seek advice from health professionals.
 //≤ 92%                      Seek urgent medical advice.

var OxygenLevel = 91;


function OxygenSaturation(OxygenLevel) {
    if (OxygenLevel >= 96){
        console.log("Normal Reading.");
    } else if ( (OxygenLevel == 95) ){
        console.log("Acceptable to continue home monitoring.")
    } else if ((OxygenLevel >= 93) && (OxygenLevel <= 94)) {
        console.log("Seek advice from health professionals.")
    } else if ((OxygenLevel <= 92)) {
        console.log("Seek urgent medical advice.")
    }


}

OxygenSaturation(OxygenLevel);









// Task 2. Pulse oximeter reading (part 2)
//Continue with the last task, and provide more observations based on the pulse rate.


// Pulse Rate/ Bpm                          Observation
//   40-100                                 Normal reading.
//  101-109                                 Acceptable to continue home monitoring.
//  110-130                                 Seek advice from health professionals.
// ≥131                                     Seek urgent medical advice.



var bpm = 108

function PulseRate(bpm) {
    if (bpm >= 131) {
        console.log(" Seek urgent medical advice.");
    } else if ((bpm >= 40) && (bpm <= 100)) {
        console.log("Normal reading.");
    } else if ((bpm >= 101) && (bpm <= 109)) {
        console.log("Acceptable to continue home monitoring.")
    } else if ((bpm >= 110) && (bpm <= 130)) {
        console.log("Seek advice from health professionals.")
    }
}







PulseRate(bpm);

