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
  formInputValid(popupEditProfile, enableValidation);
});
formUserData.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  togglePopup(popupEditProfile);
});// 2 попап
const popupAddCard = document.querySelector('.popup_add-card');
const formAddCard = document.forms.addCard;
const inputAreal = formAddCard.elements.inputAreal;
const inputUrl = formAddCard.elements.inputUrl;
profileAddButton.addEventListener('click',()=>{
  cleanError(inputAreal);
  cleanError(inputUrl);
  formAddCard.reset();
  togglePopup(popupAddCard);
  formInputValid(popupAddCard, enableValidation);
});
formAddCard.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  addCard(newElement = 
    {name: `${inputAreal.value}`,
    link: `${inputUrl.value}`
  });
  togglePopup(popupAddCard);
});//добавление карточек,лайки и удаление
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popupImage');
function createCard(cardData){
  const card = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__trash').addEventListener('click', ()=>{
    card.remove();
  });
  const elementImage = card.querySelector('.element__image');
  const popupImageImage = popupImage.querySelector('.popupImage__image');
  const popupImageName = popupImage.querySelector('.popupImage__name');
  elementImage.onerror = ()=> {
    elementImage.src = 'image/error__image.jpeg';
  }
  elementImage.addEventListener('click',()=>{
    popupImageImage.alt = cardData.name;
    popupImageName.textContent = cardData.name;
    popupImageImage.src = cardData.link;
    elementImage.onerror = () => {
      popupImageImage.src = 'image/error__image.jpeg';
    }
    togglePopup(popupImage);
  });
  const elementLike = card.querySelector('.element__like');
  elementLike.addEventListener('click', ()=>{
    elementLike.classList.toggle('element__like_active');
  });
  card.querySelector('.element__name').textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  return card;
}//кнопка закрытия попапов
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
}//закрытие по esc
function closeByEscape(evt){
    if(evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      togglePopup(openedPopup);
    }
}//Закрытие попапов по щелчку за его границей
function closeByOverlay(evt){
  if(evt.target.classList.contains('popup')) 
    togglePopup(evt.target); 
}// обход массива изначального
initialCards.forEach((arr) => {
  addCard(arr);
});// добавление карточки
function addCard(cardData){
  elements.prepend(createCard(cardData));
}