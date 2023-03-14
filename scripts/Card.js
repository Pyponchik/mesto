const imagePopup = document.querySelector('.popupImage');
const popupImageImage = imagePopup.querySelector('.popupImage__image');
const popupImageName = imagePopup.querySelector('.popupImage__name');
export default class Card {
  constructor(cardData, template, togglePopup) {
    this.togglePopup = togglePopup;
    this._name = cardData.name;
    this._link = cardData.link;
    this.template = template;
    this._element = this._getTemplate();
    this._cardImage =this._element.querySelector('.element__image');
    this._cardName =this._element.querySelector('.element__name');
    this._elementLike = this._element.querySelector('.element__like');
  }
  _getTemplate() {
    const templateElement = document
    .querySelector(this.template)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return templateElement;
  }
  _openImagePopup(){
    popupImageImage.alt = this._cardName.textContent;
    popupImageName.textContent = this._cardName.textContent;
    popupImageImage.src = this._cardImage.src;
    this.togglePopup(imagePopup);
  }
  _setLikeCard(){
    this._elementLike.classList.toggle('element__like_active');
  }
  _deletionCard(){
    this._element.remove();
  }
  _setEventListeners(){
    this._element.querySelector('.element__trash').addEventListener('click', ()=>{
      this._deletionCard();
    });
    
    this._elementLike.addEventListener('click', ()=>{
      this._setLikeCard();
    });

    this._cardImage.addEventListener('click', ()=>{
      this._openImagePopup();
    });
  }
  generateCard() {
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.onerror = ()=> {
      this._cardImage.src = 'image/error__image.jpeg';
      this._cardImage.alt = '404';
    }
    this._setEventListeners();
    return this._element;
  }
}