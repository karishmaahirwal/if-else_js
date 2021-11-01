var userpin=4321;
let a=require("readline-sync")

var language=a.question("select your language /n a. english b.hind ")
if (language=="a" || language=="b"){
    var pin=a.question("enter your 4 digit pin number");
    if (pin!=userpin){
        console.log("wrong pin number,you have")
    }
    else{
        let userchoice=a.question("d:Deposit or w:Withdraw:")
        if (userchoice=="d");{
            var c=require("readline-sync");
            let userdeposit=c.question("enter your amount you would like to deposite");
            console.log(userdeposit,"$  have been deposited into your account");
        }
        if (userchoice=="w"){
            var d=require("readline-sync");
            let userdwithdraw=d.question("enter your amount you would like to withdraw");
            console.log(withdraw,"$  have been withdraw from your account")
        }

    let userexit=a.question("would you like to continue? Y/N")
    if(userexit=="N"){
        console.log("thank you for using HDFCbank")
    }
    else{
    console.log("continue ")}
    }
}
