export class Section {
constructor({items, renderer}, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
}

renderItems() {
    this._renderedItems.forEach(data => {
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