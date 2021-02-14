

class EventIter {
  constructor(parentContainer) {
    this.parentContainer = parentContainer;
    this.eventPlus = null;
    this.eventMin = null;
    this.parameter;
  }

  _plus() {
    let content = event.currentTarget.previousSibling.previousSibling;
    let text = String(parseInt(content.innerText) + 1);
    content.innerText = text;
    if (this.eventPlus !== null)
      this.eventPlus(this.parameter);
    if (text !== '0') {
      content.previousSibling.previousSibling.disabled = false;
    }
  }


  _min() {
    let content = event.currentTarget.nextSibling.nextSibling;
    let text = String(parseInt(content.innerText) - 1);
    content.innerText = text;
    if (this.eventMin !== null)
      this.eventMin(this.parameter);
    if (text === '0') {
      event.currentTarget.disabled = true;
    }
  }

  _handlerPlus(func, a) {
    this.parameter = a;
    this.eventPlus = func;
  }

  _handlerMin(func, a) {
    this.parameter = a;
    this.eventMin = func;
  }
}



class Iteration {

  constructor(container) {
    this.container = container;
    this.eventIter = [3];
    this.count = 0;
    this._iteration();
  }

  _iteration() {
    let buttonsPlus = this.container.querySelectorAll('.js-iteration__button-plus');
    let buttonsMin = this.container.querySelectorAll('.js-iteration__button-min');

    let parent = buttonsMin[0].parentNode.parentNode;

    buttonsPlus = [].slice.call(buttonsPlus);
    buttonsPlus.forEach(element => {
      this.eventIter[this.count] = new EventIter(parent);
      element.addEventListener("click", this.eventIter[this.count]._plus.bind(this.eventIter[this.count]));
      this.count++;
    });

    this.count = 0;

    buttonsMin = [].slice.call(buttonsMin);
    buttonsMin.forEach(element => {
      element.addEventListener("click", this.eventIter[this.count]._min.bind(this.eventIter[this.count]));
      this.count++;
    });
  }
}


export { Iteration };