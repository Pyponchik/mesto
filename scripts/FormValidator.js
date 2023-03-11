export default class FormValidator {
  constructor(pop, validationParams){
    this.pop = pop;
    this.validationParams = validationParams;
    this._button = this.pop.querySelector(this.validationParams.submitButtonSelector);
    this._form = this.pop.querySelector(this.validationParams.formSelector);
    this._button = pop.querySelector(this.validationParams.submitButtonSelector);
  }
  _controlsSumbit(){
    if(this.pop.checkValidity()){
      this._button.classList.remove(this.validationParams.ButtonNonActive);
      this._button.removeAttribute('disabled');
    }else{
      this._button.classList.add(this.validationParams.ButtonNonActive);
      this._button.setAttribute('disabled', true);
    }
  }
  formInputValid(){
    this._inputs = this.pop.querySelectorAll(this.validationParams.inputSelector);
    this._inputs.forEach((input)=>{
      input.classList.remove(this.validationParams.inputErrorClass);
      this._controlsSumbit();
      input.addEventListener('input', (evt)=>{
        const symbol = evt.target;
        !symbol.validity.valid ? symbol.classList.add(this.validationParams.inputErrorClass) : 
        symbol.classList.remove(this.validationParams.inputErrorClass);
        symbol.nextElementSibling.textContent = symbol.validationMessage;
        this._controlsSumbit();
      });  
    })
  }







}