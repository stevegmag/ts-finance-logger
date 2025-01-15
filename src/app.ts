import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const total = document.querySelector('#total') as HTMLSpanElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
    total.innerText = (parseInt(total.innerText) + amount.valueAsNumber).toString();
  } else {
    doc = new Payment(...values);
    total.innerText = (parseInt(total.innerText) - amount.valueAsNumber).toString();
  }
  
  list.render(doc, type.value, 'end');

  /* TODO:
  - [X] Add a delete button to each item in the list
  - [X] Add a total at the bottom of the list
  */
});