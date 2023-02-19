
//изменение активности самбита
function sumbitControl(form, button){
  if(!form.checkValidity()){
    button.classList.add('popup__sumButton_nonactive');
    button.setAttribute('disabled', true);
  }else{
    button.classList.remove('popup__sumButton_nonactive');
    button.removeAttribute('disabled', true);
  }
}
//обработка инпутов
function formInputValid(pop){
  const inputs = pop.querySelectorAll('.popup__input');
  const button = pop.querySelector('.popup__sumButton');
  const form = pop.querySelector('.popup__form');
  inputs.forEach((input)=>{
    input.classList.remove('popup__input_error');
    sumbitControl(form, button);
    input.addEventListener('input', (evt)=>{
      const aa = evt.target;
      !aa.validity.valid ? aa.classList.add('popup__input_error') : aa.classList.remove('popup__input_error');
      aa.nextElementSibling.textContent = aa.validationMessage;
      sumbitControl(form, button);
    });  
  })
}// очистка ошибки 
function cleanError(line) {
  return line.nextElementSibling.textContent = '';
}