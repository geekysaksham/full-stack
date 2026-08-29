const productsObj = [
    {name: "Laptop", inStock: true},
    {name: "Mouse", inStock: false}
];
const filteredProductsObj = productsObj.filter(product => product.inStock);
console.log(filteredProductsObj);