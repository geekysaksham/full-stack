// function add (...num) { //rest operator
//     console.log(num);
//     let sum = 0;
//     num.forEach((value) => {
//         sum += value;
//     })
//     console.log(sum);
// }
// add(4, 5, 6);
// let obj = {
//     title: "Lecture-34",
//     tags: "lec-34, rest, spread",
//     description: "hello dosto"
// }

// let {title, ...left} = obj;

// console.log(left);

// function obj1({title, ...remaining}) {
//     console.log(title);
//     console.log(remaining);
//     // console.log(description);
// }

// function obj1({title, tags, description}) {
//     let tagsArr = tags.split(",");
//     console.log(tagsArr);
// }
// obj1(obj); 

// let obj = {
//     title: "Lecture-34",
//     tags: "lec-34, rest, spread",
//     description: "hello dosto"
// }

// const arr1 = [34,32,57,876,123,67];
// const arr2 = [45,62,98,87,112];

// const combinedArr = [...arr1, ...arr2]; //spread
// console.log(combinedArr);


// const arr = [3, 6, 23, 57, 86];

// arr.forEach(function (val) { // return undefined
//     console.log(val);
// })

// const newArr = arr.map(val => val *= 5);
// console.log(newArr);

// const newArr = arr.filter((val) => {
//     if (val > 30) return val;
// })

// const newArr = arr.filter((val) => val <= 23);

// console.log(newArr);

// const newArr = arr.reduce((accumulator, currentValue) => {
//     accumulator += currentValue;
//     return accumulator;
// }, 0)

// console.log(newArr);

let students = [
    {name: "Rinku", course: "Btech", branch: "cse"},
    {name: "Rohit", course: "Btech", branch: "civil"},
    {name: "Virat", course: "Btech", branch: "cse"},
    {name: "Mukesh", course: "Btech", branch: "mechanical"},
    {name: "Akshar", course: "Btech", branch: "civil"}
];

const newArr = students.filter((value) => value.branch === "civil").map((value) => value.name);

console.log(newArr);