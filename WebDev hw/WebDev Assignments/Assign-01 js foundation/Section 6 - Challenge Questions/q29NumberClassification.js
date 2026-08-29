let num = 150;

console.log(`Input: ${num}`);
console.log("");

console.log("Output:");
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

if (num > 100) {
    console.log("Greater than 100");
} else if (num < 100) {
    console.log("Less than 100");
} else {
    console.log("Equal to 100");
}