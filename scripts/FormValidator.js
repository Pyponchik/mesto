export default class FormValidator {
  constructor(form, validationParams){
    this.form = form;
    this.validationParams = validationParams;
    this._button = this.form.querySelector(this.validationParams.submitButtonSelector);
    this._form = this.form.querySelector(this.validationParams.formSelector);
    this._inputs = this.form.querySelectorAll(this.validationParams.inputSelector);
  }
  _buttonControl(){
    if(this.form.checkValidity()){
      this._button.classList.remove(this.validationParams.ButtonNonActive);
      this._button.removeAttribute('disabled');
    }else{
      this._button.classList.add(this.validationParams.ButtonNonActive);
      this._button.setAttribute('disabled', true);
    }
  }
  _errorControl(){
    !this.symbol.validity.valid ? this.symbol.classList.add(this.validationParams.inputErrorClass) : 
    this.symbol.classList.remove(this.validationParams.inputErrorClass);
    this.symbol.nextElementSibling.textContent = this.symbol.validationMessage;
  }
  formValidation(){
    this._inputs.forEach((input)=>{
      input.classList.remove(this.validationParams.inputErrorClass);
      this._buttonControl();
      input.addEventListener('input', (evt)=>{
        this.symbol = evt.target;
        this._errorControl();
        this._buttonControl();
      });  
    })
  }







}