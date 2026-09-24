// let storage = localStorage.setItem("num",1);
// console.log(localStorage.getItem("num"));
// console.log(localStorage.key(0));
// localStorage.removeItem("num");

// let storage1 = localStorage.setItem("num1",1);
// let storage2 = localStorage.setItem("num2",1);
// let storage3 = localStorage.setItem("num3",1);

// const btn = document.querySelector("#btn");
// btn.addEventListener("click",() => {
//     localStorage.clear();
// })

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click",() => {
//     sessionStorage.setItem("session","item");
// })

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//        let data = xhttp.responseText;
//        console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/geekysaksham", true);
// xhttp.send();

fetch("https://api.github.com/users/geekysaksham")
.then(data => data.json())
.then(data => console.log(data));