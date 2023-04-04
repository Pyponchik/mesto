export default class Popup {
  constructor(selectorPopup){
    this.selectorPopup = selectorPopup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._setPopup = document.querySelector(this.selectorPopup);
  }
  openPopup() {
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
    document.querySelector(this.selectorPopup).classList.add('popup_opened');
  }
  closePopup() {
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleClickClose);
    document.querySelector(this.selectorPopup).classList.remove('popup_opened');
  }
  _handleEscClose(evt) {
    document
    if(evt.key === 'Escape'){
      this.closePopup();
    }
  }
  setEventListeners(){
    document.addEventListener('click', this._handleClickClose);
  }
  _handleClickClose(evt){
      if((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__closeIcon')))
        this.closePopup();
    }
}
