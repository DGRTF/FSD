import Slider from './slider';

export default class SliderInit {
  constructor({ from = 5000, to = 10000, max = 16000 }) {
    this.from = from;
    this.to = to;
    this.max = max;
    this._initialize();
  }

  _initialize() {
    // eslint-disable-next-line no-undef
    const calendars = $('.js-slider');
    calendars.each((index, element1) => {
      // eslint-disable-next-line no-new
      new Slider({
        element: element1, from: this.from, to: this.to, max: this.max,
      });
    });
  }
}
