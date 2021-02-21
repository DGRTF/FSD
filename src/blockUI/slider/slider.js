import 'ion-rangeslider';

export default class Slider {
  constructor({
    sliderElement, from = 5000, to = 10000, max = 16000,
  }) {
    this.sliderElement = sliderElement;
    this.from = from;
    this.to = to;
    this.max = max;
    this._initialize();
  }

  _initialize() {
    this.sliderView = this.sliderElement.querySelector('.js-slider__range-number');
    // eslint-disable-next-line no-undef
    $(this.sliderElement).find('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 0,
      max: this.max,
      from: this.from,
      to: this.to,
      hide_min_max: true,
      hide_from_to: true,
      onChange: this._changeRange.bind(this),
      onStart: this._changeRange.bind(this),
    });
  }

  _changeRange(data) {
    this.sliderView.innerText = `${data.from_pretty}₽ - ${data.to_pretty}₽`;
  }
}
