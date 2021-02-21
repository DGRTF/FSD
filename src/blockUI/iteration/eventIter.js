export default class EventIter {
  constructor(parentContainer) {
    this.parentContainer = parentContainer;
    this.eventPlus = null;
    this.eventMin = null;
  }

  plusIteration(event) {
    const content = event.currentTarget.previousElementSibling;
    const text = String(parseInt(content.innerText, 10) + 1);
    content.innerText = text;
    if (this.eventPlus !== null) this.eventPlus(this.parameter);
    if (text !== '0') {
      content.previousElementSibling.disabled = false;
    }
  }

  minIteration(event) {
    const content = event.currentTarget.nextElementSibling;
    const text = String(parseInt(content.innerText, 10) - 1);
    content.innerText = text;

    if (this.eventMin !== null) this.eventMin(this.parameter);

    if (text === '0') {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.disabled = true;
    }
  }

  addHandlerPlus(funcPlusIteration, parameter) {
    this.parameter = parameter;
    this.eventPlus = funcPlusIteration;
  }

  addHandlerMin(funcLessIteration, parameter) {
    this.parameter = parameter;
    this.eventMin = funcLessIteration;
  }
}
