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

const formatName = (value) => {
    const name = value;
    const nameFormat = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return nameFormat;
};

const formatPhoneNum = (value) => {
    const areaCode = value.slice(0,3);
    const prefix = value.slice(3,6);
    const lineNumber = value.slice(6,10);
    const phoneNumberFormat = `(${areaCode}) ${prefix}-${lineNumber}`;
    
    return phoneNumberFormat;
}

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

    firstName.value = formatName(firstName.value)

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

    lastName.value = formatName(lastName.value)

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

phoneNumber.addEventListener('input', (e) => {

    if (phoneNumber.value.length == 0) {
        errPNum.innerText = 'Phone no. is required.';
        phoneNumber.style.border = '2px solid #B91C1C';
        return false;
    }

    if (phoneNumber.value.length < 10) {
        errPNum.innerText = 'Phone no. should be 10 digit.';
        phoneNumber.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!phoneNumber.value.match(/^[\d]{10}$/)) {
        errPNum.innerText = 'Enter digits only.';
        phoneNumber.style.border = '2px solid #B91C1C';
        return false;
    }

    phoneNumber.value = formatPhoneNum(phoneNumber.value);

    errPNum.innerText = '';
    phoneNumber.style.border = '2px solid #E5E7EB';
    return true;

});

password.addEventListener('input', (e) => {

    if (password.value.length == 0) {
        errPw.innerText = '*Password is required.';
        password.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!password.value.match(/^.{8,12}$/)) {
        errPw.innerText = '*Password must be 8-12 characters.';
        password.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)) {
        errPw.innerText = '*Password must have: (A-Z, a-z, 0-9).';
        password.style.border = '2px solid #B91C1C';
        return false;
    }

    errPw.innerText = '';
    password.style.border = '2px solid #E5E7EB';
    return true;

});

confirmPassword.addEventListener('input', (e) => {

    if (confirmPassword.value.length == 0) {
        errConfirmPw.innerText = '*Confirm Password is required.';
        confirmPassword.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!confirmPassword.value.match(/^.{8,12}$/)) {
        errConfirmPw.innerText = '*Password must be 8-12 characters.';
        confirmPassword.style.border = '2px solid #B91C1C';
        return false;
    }

    if (!confirmPassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)) {
        errConfirmPw.innerText = '*Password must have: (A-Z, a-z, 0-9).';
        confirmPassword.style.border = '2px solid #B91C1C';
        return false;
    }

    if (confirmPassword.value !== password.value) {
        errConfirmPw.innerText = '*Password do not match.';
        confirmPassword.style.border = '2px solid #B91C1C';
        return false;
    }

    errConfirmPw.innerText = '';
    confirmPassword.style.border = '2px solid #E5E7EB';
    return true;

});