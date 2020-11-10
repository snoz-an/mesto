import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/cards.js"
import { FormValidator } from "../components/FormValidator.js"
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"
import { Popup } from "../components/Popup.js"
import {Api} from "../components/Api.js"

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

const popupAvatarOpenButton = document.querySelector('.profile__avatar-button');
const inputAvatarLink = document.querySelector('.popup__input_avatar-link');
const profileAvatar = document.querySelector('.profile__avatar');
//const cardTrash = document.querySelector('.card__delete');

const formList = Array.from(document.querySelectorAll(".popup__form"));
const config = {
  formSelector: ".popup__form",
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '5aa200a5-627f-47bb-8621-5fa3329764a9',
    "Content-Type": "application/json",
  },
})


function createCard(data) {
  const card = new Card({data, 
    handleCardClick: ({name, link}) => {
      popupImage.open({name, link})}},
    '#elementsTemplate').generateCard();
     return card;
 }

const popupImage = new PopupWithImage('#popupImg');
 popupImage.setEventListeners();
 
 const cardList = new Section({
  renderer: (item) => {

    const card = createCard(item);
    cardList.addItem(card);
  }
}, '.elements');


api.getInitialCards()
    .then((data) => {
        cardList.renderItems(data);
        //api.setUserProfile(data)
    })
    .catch((error) => {
      console.log(error);
   });

//


//popupFormEdit
const infoUserProfile = new UserInfo({name: '.profile__name', 
about: '.profile__activity', avatarSelector: '.profile__avatar'});
   //infoUserProfile.getUserInfo();
   api.getUserProfile()
   .then((rest) => {
    infoUserProfile.setUserInfo(rest);
  })
  .catch((error) => {
    console.log(error);
 });
   
  

const popupEdit = new PopupWithForm({popupSelector: '.popup_edit',

handleFormSubmit: (data) =>  {
  
api.setUserProfile(data)
    .then((res) => {
       
        infoUserProfile.setUserInfo(res);
       
    })
    .catch ((error) => {
        console.log(error);
    })
    .finally(() => {
      // выключаем лоадер (еще не сделал)
      popupEdit.close(); // закрываем форму
    });

    infoUserProfile.setUserInfo(data);
}

});

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
   api
  .addNewCard({
    name: inputCardName.value,
    link: inputCardLink.value
  })
    
  .then((res) => {
    cardList.renderCard(res);
    popupAdd.close();
  })
  .catch((err) => {
    console.log(err);
  })

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



////////////////////////////////////////////////////////////////////////////////new


const linkAvatar = document.querySelector(".popup__input_avatar-link");
const profile__avatar = document.querySelector('.profile__avatar')

infoUserProfile.avatarUserInfo(linkAvatar);

const popupAvatar = new PopupWithForm({popupSelector: '#popupAvatar',
handleFormSubmit: () => {
  api
    .newAvatar(linkAvatar)
    .then(() => {
      popupAvatar.close();
      profile__avatar.src =linkAvatar;
    })
    .catch((err) => {
      console.log(err);
    })
}});

popupAvatar.setEventListeners();

popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatar.open();
})

