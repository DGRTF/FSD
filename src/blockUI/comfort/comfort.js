import Iteration from '../iteration/iteration';
import ComfortInit from './comfortInit';

export default class Comfort {
  constructor(comfortElement) {
    this._initialize(comfortElement);
  }

  _initialize(comfortElement) {
    this.iteration = new Iteration(comfortElement);
    const search = Comfort._searchElement(comfortElement);

    // eslint-disable-next-line no-new
    new ComfortInit(search, this.iteration);
    search.contentHeader.addEventListener('click', Comfort._handleContentClick);
  }

  static _searchElement(element) {
    return {
      dropdownText: element.querySelector('.js-comfort__text'),
      contentHeader: element.querySelector('.js-comfort__content'),
    };
  }

  static _handleContentClick(event) {
    event.currentTarget.firstElementChild.classList.toggle('comfort__text_border');
    event.currentTarget.nextElementSibling.classList.toggle('comfort__items-display');
  }
}
