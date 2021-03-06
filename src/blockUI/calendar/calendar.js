import 'air-datepicker';

export default class Calendar {
  constructor(calendarElement) {
    this.calendarElement = calendarElement;
    this._initialize();
  }

  _initialize() {
    // eslint-disable-next-line no-undef
    this.calendar = $(this.calendarElement).find('.js-calendar__plugin').datepicker({
      minDate: new Date(),
      clearButton: true,
      prevHtml: '<div>arrow_back</div>',
      nextHtml: '<div>arrow_forward</div>',
      onRenderCell(date) {
        return {
          html: `<a>${date.getDate()}</a>`,
        };
      },
    });

    this.calendarActionDate = this.calendar.data('datepicker');
    this.calendarElement.querySelector('.datepicker--buttons').innerHTML = "<div class='calendar__button calendar__button-clear js-calendar__button-clear'>Очистить</div><div class='calendar__button calendar__button-select js-calendar__button-select'>Применить</div>";
    this.calendarElement.querySelector('.js-calendar__button-select').addEventListener('click', this._handleButtonSelectClick.bind(this));
    this.calendarElement.querySelector('.js-calendar__button-clear').addEventListener('click', this._handleButtonClearClick.bind(this));
    this.jsCalendarFrom = this.calendarElement.querySelector('.js-calendar__from');
    this.jsCalendarFrom.addEventListener('click', this._handleFomToClick.bind(this));
    this.jsCalendarTo = this.calendarElement.querySelector('.js-calendar__to');
    this.jsCalendarTo.addEventListener('click', this._handleFomToClick.bind(this));

    this.jsCalendarLabelFrom = this.calendarElement.querySelector('.js-calendar__label-from');
    this.jsCalendarLabelFrom.addEventListener('click', this._handleFomToClick.bind(this));
    this.jsCalendarLabelTo = this.calendarElement.querySelector('.js-calendar__label-to');
    this.jsCalendarLabelTo.addEventListener('click', this._handleFomToClick.bind(this));

    this.calendar.hide();
  }

  _handleButtonSelectClick() {
    if (!this.calendarActionDate.selectedDates[0]) {
      const todayDate = new Date();
      const currentDate = `${todayDate.getDate()}.${todayDate.getMonth() + 1}.${todayDate.getFullYear()}`;
      this.jsCalendarFrom.value = currentDate;
      this.jsCalendarTo.value = currentDate;
    } else {
      const start = this.calendarActionDate.selectedDates[0];
      const startStr = `${start.getDate()}.${start.getMonth() + 1}.${start.getFullYear()}`;

      const endDate = this.calendarActionDate
        .selectedDates[this.calendarActionDate.selectedDates.length - 1];

      const endDateStr = `${endDate.getDate()}.${endDate.getMonth() + 1}.${endDate.getFullYear()}`;
      this.jsCalendarFrom.value = startStr;
      this.jsCalendarTo.value = endDateStr;
    }
    this.calendar.hide();
  }

  _handleButtonClearClick() {
    this.calendarActionDate.clear();
    this.jsCalendarFrom.value = 'ДД.ММ.ГГГГ';
    this.jsCalendarTo.value = 'ДД.ММ.ГГГГ';
    this.calendar.hide();
  }

  _handleFomToClick() {
    this.calendar.show();
  }
}
