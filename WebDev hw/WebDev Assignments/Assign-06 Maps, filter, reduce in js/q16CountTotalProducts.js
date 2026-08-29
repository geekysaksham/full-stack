const productsNames = ["Laptop", "Mouse", "Keyboard"];
const totalProducts = productsNames.reduce(total => total + 1, 0)
console.log(totalProducts);