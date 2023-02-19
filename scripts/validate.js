const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumButton',
  inputErrorClass: 'popup__input_error',
  ButtonNonActive: 'popup__sumButton_nonactive',
};//изменение активности самбита
function sumbitControl(form, button,obj){
  if(!form.checkValidity()){
    button.classList.add(obj.ButtonNonActive);
    button.setAttribute('disabled', true);
  }else{
    button.classList.remove(obj.ButtonNonActive);
    button.removeAttribute('disabled', true);
  }
}//обработка инпутов
function formInputValid(pop, obj){
  const inputs = pop.querySelectorAll(obj.inputSelector);
  const button = pop.querySelector(obj.submitButtonSelector);
  const form = pop.querySelector(obj.formSelector);
  inputs.forEach((input)=>{
    input.classList.remove(obj.inputErrorClass);
    sumbitControl(form, button, obj);
    input.addEventListener('input', (evt)=>{
      const aa = evt.target;
      !aa.validity.valid ? aa.classList.add(obj.inputErrorClass) : aa.classList.remove(obj.inputErrorClass);
      aa.nextElementSibling.textContent = aa.validationMessage;
      sumbitControl(form, button, obj);
    });  
  })
}// очистка ошибки 
function cleanError(line) {
  return line.nextElementSibling.textContent = '';
}