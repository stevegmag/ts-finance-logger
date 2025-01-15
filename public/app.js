import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const total = document.querySelector('#total');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
        total.innerText = (parseInt(total.innerText) + amount.valueAsNumber).toString();
    }
    else {
        doc = new Payment(...values);
        total.innerText = (parseInt(total.innerText) - amount.valueAsNumber).toString();
    }
    list.render(doc, type.value, 'end');
});
