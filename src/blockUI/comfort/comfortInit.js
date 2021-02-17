import ComfortItems from './comfortItem';

export default class ComfortInit {
  constructor({ dropdown__divText: dropdownText }, iteration) {
    this.dropdown__divText = dropdownText;
    this.iteration = iteration;
    this.nameArr2 = [
      [' спальня', ' спальни', ' спален'],
      [' кровать', ' кровати', ' кроватей'],
      [' ванная комната', ' ванные комнаты', ' ванныx комнат'],
    ];
    this.count = 0;
    this.comfortItemsArr = [];
    this.commonStr = '';
    this._init();
  }

  _init() {
    this.nameArr2.forEach((item, index) => {
      const comfortItems = new ComfortItems(item);
      this.comfortItemsArr.push(comfortItems);
      this.iteration.eventIter[index]._handlerPlus(this.pushPlus.bind(this), index);
      this.iteration.eventIter[index]._handlerMin(this.pushMin.bind(this), index);
    });
  }

  pushPlus(count) {
    this.comfortItemsArr[count].counterPlus();
    this.commonStr = '';

    this.comfortItemsArr.forEach((item) => {
      this.commonStr += item.resultStr;
    });

    if (this.commonStr.length > 20) this.dropdown__divText.value = `${this.commonStr.substring(0, 20)}...`;
    else this.dropdown__divText.value = this.commonStr;
  }

  pushMin(count) {
    this.comfortItemsArr[count].counterMin();
    this.commonStr = '';

    this.comfortItemsArr.forEach((item) => {
      this.commonStr += item.resultStr;
    });

    if (this.commonStr === '') this.dropdown__divText.value = 'Удобства';
    else
    if (this.commonStr.length > 20) this.dropdown__divText.value = `${this.commonStr.substring(0, 20)}...`;
    else this.dropdown__divText.value = this.commonStr;
  }
}
