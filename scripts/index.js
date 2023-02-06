//открытие 1 попапa///
const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput =  popupEditProfile.querySelector('.popup__input_type_name');
const jobInput =  popupEditProfile.querySelector('.popup__input_type_job');
const profileEditButton = document.querySelector('.profile__editButton');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const popupEditProfileCloseIcon= popupEditProfile.querySelector('.popup__closeIcon');
profileEditButton.addEventListener('click', ()=>{
  togglePopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupEditProfileForm.addEventListener('submit', function(evt){
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupEditProfile);
});
popupEditProfileCloseIcon.addEventListener('click', ()=>{
  togglePopup(popupEditProfile);
});///////открытие 2 попапа///////////
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const profileAddButton = document.querySelector('.profile__addButton');
const popupAddCardInputName = popupAddCardForm.querySelector('.popup__input_name')
const popupAddCardInputLink = popupAddCardForm.querySelector('.popup__input_link')
const popupAddCardCloseIcon = popupAddCard.querySelector('.popup__closeIcon');
profileAddButton.addEventListener('click',()=>{
  togglePopup(popupAddCard);
});
popupAddCardForm.addEventListener('submit', function(evt){
  evt.preventDefault(); 
  addCard(newElement = 
    {name: `${popupAddCardInputName.value}`,
    link: `${popupAddCardInputLink.value}`
  });
  popupAddCardForm.reset();
  togglePopup(popupAddCard);
});
popupAddCardCloseIcon.addEventListener('click', ()=>{
  togglePopup(popupAddCard);
});//////добавление карточек,лайки и удаление//////
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popupImage');
//добавление костяка карт
initialCards.forEach((arr) => {
  addCard(arr);
});
function createCard(cardData){
  const card = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__trash').addEventListener('click', ()=>{
    card.remove();
  });
  const elementImage = card.querySelector('.element__image');
  const popupImageImage = popupImage.querySelector('.popupImage__image');
  const popupImageName = popupImage.querySelector('.popupImage__name');
  elementImage.addEventListener('click',()=> {
    popupImageImage.alt = cardData.name;
    popupImageImage.src = cardData.link;
    popupImageName.textContent = cardData.name;
    togglePopup(popupImage);
  });
  const elementLike = card.querySelector('.element__like');
  elementLike.addEventListener('click', ()=> {
    elementLike.classList.toggle('element__like_active');
  });
  card.querySelector('.element__name').textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementImage.onerror = function(){
    elementImage.src = 'https://торги-россии.рф/pictures/thumbs/$2y$10$i5aegDuGn.RhbiwYvDsQVeh1lg5xqlRNn8FYyNrDHdmpUmBbeTG.jpeg';
  }
  return card;
}
document.querySelector('.popupImage__closeIcon').addEventListener('click', ()=>{
  togglePopup(popupImage);
});
function addCard(cardData){
  elements.prepend(createCard(cardData));
}///////открытие-закрытие попапа
function togglePopup(popup){
  popup.classList.toggle('popup_opened');
}