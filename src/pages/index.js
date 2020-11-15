import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js"
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"
import { Popup } from "../components/Popup.js"
import { Api } from "../components/Api.js"

export const popupCloseImg = document.querySelector('.popup__close-img');
export const popupList = Array.from(document.querySelectorAll('.popup'))
const popupSaveAdd = document.querySelector('.popup__save_add');
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const inputActivity = document.querySelector('.popup__input_activity');
const inputName = document.querySelector('.popup__input_name');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAvatarOpenButton = document.querySelector('.profile__avatar-button');
const linkAvatar = document.querySelector(".popup__input_avatar-link");
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
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
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
popupWarning.setEventListeners();

const popupImage = new PopupWithImage('#popupImg');
popupImage.setEventListeners();

//get User data
const infoUserProfile = new UserInfo({
  name: '.profile__name',
  about: '.profile__activity', avatarSelector: '.profile__avatar'
});

//create card
function createCard(data) {
  const card = new Card({
    data,

    handleCardClick: ({ name, link }) => {
      popupImage.open({ name, link })
    },

    handleTrash: (evt, id) => {
      popupWarning.open();
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
    },

    handleLike: () => {
      api.likeCard(data._id)
        .then((data) => {
          card.likeCounter(data.likes);
          card.putLike();
        })
        .catch((err) => {
          console.log(err);
        })
    },

    handleDislike: () => {
      api.dislikeCard(data._id)
        .then((data) => {
          card.likeCounter(data.likes);
          card.putLike();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },

    '#elementsTemplate',

    userId)

  cardList.addItem(card.generateCard())
}
//

//render card
const cardList = new Section({
  renderer: (item, userId) => {
    createCard(item, userId);
  }
}, '.elements');
//


let userId;

Promise.all([api.getInitialCards(), api.getUserProfile()])
  .then(([initialCards, data]) => {
    userId = data._id;
    infoUserProfile.setUserInfo(data);
    cardList.renderItems(initialCards, data);
  })
  .catch(err => {
    console.log(err)
  })

//Edit User name, activity
const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',

  handleFormSubmit: () => {
    const userDataName = {
      name: inputName.value,
      about: inputActivity.value
    };

    loader(popupSaveEdit, 'Сохранение...')
    api
      .setUserProfile(userDataName)
      .then((res) => {
        infoUserProfile.setUserInfo(res);
        popupEdit.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loader(popupSaveEdit, 'Сохранить')
      });
  }
});

popupEdit.setEventListeners();

popupEditOpenButton.addEventListener('click', () => {
  const infoProfile = infoUserProfile.getUserInfo();
  inputName.value = infoProfile.name;
  inputActivity.value = infoProfile.about;
  popupEdit.open();
})
//

//Add new card
const popupAdd = new PopupWithForm({
  popupSelector: '#popupAdd',
  handleFormSubmit: () => {
    loader(popupSaveAdd, 'Сохранение...')
    api
      .addNewCard({
        name: inputCardName.value,
        link: inputCardLink.value
      })

      .then((res) => {
        cardList.renderCard(res)
        popupAdd.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loader(popupSaveAdd, 'Создание')
      })

  }
}
);

popupAdd.setEventListeners();
//

//form Validation 
function formValidation(formSelector, config) {
  const form = new FormValidator(formSelector, config);
  form.enableValidation(formSelector);
  popupAvatarOpenButton.addEventListener('click', () => {
    form.buttonDisabled(popupAvatarSaveButton)
    popupAvatar.open();
  })

  popupAddOpenButton.addEventListener('click', () => {
    form.buttonDisabled(popupSaveAdd)
    popupAdd.open();
  })
}

formValidation(config, formList);
//

//Change Avatar
const popupAvatar = new PopupWithForm({
  popupSelector: '#popupAvatar',
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
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loader(popupAvatarSaveButton, 'Сохранить')
      });

  }
});

popupAvatar.setEventListeners();
//

