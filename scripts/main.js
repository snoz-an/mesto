let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let profile = document.querySelector('.profile');
let name = profile.querySelector('.profile__name');
let activity = profile.querySelector('.profile__activity');
let inputActivity = popup.querySelector('.popup__input_activity');
let inputName = popup.querySelector('.popup__input_name');
let form = document.querySelector('form');
let openPopup = function() {
  popup.classList.toggle('popup_opened');
  inputName.value = name.textContent;
  inputActivity.value = activity.textContent;
}

let closePopup = function() {
  popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
   evt.preventDefault(); 
   name.textContent = inputName.value;
   activity.textContent = inputActivity.value;
   closePopup();
}

form.addEventListener('submit', formSubmitHandler);
