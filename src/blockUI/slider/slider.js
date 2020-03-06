
import 'ion-rangeslider';

class Slider {
    constructor() {
        this.from = 5000;
        this.to = 10000;
        this.slider;
        this.initialize();
    }

    initialize() {
        this.slider = document.querySelector('.slider__range-number');
        jQuery(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 16000,
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

let l = new Slider();