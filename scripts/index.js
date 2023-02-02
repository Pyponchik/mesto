let popup = document.querySelector('.popup');
let popupElementAdd = document.querySelector('.popupElementAdd');
let popupIconOpen = document.querySelector('.profile__editButton');
let popupElementIconOpen = document.querySelector('.profile__addButton');
let popupIconClose = document.querySelector('.popup__closeIcon');
let popupElementIconClose =  document.querySelector('.popup__closeIcon_addElement');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');
let nameInput =  document.querySelector('.popup__input_type_name');
let jobInput =  document.querySelector('.popup__input_type_job');
let elementName =  document.querySelector('.popup__input_name_element');
let elementLink =  document.querySelector('.popup__input_link_element');
const template = document.querySelector('.template')
.content.querySelector('.element');
const elements = document.querySelector('.elements');
const addCard = document.querySelector('.popup__form_addElement');
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

addElement(initialCards);
formElement.addEventListener('submit', function(evt){
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupClose();
});
popupElementIconOpen.addEventListener('click', function(){
  popupElementAdd.classList.add('popup_opened');
  popupElementIconClose.addEventListener('click', popupClose);
});
popupIconOpen.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  popupIconClose.addEventListener('click', popupClose);
});
addCard.addEventListener('submit', function(evt){
  evt.preventDefault(); 
  addElement(newElement = [
    {name: `${elementName.value}`,
    link: `${elementLink.value}`
  }]);
  elementName.value = '';
  elementLink.value = '';
  popupClose();
});
function popupClose(){
  popup.classList.remove('popup_opened');
  popupElementAdd.classList.remove('popup_opened');
  document.querySelector('.popupImage').classList.remove('popup_opened');
}
function addElement(arr){
  arr.forEach((arr) => {
    template.querySelector('.element__name').textContent = arr.name;
    template.querySelector('.element__image').src = arr.link;
    template.querySelector('.element__image').alt = arr.name;
    const card = template.cloneNode(true);
    card.querySelector('.element__trash').addEventListener('click', ()=>{
      card.remove();
    });
    card.querySelector('.element__like').addEventListener('click', ()=>{
      card.querySelector('.element__like').classList.toggle('element__like_active');
    });
    card.querySelector('.element__image').addEventListener('click',()=> {
      document.querySelector('.popupImage__image').src = arr.link;
      document.querySelector('.popupImage__name').textContent = arr.name;
      document.querySelector('.popupImage').classList.add('popup_opened');
    });
    document.querySelector('.popupImage__closeIcon').addEventListener('click',()=> {
      popupClose();
    });
    elements.prepend(card);
  });
}