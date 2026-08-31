// console.log(a);
// let a = 6;
// const a = 6;
// var a = 76;


// addNum();
// function addNum() {
//     console.log("Hello");
// }

// addTwoNum();
// var addTwoNum = function () {
//     console.log("Function Expression");
// }

// var a = 5;
// function addNum() {
//     let a = 6;
//     console.log(a);
// }

// addNum();

// var x = 6;
// function random() {
//     console.log(x);
//     var x = 3;
// }

// random();

// let city = "Delhi";

// function printCity() {
//    console.log(city);
// }

// function random(fn) {
//     let city = "Varanasi";
//     fn();
// }

// random(printCity);

// function outter() {
//     let username = "Saksham";
//     function inner() {
//         console.log(username);
//     }
//     return inner;
// }

// const inner = outter();
// let username = "Manav";
// inner();

//Lexical Scoping and Lexical environment

function fun1() {
    let username = "Saksham";
    function fun2() {
        function fun3() {
            function fun4() {
                console.log(username);
            }
            fun4();
        }
        fun3();
    }
    fun2();
}

fun1();