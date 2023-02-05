//открытие 1 попапa///
const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput =  popupEditProfile.querySelector('.popup__input_type_name');
const jobInput =  popupEditProfile.querySelector('.popup__input_type_job');
document.querySelector('.profile__editButton').addEventListener('click', ()=>{
  popupOpenClose(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
popupEditProfile.querySelector('.popup__form').addEventListener('submit', function(evt){
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupOpenClose(popupEditProfile);
});
popupEditProfile.querySelector('.popup__closeIcon').addEventListener('click', ()=>{
  popupOpenClose(popupEditProfile);
});///////открытие 2 попапа///////////

const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
document.querySelector('.profile__addButton').addEventListener('click',()=>{
popupOpenClose(popupAddCard);
});
popupAddCardForm.addEventListener('submit', function(evt){
  evt.preventDefault(); 
  addCard(newElement = 
    {name: `${popupAddCardForm.querySelector('.popup__input_name').value}`,
    link: `${popupAddCardForm.querySelector('.popup__input_link').value}`
  });
  popupAddCardForm.reset();
  popupOpenClose(popupAddCard);
});
popupAddCard.querySelector('.popup__closeIcon').addEventListener('click', ()=>{
  popupOpenClose(popupAddCard);
});//////добавление карточек,лайки и удаление//////
const elements = document.querySelector('.elements');
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
];//добавление костяка карт
initialCards.forEach((arr) => {
  addCard(arr);
});
function createCard(array){
  const card = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__trash').addEventListener('click', ()=>{
    card.remove();
  });
  const elementImage = card.querySelector('.element__image');
  const popupImage = document.querySelector('.popupImage')
  const popupImageImage = popupImage.querySelector('.popupImage__image');
  card.querySelector('.element__image').addEventListener('click',()=> {
    popupImageImage.alt = array.name;
    popupImageImage.src = array.link;
    popupImage.querySelector('.popupImage__name').textContent = array.name;
    popupOpenClose(popupImage);
    popupImage.querySelector('.popup__closeIcon').addEventListener('click', ()=>{
      popupImage.classList.remove('popup_opened');
    });
  });
  const elementLike = card.querySelector('.element__like');
  elementLike.addEventListener('click', ()=> {
    elementLike.classList.toggle('element__like_active');
  });
  card.querySelector('.element__name').textContent = array.name;
  elementImage.src = array.link;
  elementImage.alt = array.name;
  elementImage.onerror = function(){
    elementImage.src = 'https://торги-россии.рф/pictures/thumbs/$2y$10$i5aegDuGn.RhbiwYvDsQVeh1lg5xqlRNn8FYyNrDHdmpUmBbeTG.jpeg';
  }
  return card;
}
popupImage.querySelector('.popup__closeIcon').addEventListener('click', ()=>{
  popupImage.classList.remove('popup_opened');
});
function addCard(array){
  elements.prepend(createCard(array));
}///////открытие-закрытие попапа/////////////
function popupOpenClose(tipe){
  tipe.classList.toggle('popup_opened');
}