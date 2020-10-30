export class Section {
constructor({items, renderer}, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);

      this._isArray = items.isArray
}

renderItems() {
    this._renderedItems.reverse().forEach(data => {
     this._renderer(data);
    });
  }

  renderCard(element) {
  this._renderer(element);
  }

addItem(element) {
    this._container.prepend(element);
  }
}