const productPrices = [100, 250, 500];
const withRupeePrices = productPrices.map(price => "₹" + price);
console.log(withRupeePrices);
