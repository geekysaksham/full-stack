const btn = document.querySelector("#genPass");
const newPass = document.querySelector("#newPass");
const slider = document.querySelector("#range");
const rangeVal = document.querySelector("#rangeVal");
const copyBtn = document.querySelector("#copyBtn");
const copyMess = document.querySelector("#copyMess");

const upperCase = document.querySelector("#capLet");
const lowerCase = document.querySelector("#smallLet");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");

rangeVal.innerText = slider.value;

slider.addEventListener("input", (e) => {
    rangeVal.innerText = e.target.value;
})

btn.addEventListener("click", (e) => {

    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolStr = '!$%@&()?/}{`~*#';

    let finalStr = '';

    if (upperCase.checked) {
        finalStr += capitalLetter;
    }
    if (lowerCase.checked) {
        finalStr += smallLetter;
    }
    if (number.checked) {
        finalStr += numberStr;
    }
    if (symbol.checked) {
        finalStr += symbolStr;
    }
    if (finalStr === ''){
        alert("Please check atleast one field.");
        copyMess.textContent = '';
    }

    let latestPass = '';

    if (finalStr !== '') {
        for (let i = 0; i < slider.value; i++) {
            let randNum = Math.floor(Math.random() * finalStr.length);
            latestPass += finalStr[randNum];
        }
    }

    newPass.innerText = latestPass;
})


copyBtn.addEventListener("click", (e) => {
    if(newPass.innerText === '') alert("Please generate a password first.");
    else{
        copyMess.textContent = "Copied Successfully!";
        window.navigator.clipboard.writeText(newPass.innerText);
    }
})