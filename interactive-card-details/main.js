// save all variables to approptiate tags
const myForm = document.querySelector("#my-form");

const numberInput = document.querySelector("#card-number-input");
const number = document.querySelector("#card-number");

const nameInput = document.querySelector("#card-name-input");
const holderName = document.querySelector("#name");

const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const montExp = document.querySelector("#exp-month");
const yearExp = document.querySelector("#exp-year");

const cvcInput = document.querySelector("#cvc-input");
const cvc = document.querySelector("#cvc");

const confirmDiv = document.querySelector("#confirm");

const errorMesages = document.querySelectorAll(".errorMes");
const inputsArr = document.querySelectorAll("input");
/* global variable to check is empty and valid*/
let isValid = [false];
let isEmpty = true;

//format cardNUmber
const format = (num) => {
  try {
    let newNum = num.match(/.{1,4}/g).join(" ");
    return newNum;
  } catch (e) {
    console.error("empty number");
  }
};

myForm.addEventListener("submit", (e) => {
  for (let i = 0; i < inputsArr.length; i++) {
    if (validateNotEmpty(inputsArr[i], errorMesages[i])) {
      isEmpty = true;
    } else {
      validateNotEmpty(inputsArr[i], errorMesages[i]);
      isEmpty = false;
    }
  }

  isValid.forEach((el) => {
    console.log(`isValid=${el} is empty=${isEmpty}`);
  });

  if (!isValid.includes(false)) {
    console.log(`all data valid ${!isValid.includes(false)}`);
    myForm.classList.toggle("hidden");
    confirmDiv.classList.toggle("hidden");
  }
});

// if edited anyone of imput make action
numberInput.addEventListener("input", (e) => {
  validateCardNumber(numberInput, errorMesages[1]);
  number.textContent = format(numberInput.value);
});

nameInput.addEventListener("input", (e) => {
  validateName(nameInput, errorMesages[0]);
  holderName.textContent = nameInput.value;
});

monthInput.addEventListener("input", (e) => {
  montExp.textContent = monthInput.value;
  validateMonth(monthInput, errorMesages[2]);
});

yearInput.addEventListener("input", (e) => {
  yearExp.textContent = yearInput.value;
  validateYear(yearInput, errorMesages[3]);
});

cvcInput.addEventListener("input", (e) => {
  cvc.textContent = cvcInput.value;
  validateCVC(cvcInput, errorMesages[4]);
});
//if data invalid add error mesage and  red border
const inValid = (input, error) => {
  error.classList.add("visible");
  input.classList.add("error");
};
//if data valis remove error mesage and change to green border
const validData = (input, error) => {
  error.classList.remove("visible");
  input.classList.remove("error");
  // input.classList.add("valid");
};
//validate if is empty
const validateNotEmpty = (input, error) => {
  if (!input.value) {
    inValid(input, error);
    input.placeholder = "";
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  console.log("isEmpty =" + isEmpty);
  return isEmpty;
};
//validate appropriate inputs with
const validateName = (input, error) => {
  const regName = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");
  if (!regName.test(input.value)) {
    error.textContent = "Please enter your full name (first & last name).";
    inValid(input, error);
    isValid[0] = false;
  } else {
    validData(input, error);
    isValid[0] = true;
  }
  return isValid[0];
};
const validateCardNumber = (input, error) => {
  const regCard = new RegExp("^[0-9]{13,19}$");
  if (!regCard.test(input.value)) {
    error.textContent = "Wrong format, numbers only. ";
    inValid(input, error);
    isValid[1] = false;
  } else {
    validData(input, error);
    isValid[1] = true;
  }
  return isValid[1];
};
const validateMonth = (input, error) => {
  const regMonth = new RegExp("^0[1-9]|1[0-2]$");
  if (!regMonth.test(input.value)) {
    error.textContent = "invalid month number 1-12";
    inValid(input, error);
    isValid[2] = false;
  } else {
    validData(input, error);
    isValid[2] = true;
  }
  return isValid[2];
};
const validateYear = (input, error) => {
  const regYear = new RegExp("^[2-9][0-9]$");
  if (!regYear.test(input.value)) {
    error.textContent = "invalid year, number > 20";
    inValid(input, error);
    isValid[3] = false;
  } else {
    validData(input, error);
    isValid[3] = true;
  }
  return isValid[3];
};

const validateCVC = (input, error) => {
  const regCVC = new RegExp("^[0-9][0-9][0-9]$");
  if (!regCVC.test(input.value)) {
    error.textContent = "3 number only";
    inValid(input, error);
    isValid[4] = false;
  } else {
    validData(input, error);
    isValid[4] = true;
  }
  console.log("cvc " + isValid[4]);
  return isValid[4];
};
