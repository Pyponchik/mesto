const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumButton',
  inputErrorClass: 'popup__input_error',
  ButtonNonActive: 'popup__sumButton_nonactive',
};//изменение активности самбита
function controlsSumbit(form, button,obj){
  if(form.checkValidity()){
    button.classList.remove(obj.ButtonNonActive);
    button.removeAttribute('disabled');
  }else{
    button.classList.add(obj.ButtonNonActive);
    button.setAttribute('disabled', true);
  }
}
//обработка инпутов
function formInputValid(pop, obj){
  const inputs = pop.querySelectorAll(obj.inputSelector);
  const button = pop.querySelector(obj.submitButtonSelector);
  const form = pop.querySelector(obj.formSelector);
  inputs.forEach((input)=>{
    input.classList.remove(obj.inputErrorClass);
    controlsSumbit(form, button, obj);
    input.addEventListener('input', (evt)=>{
      const symbol = evt.target;
      !symbol.validity.valid ? symbol.classList.add(obj.inputErrorClass) : symbol.classList.remove(obj.inputErrorClass);
      symbol.nextElementSibling.textContent = symbol.validationMessage;
      controlsSumbit(form, button, obj);
    });  
  })
}// очистка ошибки 
function cleanError(line) {
  return line.nextElementSibling.textContent = '';
}
startValidation();