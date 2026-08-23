
// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 

let availBalance = 45000;
let depositMoney = 3000;
let withdrawMoney = 50000;

let chooseOption = 3;

switch (chooseOption) {
    case 1 :
        console.log(`Available Balance : ${availBalance}`);
        break;
    case 2 :
        if (depositMoney > 0) {
            availBalance += depositMoney;
            console.log(`Updated Balance : ${availBalance}`);
        } else {
            console.log("Invalid Deposit Money!");
        }
        break;
    case 3 :
        if (withdrawMoney > availBalance) {
            console.log("Insufficient Available Balance!");
        } else if (withdrawMoney <= 0) {
            console.log("Invalid Withdraw Amount");
        } else {
            availBalance -= withdrawMoney;
            console.log(`Updated Balance : ${availBalance}`);
        }
        break;
    case 4 :
        console.log("Thanks For Visiting!");
        break;
    default :
        console.log("Invalid Choice!");
}