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
  let arrValid = [];
  let validAll = true;
  for (let i = 0; i < inputsArr.length; i++) {
    if (validateNotEmpty(inputsArr[i], errorMesages[i])) {
      arrValid[i] = validateNotEmpty(inputsArr[i], errorMesages[i]);
      console.log("is not empty");
    } else {
      validateNotEmpty(inputsArr[i], errorMesages[i]);
      console.log("fill inputs");
      myForm.classList.remove("hidden");
      arrValid[i] = validateNotEmpty(inputsArr[i], errorMesages[i]);
    }
  }
  arrValid.forEach((el) => {
    if (el === false) {
      validAll = false;
      console.log(el);
    }
  });
  console.log("last validAll " + validAll);

  if (validAll) {
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
  input.classList.add("valid");
};
//validate if is empty
const validateNotEmpty = (input, error) => {
  let valid = true;
  if (!input.value) {
    inValid(input, error);
    input.placeholder = "";
    valid = false;
  } else {
  }
  return valid;
};
//validate appropriate inputs with
const validateName = (input, error) => {
  const regName = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");
  let valid = true;
  if (!regName.test(input.value)) {
    error.textContent = "Please enter your full name (first & last name).";
    inValid(input, error);
    valid = false;
  } else {
    validData(input, error);
  }
  return valid;
};
const validateCardNumber = (input, error) => {
  const regCard = new RegExp("^[0-9]{13,19}$");
  if (!regCard.test(input.value)) {
    error.textContent = "Wrong format, numbers only. ";
    inValid(input, error);
    return false;
  } else {
    validData(input, error);
    return true;
  }
};
const validateMonth = (input, error) => {
  const regMonth = new RegExp("^0[1-9]|1[0-2]$");
  if (!regMonth.test(input.value)) {
    error.textContent = "invalid month";
    inValid(input, error);
    return false;
  } else {
    validData(input, error);
    return true;
  }
};
const validateYear = (input, error) => {
  const regYear = new RegExp("^[2-9][0-9]$");
  if (!regYear.test(input.value)) {
    error.textContent = "invalid year";
    inValid(input, error);
    return false;
  } else {
    validData(input, error);
    return true;
  }
};

const validateCVC = (input, error) => {
  const regCVC = new RegExp("^[0-9][0-9][0-9]$");
  if (!regCVC.test(input.value)) {
    error.textContent = " 3 number only";
    inValid(input, error);
    return false;
  } else {
    validData(input, error);
    return true;
  }
};
