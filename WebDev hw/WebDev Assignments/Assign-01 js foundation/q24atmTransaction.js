let balance = 10000;
let withdrawAmount = 3000;

if (withdrawAmount > 0){
    if (withdrawAmount <= balance){
        let remainBalance = balance - withdrawAmount;
        console.log(`Balance: ${balance}`);
        console.log(`Withdraw: ${withdrawAmount}`);
        console.log("");
        console.log("Withdrawal successful");
        console.log(`Remaining balance: ₹${remainBalance}`);
    } else {
        console.log("Insufficient balance");
    }
} else {
    console.log("Invalid Withdraw Amount!");
}