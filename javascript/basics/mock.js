var arr = [{
        product:"shirt",
        brand:"puma",
        cost:2300
    },
    {
        product:"pant",
        brand:"otto",
        cost:2800
    },
    {
        product:"football",
        brand:"puma",
        cost:3500
    },
]
arr.filter((prod)=>{
    if(prod.brand == "puma"){
        console.log(prod.product);
    }
})


// ! Strings
var name1 = prompt("Enter your name").trim().toLowerCase()
var words = name1.split(" ") 
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
}
document.write(words.join(" "))





// if(arr)
// var id = arr.entries()
// for (let i = 0; i < arr.length; i++) {
//     var pro = (id.next().value)
    
// }
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i].brand == "puma"){
//         console.log(arr[i].product);
//     }
// }
