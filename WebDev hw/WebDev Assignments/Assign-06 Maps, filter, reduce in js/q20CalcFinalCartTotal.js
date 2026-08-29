const cartItems = [ 
    {name: "Mouse", price: 500, quantity: 2},
    {name: "Keyboard", price: 1000, quantity: 1}
];
const finalCartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
);
console.log(finalCartTotal);