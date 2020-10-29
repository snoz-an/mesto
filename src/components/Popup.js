import {popupCloseImg, popupList} from "../pages/index.js"

export class Popup {
    constructor(popupSelector) {
this._selector = document.querySelector(popupSelector);
    }

open() {
    this._selector.classList.add('popup_opened');
    this._esc = this._handleEscClose.bind(this);
    document.addEventListener('keyup', this._esc)
};

close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._esc);
};

_handleEscClose(evt) {
        if (evt.key === "Escape") {
            document.addEventListener('keyup', this._handleEscClose);
            this.close();
        };
    };


setEventListeners() {
    
    popupCloseImg.addEventListener('click', this.close.bind(this));

    popupList.forEach((popup) => {
       popup.addEventListener('click', evt => {
           if (evt.target === evt.currentTarget) {
            this.close()
           }
           })
       })
};
}