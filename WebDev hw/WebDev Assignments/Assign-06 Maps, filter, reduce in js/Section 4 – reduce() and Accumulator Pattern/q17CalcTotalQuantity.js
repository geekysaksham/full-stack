const cartItems = [
    {name: "Laptop", quantity: 1}, 
    {name: "Mouse", quantity: 2}
]
const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity, 
    0
);
console.log(totalQuantity);