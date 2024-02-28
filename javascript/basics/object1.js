
var puma_prod={
    pname:"Tshirt",
    brand:"puma",
    cost:2000,
    color:"black",
    size:"M"
}

// ! methods
// console.log(Object.keys(puma_prod));  // returns all keys from the object
// console.log(Object.values(puma_prod));   // returns all values from the object
// console.log(Object.entries(puma_prod));
// var product2 = Object.assign(puma_prod)
// console.log(product2);
// console.log(puma_prod)
// var deepcopy = lodash.cloneDeep(prod);
// console.log(deepcopy);

// var product12 = JSON.parse(JSON.stringify(puma_prod))
// console.log(product12);

// Object.freeze(puma_prod) // makes it immutable 
// puma_prod.brand= "nike"
// console.log(puma_prod.brand)
// console.log();
// console.log(Object.isFrozen(puma_prod))
// console.log(puma_prod);
// Object.seal(puma_prod) // only prevents adding new properties, not changing existing ones
// puma_prod.color="red";
// console.log(puma_prod);

// console.log(Object.isSealed(puma_prod));

// Object.preventExtensions(puma_prod)
// Object.defineProperty(puma_prod,'category',{value:"casual",writable:false});
// console.log(puma_prod)

// ! 28th Feb
// ! call method
// var bonus = {
//     calculate_bonus:function (sal){
//         var res = sal+2000
//         console.log(res);
//     }
// }
// var emp = {
//     ename:"anish",
//     eid:"tyss2702",
//     sal:35000
// }
// bonus.calculate_bonus(emp.sal)

// ! apply method
// var product_offer = {
//         product_discount:function(price,quantity){
//             if(this.quantity>5){
//                 var discount = this.price - this.price*0.1
//                 console.log(discount);
//             }else{
//                 console.log(this.price);
//             }
//         }
// }

// var p1 = {
//     pname:"laptop",
//     price:40000,
//     quantity:6,
//     brand:"hp"
// }
// var p2 = {
//     pname:"mobile",
//     price:20000,
//     quantity:4,
//     brand:"samsung"
// }

// product_offer.product_discount.apply(p1)  //or
// product_offer.product_discount.apply(p1,[p1.price,p1.quantity])

// ! bind method
var movie = {
    movie_name:"batman",
    show_booking:650,
    first_show:true,
    booking_pay:function(show_booking){
        if(this.first_show === true){
        var payment = this.show_booking + 200;
        console.log(payment);
        }
        else{
            console.log(show_booking);
        }
    }
} 
movie.booking_pay()
var movie_2 = {
    movie_name:"Odiyan",
    show_booking:1250,
    first_show:true,
}

var movie_2 = {
    movie_name:"Two Countries",
    show_booking:1250,
    first_show:true,
}

var m2 = movie.booking_pay.bind(movie_2)
m2()