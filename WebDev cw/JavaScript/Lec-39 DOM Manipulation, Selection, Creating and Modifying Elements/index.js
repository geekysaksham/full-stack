// let h1 = document.getElementById("h1");

// let h1 = document.querySelector("h1");
// let h1 = document.querySelector(".h1");
// let h1 = document.querySelector("#h1");

// let h1 = document.querySelectorAll("#h1");
// console.log(h1);

// let p = document.querySelector("p");
// p.textContent = "Hello Baccho Kese Ho!";
// p.innerHTML = "<h1>Hello Bhaiyoooo</h1>"  //very very risky
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);

// let button = document.querySelector("#btn");
// button.setAttribute("disabled", "true");
// button.textContent = "Remove"

// p.setAttribute("style", "background-color: red; font-size: 50px");

// let res = p.getAttribute("style");
// console.log(res);

// p.removeAttribute("style");

// p.classList.add("random");
// p.classList.remove("random");
// p.classList.toggle("random");
// console.log(p.classList.contains("random")); //true

// p.style.backgroundColor = "green";

// p.dataset.helloDosto = "Hii";
// console.log(p.dataset.helloDosto);



let body = document.querySelector("body");

// let div = document.createElement("div");
// let div2 = document.createElement("div");
// div.textContent = "Hello";
// div2.textContent = "Hii";

// body.appendChild(div);
// body.append(div);

// body.appendChild(div);
// body.appendChild(div2);

// body.append(div, div2); //insert last in body
// body.prepend(div, div2); //insert start in body


let products = [
    {
        name: "Iphone 20",
        price: 123423
    },
    {
        name: "Samsung 15",
        price: 45321
    },
    {
        name: "MI 23",
        price: 76543
    },
    {
        name: "Lava 12",
        price: 12342
    },
    {
        name: "Poco 10",
        price: 98765
    },
]


let productList = document.querySelector("#product-list");

products.forEach((products) => {
    const card = document.createElement("p");
    card.textContent = `${products.name} - ${products.price}`;
    productList.append(card);
})

let h2 = document.querySelector("h2");
// body.removeChild(h2) //you have to access parent

// h2.remove(); // directly on the element you want to remove

// let clone = productList.cloneNode(true);
// body.append(clone);

const items = productList.children;
// productList.insertBefore(h2, items[2]) //for precise positioning

items[2].before(h2);
// items[2].after(h2);