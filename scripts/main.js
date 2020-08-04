let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');




let profile = document.querySelector('.profile');
let name = profile.querySelector('.profile__name');
let activity = profile.querySelector('.profile__activity');
let inputActivity = popup.querySelector('.popup__activity');
let inputName = popup.querySelector('.popup__name');
let saveButton = popup.querySelector('.popup__save');
let form = document.querySelector('form');


let popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
saveButton.addEventListener('click', popupToggle);



function formSubmitHandler (evt) {
  evt.preventDefault(); 

   name.textContent = inputName.value;
   activity.textContent = inputActivity.value;

}

form.addEventListener('submit', formSubmitHandler);


//console.log({
 //   popup,
   // popupOpenButton,
  //  popupCloseButton
//})