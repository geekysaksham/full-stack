// const aman_english = 70;
// const aman_hindi = 50;
// const aman_maths = 80;
// let total = aman_english + aman_hindi + aman_maths;
// console.log(`Total Marks: ${total}`);

// function totalSum(english, hindi, maths, name) {
//     console.log(name, english + hindi + maths);
// }

// totalSum(50, 70, 100, "Aman");
// totalSum(70, 80, 100, "Neha");

// function totalSum(english, hindi, maths) {
//     return english + hindi + maths;
// }

// let totalMarks = totalSum(50, 70, 100);
// console.log(`Aman ${totalMarks}`);


//Built in objects Functions/Methods

// let num = 200;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2));

// let number = new Number(1000);
// console.log(number.toString());
// console.log(number.toPrecision(4));


// let str = new String("Hello");
// console.log(str);

// let str = "Helolo";
// console.log(str.replace("o","ii"));

// let str = "Hello";
// console.log(str.split("l"));

// let str = "Saksham Jain";
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.match("Saksham"));
// console.log(str.charAt(6));
// console.log(str.indexOf("ksham"));


// console.log(Math);
// console.log(Math.PI);
// console.log(Math.floor(3.654));
// console.log(Math.ceil(3.654));
// console.log(Math.max(5,6,34));
// console.log(Math.min(5,6,34));
// console.log(Math.round(4.5));
// console.log(Math.round(4.456));
// console.log(Math.abs(4.67));
// console.log(Math.abs(-4.12));

// console.log(Math.random());
// let min = 1;
// let max = 6;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// let date = Date();
let date = new Date();
// console.log(Math.round(date.getTime()/1000)); //in seconds

console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toLocaleString());
console.log(date.getMonth());