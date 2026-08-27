let number1 = 32;
let number2 = 68;

function largestOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
if (number1 !== number2) {
    let greatestNumber = largestOfTwo(number1, number2);
    console.log(`Greatest Number Between ${number1} and ${number2} = ${greatestNumber}`);
} else {
    console.log(`Both Numbers(${number1}) are Equal`);
}