// {
//     const name = "Saksham";
//     // console.log(name);
// }

// console.log(name);

// {
//     var name = "Saksham";
//     // console.log(name);
// }

// console.log(name);

//global scope
// let name = "Saksham";

// {
//     console.log(name);
// }

// {
//     console.log(name);
//     let name = "Saksham";
// }

// {
//     console.log(name);
//     var name = "Saksham";
// }

// function hello() {
//     const productName = "IPhone";
// }
// console.log(productName);
// hello();

function hello1() {
    const productName = "IPhone";
    console.log("Inside function");

    function hello2() {
        // "use strict";
        name = "Saksham"; //auto - global
        console.log(productName);
        {
            console.log(name);
        }
    }
    hello2();
}
hello1();