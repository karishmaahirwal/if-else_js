let input=require("readline-sync")
var a=input.question("enter 1 st number")
var b=input.question("enter 2nd number")
var c=input.question("enter 3rd number")

if (a>b){
    if(a>c){
        console.log(a,"is second grater")
    }
}
else if(b>c){
    console.log(b," b is second greater ")
}
else{
    console.log(c,"c is second greater")
}