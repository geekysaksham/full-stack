// let originalPrices = [463, 654, 2346];
// let discountedPrices = [];
// for (value of originalPrices) {
//     discountedPrices.push((value * 90) / 100); // 10% discount
// }
// console.log(originalPrices);
// console.log(discountedPrices);

//doesn't return anything
// originalPrices.forEach((value) => {
//     discountedPrices.push((value * 90) / 100); // 10% discount
// })

//Map
// const discountedPrice2 = originalPrices.map((value) => {
//     return value * 0.9;
// })

// const discountedPrice2 = originalPrices.map((value) => value * 0.9);
// console.log(discountedPrices);
// console.log(discountedPrice2);

let students = [
    {
        name: "Ayaan",
        marks: 56
    },
    {
        name: "Mansi",
        marks: 46
    },
    {
        name: "Debadrita",
        marks: 33
    },
    {
        name: "Shivansh",
        marks: 30
    },
    {
        name: "Alauddin",
        marks: 23
    }
];

// let studentNames = [];
// students.forEach((value) => {
//     studentNames.push(value.name);
// })

// console.log(studentNames);

// const studentNames = students.map((student) => {
//     return student.name;
// })

// const studentMarks = students.map((student) => {
//     return student.marks;
// })

// const boostedMarks = students.map((student) => {
//     return {...student, marks: student.marks + 10};
// });

// const boostedMarks = students.map((student) => ({...student, marks: student.marks + 10}));

// console.log(studentNames);
// console.log(studentMarks);
// console.log(boostedMarks);

// let failedStudents = [];
// students.forEach((student) => {
//     if (student.marks <= 33) failedStudents.push(student);
// })

// console.log(failedStudents);

// const failedStudents = students.filter((student) => {
//     return student.marks <= 33;
// })

// const failedStudents = students.filter((student) => student.marks <= 33);
// const failedStudentsName = failedStudents.map((student) => student.name);

// const failedStudents = students.filter((student) => student.marks <= 33).map((student) => student.name);
// console.log(failedStudents);
// console.log(failedStudentsName);

const marks = [56, 24, 62, 73, 78];
// let totalMarks = 0;
// marks.forEach(mark => {
//     totalMarks += mark;
// });

// const totalMarks = marks.reduce((accumulator, currentValue) => {
//     accumulator += currentValue;
//     return accumulator;
// }, 0)

// const totalMarks = marks.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0)

const totalMarks = students.reduce((totalMark, student) => totalMark + student.marks, 0);
// console.log(totalMarks);

const attendance = ["present", "present", "absent", "present", "absent"];
// let obj = {};
// -> { present : 3, absent : 2 }

// attendance.forEach((value) => {
//     if (obj[value]) {
//         obj[value]++;
//     } else {
//         obj[value] = 1;
//     }
// });

// console.log(obj);

const obj = attendance.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {})

console.log(obj);