// find all the input forms
const usernameInput = document.querySelector('#username');
const countryInput = document.querySelector('#country');
const emailInput = document.querySelector('#email');
const zipCodeInput = document.querySelector('#zip_code');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');

// find all the span fields
const usernameSpan = document.querySelector('#username_error');
const countrySpan = document.querySelector('#country_error');
const emailSpan = document.querySelector('#email_error');
const zipCodeSpan = document.querySelector('#zip_code_error');
const passwordSpan = document.querySelector('#password_error');
const confirmPasswordSpan = document.querySelector('#confirm_password_error');

// find the form
const form = document.querySelector('.forms');

// find the submit button
const submitButton = document.querySelector('#submit');

// update validity class
function MakeValid(InputNode) {
    InputNode.classList.remove('invalid');
    InputNode.classList.add('valid');
}

function MakeInvalid(InputNode) {
    InputNode.classList.add('invalid');
    InputNode.classList.remove('valid');
}

// username
document.addEventListener("DOMContentLoaded", () => {
    let specialCharacterConstraint = new RegExp('[^a-zA-Z0-9]');
    if (specialCharacterConstraint.test(usernameInput.value)) {
        usernameInput.setCustomValidity("A username may only contain letters and numbers.");
    } else if (usernameInput.value == "") {
        usernameInput.setCustomValidity("Please enter a username.");
    } else if (usernameInput.value.length < 3 || usernameInput.value.length > 15 ) {
        usernameInput.setCustomValidity("Username must be between 3 and 15 characters long.");
    } else {
        usernameInput.setCustomValidity("");
    }
});

usernameInput.addEventListener("input", () => {
    let specialCharacterConstraint = new RegExp('[^a-zA-Z0-9]');
    if (usernameInput.checkValidity()) {
        MakeValid(usernameInput);
        usernameSpan.textContent = "Username is valid!";
        usernameSpan.style.color = 'green';
        usernameInput.setCustomValidity("");
    }
    if (specialCharacterConstraint.test(usernameInput.value)) {
        MakeInvalid(usernameInput);
        usernameInput.setCustomValidity("A username may only contain letters and numbers.");
        usernameSpan.textContent = "A username may only contain letters and numbers.";
        usernameSpan.style.color = 'red';
    } else if (usernameInput.value == "") {
        MakeInvalid(usernameInput);
        usernameInput.setCustomValidity("Please enter a username.");
        usernameSpan.textContent = "Please enter a username";
        usernameSpan.style.color = 'red';
    } else if (usernameInput.value.length < 3 || usernameInput.value.length > 15 ) {
        MakeInvalid(usernameInput);
        usernameInput.setCustomValidity("Username must be between 3 and 15 characters long.");
        usernameSpan.textContent = `Username must be between 3 and 15 characters long.`;
        usernameSpan.style.color = 'red';
    } else {
        usernameInput.setCustomValidity("");
    }
});

// country
document.addEventListener("DOMContentLoaded", () => {
    let specialCharacterConstraint = new RegExp('^[a-zA-Z]+(?:\\s[a-zA-Z]+)*$');
    if (countryInput.value == "") {
        countryInput.setCustomValidity("Please enter a country.");
    } else if (!specialCharacterConstraint.test(countryInput.value)) {
        countryInput.setCustomValidity("A country name may only contain letters and spaces.");
    } else if (countryInput.value.length < 3 || countryInput.value.length > 15 ) {
        countryInput.setCustomValidity("Country name must be between 3 and 15 characters long.");
    } else {
        countryInput.setCustomValidity("");
    }
});

