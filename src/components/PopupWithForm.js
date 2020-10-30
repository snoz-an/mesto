import { Popup } from "./Popup.js"; 

export class PopupWithForm extends Popup {

    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._selector.querySelector('.popup__form')
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input')
        this._formValues = {};
        this._inputList.forEach( input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
              evt.preventDefault();
              this._handleFormSubmit(this._getInputValues());
        })
}
}