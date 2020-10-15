import {openPopup} from "./index.js"
 
export const imagePopup = document.querySelector('#popupImg');
const popupImg = imagePopup.querySelector('.popup__img');
const cardImgName = imagePopup.querySelector('.popup__img-caption');

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
    const cardimg = this._element.querySelector('.card__img');
    const cardName = this._element.querySelector('.card__name');
    this._setEventListeners();
    cardimg.src = this._image;
    cardimg.alt = 'изображение'
    cardName.textContent = this._title;

    return this._element;
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.card').remove();
  }
  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("like_active"); 
  }

  _setEventListeners() {

    this._element.querySelector('.card__img').addEventListener('click', () => {
      openPopup(imagePopup);
      cardImgName.textContent = this._title;
      popupImg.src = this._image;
    });

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      this._handleDeleteCard(evt);
    });
  
    this._element.querySelector('.like').addEventListener('click', (evt) => {
      this._handleLikeIcon(evt);
    });

}
}


