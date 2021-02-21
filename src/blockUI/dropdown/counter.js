export default class Counter {
  constructor({
    dropdownText,
    buttonCancel,
    buttonEnter,
    numberNodes,
    dropdownItems,
  }) {
    this.dropdownText = dropdownText;
    this.numberNodes = numberNodes;
    this.dropdownItems = dropdownItems;
    this.buttonCancel = buttonCancel;
    this.buttonEnter = buttonEnter;
    this.count = 0;
    this._addHandler();
  }

  countPlus() {
    this.count += 1;
    this._equal();
  }

  countMin() {
    this.count -= 1;
    this._equal();
  }

  resetValues() {
    this.numberNodes.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.innerText = '0';
      // eslint-disable-next-line no-param-reassign
      element.previousElementSibling.disabled = true;
      this.dropdownText.value = 'Сколько гостей';
      this.count = 0;
      this.buttonCancel.innerText = '';
    });
  }

  _addHandler() {
    this.numberNodes = [].slice.call(this.numberNodes);
    this.buttonCancel.addEventListener('click', this.resetValues.bind(this));
    this.buttonEnter.addEventListener('click', this._hideBlock.bind(this));
  }

  _hideBlock() {
    this.dropdownItems.classList.toggle('dropdown__items-display');
  }

  _equal() {
    if (this.count > 0) {
      this.buttonCancel.innerText = 'Очистить';
      if (this.count > 1) {
        if (this.count > 4) {
          if (this.count > 20) {
            if (this.count % 10 > 0) {
              if (this.count % 10 > 1) {
                if (this.count % 10 > 4) {
                  this.dropdownText.value = `${String(this.count)} гостей`;
                } else {
                  this.dropdownText.value = `${String(this.count)} гостя`;
                }
              } else {
                this.dropdownText.value = `${String(this.count)} гость`;
              }
            } else {
              this.dropdownText.value = `${String(this.count)} гостей`;
            }
          } else {
            this.dropdownText.value = `${String(this.count)} гостей`;
          }
        } else {
          this.dropdownText.value = `${String(this.count)} гостя`;
        }
      } else {
        this.dropdownText.value = `${String(this.count)} гость`;
      }
    } else {
      this.dropdownText.value = 'Сколько гостей';
      this.buttonCancel.value = '';
    }
  }
}
