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

    if (firstName.ariaValueMax.length == 0) {
        errFName.innerText = 'First name is required.';
        firstName.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!firstName.ariaValueMax.match(/^[A-Za-z]*$/)) {
        errFName.innerText = 'Alpha letters only';
        firstName.style.border = '2px solid #B91C1C';
        return false;
    }

    errFName.innerText = '';
    firstName.style.border = '2px solid #E5E7EB';
    return true;

});