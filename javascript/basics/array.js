// var ename = ["prasanna","anish","juned","mukund"]
// console.log(ename)

// console.log(ename[1]);
// var mukund = ["TYSS2012",45000,"mukund@gmail.com",true,{qualification:"BE"},null,["java","hibernate","sql","frontend"]]
// console.log(mukund);
// var company = "TYSS"
// console.log(mukund[0].startsWith(company));
// mukund[3] = false
// console.log(mukund);
// mukund[4].qualification = "MTECH"
// console.log(mukund);
// var skillcheck = mukund[6].includes("frontend")
// console.log(skillcheck);

// var res  = mukund[6].indexOf("frontend")
// mukund[6][res]="React js"
// console.log(mukund);

var cart = ["nail paint","bottle","laptop","mobile cover","pen"]
console.log(cart)
cart.push("mouse pad","watch","smart watch")
console.log(cart);
cart.pop()
console.log(cart);
cart.unshift("headphone")
console.log(cart);
cart.shift()
console.log(cart);
// !^ slice method extract part of array
var slicearr = cart.slice(2,4)
console.log(slicearr);

//! splice method 
cart.splice(3,2,"desktop")
console.log(cart);

console.log(cart.includes("nail paint"));
var res = cart[0].split(' ')
console.log(res);

console.log(cart.indexOf("laptop"));

// methods from mdn
console.log(cart);
console.log(cart.at(2));

slicearr[1]="hp laptop"
console.log(slicearr);
console.log(cart);
var anicart = cart.concat(slicearr)
console.log(anicart);
slicearr[0]="water bottle"
console.log(slicearr);
console.log(anicart);

var arr= ["a","b","c","d","e"]
console.log(arr)
arr.copyWithin(1,2)
console.log(arr);


// ! entries
// var arr1 = ["TYSS1202","TYSS1203","TYSS1204","TYSS1205","TYSS1206"]
// var id = arr1.entries()
// console.log("anish",(id.next().value)[1]);

// ! filter
// var product = ["laptop","mobile","parker pen","speaker","pen"]
// product.filter((products)=>{
//     if(products==="speaker"){
//         console.log(products+" not available");
//     }else if(products === "parker pen"){
//         console.log(products+" will be available from next month");
//     }
//     else{
//         console.log(products+" available");
//     }
// })

// ! map 

var price = [200,400,800,200,800,400]

price.map((cost)=>{
    if(cost===200){
        console.log(cost-100);;
    }
    else if(cost===800){
       console.log(cost-200); ;
    }else{
        console.log(cost);
    }
})

// ! reduce  acc - accumulator, cuval - currrent value
var mul2 = [2,4,6,8,10]
var initial_value = 1
var d = mul2.reduce((acc,cuval)=>  acc*cuval , initial_value)
console.log(d);