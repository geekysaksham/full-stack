//Custom Implementation
// function abs(num) {
//     if (num >= 0) return num;
//     else return num * -1;
// }

// let absolute = abs(-11);
// console.log(absolute);

//Built-In Objects

// let absolute = Math.abs(-15);
// console.log(absolute);

// console.log(Math.PI);

// console.log(3 ** 2);
// console.log(Math.pow(3,2));

// console.log(Math.sqrt(2));

// console.log(Math.max(3,6,9,3,11)); //Any Number of Arguments

// console.log(Math.round(5.6)); //6
// console.log(Math.round(3.3)); //3
// console.log(Math.round(8.9)); //9
// console.log(Math.round(1.5)); //2
// console.log(Math.round(2.634345)); //3

// console.log(Math.ceil(4.2));
// console.log(Math.floor(7.8));
// console.log(Math.ceil(8.0));
// console.log(Math.floor(8.0));

// console.log(Math.random());

// let result = Math.floor(Math.random() + 1);
// console.log(result);

//Range
// let min = 3;
// let max = 8;
// let result = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(result); // [3 , 8] -> any number

//OTP Generation
// let min = 100000;
// let max = 999999;
// let result = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(result); // [3 , 8] -> any number

//Built-In Object - Numbers

// console.log(Number.isFinite(56));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-3.1345));

// console.log("5");
// console.log(Number.parseInt("Saksham"));
// console.log(Number.parseInt("5"));

// let num1 = "45"; //Backend
// let num2 = "75"; //Backend
// console.log(num1 + num2); //2 strings are added
// console.log(Number.parseInt(num1) + Number.parseInt(num2));
// console.log(parseInt(num1) + parseInt(num2)); //No Number Object can be added.

// let num = 4232.6576;
// console.log(num.toFixed()); // 4232
// console.log(num.toFixed(2)); // 4232.46

// console.log(num.toPrecision(5));
// console.log(num.toPrecision(6)); 

//Built-In Object - Strings

// let str = "Saksham";
// let email = "saksham#gmail.com";
// console.log(str.toUpperCase());
// console.log(str.includes("Sak"));
// console.log(email.includes("@") && email.includes("."));

// console.log(str.length);

// let fileName = "image.pdf";
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg"));

// let greet = "hello Dosto, hello bachho";
// console.log(greet.replace("hello","hii"));
// console.log(greet.replaceAll("hello","hii"));


//Date

// console.log(Date.now()); // to get current unix timestamp

let date = new Date();
console.log(date.getDate()); // 24
console.log(date.getDay()); // 1 -> Monday
console.log(date.getMonth()); // 7
console.log(date.getFullYear()); // 2026
console.log(date.toLocaleDateString()); // 24/8/2026   -> Current Date String
console.log(date.toLocaleTimeString()); // 3:26:26 pm  -> Current Time String
console.log(date.toDateString()); // -> Current Day Date String