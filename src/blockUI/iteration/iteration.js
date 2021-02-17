import EventIter from './eventIter';

export default class Iteration {
  constructor(container) {
    this.container = container;
    this.eventIter = [3];
    this.count = 0;
    this._iteration();
  }

  _iteration() {
    let buttonsPlus = this.container.querySelectorAll('.js-iteration__button-plus');
    let buttonsMin = this.container.querySelectorAll('.js-iteration__button-min');

    const parent = buttonsMin[0].parentNode.parentNode;

    buttonsPlus = [].slice.call(buttonsPlus);
    buttonsPlus.forEach((element) => {
      this.eventIter[this.count] = new EventIter(parent);
      element.addEventListener('click', this.eventIter[this.count]._plus.bind(this.eventIter[this.count]));
      this.count += 1;
    });

    this.count = 0;

    buttonsMin = [].slice.call(buttonsMin);
    buttonsMin.forEach((element) => {
      element.addEventListener('click', this.eventIter[this.count]._min.bind(this.eventIter[this.count]));
      this.count += 1;
    });
  }
}
