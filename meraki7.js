var a=require("readline-sync")
var number2=a.question("enter your number")
var number1 = 44 * 30
if (number1>=number2){
    console.log(number1," number1 is greater than")}
    
else if(number2>=number1){
        console.log(number2," number2 is greater than or equal")}
else{
    console.log("number2 is lesser")
}