const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const bio = document.querySelector("#bio");
const charCount = document.querySelector("#char-count");
const checkbox = document.querySelector("#checkbox");
const country = document.querySelector("#country");
const passHint = document.querySelector("#pass-hint");
const tac = document.querySelector("#tac")

const LIMIT = 150;
charCount.textContent = `${LIMIT} characters remaining`;

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = "";   
}

function validUsername(name) {
    //check 1
    if (name.value.trim().length === 0) {
        showError(name, "Enter your name*");
        return false;
    }
    //check 2
    if (name.value.trim().length < 3) {
        showError(name, "Name must be atleast 3 character*");
        document.querySelector("h2").classList.add("hidden");
        return false;
    }

    clearError(name);
    return true;
}

function validPassword(pass) {
    if (pass.value.trim().length === 0) {
        showError(pass, "Enter your password*");
        return false;
    }
    if (pass.value.trim().length < 8) {
        showError(pass, "Password must be atleast 8 character*");
        document.querySelector("h2").classList.add("hidden");
        return false;
    } 

    clearError(pass);
    return true;
}

function validEmail(email) {
    if (email.value.trim().length === 0) {
        showError(email, "Enter your email*");
        return false;
    }

    clearError(email);
    return true;
}

function validBio(bio) {
    if (bio.value.trim().length === 0) {
        showError(bio, "Enter your Bio*");
        return false;
    }
    if (bio.value.trim().length < 10) {
        showError(bio, "bio must be atleast 10 character*");
        document.querySelector("h2").classList.add("hidden");
        return false;
    } 

    clearError(bio);
    return true;
}

function agreedTac(tac) {
    if (tac.checked === false) {
        showError(tac, "Please agree to the terms and conditions*");
        return false;
    }

    clearError(tac);
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isUsernameValid = validUsername(name);
    const isPasswordValid = validPassword(pass);
    const isEmailValid = validEmail(email);
    const isBioValid = validBio(bio);
    const isAgreedTac = agreedTac(tac);
    if(isUsernameValid && isPasswordValid && isEmailValid && isBioValid && isAgreedTac) {
        document.querySelector("h2").classList.remove("hidden");
        console.log("Form is Valid");
    } else {
        console.log("Form is Invalid");
    }

    // console.log({ name: name.value, email: email.value, pass: pass.value });
})

// bio.addEventListener("input", (e) => {
//     let remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })

// name.addEventListener("change", (e) => {
//     console.log(name.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })

// // pass.addEventListener("focus", (e) => {
// //     console.log("Focus");
// // })

// // pass.addEventListener("blur", (e) => {
// //     console.log("Blur");
// // })

// pass.addEventListener("focus", (e) => {
//     passHint.classList.remove("hidden");
// })

// pass.addEventListener("blur", (e) => {
//     passHint.classList.add("hidden");
// })