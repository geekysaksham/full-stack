const productPrices = [100, 200, 300];
const increasedPrices = productPrices.map(price => (price * 110)/100);
console.log("Original:",productPrices);
console.log("New:",increasedPrices);