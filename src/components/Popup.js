export class Popup {
  constructor(popupSelector) {
    this._selector = document.querySelector(popupSelector);
    this._esc = this._handleEscClose.bind(this);
  }

open() {
  this._selector.classList.add('popup_opened');
  document.addEventListener('keyup', this._esc)
};

close() {
  this._selector.classList.remove('popup_opened');
  document.removeEventListener('keyup', this._esc);
};

_handleEscClose(evt) {
  if (evt.key === "Escape") {
      this.close();
  };
};

setEventListeners() {
  this._selector.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    this.close()
    }
  });
};

}