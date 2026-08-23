let unitsConsumed = 216;
let finalBill = 0;

if (unitsConsumed < 0) {
    console.log("Invalid Units");
} else if (unitsConsumed <= 100) {
    finalBill += unitsConsumed * 5;
} else if (unitsConsumed <= 200) {
    finalBill += 100 * 5 + (unitsConsumed - 100) *   7;
} else {
    finalBill += 100 * 5 + 100 * 7 + (unitsConsumed - 200) * 10;
}

if (unitsConsumed >= 0) console.log(`Final Bill = ${finalBill}`);