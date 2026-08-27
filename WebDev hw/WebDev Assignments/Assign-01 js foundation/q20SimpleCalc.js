let num1 = 20;
let num2 = 5;
let operator = "*";

console.log(`First number: ${num1}`);
console.log(`Second number: ${num2}`);
console.log(`Operator: ${operator}`);
switch (operator) {
    case "+" :
        console.log("Output:", num1 + num2);
        break;
    case "-" :
        console.log("Output:", num1 - num2);
        break;
    case "*" :
        console.log("Output:", num1 * num2);
        break;
    case "/" :
        if (num2 !== 0) console.log("Output:", num1 / num2);
        else console.log("Can't Divide by Zero");
        break;
    case "%" :
        if (num2 !== 0) console.log("Output:", num1 % num2);
        else console.log("Can't Divide by Zero");
        break;
    default :
        console.log("Invalid Operator");
}