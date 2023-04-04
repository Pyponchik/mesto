import Popup from "./Popup.js";
export default  class PopupWithImage extends Popup {
  constructor(selectorPopup){
    super(selectorPopup);
    this._imagePopup = document.querySelector('.popupImage');
    this._popupImageImage = this._imagePopup.querySelector('.popupImage__image');
    this._popupImageName = this._imagePopup.querySelector('.popupImage__name');
  }
  openPopup(cardImage) {
    super.openPopup();
    this._popupImageImage.alt = cardImage.name;
    this._popupImageName.textContent = cardImage.name;
    this._popupImageImage.src = cardImage.link;
  }
}