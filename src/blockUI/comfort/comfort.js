import Iteration from '../iteration/iteration';
import ComfortInit from './comfortInit';

class Comfort {
  constructor() {
    this._initialize();
  }

  _initialize() {
    this.dropdown = document.querySelectorAll('.js-comfort');
    this.dropdown = [].slice.call(this.dropdown);
    this.dropdown.forEach((element) => {
      this._element(element);
    });
  }

  _element(element) {
    this.iteration = new Iteration(element);
    const search = Comfort._searchElement(element);
    this._addHandlers(search);
    search.contentHeader.addEventListener('click', Comfort.show);
  }

  static _searchElement(element) {
    return {
      dropdown__divText: element.querySelector('.js-comfort__text'),
      contentHeader: element.querySelector('.js-comfort__content'),
    };
  }

  _addHandlers(searchElement) {
    // eslint-disable-next-line no-new
    new ComfortInit(searchElement, this.iteration);
  }

  static show(event) {
    event.currentTarget.classList.toggle('comfort__content-border');
    event.currentTarget.nextElementSibling.classList.toggle('comfort__items-display');
  }
}

// eslint-disable-next-line no-new
new Comfort();
