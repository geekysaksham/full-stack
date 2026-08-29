const productPrices = [500, 1200, 300];
const totalProductPrice = productPrices.reduce(
    (total, currentPrice) => total + currentPrice , 
    0
);
console.log(totalProductPrice);