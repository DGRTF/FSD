import ComfortItems from './comfortItem';

export default class ComfortInit {
  constructor({ dropdownText }, iteration) {
    this.dropdownText = dropdownText;
    this.iteration = iteration;
    this.names = [
      [' спальня', ' спальни', ' спален'],
      [' кровать', ' кровати', ' кроватей'],
      [' ванная комната', ' ванные комнаты', ' ванныx комнат'],
    ];
    this.count = 0;
    this.comforts = [];
    this.commonStr = '';
    this._init();
  }

  _init() {
    this.names.forEach((item, index) => {
      const comfortItems = new ComfortItems(item);
      this.comforts.push(comfortItems);
      this.iteration.eventIter[index].addHandlerPlus(this.pushPlus.bind(this), index);
      this.iteration.eventIter[index].addHandlerMin(this.pushMin.bind(this), index);
    });
  }

  pushPlus(count) {
    this.comforts[count].countPlus();
    this.commonStr = '';

    this.comforts.forEach((item) => {
      this.commonStr += item.resultStr;
    });

    if (this.commonStr.length > 20) this.dropdownText.value = `${this.commonStr.substring(0, 20)}...`;
    else this.dropdownText.value = this.commonStr;
  }

  pushMin(count) {
    this.comforts[count].countMin();
    this.commonStr = '';

    this.comforts.forEach((item) => {
      this.commonStr += item.resultStr;
    });

    if (this.commonStr === '') {
      this.dropdownText.value = 'Удобства';
      return;
    }

    if (this.commonStr.length > 20) {
      this.dropdownText.value = `${this.commonStr.substring(0, 20)}...`;
      return;
    }

    this.dropdownText.value = this.commonStr;
  }
}
