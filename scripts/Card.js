import {closeEsc} from "./index.js"

const imagePopup = document.querySelector('#popupImg');
const popupImg = imagePopup.querySelector('.popup__img');
const cardImgName = imagePopup.querySelector('.popup__img-caption');
const popupImgCloseButton = imagePopup.querySelector('.popup__close-img');

export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector,
    this._title = data.name,
    this._image = data.link
  }

  _getTemplate() {
  const cardElement = document.querySelector('#elementsTemplate')
  .content
  .querySelector('.card')
  .cloneNode(true);

  return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__img').src = this._image;
    this._element.querySelector('.card__img').alt = 'изображение'
    this._element.querySelector('.card__name').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    cardImgName.textContent = this._title;
    popupImg.src = this._image;
    imagePopup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
  }

  _handleClosePopup() {
    popupImg.src = '';
    imagePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.card').remove();
  }
  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("like_active"); 
  }

  _setEventListeners() {

    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupImgCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      this._handleDeleteCard(evt);
    });
  
    this._element.querySelector('.like').addEventListener('click', (evt) => {
      this._handleLikeIcon(evt);
    });

}
}




























/*export class Card {
  constructot(data, cardSelector) {
    this._cardSelector = cardSelector
    this._name = data.name;
    this._link = data.link;

    this._userCard = document.querySelector(this._classSelector);
    this._clone = this._userCard.content
      .querySelector(".elements")
      .cloneNode(true);
    
    this._cardElement = this._clone.querySelector('.card')
    this._cardName = this._clone.querySelector('.card__name');
    this._cardImg = this._clone.querySelector('.card__img');
  }



  _getTemplate() {
    const cardElement = this._userCard.content
      .querySelector('.card')
      .cloneNode(true);
      const cardName = cardElement.querySelector('.card__name');
      const cardImg = cardElement.querySelector('.card__img');
      cardName.textContent = this._name;
      cardImg.src = this._link;
      cardImg.alt = 'картинка';

    return cardElement;
  
 
  }*/

  /*_generateCards() { */
    /*this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.card__img').src = this._image;
    this._element.querySelector('.card__img').alt = this._title;
    this._element.querySelector('.card__name').textContent = this._title;

    return this._element;*/

    /*this._element = this._getTemplate();
    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__img').src = this._link;

    this._setEventListeners();
    return this._element;
  }*/
  

 /*_handleDeleteCard(evt) {
  evt.target.closest('.card').remove();
}

_handleLikeIcon(evt) {
  evt.target.classList.toggle("like_active"); 
}

_setEventListeners() {

  document.querySelector('.card__delete').addEventListener('click', () => {
    this._handleDeleteCard();
  });

  document.querySelector('.like').addEventListener('click', () => {
    this._handleLikeIcon();
  });
}

cardAdd() {
  const filalCard = this._setEventListeners(this._getTemplate());
  return filalCard
}*/

/*}*/


/*

const cardsContainer = document.querySelector(".elements");
const elementsTemplate = document.querySelector("#elementsTemplate")

const getCardElement = function (card) {
  cardName = card.name;
  cardLink = card.link;
  cardAlt = card.alt;
  const cardElement = elementsTemplate.content.cloneNode(true);
  const cardImg = cardElement.querySelector(".card__img");
  cardElement.querySelector(".card__name").textContent = cardName;
  cardImg.src = cardLink;
  cardImg.alt = 'картинка';

// delete Listener
  cardElement.querySelector(".card__delete").addEventListener('click', handleDeleteCard);
//

  // like Listener
  cardElement.querySelector(".like").addEventListener('click', handleLikeIcon);
  //

  // img popup Listener
  cardImg.addEventListener('click', function(){
    handlePreviewPicture(event);
  });
  //
 return (cardElement);
}

// render card
  const renderCard = function (card) {
  cardsContainer.prepend(getCardElement(card));
}
//

//like
const handleLikeIcon = function (event) {
  event.target.classList.toggle("like_active"); 
} 
  //

//delete
  const handleDeleteCard = function(event) {
    const card =  event.target.closest(".card");
    card.remove();
  };
  //

  //img popup 
  handlePreviewPicture = function(event) {
    openPopup(imagePopup);
    const popupImg = imagePopup.querySelector('.popup__img');
    const cardImgName = imagePopup.querySelector('.popup__img-caption');
    const cardImg = event.target.src;
    popupImg.src = cardImg;
    popupImg.alt = 'картинка';
    const cardName = event.target.closest('.card').querySelector(".card__name").textContent;
    cardImgName.textContent = cardName;
    };
  //

//new card
function addFormSubmitHandler (evt) {
  evt.preventDefault(); 
const addCard = {
name: inputCardName.value,
link: inputCardLink.value
};
renderCard(addCard);
closePopup(popupAdd);
};

const popupAdd = document.querySelector('#popupAdd');
popupAdd.addEventListener('submit', addFormSubmitHandler);

const esc = 27;
const imagePopup = document.querySelector('#popupImg');
const popupImgCloseButton = imagePopup.querySelector('.popup__close-img');
const popupContainerImg = document.querySelector('.popup__container-img');
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const activity = profile.querySelector('.profile__activity');
const inputActivity = popupEdit.querySelector('.popup__input_activity');
const inputName = popupEdit.querySelector('.popup__input_name');
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const form = document.querySelector('form');
const popupAddOpenButton = profile.querySelector('.profile__add-button');
const popupSaveAdd = document.querySelector('.popup__save_add');
const popupSave = document.querySelector('.popup__save');

const openPopup = function(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
};

const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
};

//closeEsc
function closeEsc(evt) {
  if (evt.keyCode === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//

// слушатели открытия/закрытия popup
const inactiveButton = function(config) {
  popupSaveAdd.classList.add(config.inactiveButtonClass);
  popupSaveAdd.setAttribute("disabled", true);
}
//open add
popupAddOpenButton.addEventListener('click', function() {
  openPopup(popupAdd);
  inactiveButton(config);
  inputCardName.value = '';
  inputCardLink.value = '';
});
//close add
popupAddCloseButton.addEventListener('click', function() {
  closePopup(popupAdd);
});
//

//open edit
popupEditOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  inactiveButton(config);
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
});
//close edit
popupEditCloseButton.addEventListener('click', function() {
  closePopup(popupEdit);
});
//

// img
popupImgCloseButton.addEventListener('click', function() {
  closePopup(imagePopup);
});
//
//

//сloseEverywhere
function сloseEverywhere(overlay) {
  overlay.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(overlay);
    }
  });
}
Array.from(document.querySelectorAll(".popup")).forEach((popup) =>
сloseEverywhere(popup)
);

function editFormSubmitHandler (evt) {
   evt.preventDefault(); 
   name.textContent = inputName.value;
   activity.textContent = inputActivity.value;
   closePopup(popupEdit);
}

form.addEventListener('submit', editFormSubmitHandler);

initialCards.forEach(renderCard);

*/


