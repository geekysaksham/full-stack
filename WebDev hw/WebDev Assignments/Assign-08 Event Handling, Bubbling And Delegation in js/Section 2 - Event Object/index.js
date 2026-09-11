// ques4
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//     console.log(e.target.tagName);
// })


//ques5
// const box = document.querySelector("#box");
// const p1 = document.createElement("p");
// const p2 = document.createElement("p");
// box.addEventListener("mousemove", (e) => {
//     p1.textContent = `X: ${e.clientX}`;
//     p2.textContent = `Y: ${e.clientY}`;
// })
// document.body.append(p1);
// document.body.append(p2);


//ques6
const lang = document.querySelector("#lang");
const p = document.createElement("p");
lang.addEventListener("input", (e) => {
    p.textContent = `You typed: ${e.target.value}`;
})
document.body.append(p);