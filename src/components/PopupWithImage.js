import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.link = this._selector.querySelector('.popup__img');
    this.name = this._selector.querySelector('.popup__img-caption');   
  }

open({name, link}) {
  this.name.textContent = name; 
  this.link.src = link;
  super.open();
}
}
