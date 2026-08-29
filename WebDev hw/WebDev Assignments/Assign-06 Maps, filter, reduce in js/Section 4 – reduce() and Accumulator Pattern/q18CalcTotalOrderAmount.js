const ordersObj = [ 
    {amount: 500}, 
    {amount: 1000}, 
    {amount: 750} 
];
const totalAmount = ordersObj.reduce(
    (total, order) => total + order.amount, 
    0
);
console.log(totalAmount);