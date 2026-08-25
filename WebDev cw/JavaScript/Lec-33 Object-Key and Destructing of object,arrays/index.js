// Array
// let product1 = ["iphone", 56823, 4.5, 75, 10];
// console.log(product1["3"]); // 75
// console.log(product1["7"]); // undefined
// console.log(typeof product1); // object

// Object
// let product2 =  {
//     productName: "iphone",
//     price: 92873,
//     avgRating: 4.5,
//     totalReviews: 75,
//     discount: 10
// }
// product1[0];
// console.log(product2);

// product2.name
// console.log(product2."first-name"); //error
// console.log(product2."221"); //error
// console.log(product2["discount"]);

// let product2 = {
//     productName: "iphone",
//     discount: 10,
//     printProductName: function() {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }

// product2.printProductName();
// product2.printDiscount();
// product2.printDiscount();

//Math Object
// let Math2 = {
//     abs() {

//     },
//     ceil() {

//     },
//     floor() {

//     }
// }

// Math2.abs();
// Math2.ceil();
// Math2.floor();

// let product1 = ["iphone", 56823, 4.5, 75, 10];

// let product2 = {
//     productName: "iphone",
//     discount: 10,
//     printProductName: function() {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for (let i = 0; i < product1.length; i++) {
//     console.log(product1[i]);
// }

// for (value of product1) {
//     console.log(value);
// }

// product1.forEach(function(value, index) {
//     console.log(value, index);
// })

// function b(num){
//     console.log(num);
//     num();
//     console.log("b");
// }


// function b(fun){
//     console.log("b");
//     fun();
// }

// b(function a(){
//     console.log("a");
// })

// let product1 = ["iphone", 56823, 4.5, 75, 10];

// let product2 = {
//     productName: "iphone",
//     discount: 10,
//     printProductName: function() {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }

// for (value in product1) {
//     console.log(value);
// }

// for (value in product2) {
//     console.log(value);
// }

//Destructuring of object and array

// const [a, b, c, d, e] = product1;
// console.log(a);
// console.log(c);
// console.log(e);

// let {printDiscount, discount, productName} = product2;
// console.log(discount, printDiscount(), productName);

// for ([key, value] of Object.entries(product2)) {
//     console.log(key, value);
// }

//rest and spread operator

let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43];

//Spread
// console.log(arr);
// console.log(...arr);
// console.log(Math.max(...arr));

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];
// console.log(c);

//Rest
// let product1 = ["iphone", 56823, 4.5, 75, 10];
// const [n, p, ...c] = ["iphone", 56823, 4.5, 75, 10];
// console.log(c);

function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value;
    }
    return total;
}
console.log(add(23,46,7,8,32,12));