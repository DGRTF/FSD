import Iteration from '../iteration/iteration';
import Counter from './counter';

export default class Dropdown {
  constructor(dropdownElement) {
    this._initialize(dropdownElement);
  }

  _initialize(dropdownElement) {
    this.iteration = new Iteration(dropdownElement);
    const search = Dropdown._searchElement(dropdownElement);
    this._addHandlers(search);
    search.contentHeader.addEventListener('click', Dropdown._handleContentClick);
  }

  static _searchElement(element) {
    return {
      buttonCancel: element.querySelector('.js-dropdown__cancel'),
      buttonEnter: element.querySelector('.js-dropdown__ready'),
      numberNodes: element.querySelectorAll('.js-iteration__div-num'),
      dropdownText: element.querySelector('.js-dropdown__text'),
      contentHeader: element.querySelector('.js-dropdown__content'),
      dropdownItems: element.querySelector('.js-dropdown__items'),
    };
  }

  _addHandlers(searchElement) {
    const counter = new Counter(searchElement);
    this.iteration.eventIter.forEach((el) => {
      el.addHandlerPlus(counter.countPlus.bind(counter));
      el.addHandlerMin(counter.countMin.bind(counter));
    });
  }

  static _handleContentClick(event) {
    event.currentTarget.firstElementChild.classList.toggle('dropdown__text_border');
    event.currentTarget.nextElementSibling.classList.toggle('dropdown__items-display');
  }
}
