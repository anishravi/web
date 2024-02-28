// console.log("function");

// function msg() {
//     // document.write("Todays concept of discussion is functions in js")
// }
// // msg();
// //! parameterized function
// // function update(name,project) {
// //     if(project==="NLP") {
// //         alert(`dear ${name} congratulation team you have completed the project successfully`)
// //     }else{
// //         alert(`hello dear ${name} keep updated we are getting approval from the team soon`)
// //     }
// // }

// // update("anish","NLP");
// // update(prompt("enter your name"),prompt("Enter your project name").toUpperCase()) //! function call will allow you to pass the argument

// // var like = function (){
// //     var count=0
// //     count++;
// //     console.log(count);
// // }
// // like()

// // var count=0
// // var lbtn = document.getElementById("likebtn")
// // lbtn.addEventListener("click",()=>{
// //     like()
// // });
// // function like(){
// //     count++;
// //     lbtn.innerHTML = `${count} ❤️`  
// // }

// // ! iife-> Immediate invoked function expression
// // function otp(){
// //     var tyotp="TYSS2800"
// //     var otp = ""
// //     var len = tyotp.length
// //     for (let i = 1; i <= 6; i++) {
// //         otp+=tyotp[Math.floor(Math.random()*len)]
// //     }
// //     alert(`valid for 60 seconds ${otp}`)
// // }

// // ! nested function
// console.log("hi");
// function accholder(){
//     var accno = 202120120
//     var ifsc ="icic0004052"
//     var balance= 580000
//     console.log(accno);
//     console.log(ifsc);
//     console.log(balance);
//     function fixeddeposit(){
//         var fdbal=1500000
//         console.log(fdbal);
//         console.log(`Total balance is ${fdbal+balance}`);
//         console.log("fd balance");
//         function loan(){
//             console.log("not applied for any loan");
//         }
//         return loan;
//     }
//     return fixeddeposit;
// }
// accholder()()()

// // ! higher order function
// function calculate(a,b,task){
//     var res = task(a,b)
//     return res
// }
// calculate(2,3,function(a,b){return a+b})
// calculate(2,3,function(a,b){return a+b})


// function* pid(){
//     var num=1
//     while(num>=1){
//         yield num;
//         num++;
//     }
// }

// var pidgen = pid();
// console.log("bag",pidgen.next().value);
// console.log("bag",pidgen.next().value);
// console.log("bag",pidgen.next().value);
// console.log("bag",pidgen.next().value);
// console.log("bag",pidgen.next().value);
// console.log("bag",pidgen.next().value);

// sum(10,20)
// diff(10,20)
// function sum(x,y) {
//     return x+y;
// }
// let diff = function(){
//     return x-y;
// }

// console.log("nested function");
// function guravgp() {
//     var acre = 20
//     var gold = 5.2
//     console.log(acre);
//     console.log(gold);
//     function guravp() {
//         var acrep=30
//         console.log(acrep);
//         function gurav() {
//             var acreg=70
//             console.log(acreg);
//         }
//         return gurav
//     }
//     return guravp
// }
// guravgp()()()

function salcalculate(name,designation,salary,bonus){
   var res = bonus(salary) 
   return res;
}
var anish = salcalculate("anish","software engineer",35000,(salary)=>{
    return salary +5000
})
var mukund = salcalculate("mukund","software developer",45000,(salary)=>{
    return salary + 10000
})
var ramesh = salcalculate("ramesh","senior engineer",45000,(salary)=>{
    return salary - 5000
})
console.log(anish);
console.log(mukund);
console.log(ramesh);