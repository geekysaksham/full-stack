// ques7
// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const para = document.querySelector("#para");
// const h2 = document.querySelector("h2");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(name.value.trim().length === 0) {
//         h2.textContent = "";
//         para.textContent = "Name is required*";
//     }else {
//         para.textContent = "";
//         h2.textContent = "Form Submitted Successfully🎉";
//     }
// })



// ques8
// const form = document.querySelector("#form");
// const email = document.querySelector("#email");
// const para = document.querySelector("#para");
// const h2 = document.querySelector("h2");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(email.value.trim().length === 0) {
//         h2.textContent = "";
//         para.textContent = "Email is required*";
//     }else {
//         para.textContent = "";
//         h2.textContent = "Form Submitted Successfully🎉";
//     }
// })



//ques9
// const form = document.querySelector("#form");
// const pass = document.querySelector("#pass");
// const para = document.querySelector("#para");
// const h2 = document.querySelector("h2");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(pass.value.trim().length < 6) {
//         h2.textContent = "";
//         para.textContent = "Password must be atleast 6 characters*";
//     }else {
//         para.textContent = "";
//         h2.textContent = "Form Submitted Successfully🎉";
//     }
// })



// ques10
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const h2 = document.querySelector("h2");

function showError(input, errorMessage) {
    input.parentElement.querySelector("p").textContent = errorMessage;
}

function removeError(input) {
    input.parentElement.querySelector("p").textContent = "";
}

function checkValidName(input) {
    if (input.value.trim().length === 0) {
        h2.textContent = "";
        showError(input, "Name is required*");
        return false;
    }

    removeError(input);
    return true;
}



function checkValidEmail(input) {
    if (input.value.trim().length === 0) {
        h2.textContent = "";
        showError(input, "Email is required*");
        return false;
    }

    removeError(input);
    return true;
}

function checkValidPass(input) {
    if (input.value.trim().length === 0) {
        h2.textContent = "";
        showError(input, "Password is required*");
        return false;
    }

    removeError(input);
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValidName = checkValidName(name);
    const isValidEmail = checkValidEmail(email);
    const isValidPass = checkValidPass(pass);

    if (isValidName && isValidEmail && isValidPass) {
        h2.textContent = "Form Submitted Successfully🎉";
        console.log("Valid Form");
    } else {
        console.log("Invalid Form");
    }
})