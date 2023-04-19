import Popup from "./Popup.js";
export default  class PopupWithForm extends Popup {
  constructor(selectorPopup, sumbitForm){
    super(selectorPopup);
    this._form = this._setPopup.querySelector('.popup__form');
    this._popupInput = this._setPopup.querySelectorAll('.popup__input');
    this.sumbitForm = sumbitForm;
  }
  _getInputValues() {
    this.formElement = {};
    this._popupInput.forEach(input => {
      this.formElement[input.name] = input.value});
    return this.formElement;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit();
      this.closePopup();
    }, { once: true });
  }
  _submit(){
    this.sumbitForm(this._getInputValues());
  }
  closePopup(){
    super.closePopup();
    this._form.reset();
  }
}