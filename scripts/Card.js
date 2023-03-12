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
    this.imagePopup = document.querySelector('.popupImage');
    this.popupImageImage = this.imagePopup.querySelector('.popupImage__image');
    this.popupImageName = this.imagePopup.querySelector('.popupImage__name');
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
    this.popupImageImage.alt = this._cardName.textContent;
    this.popupImageName.textContent = this._cardName.textContent;
    this.popupImageImage.src = this._cardImage.src;
    this.togglePopup(this.imagePopup);
  }
  _setEventListeners(){
    this._element.querySelector('.element__trash').addEventListener('click', ()=>{
      this._element.remove();
    });
    
    this._elementLike.addEventListener('click', ()=>{
      this._elementLike.classList.toggle('element__like_active');
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