countryInput.addEventListener("input", () => {
    let specialCharacterConstraint = new RegExp('^[a-zA-Z]+(?:\\s[a-zA-Z]+)*$');
    if (countryInput.checkValidity()) {
        MakeValid(countryInput);
        countrySpan.textContent = "Username is valid!";
        countrySpan.style.color = 'green';
        countryInput.setCustomValidity("");
    }
    if (countryInput.value == "") {
        MakeInvalid(countryInput);
        countryInput.setCustomValidity("Please enter a country.");
        countrySpan.textContent = "Please enter a country";
        countrySpan.style.color = 'red';
    } else if (!specialCharacterConstraint.test(countryInput.value)) {
        MakeInvalid(countryInput);
        countryInput.setCustomValidity("A country name may only contain letters and spaces.");
        countrySpan.textContent = "A country name may only contain letters and spaces.";
        countrySpan.style.color = 'red';
    } else if (countryInput.value.length < 3 || countryInput.value.length > 15 ) {
        MakeInvalid(countryInput);
        countryInput.setCustomValidity("Country name must be between 3 and 15 characters long.");
        countrySpan.textContent = `Country name must be between 3 and 15 characters long.`;
        countrySpan.style.color = 'red';
    } else {
        countryInput.setCustomValidity("");
    }
});

// email
document.addEventListener("DOMContentLoaded", () => {
    let specialCharacterConstraint = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if (!specialCharacterConstraint.test(emailInput.value)) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    } else if (emailInput.value == "") {
        emailInput.setCustomValidity("Please enter an email address.");
    } else if (emailInput.value.length < 3 || emailInput.value.length > 30 ) {
        emailInput.setCustomValidity("Email must be between at least 3 characters long.");
    } else {
        emailInput.setCustomValidity("");
    }
});
    
emailInput.addEventListener("input", () => {
    let specialCharacterConstraint = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if (emailInput.checkValidity()) {
        MakeValid(emailInput);
        emailSpan.textContent = "Email is valid!";
        emailSpan.style.color = 'green';
        emailInput.setCustomValidity("");
    }
    if (!specialCharacterConstraint.test(emailInput.value)) {
        MakeInvalid(emailInput);
        emailInput.setCustomValidity("Please enter a valid email address.");
        emailSpan.textContent = "Please enter a valid email address.";
        emailSpan.style.color = 'red';
    } else if (emailInput.value == "") {
        MakeInvalid(emailInput);
        emailInput.setCustomValidity("Please enter an email address.");
        emailSpan.textContent = "Please enter a email address";
        emailSpan.style.color = 'red';
    } else if (emailInput.value.length < 3 || emailInput.value.length > 30 ) {
        MakeInvalid(emailInput);
        emailInput.setCustomValidity("Email must be between at least 3 characters long.");
        emailSpan.textContent = `Email must be between at least 3 characters long.`;
        emailSpan.style.color = 'red';
    } else {
        emailInput.setCustomValidity("");
    }
});

// zip-code
document.addEventListener("DOMContentLoaded", () => {
    let specialCharacterConstraint = new RegExp('^[0-9a-zA-Z\-]+$');
    if (!specialCharacterConstraint.test(zipCodeInput.value)) {
        zipCodeInput.setCustomValidity("A Zip-code may only contain letters and numbers.");
    } else if (zipCodeInput.value == "") {
        zipCodeInput.setCustomValidity("Please enter a zipCode.");
    } else if (zipCodeInput.value.length < 3 || zipCodeInput.value.length > 15 ) {
        zipCodeInput.setCustomValidity("Zip-code must be between 3 and 15 characters long.");
    } else {
        zipCodeInput.setCustomValidity("");
    }
});
    
zipCodeInput.addEventListener("input", () => {
    let specialCharacterConstraint = new RegExp('^[0-9a-zA-Z\-]+$');
    if (zipCodeInput.checkValidity()) {
        MakeValid(zipCodeInput);
        zipCodeSpan.textContent = "Zip-code is valid!";
        zipCodeSpan.style.color = 'green';
        zipCodeInput.setCustomValidity("");
    }
    if (!specialCharacterConstraint.test(zipCodeInput.value)) {
        MakeInvalid(zipCodeInput);
        zipCodeInput.setCustomValidity("A Zip-code may only contain letters and numbers.");
        zipCodeSpan.textContent = "A Zip-code may only contain letters and numbers.";
        zipCodeSpan.style.color = 'red';
    } else if (zipCodeInput.value == "") {
        MakeInvalid(zipCodeInput);
        zipCodeInput.setCustomValidity("Please enter a zipCode.");
        zipCodeSpan.textContent = "Please enter a zipCode";
        zipCodeSpan.style.color = 'red';
    } else if (zipCodeInput.value.length < 3 || zipCodeInput.value.length > 15 ) {
        MakeInvalid(zipCodeInput);
        zipCodeInput.setCustomValidity("Zip-code must be between 3 and 15 characters long.");
        zipCodeSpan.textContent = `Zip-code must be between 3 and 15 characters long.`;
        zipCodeSpan.style.color = 'red';
    } else {
        zipCodeInput.setCustomValidity("");
    }
});

