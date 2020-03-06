

class EventIter {
    constructor(parentContainer) {
        this.parentContainer = parentContainer;
        this.eventPlus = null;
        this.eventMin = null;
    }

    plus() {
        let content = event.currentTarget.previousSibling.previousSibling;
        let text = String(parseInt(content.innerText) + 1);
        content.innerText = text;

        this.eventPlus(); // вызываем событие
        if (text !== '0') {
            content.previousSibling.previousSibling.disabled = false;
        }
    }


    min() {
        let content = event.currentTarget.nextSibling.nextSibling;
        let text = String(parseInt(content.innerText) - 1);
        content.innerText = text;
        this.eventMin(); // вызываем событие
        if (text === '0') {
            event.currentTarget.disabled = true;
        }
    }

    handlerPlus(handler) {
        this.eventPlus = handler;
    }

    handlerMin(handler) {
        this.eventMin = handler;
    }
}



class Iteration {

    constructor(container) {
        this.container = container;
        this.iteration();
        this.eventIter;
    }
    iteration() {
        let buttonsPlus = this.container.querySelectorAll('.iteration__button-plus');
        let buttonsMin = this.container.querySelectorAll('.iteration__button-min');

        let parent = buttonsMin[0].parentNode.parentNode;
        this.eventIter = new EventIter(parent);

        buttonsPlus = [].slice.call(buttonsPlus);
        buttonsPlus.forEach(element => {
            element.addEventListener("click", this.eventIter.plus.bind(this.eventIter));
        });

        buttonsMin = [].slice.call(buttonsMin);
        buttonsMin.forEach(element => {
            element.addEventListener("click", this.eventIter.min.bind(this.eventIter));
        });
    }
}


export { Iteration };