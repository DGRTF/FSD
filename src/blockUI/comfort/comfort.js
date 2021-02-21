import Iteration from '../iteration/iteration';
import ComfortInit from './comfortInit';

class Comfort {
  constructor() {
    this._initialize();
  }

  _initialize() {
    this.dropdowns = document.querySelectorAll('.js-comfort');

    this.dropdowns.forEach((element) => {
      this.iteration = new Iteration(element);
      const search = Comfort._searchElement(element);

      // eslint-disable-next-line no-new
      new ComfortInit(search, this.iteration);
      search.contentHeader.addEventListener('click', Comfort.show);
    });
  }

  static _searchElement(element) {
    return {
      dropdownText: element.querySelector('.js-comfort__text'),
      contentHeader: element.querySelector('.js-comfort__content'),
    };
  }

  static show(event) {
    event.currentTarget.classList.toggle('comfort__content-border');
    event.currentTarget.nextElementSibling.classList.toggle('comfort__items-display');
  }
}

// eslint-disable-next-line no-new
new Comfort();
