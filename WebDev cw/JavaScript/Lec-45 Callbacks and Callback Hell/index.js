// function fun1(callback) {
//     console.log("Hii");
//     callback();
// }

// function cb() {
//     console.log("This is Callback function");
// }

// fun1(cb);

//High Order Function
// function a() {
//     function b() {

//     }
//     return b;
// }

// function searchPizza(cb1){
//     console.log("Pizza searching...");
//     setTimeout(() => {
//         console.log("Here is the Pizza's Menu");
//         cb1();
//     }, 2000)
// }

// function addToCart(){
//     console.log("Pizza Added to cart");
// }

// searchPizza(addToCart);

// function searchPizza(){
//     console.log("Pizza searching...");
//     setTimeout(() => {
//         console.log("Here is the Pizza's Menu");
//         return 500;
//     }, 2000)
// }

// let output = searchPizza();
// console.log(output);


function searchPizza(cb1){
    console.log("Pizza searching...");
    setTimeout(() => {
        console.log("Here is the Pizza's Menu");
        let price = 500;
        cb1(price);
    }, 2000)
}

function addToCart(cb2){
    console.log("Pizza adding to cart...");
    setTimeout(() => {
        console.log("Pizza added to cart");
        cb2();
    }, 3000)
}

function payment(price, cb3) {
    console.log(`Payment Initiated, Amount : ${price}`);
    setTimeout(() => {
        console.log(`Payment Completed, Amount : ${price}`);
        cb3();
    },5000)
}

searchPizza(function (price) {
    addToCart(function (){
        payment(price, function(){
            console.log("Bass Aa hi gya Pizza");
        })
    })
})