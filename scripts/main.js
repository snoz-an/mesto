const cardsContainer = document.querySelector(".elements");

const getCardElement = function (card) {
  cardName = card.name;
  cardLink = card.link;
  cardAlt = card.alt;
  const cardElement = document.querySelector("#elementsTemplate").content.cloneNode(true);
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
    handlePreviewPicture(event)
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
    //popupImg.alt = cardImg;
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
inputCardName.value = '';
inputCardLink.value = '';
};

const popupAdd = document.querySelector('#popupAdd');
popupAdd.addEventListener('submit', addFormSubmitHandler);
popupAdd.addEventListener('keydown', function(){});

const esc = 27;
const imagePopup = document.querySelector('#popupImg');
const popupImgCloseButton = imagePopup.querySelector('.popup__close-img');
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
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const form = document.querySelector('form');
const popupAddOpenButton = profile.querySelector('.profile__add-button');

const openPopup = function(evt) {
  evt.classList.add('popup_opened');
};

const closePopup = function(evt) {
  evt.classList.remove('popup_opened');
};

// слушатели открытия/закрытия

//open add
popupAddOpenButton.addEventListener('click', function() {
  openPopup(popupAdd);
  const popupSaveAdd = document.querySelector('.popup__save_add')
  popupSaveAdd.classList.add(config.inactiveButtonClass)
  popupSaveAdd.setAttribute("disabled", true)
});
//close add
popupAddCloseButton.addEventListener('click', function() {
  closePopup(popupAdd);
});
//

//open edit
popupEditOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
  const popupSave = document.querySelector('.popup__save')
  popupSave.classList.remove(config.inactiveButtonClass)
  popupSave.removeAttribute("disabled", false)
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

//closeEsc

document.addEventListener('keydown', closeEsc);

function closeEsc(evt) {
  const popupList = document.querySelectorAll('.popup');
  if (evt.keyCode === esc) {
    for (var i = 0; i < popupList.length; i++) {
     popupList[i].classList.remove('popup_opened')
    }
  }
}
//

function formSubmitHandler (evt) {
   evt.preventDefault(); 
   name.textContent = inputName.value;
   activity.textContent = inputActivity.value;
   closePopup(popupEdit);
}

form.addEventListener('submit', formSubmitHandler);

initialCards.forEach(renderCard);




