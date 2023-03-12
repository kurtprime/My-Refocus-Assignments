let birthmonth = 9;
const current_month = new Date().getMonth();
var current_year = new Date().getFullYear();
var birthyear = 2004; 

function patienceAge(){

    let age = current_year - birthyear
    console.log("Patience's Age: "+age);
    if (current_month <= birthmonth){     
        age = age-1;
        return console.log("Patience's Accurate Age: "+age);
    }else{
        return console.log("Patience's Accurate Age: "+age);
    }
        
}

patienceAge();