import "./../iteration/iteration.js"
import { Iteration } from "./../iteration/iteration.js"


class Counter {
    constructor(dropdown__divText, buttonCancel, numberDivArr) {
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
            element.previousSibling.previousSibling.disabled=true;
            this.dropdown__divText.innerText = 'Сколько гостей';
            this.count=0;
            this.buttonCancel.innerText='';
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



function dropdown() {
    let dropdown = document.querySelectorAll('.dropdown');
    dropdown = [].slice.call(dropdown);

    dropdown.forEach(element => {
        let iteration = new Iteration(element);
        let ev = iteration.eventIter;    // объект класса с событием
        let divCancel = element.querySelector('.dropdown__div-cancel');
        let number_div = element.querySelectorAll('.iteration__div-num');
        let dropdown__divText = element.querySelector('.dropdown__div-text');
        let counter = new Counter(dropdown__divText, divCancel,number_div);
        ev.handlerPlus(counter.counterPlus.bind(counter));
        ev.handlerMin(counter.counterMin.bind(counter));
        let content = element.querySelector('.dropdown__div-content');
        content.addEventListener("click", show);
    });
}


function show() {
    if (event.currentTarget.nextSibling.nextSibling.style.display === "none" || event.currentTarget.nextSibling.nextSibling.style.display === '')
        event.currentTarget.nextSibling.nextSibling.style.display = "block";
    else
        event.currentTarget.nextSibling.nextSibling.style.display = "none";

}





dropdown();