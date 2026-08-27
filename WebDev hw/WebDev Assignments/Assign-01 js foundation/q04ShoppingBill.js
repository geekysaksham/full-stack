let productPrice = 750;
let quantity = 4;
let totalBill = productPrice * quantity;
const discount = 10;

console.log("Original Bill :", totalBill);

let discountAmount = (totalBill * discount) / 100;
console.log("Discount Amount :", discountAmount);

let finalAmount = totalBill - discountAmount;
console.log("Final Bill :", finalAmount);