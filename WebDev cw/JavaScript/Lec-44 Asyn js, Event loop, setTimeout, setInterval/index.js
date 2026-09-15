// console.log("Task 1");
// console.log("Task 2");

// for(let i = 0; i < 1000000000; i++) {

// }

// let startTime = Date.now();
// while(Date.now - startTime < 10000){

// }

// console.log("Task 3");

// console.log(globalThis);


// console.log("Task 1");


// setTimeout(function cb() {
//     console.log("Task 2");
//     let startTime = Date.now();
//     while(Date.now - startTime < 10000){
//     }
// }, 0)
// console.log("Task 3");

// setTimeout(() => {
//     console.log("Hii");
// }, 3000);


// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2");
// }, 4000);

// setTimeout(() => {
//     console.log("Task 5");
// }, 1000);

// setTimeout(() => {
//     console.log("Task 4");
// }, 2000);

// console.log("Task 3");

// setInterval(() => {
//     console.log("Hii");
// },1000)

// let count = 1;
// let id = setInterval(function (){
//     count++;
//     if(count > 5) {
//         clearInterval(id);
//     }
//     console.log("Hii");
// }, 0);


//Deesco Deewane
const body = document.querySelector("body");

// const arr = ["red", "green", "yellow", "blue", "cyan", "grey", "orange", "pink"];

function randomColor() {
    const randNum = Math.floor(Math.random() * (256 - 0) + 0);
    return randNum;
}

// console.log(randomColor());

setInterval(() => {
    // body.style.backgroundColor = arr[randomColor()];
    body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}, 1000);

