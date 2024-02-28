// ! 43rd problem
// var cake = {
//     id:1,
//     cakename:"Black forest",
//     cost:520
// }
// var key = "cakename" in cake
// if(key){
//     console.log("it has the key");
// }else{
//     console.log("it doesnt have the key");
// }

// ! 44th problem
// var person = {
//     name:"Anish",
//     age:22,
//     sal:16000
// }
// console.log(person);

// var clone = Object.assign(person)
// console.log(clone);
// clone.name= "John";
// clone.age=44
// clone.sal=55000
// console.log(clone);

// ! 45th problem
var student = {
    name:"Anish",
    age:22,
    country :'India',
    city:'Delhi',
    skills:["java","python","dart","flutter"]
}
for(let i in student){
    let value = student[i];
    console.log(i + " = "+value);
}
