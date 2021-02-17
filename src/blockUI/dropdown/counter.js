export default class Counter {
  constructor({
    dropdown__divText: dropdownText,
    buttonCancel,
    buttonEnter,
    numberDivArr,
    dropdown__divItems: dropdownItems,
  }) {
    this.dropdown__divText = dropdownText;
    this.numberDivArr = numberDivArr;
    this.dropdown__divItems = dropdownItems;
    this.buttonCancel = buttonCancel;
    this.buttonEnter = buttonEnter;
    this.count = 0;
    this._addHandler();
  }

  counterPlus() {
    this.count += 1;
    this._equal();
  }

  counterMin() {
    this.count -= 1;
    this._equal();
  }

  resetValues() {
    this.numberDivArr.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.innerText = '0';
      // eslint-disable-next-line no-param-reassign
      element.previousElementSibling.disabled = true;
      this.dropdown__divText.value = 'Сколько гостей';
      this.count = 0;
      this.buttonCancel.innerText = '';
    });
  }

  _addHandler() {
    this.numberDivArr = [].slice.call(this.numberDivArr);
    this.buttonCancel.addEventListener('click', this.resetValues.bind(this));
    this.buttonEnter.addEventListener('click', this._hideBlock.bind(this));
  }

  _hideBlock() {
    this.dropdown__divItems.classList.toggle('dropdown__items-display');
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
                  this.dropdown__divText.value = `${String(this.count)} гостей`;
                } else {
                  this.dropdown__divText.value = `${String(this.count)} гостя`;
                }
              } else {
                this.dropdown__divText.value = `${String(this.count)} гость`;
              }
            } else {
              this.dropdown__divText.value = `${String(this.count)} гостей`;
            }
          } else {
            this.dropdown__divText.value = `${String(this.count)} гостей`;
          }
        } else {
          this.dropdown__divText.value = `${String(this.count)} гостя`;
        }
      } else {
        this.dropdown__divText.value = `${String(this.count)} гость`;
      }
    } else {
      this.dropdown__divText.value = 'Сколько гостей';
      this.buttonCancel.value = '';
    }
  }
}