// password
document.addEventListener("DOMContentLoaded", () => {
    let specialCharacterConstraint = new RegExp('^[^\\s]+$');
    if (!specialCharacterConstraint.test(passwordInput.value)) {
        passwordInput.setCustomValidity("A password may not contain spaces.");
    } else if (passwordInput.value == "") {
        passwordInput.setCustomValidity("Please enter a password.");
    } else if (passwordInput.value.length < 8 || passwordInput.value.length > 15 ) {
        passwordInput.setCustomValidity("password must be between 8 and 15 characters long.");
    } else {
        passwordInput.setCustomValidity("");
    }
});
    
passwordInput.addEventListener("input", () => {
    let specialCharacterConstraint = new RegExp('^[^\\s]+$');
    if (passwordInput.checkValidity()) {
        MakeValid(passwordInput);
        passwordSpan.textContent = "Password is valid!";
        passwordSpan.style.color = 'green';
        passwordInput.setCustomValidity("");
    }
    if (!specialCharacterConstraint.test(passwordInput.value)) {
        MakeInvalid(passwordInput);
        passwordInput.setCustomValidity("A password may not contain spaces.");
        passwordSpan.textContent = "A password may not contain spaces.";
        passwordSpan.style.color = 'red';
    } else if (passwordInput.value == "") {
        MakeInvalid(passwordInput);
        passwordInput.setCustomValidity("Please enter a password.");
        passwordSpan.textContent = "Please enter a password";
        passwordSpan.style.color = 'red';
    } else if (passwordInput.value.length < 8 || passwordInput.value.length > 15 ) {
        MakeInvalid(passwordInput);
        passwordInput.setCustomValidity("password must be between 8 and 15 characters long.");
        passwordSpan.textContent = `password must be between 8 and 15 characters long.`;
        passwordSpan.style.color = 'red';
    } else {
        passwordInput.setCustomValidity("");
    }
});

// confirm password
document.addEventListener("DOMContentLoaded", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
});
    
confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        MakeInvalid(confirmPasswordInput);
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
        confirmPasswordSpan.textContent = "Passwords do not match.";
        confirmPasswordSpan.style.color = 'red';
    } else {
        MakeValid(confirmPasswordInput);
        confirmPasswordSpan.textContent = "Passwords match!";
        confirmPasswordSpan.style.color = 'green';
        confirmPasswordInput.setCustomValidity("");
    }
});

passwordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        MakeInvalid(confirmPasswordInput);
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
        confirmPasswordSpan.textContent = "Passwords do not match.";
        confirmPasswordSpan.style.color = 'red';
    } else {
        MakeValid(confirmPasswordInput);
        confirmPasswordSpan.textContent = "Passwords match!";
        confirmPasswordSpan.style.color = 'green';
        confirmPasswordInput.setCustomValidity("");
    }
});

// submitting
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!usernameInput.checkValidity()) {
        alert('Username is invalid!');
        return;
    }
    if (!countryInput.checkValidity()) {
        alert('Country is invalid!');
        return;
    }
    if (!zipCodeInput.checkValidity()) {
        alert('Zip-code is invalid!');
        return;
    }
    if (!emailInput.checkValidity()) {
        alert('Email is invalid!');
        return;
    }
    if (!passwordInput.checkValidity()) {
        alert('Password is invalid!');
        return;
    }
    if (!confirmPasswordInput.checkValidity()) {
        alert('Passwords do not match!');
        return;
    }

    alert('High five!');
})