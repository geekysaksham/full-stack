// const obj = {
//     name: "Saksham",
//     id: 5015602725,
//     course: "Btech",
//     branch: "CSE",
//     subject: ["Oops", "CM", "DM", "DLCD", "DS"],
//     hosteller: false
// };
// console.log(typeof obj);
// console.log(obj);

// console.log(obj.subject);
// console.log(obj["subject"]);

//Array of Objects

// const student = [
//     {
//     name: "Saksham",
//     id: 5015602725,
//     course: "Btech",
//     branch: "CSE",
//     subject: ["Oops", "CM", "DM", "DLCD", "DS"],
//     hosteller: false
//     },

//     {
//     name: "Rakesh",
//     id: 2315602725,
//     course: "Btech",
//     branch: "CSE",
//     subject: ["Oops", "CM", "DM", "DLCD", "DS"],
//     hosteller: true
//     }
// ]

// console.log(student[1]);

//for in loop

// const obj = {
//     name: "Saksham",
//     id: 5015602725,
//     course: "Btech",
//     branch: "CSE",
//     subject: ["Oops", "CM", "DM", "DLCD", "DS"],
//     hosteller: false
// };

// for (let value in obj) {
//     console.log(obj[value]);
// }

// for (let value of Object.keys(obj)) {
//     console.log(value);
// }

let arr1 = [45, 64, 3, 34, 5, 3];
let arr2 = [24, 23566, 2];

//spread operator
// let newArr = [...arr1 , ...arr2];
// console.log(newArr);


//rest
const obj = {
    nameOfUser: "Saksham",
    id: 5015602725,
    course: "Btech",
    branch: "CSE",
    subject: ["Oops", "CM", "DM", "DLCD", "DS"],
    hosteller: false
};

const {nameOfUser, id, ...laadle} = obj;

console.log(laadle);
console.log(id);