// ~ 1 total amount of purchase >5000 give 12% discount
// var total = Number(prompt("enter the total amount of purchase"))
// var payable = total-total*0.12
// if(total>=5000){
//     document.write(`the payable was ${total} after discount is ${payable}`)
// }
// else{
//     document.write(`the payable is ${total} no discount applied as amount is less than 5000`)
// }

// 2 user kms => car per km 30, auto per km 25, bike per km 12
/*var mode = prompt("enter the mode of transport car/bike/auto").toLowerCase()
var kms = parseInt(prompt("enter the kms u want to travel"))

if(mode==="car"){
    var total = kms*30
    document.write(`dear customer the opted mode was ${mode} and the travel total cost to pay is ${total}`)
}
else if(mode==="auto"){
    var total = kms*25
    document.write(`dear customer the opted mode was ${mode} and the travel total cost to pay is ${total}`)
}
else if(mode==="bike"){
    var total = kms*12
    document.write(`dear customer the opted mode was ${mode} and the travel total cost to pay is ${total}`)
}
else{
    document.write("choose one option")
}    */

// !^ property tax  amt >45000 due -penalise+5%  donot have due then 5% discount for current year

/*var due = prompt("is there any due of the last year").toLowerCase()
if(due==="no"){
    var pamt=Number(prompt("enter the current year property tax amt"))
    var totalamt= pamt-pamt*0.5
    document.write(`The payable amt is ${pamt} after discount the net payable is ${totalamt}`)
}
else if(due==="yes"){
    var pamt=Number(prompt("enter the property tax amt"))
    var totalamt= pamt+pamt*0.5
    document.write(`The payable amt was ${pamt} the net payable is ${totalamt}`)
}
else{
    document.write("contact bbmp")
}   */

// var pw1 = prompt("please enter a password")
// var pw2 = prompt("please reenter the password")
// if(pw1==pw2){
//     alert("password succesfully changed")
// }
// else{
//     alert("password not matching")
// }

var day = prompt("enter the day ").toLowerCase();
switch (day) {
    case "monday":
        document.write("You have Java Class at 11am in rajajinagar branch")
        document.write("SkillSet for the day we will learn variable")
        break;
    case "tuesday":
        document.write("You have selenium Class at 1pm in rajajinagar branch")
        break;
    case "wednesday":
        document.write("You have Java Class at 10am in rajajinagar branch")
        
        break;
    case "thursday":
        document.write("You have Java Class at 4pm in rajajinagar branch")
        
        break;
    case "friday":
        document.write("You have Java Class at 5:30pm in rajajinagar branch")
        
        break;
    case "saturday":
        document.write("You have Java Class at 6pm in rajajinagar branch")
        
        break;
    default:
        alert("invalid option")
        break;
}
