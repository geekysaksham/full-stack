// ques10
// const parentDiv = document.querySelector("#parent");
// const btn = document.querySelector("#child");

// const para1 = document.createElement("p");
// const para2 = document.createElement("p");

// para1.textContent = "Parent Clicked!";
// para2.textContent = "Button Clicked!";

// parentDiv.addEventListener("click", (e) => {
//     document.body.append(para1);
// })

// btn.addEventListener("click", (e) => {
//     document.body.append(para2);
// })



// ques11
const parentDiv = document.querySelector("#parent");
const btn = document.querySelector("#child");

const para1 = document.createElement("p");
const para2 = document.createElement("p");

para1.textContent = "Parent Clicked!";
para2.textContent = "Button Clicked!";

parentDiv.addEventListener("click", (e) => {
    document.body.append(para1);
}, {capture : true});

btn.addEventListener("click", (e) => {
    document.body.append(para2);
}, {capture : true});