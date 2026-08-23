let marksOfSub1 = 45;
let marksOfSub2 = 57;
let marksOfSub3 = 98;
let totalMarks = marksOfSub1 + marksOfSub2 + marksOfSub3;
let average = totalMarks / 3;

if (marksOfSub1 >= 40 && marksOfSub2 >= 40 && marksOfSub3 >= 40) {
    if (average >= 75) {
        console.log("Distinction");
    } else if (average >= 60) {
        console.log("First Division");
    } else if (average >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Result: Fail");
}