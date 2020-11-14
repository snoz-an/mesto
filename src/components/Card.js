export class Card {
  constructor({data, handleCardClick, handleTrash, handleLike, handleDislike}, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
    this._id = data._id;
    this._userId = userId
    this._data = data;
    this._handleTrash = handleTrash;
    this._like = data.likes;
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
  this._likeCounter = this._element.querySelector('.like__counter');
  this._likeCounter.textContent = `${this._data.likes.length}`;
  
  if (this._data.likes.find((like) => like._id === this._userId)) {
    this._element.querySelector('.like').classList.add('like_active');
  };

  if (this._data.owner._id === this._userId) {
    this._element.querySelector('.card__delete').style.display = 'block';
  } else {
      this._element.querySelector('.card__delete').style.display = 'none';
    };

  return this._element;
}

likeCounter(likes) {
  const likeCounter = this._element.querySelector('.like__counter');
  likeCounter.textContent = likes.length;
}

putLike() {
  const like = this._element.querySelector('.like');
  like.classList.toggle('like_active');
}

_showLike() {
  const like = this._element.querySelector('.like');
  !like.classList.contains('like_active') ? this._handleLike() : this._handleDislike();
}

_setEventListeners() {
  this._element.querySelector('.like').addEventListener('click',() => {
  this._showLike();
  });

  this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
  this._handleTrash(evt, this._id);
  });
  
  this._img.addEventListener('click', () => this._handleCardClick({
  name: this._title,
  link: this._image
   }));

}
}