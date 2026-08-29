let stuPercent = 85;

if (stuPercent > 100 || stuPercent < 0) {
    console.log("Invalid Percentage");
} else if (stuPercent >= 90) {
    console.log("Grade : A");
} else if (stuPercent >= 80) {
    console.log("Grade : B");
} else if (stuPercent >= 70) {
    console.log("Grade : C");
} else if (stuPercent >= 60) {
    console.log("Grade : D");
} else if (stuPercent >= 40) {
    console.log("Grade : E");
} else {
    console.log("Grade : F");
}