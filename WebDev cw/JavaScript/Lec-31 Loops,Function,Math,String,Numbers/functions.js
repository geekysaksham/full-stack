// function greet() {
//     console.log("Good Morning");
// }

// for (let i = 1; i <= 5; i++) {
//     greet();
// }


// let alokMarks = 46 + 56 + 23;
// let adiMarks = 24 + 24 + 42;
// let karanMarks = 54 + 23 + 65;
// let anuMarks = 54 + 52 + 23;

// function totalMarks(studentName, phyMarks, chemMarks, mathsMarks) {
//     console.log(`${studentName} Total Marks :`, phyMarks + chemMarks + mathsMarks);
// }

// totalMarks("Alok", 46, 56, 23);
// totalMarks("Adi", 24, 24, 42);
// totalMarks("Karan", 54, 23, 65);
// totalMarks("Anu", 52, 52, 23);

// function greetMsg(userName = "Guest", greet = "Hii") {
//     console.log(`${greet}, ${userName}`);
// }

// greetMsg("Arnav", "Namaste", 456, 876); // Ignored
// greetMsg("Kanav"); // Default: "Hii"
// greetMsg("Ananya", "Hello"); // "real"
// greetMsg(); // "Koi argument nhi diya"


//Calculator
// function calc(num1, oper, num2) {
//     if (oper === '+') console.log(`${num1} ${oper} ${num2} =`,num1 + num2);
//     else if (oper === '-') console.log(`${num1} ${oper} ${num2} =`,num1 - num2);
//     else if (oper === '*') console.log(`${num1} ${oper} ${num2} =`,num1 * num2);
//     else if (oper === '/') console.log(`${num1} ${oper} ${num2} =`,num1 / num2);
//     else console.log("Invalid Operator!");
// }

// calc(2, '+', 3);


//Calculating Percentage
// function totalMarks(phyMarks, chemMarks, mathsMarks) {
//     // return (phyMarks + chemMarks + mathsMarks);

//     let totalMarks = phyMarks + chemMarks + mathsMarks;
//     return totalMarks;
// }

// function calcPercent(stuName, phyMarks, chemMarks, mathsMarks) {
//     let total = totalMarks(phyMarks, chemMarks, mathsMarks);
//     let percent = (total/300) * 100;
//     console.log(`${stuName} Percentage  = `, percent);
// }

// let response = calcPercent("Alok", 46, 56, 23);
// console.log(response); // undefined


//Hoisting
// fun();

// function declaration //Can access before declaration
// function fun() {
//     console.log("Function declaration");
// }

// let result = add(5, 7); //Error

// function expression  //Can't access before declaration
// let add = function (num1, num2) {
//     return num1 + num2;
// }

// let result = add(5, 7);
// console.log(result);

// Arrow Function

// Syntax 1
var add = num1 => num1 + 3;
console.log(add(6));

// Syntax 2
var add = (num1, num2) => num1 + num2;
console.log(add(3, 5));

// Syntax 3
var add = (num1, num2) => {
    //something
    //something
    return num1 + num2;
}
console.log(add(4, 9));