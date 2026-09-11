// ques14
const list = document.querySelector("#list");
list.removeChild(list.children[1]);


// ques15
const btn = document.querySelector("#btn");
const btnClone = btn.cloneNode(true);
document.body.append(btnClone);