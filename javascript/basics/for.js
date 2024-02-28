// ! for-in, for of, for each
// * index,value,value-Array
// * keys,not used ,not used but after converting for each can be used
// * for-in index,for-of charachter,for-each needs conversion to array


// var ename = ["javed","mukund","rakesh","satyam"]
// console.log(ename);

// for(let name in ename){
//     console.log(name);
// }
// ename.forEach((name)=>{console.log(name);})

// var emp = {
//     emp1:"sindhu",
//     emp2: "arvind",
//     emp3:"thrupthi",
//     emp4:"gaurav"
// }
// console.log(emp);

// for (let name in emp) {
//     console.log(name);
// }
// var val = Object.values(emp)
// val.forEach((nam)=>console.log(nam))


// var company = "Test"
// for (let comp in company) {
//     console.log(comp);
// }
// for (let comp of company) {
//     console.log(comp);
// }
// var companies = company.split("")
// companies.forEach((i)=>console.log(i));

var product = [
    {
        pname:"shirt",
        price:450,
        brand:"puma"
    },
    {
        pname:"hoodie",
        price:450,
        brand:"puma",
        available:true
    },
    {
        pname:"kurtha",
        price:250,
        brand:"zara",
        size:["S","M","L"]
    },
    {
        pname:"jacket",
        price:550,
        brand:"zara",
        size:["S","M","L"]
    },
]

product.filter((item)=>{
    if(item.size&&item.size.includes("M")) {
        console.log(item.pname);
    }   
})

var product1 = [
    "iphone",
    ["midnight black", "space gray","white"],
    13000
]

product1.filter((item1)=>{
    // var items = item1.flat();
    if(Array.isArray(item1) && item1.includes("midnight black")){
        
    }
})