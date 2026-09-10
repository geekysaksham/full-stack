"use strict";

// let name = "Radha";
// console.log(name);

// let student = {
//     name : "Ayyan",
//     printName : function(){
//         console.log("Hii,",this.name);
//     }
// }
// let result = student.printName;
// result();

// student.printName();

// let student = {
//     name : "Ayyan",
//     printName : function(){
//         console.log("Hii,",this.name);
//     }
// }

// let student2 = {
//     name : "Prittam",
//     printName : student.printName
// }

// student2.printName();

// function fun1() {
//     userName = "Faria";
//     function fun2() {
//         console.log(userName);
//     }
//     return fun2;
// }
// let result2 = fun1();
// result2();

// console.log(this);
// console.log(globalThis === global); //true

// let product = {
//     name : "Iphone",
//     printName : function () {
//         const print = () => {
//             console.log(this.name);
//         }
//         print();
//     }
// }
// product.printName();

let name = "something";
let product = {
    name : "Iphone",
    printName : () => {
        console.log(this.name);
    }
}
product.printName();


// function fun1() {
//     console.log(this);
// }
// fun1();

