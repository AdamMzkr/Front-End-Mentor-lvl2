const myForm = document.querySelector("#my-form");
let numberInput = document.querySelector("#card-number-input");
const number = document.querySelector("#card-number");

let nameInput = document.querySelector("#card-name-input");
const holderName = document.querySelector("#name");

let monthInput = document.querySelector("#month-input");
let yearInput = document.querySelector("#year-input");
const expDate = document.querySelector("#exp-date");

numberInput.addEventListener("input", (e) => {
  number.textContent = numberInput.value;
});

nameInput.addEventListener("input", (e) => {
  holderName.textContent = nameInput.value;
});
monthInput &&
  yearInput.addEventListener("input", (e) => {
    expDate.textContent = `${monthInput.value}/${yearInput.value}`;
  });
