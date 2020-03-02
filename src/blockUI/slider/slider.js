
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
            onChange: this.Gena.bind(this),
            onStart: this.Gena.bind(this)
        });
    }

    Gena(data) {
        this.slider.innerText = data.from_pretty + '₽ - ' + data.to_pretty + '₽';
    }
}

let l = new Slider();