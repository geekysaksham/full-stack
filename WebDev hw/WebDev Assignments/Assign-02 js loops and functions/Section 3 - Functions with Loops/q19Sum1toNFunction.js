let num = 5;
function sumNumbers(n) {
    let sum = 0;
    let i = 1;
    while(i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
let sumTillNumber = sumNumbers(num);
console.log(`Sum From 1 to ${num} = ${sumTillNumber}`);