let sub1 = 78;
let sub2 = 89;
let sub3 = 83;

let totalMarks = sub1 + sub2 + sub3;
let avgMarks = totalMarks / 3;
let percentage = (totalMarks / 300) * 100;

console.log("Total Marks :", totalMarks);
console.log("Average Marks :", avgMarks.toFixed(2));
console.log("Percentage :", percentage.toFixed(2) + "%");