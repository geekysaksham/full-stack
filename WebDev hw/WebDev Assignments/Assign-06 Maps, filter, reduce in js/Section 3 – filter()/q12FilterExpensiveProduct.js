const productsObj = [
    {name: "Mouse", price: 500}, 
    {name: "Keyboard", price: 1500}
];
const newProductsObj = productsObj.filter(product => product.price > 1000);
console.log(newProductsObj);