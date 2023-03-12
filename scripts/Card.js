export default class Card {
  constructor(cardData, template) {
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
  _setEventListeners(){
    this._element.querySelector('.element__trash').addEventListener('click', ()=>{
      this._element.remove();
    });
    
    this._elementLike.addEventListener('click', ()=>{
      this._elementLike.classList.toggle('element__like_active');
    });
  }
  generateCard() {
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.onerror = ()=> {
      this._cardImage.src = 'image/error__image.jpeg';
    }
    this._setEventListeners();
    return this._element;
  }
}