// Operators
//Arithmetic Operators

// let num1 = 2;
// let num2 = 4;
// console.log(num1 + num2); //6
// console.log(num1 - num2); //-2
// console.log(num1 * num2); //8
// console.log(num2 / num1); //2
// console.log(num2 % num1); //0
// console.log(num1 ** num2); //16

//js is Case Sensitive
// name != Name != NAME -> All different
// let name = "saif";
// let Name = "juhi";
// let NAME = "karan";

//Increment And Decrement Operator
// let num = 4;
// num++;
// console.log(num++); //5 -> post-increment
// console.log(++num); //7 -> pre-increment
// console.log(num); //7


// let num = 45;
// console.log(--num); //44 -> pre-decrement
// console.log(num--); //44 -> post-decrement
// console.log(num); //43

//Assignment Operator -> '='
//Shortcuts -> +=, -=, *=, /=, %=, **=

// let num = 2;
// num += 5; //Correct Method
// console.log(num); //7
// num =+ 5; -> num = 5 Wrong Method
// num =- 5; -> num = -5 Wrong Method
// console.log(num += 5); //7

// let num = 2;
// num += 5;
// console.log(num); //7
// num -= 5;
// console.log(num); //2
// num *= 5;
// console.log(num); //10
// num /= 5;
// console.log(num); //2
// num %= 5;
// console.log(num); //2
// num **= 5;
// console.log(num); //32

// const num1 = 3;
// const num2 = 6;
// console.log(num1 > num2); //false
// console.log(num1 < num2); //true
// console.log(num1 >= num2); //false
// console.log(num1 <= num2); //true
// console.log(num1 == num2); //false
// console.log(num1 != num2); //true

//Loose Equality
// console.log("5" == 5); //Bina type check kre bhi chl jata hai

//Strict Equality
// console.log("5" === 5); //Humesha type check krta Hai

//Logical Operators ->  &&, ||, !
// console.log(true && true);  //true
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(!false); //true
// console.log(!undefined); //true
// console.log(!56); //false
// console.log(!NaN); //true

// const age = 19;
// const hasId = true;
// const canEnterClub = (age >= 18 && hasId === true);
// console.log(canEnterClub);

// console.log("manish"/60); //NaN -> Not a Number
// console.log(typeof NaN); //number

//Conditionals

// const isLoggedIn = false;
// if (isLoggedIn) {
//     console.log("You can like, comment");
// } else {
//     console.log("Please login first");
// }

// let temp = 40;
// if (temp >= 25) {
//     console.log("AC Chala Do");
// } else {
//     console.log("AC Mat Chalao");
// }

// let day = 3;
// if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thursday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else if (day === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid Week Day!");
// }

//Score to Grade Convert HW Answer
// let score = 85;
// if (score > 90 && score <= 100) {
//     console.log("A Grade");
// } else if (score > 80 && score <= 90) {
//     console.log("B Grade");
// } else if (score > 70 && score <= 80) {
//     console.log("C Grade");
// } else if (score > 60 && score <= 70) {
//     console.log("D Grade");
// } else if (score > 50 && score <= 60) {
//     console.log("E Grade");
// } else if (score >= 0 && score <= 50) {
//     console.log("F Grade");
// } else {
//     console.log("Entered Invalid Score!");
// }

//Nested if-else Jio-Hotstar
// const isLoggedIn = true;
// const isSubscribed = false;
// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("You can access premium content.");
//     } else {
//         console.log("You don't have any existing premium plan.");
//     }
// } else {
//     console.log("Please Login First!");
// }

//Switch-Case
const day = "thu";
switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd day of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;  
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("Invalid Week Day!");
}