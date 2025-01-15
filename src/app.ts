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
  - [X] Update the total when you delete an item
  - [X] Update the total when you add an item
  - [] Add a tab to switch between invoices, payments and combined
  - [] Add a payments under the related invoice.
  - [] Add a feature to clear the form after submitting
  - [] Add a feature to capture submitted date (date picker with a default of today)
  - [] Add a feature to include a due date for invoices (net 30, net 60, net 90)
  - [] Add a feature to edit an item
  - [] Add a feature to mark an item as taxed/untaxed and add a tax rate
  - [] Add a feature to mark an item as paid/unpaid
  - [] Add a feature to add multiple notes to an item
  - [] Add a feature to add a payment method
  - [] Add a feature to add a discount
  - [] Add a feature to add a payment plan
  - [] Add a feature to add a partial payment
  - [] Add a feature to add a recurring payment
  - [] Add a feature to highlight an item as overdue (and/or approaching due date)
  - [] Add a feature to sort the list by amount
  - [] Add a feature to sort the list by date
  - [] Add a feature to sort the list by type
  - [] Add a feature to filter the list by type
  - [] Add a feature to filter the list by date
  - [] Add a feature to create a report (daily, weekly, monthly, yearly)
  - [] Add a feature to export the list to a CSV file
  - [] Add a feature to export the list to a PDF file
  - [] Add a feature to export the list to a JSON file
  - [] Add a feature to import the list from a CSV file
  - [] Add a feature to import the list from a JSON file  
  - [] Add a feature to import the list from a PDF file
  - [] Add customer and vendor details
  - [] Add a feature to add/edit/delete a customer or vendor
  - [] Modify to/from to be a dropdown and auto-complete for a list of customers and vendors
  */
});