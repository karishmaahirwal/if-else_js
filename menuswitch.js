var a=require("readline-sync")
let day=a.question("enter your days:-")
var time=a.question("enter your menu time:-")

switch(day){
    case("monday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("vadapao")
                break;
            case "lunch":
                console.log("daal roti")
                break;
            case "dinner":
                console.log("pulao")

        }
    break;
    case("tuesday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("poha")
                break;
            case "lunch":
                console.log("daal chawal")
                break;
            case "dinner":
                console.log("roti sabji")
        }
        break;
    case("wednesday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("daliya")
                break;
            case "lunch":
                console.log("rajma chawal")
                break;
            case "dinner":
                console.log("chicken")
        }
        break;
    case ("thursday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("sandwich")
                break;
            case "lunch":
                console.log("chole chawal")
                break;
            case "dinner":
                console.log("biryani")
        }
        break;
    case ("thursday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("jambread")
                break;
            case "lunch":
                console.log("chole roti")
                break;
            case "dinner":
                console.log(" veg biryani")
        }
        break;
    case ("friday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("parathe")
                break;
            case "lunch":
                console.log("aalu roti")
                break;
            case "dinner":
                console.log("veg pulao")
        }
    case ("saturday"):
        // console.log("select menu")
        switch(time){
            case "breakfast":
                console.log("vadapao")
                break;
            case "lunch":
                console.log("binnes")
                break;
            case "dinner":
                console.log("ghovi")
        }
        break;
    case ("sunday"):
    // console.log("select menu")
    switch(time){
        case "breakfast":
            console.log("chille")
            break;
        case "lunch":
            console.log("roti sabji daal chawal")
            break;
        case "dinner":
            console.log("roti palak")
    }
    break;
}
