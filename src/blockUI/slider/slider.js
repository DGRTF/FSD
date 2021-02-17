import 'ion-rangeslider';

export default class Slider {
  constructor({
    element, from, to, max,
  }) {
    this.element = element;
    this.from = from;
    this.to = to;
    this.max = max;
    this._initialize();
  }

  _initialize() {
    this.slider = this.element.querySelector('.js-slider__range-number');
    // eslint-disable-next-line no-undef
    $(this.element).find('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 0,
      max: this.max,
      from: this.from,
      to: this.to,
      hide_min_max: true,
      hide_from_to: true,
      onChange: this._price.bind(this),
      onStart: this._price.bind(this),
    });
  }

  _price(data) {
    this.slider.innerText = `${data.from_pretty}₽ - ${data.to_pretty}₽`;
  }
}
