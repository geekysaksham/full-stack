const studentName = "Rahul";
const rollNumber = 101;
const mathMarks = 85;
const scienceMarks = 78;
const englishMarks = 92;

const total = mathMarks + scienceMarks + englishMarks;
const percentage = (total / 300) * 100;
let grade = "";
let result = "PASS";

if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) result = "FAIL";

if (percentage < 0 || percentage > 100) {
    console.log("Invalid Percentage");
} else if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else if (percentage >= 40) {
    grade = "E";
} else {
    grade = "F";
}

console.log("-------------------------");
console.log("     STUDENT RESULT      ");
console.log("-------------------------");
console.log("");
console.log(`Name        : ${studentName}`);
console.log(`Roll No     : ${rollNumber}`);
console.log("");
console.log(`Math        : ${mathMarks}`);
console.log(`Science     : ${scienceMarks}`);
console.log(`English     : ${englishMarks}`);
console.log("");
console.log(`Total       : ${total}`);
console.log(`Percentage  : ${percentage}%`);
console.log(`Grade       : ${grade}`);
console.log(`Result      : ${result}`);
console.log("");
console.log("-------------------------");