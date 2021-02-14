import "./../iteration/iteration.js"
import { Iteration } from "./../iteration/iteration.js"

class ComfortItems {
  constructor(nameArr) {
    this.nameArr = nameArr;
    this.count = 0;
    this.resultStr = "";
  }

  counterPlus() {
    this.count = this.count + 1;
    this._equal();
  }

  counterMin() {
    this.count = this.count - 1;
    this._equal();
  }

  _equal() {
    if (this.count > 0) {
      if (this.count > 1) {
        if (this.count > 4) {
          if (this.count > 20) {
            if (this.count % 10 > 0) {
              if (this.count % 10 > 1) {
                if (this.count % 10 > 4) {
                  this.resultStr = " " + String(this.count) + this.nameArr[2]
                }
                else {
                  this.resultStr = " " + String(this.count) + this.nameArr[1];
                }
              }
              else {
                this.resultStr = " " + String(this.count) + this.nameArr[0];
              }
            }
            else {
              this.resultStr = " " + String(this.count) + this.nameArr[2];
            }
          }
          else {
            this.resultStr = " " + String(this.count) + this.nameArr[2];
          }
        }
        else {
          this.resultStr = " " + String(this.count) + this.nameArr[1];
        }
      }
      else {
        this.resultStr = " " + String(this.count) + this.nameArr[0];
      }
    }
    else {
      this.resultStr = "";
    }
  }
}

class Comfort {
  constructor({ dropdown__divText, numberDivArr, dropdown__divItems }, iteration) {
    this.dropdown__divText = dropdown__divText;
    this.iteration = iteration;
    this.nameArr2 = [
      [" спальня", " спальни", " спален"],
      [" кровать", " кровати", " кроватей"],
      [" ванная комната", " ванные комнаты", " ванныx комнат"]
    ];
    this.count = 0;
    this.comfortItemsArr = [];
    this.commonStr = "";
    this._init();
  }

  _init() {
    this.nameArr2.forEach((item, index) => {
      let comfortItems = new ComfortItems(item);
      this.comfortItemsArr.push(comfortItems);
      this.iteration.eventIter[index]._handlerPlus(this.pushPlus.bind(this), index);
      this.iteration.eventIter[index]._handlerMin(this.pushMin.bind(this), index);
    });
  }

  pushPlus(count) {
    this.comfortItemsArr[count].counterPlus();
    this.commonStr = "";

    this.comfortItemsArr.forEach((item) => {
      this.commonStr += item.resultStr;
    });

    if (this.commonStr.length > 20)
      this.dropdown__divText.value = this.commonStr.substring(0, 20) + "...";
    else
      this.dropdown__divText.value = this.commonStr;
  }

  pushMin(count) {
    this.comfortItemsArr[count].counterMin();
    this.commonStr = "";

    this.comfortItemsArr.forEach((item) => {
      this.commonStr += item.resultStr;
    });
    
    if (this.commonStr === "")
      this.dropdown__divText.value = "Удобства";
    else
      if (this.commonStr.length > 20)
        this.dropdown__divText.value = this.commonStr.substring(0, 20) + "...";
      else
        this.dropdown__divText.value = this.commonStr;
  }
}


class ComfortInit {
  constructor() {
    this.dropdown;
    this._initialize();
  }

  _initialize() {
    this.dropdown = document.querySelectorAll('.js-comfort');
    this.dropdown = [].slice.call(this.dropdown);
    this.dropdown.forEach(element => {
      this._element(element);
    });
  }

  _element(element) {
    this.iteration = new Iteration(element);
    let search = this._searchElement(element);
    this._addHandlers(search);
    search.contentHeader.addEventListener("click", this.show);
  }

  _searchElement(element) {
    return {
      dropdown__divText: element.querySelector('.js-comfort__text'),
      contentHeader: element.querySelector('.js-comfort__content'),
    }
  }

  _addHandlers(searchElement) {
    let comfort = new Comfort(searchElement, this.iteration);
  }

  show() {
    event.currentTarget.classList.toggle("comfort__content-border");
    event.currentTarget.nextSibling.nextSibling.classList.toggle("comfort__items-display");
  }
}



new ComfortInit();