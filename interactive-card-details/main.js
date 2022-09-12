const myForm = document.querySelector("#my-form");
let numberInput = document.querySelector("#card-number-input");
const number = document.querySelector("#card-number");

let nameInput = document.querySelector("#card-name-input");
const holderName = document.querySelector("#name");

let monthInput = document.querySelector("#month-input");
let yearInput = document.querySelector("#year-input");
const expDate = document.querySelector("#exp-date");

const errorMesages = document.querySelectorAll(".errorMes");

numberInput.addEventListener("input", (e) => {
  validateCardNumber(numberInput, errorMesages[1]);
  number.textContent = numberInput.value;
});

nameInput.addEventListener("input", (e) => {
  validateName(nameInput, errorMesages[0]);
  holderName.textContent = nameInput.value;
});
monthInput &&
  yearInput.addEventListener("input", (e) => {
    expDate.textContent = `${monthInput.value}/${yearInput.value}`;
  });

validateNotEmpty = (input, error) => {
  let valid = true;

  if (!input.value) {
    error.classList.add("visible");
    input.classList.add("error");
    input.placeholder = "";
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
  } else {
    error.classList.remove("visible");
    input.classList.remove("error");
  }
  return valid;
};

validateName = (input, error) => {
  const regName = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");

  if (!regName.test(input.value)) {
    error.textContent = "Please enter your full name (first & last name).";
    error.classList.add("visible");
    input.classList.add("error");
    return false;
  } else {
    input.classList.remove("error");
    input.classList.add("valid");
    error.classList.remove("visible");
    return true;
  }
};
validateCardNumber = (input, error) => {
  const regCard = new RegExp("^[0-9]{13,19}$");
  if (!regCard.test(input.value)) {
    error.textContent = "Wrong format, numbers only. ";
    error.classList.add("visible");
    input.classList.add("error");
    return false;
  } else {
    input.classList.remove("error");
    input.classList.add("valid");
    error.classList.remove("visible");
    return true;
  }
};
