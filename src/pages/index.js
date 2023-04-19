import "./index.css";
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
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
const cardBox = document.querySelector('.elements');
const section = new Section({
  items: initialCards,
  getCard: (item)=>{
    section.addItem(getCard(item));
  }}, '.elements')
  section.renderCard();
// 1 попап
const onePopup = new PopupWithForm('.popup_edit-profile', editProfilData);
const profileEditButton = document.querySelector('.profile__editButton');
const formUserData = document.forms.userData;
const inputName = formUserData.elements.inputName;
const inputJob = formUserData.elements.inputJob;
const UserData = new UserInfo('.profile__name', '.profile__job')
function editProfilData(data){
  UserData.setUserInfo(data);
}
profileEditButton.addEventListener('click', ()=>{
  inputName.value = UserData.getUserInfo().inputName;
  inputJob.value = UserData.getUserInfo().inputJob;
  formValidatorProfile.resetValidation();
  onePopup.openPopup();
});
// 2 попап
const twoPopup = new PopupWithForm('.popup_add-card', section.addItem)
const profileAddButton = document.querySelector('.profile__addButton');
profileAddButton.addEventListener('click',()=>{
  formValidatorCard.resetValidation();
  twoPopup.openPopup();
});
//создание обьекта карточки
function getCard(item) {
  const element = new Card(item, '.template', handleCardClick);
  return element.generateCard();
}
//добавление обьекта карточки на страницу
function createCard(cardData){
  const element = getCard(cardData)
  cardBox.prepend(element);
}
//колбек увеличения карты
const ImagePopup = new PopupWithImage('.popupImage');
function handleCardClick(cardImage){
  ImagePopup.openPopup(cardImage);
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