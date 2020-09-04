const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const cardsContainer = document.querySelector(".elements");

const addItemToContainer = function(card) {

  cardName = card.name;
  cardLink = card.link;
  cardAlt = card.alt;
  const cardElement = document.querySelector("#elementsTemplate").content.cloneNode(true);
  cardElement.querySelector(".card__name").textContent = cardName;
  cardElement.querySelector(".card__img").src = cardLink;
  cardElement.querySelector(".card__img").alt = cardAlt;
  
  //like
cardElement.querySelector(".like").addEventListener('click', function (event) {
  event.target.classList.toggle("like_active"); 
  //
});
  //delete
  cardElement.querySelector(".card__delete").addEventListener('click', function(event) {
    const card =  event.target.closest(".card");
    card.remove();
  });
  //

  //img popup 

  const imagePopup = document.querySelector('#popupImg');
  const popupImg = imagePopup.querySelector('.popup__img');
  const popupImgCloseButton = imagePopup.querySelector('.popup__close-img');

  cardElement.querySelector(".card__img").addEventListener('click', function (event) {  
      imagePopup.classList.toggle('popup_opened');
      let cardImg = event.target.src;
      popupImg.src = cardImg;
      let cardImgName = imagePopup.querySelector('.popup__img-caption');
      cardImgName.textContent = card.name;

      const closeImgPopup = function(event) {
      if (event.target === event.currentTarget) {
        imagePopup.classList.remove('popup_opened');
      }
    }
     
    popupImgCloseButton.addEventListener('click', closeImgPopup);
  });
  //
  
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(addItemToContainer);

//new card
function addFormSubmitHandler (evt) {
  evt.preventDefault(); 
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const addCard = {
name: inputCardName.value,
link: inputCardLink.value
}

addItemToContainer(addCard);
closeAddPopup();
}

const popupAdd = document.querySelector('#popupAdd');
popupAdd.addEventListener('submit', addFormSubmitHandler);
popupAdd.addEventListener('keydown', function(){});

//

const popupContainerImg = document.querySelector('.popup__container-img');
const popupEdit = document.querySelector('.popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const activity = profile.querySelector('.profile__activity');
const inputActivity = popupEdit.querySelector('.popup__input_activity');
const inputName = popupEdit.querySelector('.popup__input_name');
const form = document.querySelector('form');
const popupAddOpenButton = profile.querySelector('.profile__add-button');

let openEditPopup = function() {
  popupEdit.classList.toggle('popup_opened');
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
}

let openAddPopup = function() {
  popupAdd.classList.toggle('popup_opened');
}

let closeEditPopup = function() {
  popupEdit.classList.toggle('popup_opened');
}

let closeAddPopup = function() {
  popupAdd.classList.toggle('popup_opened');
}

let closeEditEverywhere = function() {
  if (event.target !== event.currentTarget) return
  closeEditPopup();
}

let closeAddEverywhere = function() {
  if (event.target !== event.currentTarget) return
  closeAddPopup();
}

popupEditOpenButton.addEventListener('click', openEditPopup);
popupAddOpenButton.addEventListener('click', openAddPopup);
popupEditCloseButton.addEventListener('click', closeEditPopup);
popupAddCloseButton.addEventListener('click', closeAddPopup);
popupEdit.addEventListener('click', closeEditEverywhere);
popupAdd.addEventListener('click', closeAddEverywhere);

function formSubmitHandler (evt) {
   evt.preventDefault(); 
   name.textContent = inputName.value;
   activity.textContent = inputActivity.value;
   closeEditPopup();
}

form.addEventListener('submit', formSubmitHandler);

