export class Card {
  
  constructor({data, handleCardClick}, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
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
    this._img = this._element.querySelector('.card__img');
    this._name = this._element.querySelector('.card__name');
    this._setEventListeners();
    this._img.src = this._image;
    this._img.alt = 'изображение'
    this._name.textContent = this._title;

    return this._element;
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.card').remove();
  }
  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("like_active"); 
  }

  _setEventListeners() {

   
   this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      this._handleDeleteCard(evt);
    });
  
   this._element.querySelector('.like').addEventListener('click', (evt) => {
      this._handleLikeIcon(evt);
    });

 
    this._img.addEventListener('click', () => this._handleCardClick({
    name: this._title,
    link: this._image
   }));

}
}
