let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__editButton');
let closePopup = document.querySelector('.popup__closeIcon');
openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
})
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})