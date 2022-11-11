const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const errFName = document.querySelector('#err-f-name');
const errLName = document.querySelector('#err-l-name');
const errEmail = document.querySelector('#err-email');
const errPNum = document.querySelector('#err-p-num');
const errPw = document.querySelector('#err-pw');
const errConfirmPw =document.querySelector('#err-confirm-pw');

firstName.addEventListener('input', (e) => {

    if (firstName.value.length == 0) {
        errFName.innerText = 'First name is required.';
        firstName.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!firstName.value.match(/^[A-Za-z]*$/)) {
        errFName.innerText = 'Alpha letters only';
        firstName.style.border = '2px solid #B91C1C';
        return false;
    }

    errFName.innerText = '';
    firstName.style.border = '2px solid #E5E7EB';
    return true;

});

lastName.addEventListener('input', (e) => {

    if (lastName.value.length == 0) {
        errLName.innerText = 'Last name is required.';
        lastName.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!lastName.value.match(/^[A-Za-z]*$/)) {
        errLName.innerText = 'Alpha letters only';
        lastName.style.border = '2px solid #B91C1C';
        return false;
    }

    errLName.innerText = '';
    lastName.style.border = '2px solid #E5E7EB';
    return true;

});

email.addEventListener('input', (e) => {

    if (email.value.length == 0) {
        errEmail.innerText = 'Email is required.';
        email.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errEmail.innerText = 'Email invalid.';
        email.style.border = '2px solid #B91C1C';
        return false;
    }

    errEmail.innerText = '';
    email.style.border = '2px solid #E5E7EB';
    return true;

});