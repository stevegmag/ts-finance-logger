let type: string;
let to_from: string;
let details: string;
let amount: number;

let newEntry = (type: string, to_from: string, details: string, amount: number) => {
  
}
let button = document.querySelector('button');
button?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button clicked');
  return null;
});

// console.log(type, to_fromm, details, amount);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});