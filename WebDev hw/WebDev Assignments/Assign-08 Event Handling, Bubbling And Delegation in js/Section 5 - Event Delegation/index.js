// ques12
// const lang = document.querySelector("#buttons");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// const para3 = document.createElement("p");
// para1.textContent = "HTML button clicked!";
// para2.textContent = "CSS button clicked!";
// para3.textContent = "JavaScript button clicked!";
// lang.addEventListener("click", (e) => {
//     if (e.target.textContent === "HTML") {
//         document.body.append(para1);
//     } else if (e.target.textContent === "CSS") {
//         document.body.append(para2);
//     } else if (e.target.textContent === "JavaScript") {
//         document.body.append(para3);
//     }
// })



// ques13
const lang = document.querySelector("#skills");
const para = document.createElement("p");
lang.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.textContent === "HTML") {
        para.textContent = "You clicked: HTML";
        document.body.append(para);
    } else if (e.target.textContent === "CSS") {
        para.textContent = "You clicked: CSS";
        document.body.append(para);
    } else if (e.target.textContent === "JavaScript") {
        para.textContent = "You clicked: JavaScript";
        document.body.append(para);
    }
})