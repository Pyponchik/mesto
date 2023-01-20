let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__editButton');
let closePopup = document.querySelector('.popup__closeIcon');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
let nameInput =  document.querySelector('.popup__inputName');// Воспользуйтесь инструментом .querySelector()
let jobInput =  document.querySelector('.popup__inputJob');// Воспользуйтесь инструментом .querySelector()
openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
})
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.textContent;
    job.textContent = jobInput.textContent;
    popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);