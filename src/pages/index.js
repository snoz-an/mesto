import './index.css';
import { Card } from "../components/Card.js";
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
const linkAvatar = document.querySelector(".popup__input_avatar-link");
//const inputAvatarLink = document.querySelector('.popup__input_avatar-link');
//const profileAvatar = document.querySelector('.profile__avatar');
//const cardTrash = document.querySelector('.card__delete');
const popupSaveDelete = document.querySelector('.popup__save_delete');
const popupAvatarSaveButton = document.querySelector('.popup__save_avatar')
const popupSaveEdit = document.querySelector('.popup__save_edit')
const formList = Array.from(document.querySelectorAll(".popup__form"));
const config = {
  formSelector: ".popup__form",
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '5aa200a5-627f-47bb-8621-5fa3329764a9',
    "Content-Type": "application/json",
  },
}
)

function loader(saveButton, text) {
  saveButton.textContent = text;
}

const popupWarning = new Popup('#popupWarning')

//create card
function createCard(data) {
  const card = new Card({myId: '701e065fa1b9996ec4daf5fa', data, 
    handleCardClick: ({name, link}) => {
      popupImage.open({name, link})
    },
    
      handleTrash: (evt, id) => {
        
        popupWarning.open();
        popupWarning.setEventListeners();
        
        popupSaveDelete.addEventListener("click", function closePopup() {
          api
            .deleteCard(id)
            .then(() => { 
              evt.target.closest('.card').remove();
              popupWarning.close();
              popupSaveDelete.removeEventListener("click", closePopup);
            })
            .catch((err) => {
              console.log(err);
            });
          })
        }

    },
    '#elementsTemplate',
    ).generateCard();
     return card;
 }
 //

const popupImage = new PopupWithImage('#popupImg');
 popupImage.setEventListeners();

 //render card
 const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  }
}, '.elements');
//

//get InitialCards
api.getInitialCards()
    .then((data) => {
        cardList.renderItems(data);
    })
    .catch((error) => {
      console.log(error);
   });
//


//get User data
const infoUserProfile = new UserInfo({name: '.profile__name', 
about: '.profile__activity', avatarSelector: '.profile__avatar'});
   
   api.getUserProfile()
   .then((rest) => {
    infoUserProfile.setUserInfo(rest);
    infoUserProfile.avatarUserInfo(rest);
  })
  .catch((error) => {
    console.log(error);
 });
 //
 
//Edit User name, activity
const popupEdit = new PopupWithForm({popupSelector: '.popup_edit',

handleFormSubmit:
    () =>  {
      const userData = {
        name: inputName.value,
        about: inputActivity.value
      };

    loader(popupSaveEdit, 'Сохранение...') 
    api.setUserProfile(userData)
    .then((res) => {     
        infoUserProfile.setUserInfo(res);
    })
    .catch ((error) => {
        console.log(error);
    })
    .finally(() => {
     loader(popupSaveEdit, 'Сохранить') 
      popupEdit.close(); 
    });
}
});

popupEdit.setEventListeners();

popupEditOpenButton.addEventListener('click', () => {
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
  popupEdit.open();
})
//

//Add new card
const popupAdd = new PopupWithForm({popupSelector: '#popupAdd',
handleFormSubmit: () => {
  loader(popupSaveAdd, 'Сохранение...')
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
  .finally(() => {
    loader(popupSaveAdd, 'Создание')
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


//form Validation 
function formValidation(formSelector, config) {
  const form = new FormValidator(formSelector, config);
  form.enableValidation(formSelector);
}

formValidation(config, formList);
//

//Change Avatar
const popupAvatar = new PopupWithForm({popupSelector: '#popupAvatar',
handleFormSubmit: () => {
  const userData = {
    avatar: linkAvatar.value,
  };
  loader(popupAvatarSaveButton, 'Сохранение...')
  api
    .newAvatar 
    (userData)
    .then((res) => {
     
      infoUserProfile.avatarUserInfo(res);

    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loader(popupAvatarSaveButton, 'Сохраненить')
      popupAvatar.close(); 
    });

}});

popupAvatar.setEventListeners();

popupAvatarOpenButton.addEventListener('click', () => {
  const inactiveButton = () => {
    popupAvatarSaveButton.classList.add(config.inactiveButtonClass);
    popupAvatarSaveButton.setAttribute("disabled", true);
  }
  inactiveButton(config);
  popupAvatar.open();
})
//

