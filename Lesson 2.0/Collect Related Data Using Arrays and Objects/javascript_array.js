const letters = ["E","D" , "L", "T" , "E", "P", "B", "N", "M", "E", "E","W", "V" , "0"," " ];
const orders = [11, 4, 6, 14, 1, 9, 12, 0, 2, 13, 5, 8, 10, 7, 3];
let hiddenWord = "";

for(i=0;i<letters.length;i++){
    
    hiddenWord += letters[orders[i]]
    console.log(hiddenWord)
}