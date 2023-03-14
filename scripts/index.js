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
initialCards.forEach(createCard);
// 1 попап
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const profileEditButton = profile.querySelector('.profile__editButton');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const formUserData = document.forms.userData;
const inputName = formUserData.elements.inputName;
const inputJob = formUserData.elements.inputJob;
profileEditButton.addEventListener('click', ()=>{
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  formValidatorProfile.closePopup();
  togglePopup(popupEditProfile);
});
formUserData.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  togglePopup(popupEditProfile);
});
// 2 попап
const profileAddButton = profile.querySelector('.profile__addButton');
const popupAddCard = document.querySelector('.popup_add-card');
const formAddCard = document.forms.addCard;
const inputAreal = formAddCard.elements.inputAreal;
const inputUrl = formAddCard.elements.inputUrl;
profileAddButton.addEventListener('click',()=>{
  formValidatorCard.closePopup();
  togglePopup(popupAddCard);
});
formAddCard.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  createCard({name: `${inputAreal.value}`, link: `${inputUrl.value}`});
  //сброс полей после отправки
  formAddCard.reset();
  togglePopup(popupAddCard);
});
function createCard(cardData){
  const element = new Card(cardData, '.template', togglePopup);
  document.querySelector('.elements').prepend(element.generateCard());
}
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
function closeByEscape(evt){
    if(evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      togglePopup(openedPopup);
    }
}
function closeByOverlay(evt){
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__closeIcon')) 
    togglePopup(evt.target.closest('.popup')); 
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
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();