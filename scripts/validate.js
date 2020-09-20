 const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = function (formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
};

const checkInputValidity = function (formElement, inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const hasInvalidInput = function (inputList) {
  return inputList.some((inputElement) =>  {
return !inputElement.validity.valid;
});
}
 
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(config.inactiveButtonClass);

} else {
  buttonElement.removeAttribute("disabled", false)
  buttonElement.classList.remove(config.inactiveButtonClass);
}
}

 const enableValidation = (validationConfig) => {
  config = validationConfig
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      if (!inputElement.validity.valid)
 {
  toggleButtonState(inputList, buttonElement);
  checkInputValidity(formElement, inputElement);
 }  

 else {
  toggleButtonState(inputList, buttonElement);
  checkInputValidity(formElement, inputElement);
   }
  });
 });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });