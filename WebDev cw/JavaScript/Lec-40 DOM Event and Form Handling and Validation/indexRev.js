// const btn = document.querySelector("#btn");
// const body = document.body;

// btn.onclick = () => {
//     console.log("Hello from js file");
// }

// btn.onclick = () => {
//     console.log("Hello from js file 2");
// }

// btn.addEventListener("click", function () {
//     console.log("Hello From Event Listener");
// })

// btn.addEventListener("click", (e) => {
//     // alert("Error"); //dialogue boxes
//     // confirm("Want to Change color?"); //return true or false
//     const isChange = confirm("Want to Change color?");
//     if(isChange) {
//         const colorName = prompt("which color ?"); //Ask user for input
//         body.style.backgroundColor = colorName;
//     }
//     e.target.innerText = "done";
//     // console.log(e.target.tagName);
//     // console.log(e.type);
//     console.log("Hello From Event Listener");
// })

// const colorName = document.querySelector("#colorName");
// const submit = document.getElementById("submit");

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     // console.log(e);
//     // console.log(colorName.value);
//     // console.log(colorName.checked);
//     document.body.style.backgroundColor = colorName.value;
    
// })

// const mainDiv = document.getElementById("mainDiv");
// const box = document.getElementById("div1");
// box.addEventListener('click', (e) => {
//     console.log("Box1");
// })

// mainDiv.addEventListener('click', (e) => {
//     console.log("Main Div");
// }, true)

// document.body.addEventListener('click', (e) => {
//     console.log("Body");
// })

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const items = document.getElementsByClassName("item");

for(let item of items) {
    item.addEventListener('dragstart', (e) => {
        let data = e.target;
        box2.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        box2.addEventListener('drop',() => {
            box2.append(data);
            data = '';
        })

        box1.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        box1.addEventListener('drop',() => {
            box1.append(data);
            data = '';
        })
    })
    // item.addEventListener('dragenter', () => {
    //     console.log("dragenter");
    // })
    // item.addEventListener('dragover', () => {
    //     console.log("dragover");
    // })
    // item.addEventListener('dragleave', () => {
    //     console.log("dragleave");
    // })
    // item.addEventListener('dragend', () => {
    //     console.log("dragend");
    // })
}