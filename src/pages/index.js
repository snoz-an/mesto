import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/cards.js"
import { FormValidator } from "../components/FormValidator.js"
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"

export const popupCloseImg = document.querySelector('.popup__close-img');
export const popupList = Array.from(document.querySelectorAll('.popup'))
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const activity = profile.querySelector('.profile__activity');
const popupSaveAdd = document.querySelector('.popup__save_add');
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const inputActivity = document.querySelector('.popup__input_activity');
const inputName = document.querySelector('.popup__input_name');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const formList = Array.from(document.querySelectorAll(".popup__form"));
const config = {
  formSelector: ".popup__form",
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//renderCards
const popupImage = new PopupWithImage('#popupImg');
 popupImage.setEventListeners();
 
 const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    
    const createCard = (data) => {
      const card = new Card({data, 
        handleCardClick: ({name, link}) => {
          popupImage.open({name, link})}},
        '#elementsTemplate').generateCard();
      return card;
     }

    const card = createCard(item);
    cardList.addItem(card);
  }
}, '.elements');

cardList.renderItems();
//

//popupFormEdit
const infoUserProfile = new UserInfo({name: '.profile__name', 
activity: '.profile__activity'});
   infoUserProfile.getUserInfo();

const popupEdit = new PopupWithForm({popupSelector: '.popup_edit',
handleFormSubmit: (data) => {
  infoUserProfile.setUserInfo(data);
  popupEdit.close();
}});
popupEdit.setEventListeners();

popupEditOpenButton.addEventListener('click', () => {
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
  popupEdit.open();
})
//

//popupFormAdd
const popupAdd = new PopupWithForm({popupSelector: '#popupAdd',
handleFormSubmit: () => {
  const item = {
    name: inputCardName.value,
    link: inputCardLink.value
  }
  cardList.renderCard(item);
  popupAdd.close();
}}
);

popupAdd.setEventListeners();

popupAddOpenButton.addEventListener('click', () => {
  const inactiveButton = () => {
    popupSaveAdd.classList.add(config.inactiveButtonClass);
    popupSaveAdd.setAttribute("disabled", true);
  }
  inactiveButton(config);
  popupAdd.open();
})
//

//Validation
function formValidation(formSelector, config) {
  const form = new FormValidator(formSelector, config);
  form.enableValidation(formSelector);
}

formValidation(config, formList);
//









