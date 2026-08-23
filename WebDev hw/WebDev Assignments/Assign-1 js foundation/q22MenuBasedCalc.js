let num1 = 13;
let num2 = 54;
let operatorNum = 3;

// 1. Addition 
// 2. Subtraction 
// 3. Multiplication 
// 4. Division 
// 5. Modulus 

switch (operatorNum) {
    case 1 :
        console.log(`1. Addition -> ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2 :
        console.log(`2. Subtraction -> ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3 :
        console.log(`3. Multiplication -> ${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 4 :
        if (num2 !== 0) {
            console.log(`4. Division -> ${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Can't Divide by Zero");
        }
        break;
    case 5 :
        if (num2 !== 0) {
            console.log(`5. Modulus -> ${num1} % ${num2} = ${num1 % num2}`);
        } else {
            console.log("Can't Perform Modulus by Zero");
        }
        break;
    default :
        console.log("Invalid Operator Number!");
}