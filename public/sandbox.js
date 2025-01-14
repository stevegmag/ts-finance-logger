"use strict";
let type;
let to_from;
let details;
let amount;
let newEntry = (type, to_from, details, amount) => {
};
let button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button clicked');
    return null;
});
// console.log(type, to_fromm, details, amount);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
