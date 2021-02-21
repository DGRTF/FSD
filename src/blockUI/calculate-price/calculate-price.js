import Dropdown from '../dropdown/dropdown';
import Calendar from '../calendar/calendar';

export default class CalculatePrice {
  constructor(calculatePriceElement) {
    CalculatePrice._initialize(calculatePriceElement);
  }

  static _initialize(calculatePriceElement) {
    const dropdownElement = calculatePriceElement.querySelector('.dropdown');
    // eslint-disable-next-line no-new
    new Dropdown(dropdownElement);

    const calendarElement = calculatePriceElement.querySelector('.calendar');
    // eslint-disable-next-line no-new
    new Calendar(calendarElement);
  }
}
