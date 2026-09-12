// ques1
// const form = document.querySelector("#form");
// const submit = document.querySelector("#btn");
// const name = document.querySelector("#name");

// const para = document.createElement("p");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     para.textContent = "Form submitted successfully!";
//     document.body.append(para);
// })
// name.addEventListener("change", (e) => {
//     console.log({name:name.value});
// })



// ques2
// const form = document.querySelector("#form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })



// ques3
// const form = document.querySelector("#form");
// const lang = document.querySelector("#lang")
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

// let para = document.createElement("p");
// lang.addEventListener("input", (e) => {
//     para.textContent = `You entered: ${lang.value}`;
//     document.body.append(para);
// })



// ques4
// const lang = document.querySelector("#lang");
// const para = document.createElement("p");
// lang.addEventListener("change", (e) => {
//     para.textContent = `Selected Language: ${e.target.value}`;
//     document.body.append(para);
// })



// ques5
// const input = document.querySelector("#btn");
// input.addEventListener("focus", (e) => {
//     input.style.border = "4px solid red";
//     input.style.backgroundColor = "cyan";
//     input.style.outline = "none";
// })



// ques6
const input = document.querySelector("#btn");
const para = document.querySelector("#para")
input.addEventListener("blur", (e) => {
    para.innerText = "You left the input field.";
})