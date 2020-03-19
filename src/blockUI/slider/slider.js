import 'ion-rangeslider';

class Slider {
    constructor({ element, from, to, max }) {
        this.element = element;
        this.from = from;
        this.to = to;
        this.max = max;
        this.slider;
        this._initialize();
    }

    _initialize() {
        this.slider = this.element.querySelector('.js-slider__range-number');
        $(this.element).find(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: this.max,
            from: this.from,
            to: this.to,
            hide_min_max: true,
            hide_from_to: true,
            onChange: this._price.bind(this),
            onStart: this._price.bind(this)
        });
    }

    _price(data) {
        this.slider.innerText = data.from_pretty + '₽ - ' + data.to_pretty + '₽';
    }
}


class SliderInit {
    constructor({ from = 5000, to = 10000, max = 16000 }) {
        this.from = from;
        this.to = to;
        this.max = max;
        this._initialize();

    }

    _initialize() {
        let calendarArr = $(".js-slider");
        calendarArr.each((index, element1) => {
            new Slider({ element: element1, from: this.from, to: this.to, max: this.max });
        })
    }
}


export { SliderInit };