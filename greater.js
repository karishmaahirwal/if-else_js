var d=require("readline-sync")
var a=d.question("enter your 1st number")
var b=d.question("enter 2nd number")
var c=d.question("enter 3rd number")

if(a>b && a>c){
    console.log(a," a is grater")
}
else if (b>a && b>c){
    console.log(b,"b is greater")
}
else{

    console.log(c,"c is greater")
}
