export class Card {
  
  constructor({data, handleCardClick}, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._like = data.like;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
  }

  _getTemplate() {
  const cardElement = document.querySelector(this._cardSelector)
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
    this._likeCounter = this._element.querySelector(".like__counter");
    //this._likeCounter.textContent = this._like.length;

    return this._element;
  }

  _handleDeleteCard() {
    this._element.remove();
  }
  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("like_active"); 
  }

  _setEventListeners() {

   
   /*this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });*/

    document.querySelector('.popup__save_delete').addEventListener('click', () => {
      this._handleDeleteCard();
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








/*export class Card {
  
  constructor({data, handleCardClick}, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
  }

  _getTemplate() {
  const cardElement = document.querySelector(this._cardSelector)
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

  _handleDeleteCard() {
    this._element.remove();
  }
  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("like_active"); 
  }

  _setEventListeners() {

   
   /*this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });*/

 /*   document.querySelector('.popup__save_delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });
  
   this._element.querySelector('.like').addEventListener('click', (evt) => {
      this._handleLikeIcon(evt);
    });

 
    this._img.addEventListener('click', () => this._handleCardClick({
    name: this._title,
    link: this._image
   }));

}
}*/
