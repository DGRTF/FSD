import EventIter from './eventIter';

export default class Iteration {
  constructor(ParentContainer) {
    this.ParentContainer = ParentContainer;
    this.eventIter = [3];
    this._iteration();
  }

  _iteration() {
    const buttonsPlus = this.ParentContainer.querySelectorAll('.js-iteration__button-plus');
    const buttonsMin = this.ParentContainer.querySelectorAll('.js-iteration__button-min');

    const parent = buttonsMin[0].parentNode.parentNode;

    buttonsPlus.forEach((button, index) => {
      this.eventIter[index] = new EventIter(parent);
      button.addEventListener('click', this.eventIter[index].iterationPlus.bind(this.eventIter[index]));
    });

    buttonsMin.forEach((button, index) => {
      button.addEventListener('click', this.eventIter[index].iterationMin.bind(this.eventIter[index]));
    });
  }
}
