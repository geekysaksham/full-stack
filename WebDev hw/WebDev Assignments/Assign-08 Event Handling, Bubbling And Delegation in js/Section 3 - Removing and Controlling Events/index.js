// ques7
// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");

// const para = document.createElement("p");
// para.textContent = "Button Clicked!";

// function append() {
//     document.body.append(para);
// }
// btn1.addEventListener('click', append);

// btn2.addEventListener("click", () => {
//     btn1.removeEventListener("click", append);
// })



// ques8
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//     const para = document.createElement("p");
//     para.textContent = "Welcome!";
//     document.body.append(para);
// }, {once : true})



// ques9
const parentDiv = document.querySelector("#parentDiv");
const btn = document.querySelector("#btn");

const para1 = document.createElement("p");
const para2 = document.createElement("p");

para1.textContent = "Parent Clicked!";
para2.textContent = "Button Clicked!";

parentDiv.addEventListener("click", (e) => {
    // e.stopPropagation();
    document.body.append(para1);
})

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.append(para2);
})