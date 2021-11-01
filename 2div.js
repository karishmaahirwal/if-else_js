var input=require("readline-sync")
var vary=input.question("enter your number")

if (vary%2==0){
    console.log(vary,"it is divisible by 2")
}
else{
    console.log(vary,"it is not a divisible")
}
