const ticTacBox = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const h1 = document.querySelector("h1");
const restartBtn = document.querySelector("#restart-btn");
let count = 0;

let currentPlayer = "X";

let winningCondition = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function startGame(e) {
    if(e.target.classList.contains("box") && e.target.textContent === ''){
        e.target.textContent = currentPlayer;
        count++;
        if(count === 9){
            h1.textContent = "Match Draw";
        }
        winner(e);
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
}

ticTacBox.addEventListener("click", startGame);

function winner(e) {
   winningCondition.forEach((item) => {

    let val0 = boxes[item[0]].textContent;
    let val1 = boxes[item[1]].textContent;
    let val2 = boxes[item[2]].textContent;
    
    if(val0 !== "" && val1 !=="" && val2 !==""){
        if(val0 === val1 && val0 === val2){
            h1.textContent = `Winner is ${val0}`;
            boxes[item[0]].style.backgroundColor = "cyan";
            boxes[item[1]].style.backgroundColor = "cyan";
            boxes[item[2]].style.backgroundColor = "cyan";
            count = 0;
            ticTacBox.removeEventListener("click", startGame);
        }
    }
   })
}

restartBtn.addEventListener("click", (e) => {
    boxes.forEach((item) => {
        item.textContent = "";
        item.style.backgroundColor = "white";
    })
    count = 0;
    h1.textContent = "Tic Tac Toe";
    currentPlayer = "X";
    ticTacBox.addEventListener("click", startGame);
})