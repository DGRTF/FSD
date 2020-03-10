import "./../iteration/iteration.js"
import { Iteration } from "./../iteration/iteration.js"


class Counter {
    constructor({ dropdown__divText, buttonCancel, numberDivArr }) {
        this.dropdown__divText = dropdown__divText;
        this.numberDivArr = numberDivArr;
        this.buttonCancel = buttonCancel;
        this.count = 0;
        this._addHandler();
    }

    counterPlus() {
        this.count = this.count + 1;
        this._equal();
    }

    counterMin() {
        this.count = this.count - 1;
        this._equal();
    }

    resetValues() {
        this.numberDivArr.forEach(element => {
            element.innerText = '0';
            element.previousSibling.previousSibling.disabled = true;
            this.dropdown__divText.innerText = 'Сколько гостей';
            this.count = 0;
            this.buttonCancel.innerText = '';
        });
    }

    _addHandler() {
        this.numberDivArr = [].slice.call(this.numberDivArr);
        this.buttonCancel.addEventListener('click', this.resetValues.bind(this));
    }

    _equal() {
        if (this.count > 0) {
            this.buttonCancel.innerText = "Очистить"
            if (this.count > 1) {
                if (this.count > 4) {
                    if (this.count > 20) {
                        if (this.count % 10 > 0) {
                            if (this.count % 10 > 1) {
                                if (this.count % 10 > 4) {
                                    this.dropdown__divText.innerText = String(this.count) + ' гостей'
                                }
                                else {
                                    this.dropdown__divText.innerText = String(this.count) + ' гостя';
                                }
                            }
                            else {
                                this.dropdown__divText.innerText = String(this.count) + ' гость';
                            }
                        }
                        else {
                            this.dropdown__divText.innerText = String(this.count) + ' гостей';
                        }
                    }
                    else {
                        this.dropdown__divText.innerText = String(this.count) + ' гостей';
                    }
                }
                else {
                    this.dropdown__divText.innerText = String(this.count) + ' гостя';
                }
            }
            else {
                this.dropdown__divText.innerText = String(this.count) + " гость";
            }
        }
        else {
            this.dropdown__divText.innerText = 'Сколько гостей';
            this.buttonCancel.innerText = ""
        }
    }
}


class Dropdown {
    constructor() {
        this._initialize();
        this.dropdown;
    }

    _initialize() {
        this.dropdown = document.querySelectorAll('.js-dropdown');
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
            buttonCancel: element.querySelector('.js-dropdown__div-cancel'),
            numberDivArr: element.querySelectorAll('.js-iteration__div-num'),
            dropdown__divText: element.querySelector('.js-dropdown__div-text'),
            contentHeader: element.querySelector('.js-dropdown__div-content'),
        }
    }

    _addHandlers(searchElement) {
        let counter = new Counter(searchElement);
        this.iteration.eventIter.handlerPlus(counter.counterPlus.bind(counter));
        this.iteration.eventIter.handlerMin(counter.counterMin.bind(counter));
    }

    show() {
        event.currentTarget.nextSibling.nextSibling.classList.toggle("dropdown__div-items-display");
    }
}



export { Dropdown };