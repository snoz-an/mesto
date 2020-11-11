import {api} from "../pages/index.js"

export class Card {
  
  constructor({myId, data, handleCardClick, handleTrash}, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._myId = myId;
    this._data = data;
    this._handleTrash = handleTrash;
    this._likes = data.likes;
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
    this._element.id = this._id;
    this._likeCounter = this._element.querySelector('.like__counter');
    this._likeCounter.textContent = this._likes.length;

    if (this._data.likes.find((like) => like._id === this._myId)) {
      this._element.querySelector('.like').classList.add('like_active');
    };

    if (this._data.owner._id === this._myId) {
      this._element.querySelector('.card__delete').style.display = 'block';
    } else {
      this._element.querySelector('.card__delete').style.display = 'none';
    };

    return this._element;
  }



  _handleLikeIcon(evt) {
    
    if (evt.target.classList.contains("like_active")) {
      this._element.querySelector('.like').classList.add('like_active');
      api
        .likeCard(this._id)
        .then((res) => {
          this._likeCounter.textContent = res.likes.length;        
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._element.querySelector('.like').classList.remove('like_active');
      api
        .dislikeCard(this._id)
        .then((res) => {
          this._likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  
  _setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
    this._handleTrash(evt, this._id);
    });
  
   this._element.querySelector('.like').addEventListener('click', (evt) => {
      evt.target.classList.toggle("like_active");
      this._handleLikeIcon(evt);
    });

    this._img.addEventListener('click', () => this._handleCardClick({
    name: this._title,
    link: this._image
   }));

}
}
