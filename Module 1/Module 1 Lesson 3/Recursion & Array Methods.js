/*
Task 1. Find the most used item on the array
You have an array with some repeated elements. For example, the element
“Web Developer” is repeated 3 times below.
const arr = [
 "Web Developer",
 "Refocus",
 "Web Developer",
 "Web Developer",
 "Refocus",
 "Awesome",
];
Create an algorithm that counts the number of times each element is repeated
and shows the result using the console.


Task 2. Reverse the array of invoices
You work as a Web Developer at a big company. The invoicing department
is having a hard time sorting their documents using the “first in, first out” method.
The “first in, first out” method means that the invoices that came the earliest
must be also paid earlier than the others.

Use array methods to create two recursive functions:
    *insertToBottom, which adds invoices at the bottom of the list
    *reverseStack, which reverses the order of the invoices
*/

const arrays = [
    "Web Developer", 
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

let numbers = {};
arrays.forEach(val => numbers[val] = (numbers[val] || 0) + 1); 



console.log(numbers)


//task 2

let InvoiceList = [
"Invoice 008",
"Invoice 007",
"Invoice 006",
"Invoice 005"
];

function insertToBottom(n){
    if (n <= 0){
        return console.log(InvoiceList.join(" "))
    }else{
        InvoiceList.push("Invoice 00"+ n)
        return insertToBottom(n - 1) 
    }
};

function reverseList(reverse){
    if(reverse === true){
        return console.log(InvoiceList)
    } else {
        InvoiceList.reverse();
        return reverseList(true)
    }
}


insertToBottom(4)
reverseList(false) // I guess this is what you mean by "reverseList" using recursion

//reverseList()