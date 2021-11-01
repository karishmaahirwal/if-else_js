let input=require("readline-sync")
var a=input.question("enter your number")

if(a%3==0 && a%5==0){
    console.log(a,"it is divisble by both 3 and 5")
}
else if(a%3==0){
    console.log(a,"it is div by 3")
}
else if (a%5==0){
    console.log(a,"it is div by 5")
}
else{
    console.log(a,"it is not divisble by any one")
}
