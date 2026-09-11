//ques10
// const para = document.createElement("p");
// para.textContent = "This paragraph was created using JavaScript.";
// document.body.append(para);


// ques11
// const ul = document.querySelector("#skills");
// const li = document.createElement("li");
// li.textContent = "HTML, CSS, JavaScript"
// ul.appendChild(li);


// ques12
// const ul = document.querySelector("ul");
// const li1 = document.createElement("li");
// li1.textContent = "HTML";
// const li2 = document.createElement("li");
// li2.textContent = "React";
// ul.prepend(li1);
// ul.append(li2);


// ques13
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "CSS";
ul.insertBefore(li,ul.children[1]);
