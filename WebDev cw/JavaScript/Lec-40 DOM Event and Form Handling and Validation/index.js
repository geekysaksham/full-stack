// const btn = document.querySelector("#btn");
// const gift = document.getElementById("gift");
// const clickMe = document.querySelector("#button");

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log("Mic Check 123");
//     gift.classList.toggle("hidden")
    // gift.classList.add("reveal");
// }

// btn.addEventListener("click", () => {
//     console.log("Mic Check 123");
// });

// btn.addEventListener("click", revealGift);

// function random(e) {
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// clickMe.addEventListener("click", random, {once : true});

// clickMe.removeEventListener("click", random);

// let outter = document.querySelector("#outter");
// let inner = document.querySelector("#inner");
// let button = document.querySelector("#btn2");

// outter.addEventListener("click", (e) => {
//     console.log("Outter");
// }, {capture: true})

// outter.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Outter");
// })

// inner.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Inner");
// })

// button.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Button");
// })