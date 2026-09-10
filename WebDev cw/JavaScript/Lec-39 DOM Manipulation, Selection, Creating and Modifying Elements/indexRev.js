// const h1 = document.getElementById("heading");
// const h1 = document.querySelector("#heading");
// const h1 = document.getElementsByTagName("h1");


// console.log(h1[0].innerText);
// h1.innerText = "From js file";
// console.log(h1);

// console.log(h1.innerText);

// const h1 = document.getElementsByClassName("helo");
// h1[0].innerHTML = "<b>Chai Pilo</b>"

// console.log(h1[0].textContent);

// const h1 = document.querySelector("h1");
// const btn = document.querySelector("input[type=submit]");

// h1.style.backgroundColor = "violet";
// h1.style.border = "2px solid red";
// h1.style.borderRadius = "40px";

// h1.setAttribute("style", "background-color:green");
// h1.removeAttribute("style");

// console.log(h1);
// console.log(btn);

// const newTag = document.createElement("p");
// newTag.setAttribute("class", "para");
// newTag.innerText = "Hii Guyz How Are You!";

// const body = document.getElementById("body");
// body.prepend(newTag);
// console.log(body);


let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard"];

const ul = document.querySelector("#specs");
data.forEach((Names) => {
    const li = document.createElement("li");
    li.innerText = `${Names}`;
    li.setAttribute("style", "background-color: pink");
    li.style.margin = "5px";
    li.style.padding = "5px";
    li.style.borderRadius = "20px";
    li.style.textAlign = "center";
    ul.append(li);
})