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

    buttonsPlus.forEach((element, index) => {
      this.eventIter[index] = new EventIter(parent);
      element.addEventListener('click', this.eventIter[index].plusIteration.bind(this.eventIter[index]));
    });

    buttonsMin.forEach((element, index) => {
      element.addEventListener('click', this.eventIter[index].minIteration.bind(this.eventIter[index]));
    });
  }
}
