// Task 2, callback


const name = "Kurt"
let balance = 2932


function BankAccount(name,deposit,withdraw,callback){
    console.log(`Hello ${name} your account balance is ${balance}`)
    balance = balance + deposit
    console.log("You have deposit "+deposit+" so your new balance is now "+balance);
    callback(name,deposit,withdraw)
}

function takeMoney(name,deposit,withdraw){
    if (balance >= withdraw) {
        balance = balance - withdraw
        console.log("Hi! "+name+" you have withdraw "+withdraw+ " so your new balance is now "+balance )
    } else if(balance < withdraw){
        console.log("Sorry "+name+" you cannot withdraw this amount("+withdraw+") because  you don't have enough balance")
    }
}


BankAccount("Kurt",2000,4933,takeMoney)
console.log(typeof BankAccount)



