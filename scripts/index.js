let popup = document.querySelector('.popup');
let popupIconOpen = document.querySelector('.profile__editButton');
let popupIconClose = document.querySelector('.popup__closeIcon');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
let nameInput =  document.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
let jobInput =  document.querySelector('.popup__input_type_job');// Воспользуйтесь инструментом .querySelector()

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClose();
}
function popupClose(){
  popup.classList.remove('popup_opened');
}


formElement.addEventListener('submit', handleFormSubmit);

popupIconClose.addEventListener('click', popupClose);

popupIconOpen.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
})