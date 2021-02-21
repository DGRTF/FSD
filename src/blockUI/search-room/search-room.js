import Dropdown from '../dropdown/dropdown';
import Calendar from '../calendar/calendar';

export default class SearchRoom {
  constructor(searchRoomElement) {
    SearchRoom._initialize(searchRoomElement);
  }

  static _initialize(searchRoomElement) {
    const dropdownElement = searchRoomElement.querySelector('.js-dropdown');
    // eslint-disable-next-line no-new
    new Dropdown(dropdownElement);

    const calendarElement = searchRoomElement.querySelector('.js-calendar');
    // eslint-disable-next-line no-new
    new Calendar(calendarElement);
  }
}
