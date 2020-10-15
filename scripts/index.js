import { Card, imagePopup } from "./Card.js";
import { initialCards } from "../vendor/cards.js"
import { FormValidator } from "./FormValidator.js"

const esc = 27;
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAdd = document.querySelector('#popupAdd');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const activity = profile.querySelector('.profile__activity');
const inputActivity = popupEdit.querySelector('.popup__input_activity');
const inputName = popupEdit.querySelector('.popup__input_name');
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const popupAddOpenButton = profile.querySelector('.profile__add-button');
const popupSaveAdd = document.querySelector('.popup__save_add');
const cardsContainer = document.querySelector(".elements");
const popupImgCloseButton = imagePopup.querySelector('.popup__close-img');

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeEsc);
  };
  
 function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeEsc);
  };

//open add
popupAddOpenButton.addEventListener('click', function() {
    openPopup(popupAdd);
    const inactiveButton = () => {
      popupSaveAdd.classList.add(config.inactiveButtonClass);
      popupSaveAdd.setAttribute("disabled", true);
    }
      inactiveButton(config);
    inputCardName.value = '';
    inputCardLink.value = '';
  });
  //
  
  //close add
  popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
  });
  //

  //submit add
  function addFormSubmitHandler (evt) {
    evt.preventDefault(); 

    const items = { 
        name: inputCardName.value, 
        link: inputCardLink.value 
    }
    
  const addCard = new Card(items, "#elementsTemplate");
  cardsContainer.prepend(addCard.generateCard())
    
    closePopup(popupAdd);
  };

  popupAdd.addEventListener('submit', addFormSubmitHandler);
  //

  //submit edit
  function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    activity.textContent = inputActivity.value;
    closePopup(popupEdit); 
 };

  popupEdit.addEventListener('submit', formSubmitHandler);
  //

  //open edit
popupEditOpenButton.addEventListener('click', function() {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputActivity.value = activity.textContent;
  });
  //

  //close edit
  popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
  });
  //

  //close ImgPopup
  popupImgCloseButton.addEventListener('click', () => {
    closePopup(imagePopup);
    });
  //

//closeEsc
 function closeEsc(evt) {
    if (evt.keyCode === esc) {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }
  //

  //сloseEverywhere
function сloseEverywhere(overlay) {
    overlay.addEventListener("click", function (evt) {
      if (evt.target === evt.currentTarget) {
        closePopup(overlay);
      };
    });
  };

  Array.from(document.querySelectorAll(".popup")).forEach((popup) =>
  сloseEverywhere(popup)
  );
  //

//Validation
  const config = {
    formSelector: ".popup__form",
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };
  
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  function formValidation(formSelector, config) {
    const form = new FormValidator(formSelector, config);
    form.enableValidation(formSelector);
  }
  
  formValidation(config, formList);
  //

  function renderCard() {
    initialCards.forEach((item) => {
      const card = new Card(item, '#elementsTemplate');
      const cardElement = card.generateCard();
      cardsContainer.prepend(cardElement);
    });
  };

  renderCard();
