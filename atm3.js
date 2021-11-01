let readlineSync = require("readline-sync");
var language= readlineSync.question("welcome to JS national bank\nselesct language\na.hindi   b.english:-")

// var pincod=readlineSync.question("insert your card\nEnter your pincode")

if (language=="a"){
    var pincod=readlineSync.question("insert your card\nEnter your pincode")
    if (pincod==4321){
        console.log("correct pincod" )
        var transaction=readlineSync.question("select your transection\na.balance enquiry  b.withdrew money:-")
        if (transaction=="a"){
            console.log("you have 100000 rs")
            var money_transection=readlineSync.question("trancefer money ?\na.yes  b.no :-")
            if (money_transection=="a"){
                // console.log("enter  the amount")
                var amount=readlineSync.question("enter the money")
                if (amount>=1000 && amount<=50000){
                    console.log("transfer process suceed")
                }
                else{
                    console.log("can't withdrew money")
                }
            }
            else{
                console.log("take your receipt\nthanks....");
            }
        }

        else if (transaction=="b"){
            // console.log("select your account")
            var account=readlineSync.question("select your account")
            if (account=="current"){
                var withdrew_a=readlineSync.question("enter the amount you want to withdrew:-")
                if (withdrew_a>=100 && withdrew_a<=10000){
                    console.log("collect your amount\n thanks...")
                }
                else{
                    console.log("can't withdrew money")
                }

            }
            else{
                console.log("retry")
            }

        }
        else{
            console.log("error")
        }
    }
    else{
        console.log("not vailed try agian")
    }
}
else if(language=="b"){
    var pincod=readlineSync.question("Apna card dale")
    if (pincod>999 && pincod<9999){
        console.log("sahi hai" )
        var transaction=readlineSync.question("Apna transection chune \na.balance enquiry  b.pese nikalna:-")
        if (transaction=="a"){
            console.log("you have 100000 rs")
            var money_transection=readlineSync.question("trancefer money ?\na.yes  b.no :-")
            if (money_transection=="a"){
                // console.log("enter  the amount")
                var amount=readlineSync.question("Pese ka bugtan kare")
                if (amount>=1000 && amount<=50000){
                    console.log("transfer prakriya safal hui")
                }
                else{
                    console.log("pese nhi nikal sakte")
                }
            }
            else{
                console.log("Apni rassed le \Dhanyvvad....");
            }
        }

        else if (transaction=="b"){
            // console.log("select your account")
            var account=readlineSync.question("Apna khata chune:")
            if (account=="current"){
                var withdrew_a=readlineSync.question("Aaharan rashi darj kare:")
                if (withdrew_a>=100 && withdrew_a<=10000){
                    console.log("Pese le or nikal")
                }
                else{
                    console.log("pese nhi hai ")
                }

            }
            else{
                console.log("sahi dal")
            }

        }
        else{
            console.log("Glat hai kuch")
        }
    }
    else{
        console.log("sahi se dal na re")
    }

}