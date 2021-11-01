var a=require("readline-sync")
var num=a.question("enter your number")

if (num<10){
    console.log("number is less than 10")
}
else if (num<10 && num>20){
    console.log("number is less than 20")
}
else if(num>20){
    console.log("greater than 20")
}
else{
    console.log("nothing")
}