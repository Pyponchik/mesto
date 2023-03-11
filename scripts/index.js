import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const profileEditButton = document.querySelector('.profile__editButton');
const profileAddButton = document.querySelector('.profile__addButton');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// 1 попап
const popupEditProfile = document.querySelector('.popup_edit-profile');
const formUserData = document.forms.userData;
const inputName = formUserData.elements.inputName;
const inputJob = formUserData.elements.inputJob;
profileEditButton.addEventListener('click', ()=>{
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  cleanError(inputName);
  cleanError(inputJob);
  togglePopup(popupEditProfile);
});
formUserData.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  togglePopup(popupEditProfile);
});
// 2 попап
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardSumButton = popupAddCard.querySelector('.popup__sumButton');
const formAddCard = document.forms.addCard;
const inputAreal = formAddCard.elements.inputAreal;
const inputUrl = formAddCard.elements.inputUrl;
profileAddButton.addEventListener('click',()=>{
  popupAddCardSumButton.classList.add('popup__sumButton_nonactive');
  popupAddCardSumButton.setAttribute('disabled', true);
  cleanError(inputAreal);
  cleanError(inputUrl);
  formAddCard.reset();
  togglePopup(popupAddCard);
});
formAddCard.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  let newElement;
  createCard(newElement =
    {name: `${inputAreal.value}`,
    link: `${inputUrl.value}`
  });
  togglePopup(popupAddCard);
});
//добавление карточек
const elements = document.querySelector('.elements');
function createCard(cardData){
  const card = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  const element = new Card(cardData, card);
  elements.prepend(element.generateCard());
  //попап с картой
  const elementImage = card.querySelector('.element__image');
  elementImage.addEventListener('click',(evt)=>{
    const popupImageImage = document.querySelector('.popupImage__image');
    const popupImageName = document.querySelector('.popupImage__name');
    popupImageImage.alt = cardData.name;
    popupImageName.textContent = cardData.name;
    popupImageImage.src = evt.target.src;
    togglePopup(document.querySelector('.popupImage'));
  });
}
//кнопка закрытия попапов
const popupCloseIcons = document.querySelectorAll('.popup__closeIcon');
popupCloseIcons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => togglePopup(popup));
});
//открытие-закрытие попапа
function togglePopup(popup){
  popup.classList.toggle('popup_opened');
  if(popup.classList.contains('popup_opened')){
    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('mousedown', closeByOverlay);
  }
  else{
    document.removeEventListener('keydown', closeByEscape);
    document.removeEventListener('mousedown', closeByOverlay);
  }
}
//закрытие по esc
function closeByEscape(evt){
    if(evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      togglePopup(openedPopup);
    }
}
//Закрытие попапов по щелчку за его границей
function closeByOverlay(evt){
  if(evt.target.classList.contains('popup')) 
    togglePopup(evt.target); 
}
// обход массива изначального
initialCards.forEach((arr) => {
  createCard(arr);
});

// очистка ошибки 
function cleanError(line) {
  return line.nextElementSibling.textContent = '';
}
const validationParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumButton',
  inputErrorClass: 'popup__input_error',
  ButtonNonActive: 'popup__sumButton_nonactive',
};
const formValidatorProfile = new FormValidator(document.querySelector('.popup__form_profile') ,validationParams);
const formValidatorCard = new FormValidator(document.querySelector('.popup__form_addCard') ,validationParams);
formValidatorProfile.formInputValid();
formValidatorCard.formInputValid();