let unitsConsumed = 303;
let discount = 0;
let originalBill = 0;
let finalBill = 0;

if (unitsConsumed < 0) {
    console.log("Invalid Units Consumed!");
} else if (unitsConsumed <= 100) {
    originalBill = unitsConsumed * 5;
} else if (unitsConsumed <= 200) {
    originalBill = 100 * 5 + (unitsConsumed - 100) * 7;
} else {
    originalBill = 100 * 5 + 100 * 7 + (unitsConsumed - 200) * 10;
}

if (originalBill >= 2000) {
    discount = 10;
    finalBill = (originalBill * 90) / 100;
} else {
    finalBill = originalBill;
}

console.log("--- Electricity Bill Details ---");
console.log(`Units : ${unitsConsumed}`);
console.log(`Original Bill : ₹${originalBill}`);
console.log(`Discount : ${discount}%`);
console.log(`Final Bill : ₹${finalBill}`);