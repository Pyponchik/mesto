export default class Section {
  constructor({items, getCard}, cardBox){
    this._items = items;
    this._getCard = getCard;
    this._cardBox = document.querySelector(cardBox);
  }
  addItem(item){
    this._cardBox.prepend(item);
  }
  renderCard() {
    this._items.forEach(item => {
      this._getCard(item);
    });
  }
}