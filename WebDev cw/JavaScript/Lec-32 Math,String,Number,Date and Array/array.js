//Array

// let productsName = ["t-shirt", "caps", "lower", "shoes"];
// console.log(productsName);
// console.log(productsName[0], productsName[5]);

// console.log(typeof productsName);
// console.log(productsName.length);

// let lastIndex = productsName.length - 1;
// console.log(productsName[lastIndex]);
// console.log(productsName.at(-1));
// console.log(productsName[-1]); //undefined

// for (let i = 0; i < productsName.length; i++) {
//     console.log(productsName[i]);
// }

//Nested Array

// let pro1Name = "t-shirt";
// let pro1Price = 5232;

// let pro2Name = "caps";
// let pro2Price = 123;

// let pro3Name = "lower";
// let pro3Price = 729;

// let pro4Name = "shoes";
// let pro4Price = 1100;

// let productsDetail = [["t-shirt", 5232], ["caps", 123], ["lower", 729], ["shoes", 1100]];

// for (let i = 0; i < productsDetail.length; i++) {
//     console.log(productsDetail[i]);
// }

// for (let i = 0; i < productsDetail.length; i++) {
//     console.log(productsDetail[i][0], productsDetail[i][1]);
// }

// for (let i = 0; i < productsDetail.length; i++) {
//     for (let j = 0; j < productsDetail[0].length; j++) {
//         console.log(productsDetail[i][j]);
//     }
// }

//Array Build-In Objects

let productsName = ["t-shirt", "caps", "lower", "shoes"];

productsName.push("hello"); //Add at last element
console.log(productsName);

productsName.pop();
console.log(productsName); //remove last element

productsName.pop();
console.log(productsName);

productsName.unshift("Hii"); //Add element at start
console.log(productsName);

productsName.shift(); //Delete from start
console.log(productsName);
