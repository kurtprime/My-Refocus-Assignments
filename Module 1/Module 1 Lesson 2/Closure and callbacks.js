
//Task 1. Design a bank application
//Create a feature for a bank app that allows users to do 3 things: check their balance
//and withdraw or deposit money. It is forbidden to manually modify the balance.
//Users can only do it using the 3 rules mentioned above.
//Develop a closure to enable this feature.
const name = "kurt" ; 

function createBankAccount(name){
    let balance = 0;
    console.log(`Hi! ${name} you cannot withdraw because you don't have enough balance in your account, your balance is ${balance}`);

    function depositAmount(amount){
        balance = balance + amount;
        console.log("Congrats, you have deposit " + amount + " so your new balance is now " +balance);

        return balance;
    }
    return depositAmount;
}
let BankAccount = createBankAccount("Kurt") 
let NewBalance = BankAccount(1000)

function withdraw(amount){
    
    if (NewBalance >= amount) {
       console.log("You have withdraw " + amount);
      } else if (NewBalance < amount) {
       console.log("You don't have enough balance to withdraw " + amount);
      }
    //return withdraw
}
withdraw(500)


console.log(typeof withdraw) 











