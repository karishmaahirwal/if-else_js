
var userpin=4321;
let a=require("readline-sync");
let t_amount=500000
var language=a.question(" welcome to js national bank/nselesct language /n a. english b.hind:-")

if (language=="a"){
    var pin=a.question("enter your 4 digit pin number:-");
    if (pin!=userpin){
        console.log("wrong pin number,you have")
    }
    else{
        var amount=500000
        let userchoice=a.question("d:Deposit or w:Withdraw:-")
        console.log("you have 50000")
        // var transaction=a.question("select your transection/na.balance enquiry b.withdraw money:-") 

        if (userchoice=="d");{
            var c=require("readline-sync");
            var userdeposit=c.question("enter your amount you would like to deposite:-");
            
            if (userdeposit>=1000 && userdeposit<=5000){

                console.log("transfer process suceed")
                console.log(userdeposit,"$  have been deposited into your account:-");
                console.log("now you have",amount(+us))}
        }
        if (userchoice=="w"){
            var d=require("readline-sync");
            let userdwithdraw=c.question("enter your amount you would like to withdraw:-");
            console.log(userwithdraw,"$  have been withdraw from your account")
            console.log("now you have",amount-userdwithdraw)
        }

    let userexit=a.question("would you like to continue? Y/N:-")
    if(userexit=="N"){
        console.log("thank you for using HDFCbank")
    }
    else{
    console.log("continue ")
    }

    }
}
else if(language=="b"){
    var pin=a.question("apna 4 number ak 4 daalo:-");
    if (pin!=userpin){
        console.log("galt pin hai aap ke pass")
    }
    else{
        let userchoice=a.question("d:Deposit or w:Withdraw:-")
        if (userchoice=="d");{
            var c=require("readline-sync");
            let userdeposit=c.question("paise daaliye jitna aap ko deposite karna hai:-" );
            console.log(userdeposit,"$ aap ke paise deposite ho chuke hai account mai");
        }
        if (userchoice=="w");{
            var d=require("readline-sync");
            let userdwithdraw=d.question("paise daaliye jitna aapko  withdraw karna hai:-");
            console.log(`userwithdraw aapke paise withdraw se  nikal chuke account hai`);
            console.log("ab aapke pass itna balance bacha",amount-userdwithdraw)
        }

    let userexit=a.question("Balance enquiry? Y/N:-")
    if(userexit=="y"){
        console.log(`You have ${amount+1}`)
    }
    else{
    console.log("jari rakhe ")
    }

    }
}