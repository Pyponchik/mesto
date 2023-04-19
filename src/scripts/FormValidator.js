export default class FormValidator {
  constructor(form, validationParams){
    this.form = form;
    this.validationParams = validationParams;
    this._button = this.form.querySelector(this.validationParams.submitButtonSelector);
    this._inputs = this.form.querySelectorAll(this.validationParams.inputSelector);
  }
  _toggleButtonState(){
    if(this.form.checkValidity()){
      this._button.classList.remove(this.validationParams.ButtonNonActive);
      this._button.removeAttribute('disabled');
    }else{
      this._disableButton();
    }
  }
  _toggleErrorControl(){
    !this.symbol.validity.valid ? this.symbol.classList.add(this.validationParams.inputErrorClass) : 
    this.symbol.classList.remove(this.validationParams.inputErrorClass);
    this.symbol.nextElementSibling.textContent = this.symbol.validationMessage;
  }
  _disableButton(){
    this._button.classList.add(this.validationParams.ButtonNonActive);
    this._button.setAttribute('disabled', true);
  }
  resetValidation(){
    this._disableButton();
    this._inputs.forEach((input)=>{
      input.classList.remove(this.validationParams.inputErrorClass);
      input.nextElementSibling.textContent = '';
    });
  }
  enableValidation(){
    this._inputs.forEach((input)=>{
      input.classList.remove(this.validationParams.inputErrorClass);
      this._toggleButtonState();
      input.addEventListener('input', (evt)=>{
        this.symbol = evt.target;
        this._toggleErrorControl();
        this._toggleButtonState();
      });  
    })
  }
}