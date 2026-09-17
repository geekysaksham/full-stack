// function hello(text, para){
//     console.log("Inside hello");
//     para(text);
// }


// hello("Hello", (data) => {
//     console.log("Inside callback", data);
// });

// function fun1(text){
//     function fun2(){
//         console.log(text);
//     }
//     return fun2;
// }
// let res = fun1("from fun 1");
// res();

// const body = document.querySelector("body");

// function randNum(){
//     return Math.floor(Math.random() * 16);
// }

// const str = "0123456789ABCDEF";
// setInterval(() => {
//     let color = "";
//     for(let i = 1; i <= 6; i++) {
//         color += str[randNum()];
//     }
//     body.style.backgroundColor = `#${color}`;
//     console.log(`#${color}`);
// }, 1000)

// setTimeout(() => {
//     console.log("Set Timeout");
// }, 3000)

// console.log("Step 1");
// setTimeout(() => {
//     console.log("Step 2");
// }, 1000)
// console.log("Step 3");

// console.log("Hello 1");
// console.log("Hello 2");
// for(let i=0;i<10000000000;i++){

// }
// console.log("Hello 3");

// console.log("Hello 1");
// console.log("Hello 2");
// setTimeout(() => {
//     for(let i=0;i<10000000000;i++){

//     }
// }, 5000);
// console.log("Hello 3");

// function fun1(text){
//     console.log("starting fun");
//     setTimeout(function hello(){
//         console.log(text);
//     }, 4000)
//     console.log("ending fun");
//     text = "changed";
// } 
// fun1("nice");

// function fun1(text){
//     for(let i = 0; i < 5; i++){
//         setTimeout(function hello(){
//             console.log(text);
//         }, 4000)
//     }
// } 
// fun1();

// function fun1(){
//     for(let i = 0; i < 5; i++){
//         if(i==1){
//             setTimeout(function hello(){
//             console.log(i);
//         }, 5000)
//         }
//         else if(i==4){
//             setTimeout(function hello(){
//             console.log(i);
//         }, 2000)
//         }
//         else if(i==0){
//             setTimeout(function hello(){
//             console.log(i);
//         }, 1000)
//         }
//     }
// } 
// fun1();


// console.log("starting");
// setTimeout(function hello() {
//     console.log("setTimeout 1");
// }, 5000);
// for(let i=0;i<10000000000;i++){

// }
// setTimeout(function hello() {
//     console.log("setTimeout 2");
// }, 4000);
// setTimeout(function hello() {
//     console.log("setTimeout 3");
// }, 2000);
// console.log("Ending");

function hello() {
    console.log("Starting");
    setTimeout(function hello() {
        console.log("setTimeout 1");
    }, 5000); 
    setTimeout(function hello() {
        console.log("setTimeout 2");
    }, 4000);
    console.log("Ending");
}
hello();