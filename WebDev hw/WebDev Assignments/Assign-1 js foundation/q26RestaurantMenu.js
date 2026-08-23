
// 1. Burger  → ₹150 
// 2. Pizza   → ₹250 
// 3. Pasta   → ₹180 
// 4. Sandwich → ₹120 

const customerChoice = 2;
const customerQuantity = 3;
let totalPrice = 0;

if (customerQuantity > 0) {

    console.log(`Choice: ${customerChoice}`);
    console.log(`Quantity: ${customerQuantity}`);

    switch (customerChoice) {
    case 1 :
        totalPrice = 150 * customerQuantity;
        console.log(`Total: ₹${totalPrice}`);
        break;
    case 2 :
        totalPrice = 250 * customerQuantity;
        console.log(`Total: ₹${totalPrice}`);
        break;
    case 3 :
        totalPrice = 180 * customerQuantity;
        console.log(`Total: ₹${totalPrice}`);
        break;
    case 4 :
        totalPrice = 120 * customerQuantity;
        console.log(`Total: ₹${totalPrice}`);
        break;
    default :
        console.log("Invalid Choice");
    }

} else {
    console.log("Invalid Number of Quantity");
}