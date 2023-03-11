export default class Card {
  constructor(cardData, card) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._card = card;
    this._cardImage =this._card.querySelector('.element__image');
    this._cardName =this._card.querySelector('.element__name');
    this._elementLike = this._card.querySelector('.element__like');
  }
  _setEventListeners(){
    this._card.querySelector('.element__trash').addEventListener('click', ()=>{
      this._card.remove();
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
    return this._card;
  }
}