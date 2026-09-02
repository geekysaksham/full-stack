// function outter() {
//     const a = 5;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// const response = outter();
// console.log(outter);
// console.log(response);
// console.log(response());
// response();

// function outter() {
//     const a = 5;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// const response = outter();
// response();

function outter() {
    let count = 0;
    function counter() {
        count += 1;
        console.log(count);
    }
    return counter;
}

const counter1 = outter();
const counter2 = outter();
counter1();
counter1();
counter2();
