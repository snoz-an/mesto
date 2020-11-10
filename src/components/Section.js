export class Section {
  constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
  }
  
  renderItems(data) {
      data.reverse().forEach(item => {
       this._renderer(item);
      });
    }
  
    renderCard(element) {
    this._renderer(element);
    }
  
  addItem(element) {
      this._container.prepend(element);
    }
  }