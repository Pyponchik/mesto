let openPopup = document.querySelector('.profile__editButton');
let closePopup = document.querySelector('.popup__cancel');
let popup = document.querySelector('.popup');

openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
});

closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
});