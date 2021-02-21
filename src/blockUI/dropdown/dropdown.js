import Iteration from '../iteration/iteration';
import Counter from './counter';

class Dropdown {
  constructor() {
    this._initialize();
  }

  _initialize() {
    this.dropdown = document.querySelectorAll('.js-dropdown');
    this.dropdown = [].slice.call(this.dropdown);

    this.dropdown.forEach((element) => {
      this.iteration = new Iteration(element);
      const search = Dropdown._searchElement(element);
      this._addHandlers(search);
      search.contentHeader.addEventListener('click', Dropdown.show);
    });
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

  static show(event) {
    event.currentTarget.classList.toggle('dropdown__content-border');
    event.currentTarget.nextElementSibling.classList.toggle('dropdown__items-display');
  }
}

// eslint-disable-next-line no-new
new Dropdown();
