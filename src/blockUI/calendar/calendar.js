import 'air-datepicker';
import Calendar from './calendarInit';

class CalendarInit {
  constructor() {
    CalendarInit._initialize();
  }

  static _initialize() {
    // eslint-disable-next-line no-undef
    const calendarArr = $('.js-calendar');

    calendarArr.each((index, element) => {
      // eslint-disable-next-line no-new
      new Calendar(element);
    });
  }
}

// eslint-disable-next-line no-new
new CalendarInit();
