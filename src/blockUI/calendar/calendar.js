import 'air-datepicker';


class Calendar {
    constructor() {
        this.initialize();
        this.calendar;
        this.calendar1;
        this.jsCalendarFrom;
        this.jsCalendarTo;
    }

    initialize() {
        this.calendar1 = $('.js-calendar__plugin').datepicker({
            minDate: new Date(),
            clearButton: true,
            prevHtml: "<div>arrow_back</div>",
            nextHtml: "<div>arrow_forward</div>",
            onRenderCell: function (date, cellType) {
                return {
                    html: "<a>" + date.getDate() + "</a>"
                }
            },
        })
        this.calendar = this.calendar1.data("datepicker");
        document.querySelector(".datepicker--buttons").innerHTML = "<div class='calendar__button calendar__button-clear js-calendar__button-clear'>Очистить</div><div class='calendar__button calendar__button-select js-calendar__button-select'>Применить</div>";
        document.querySelector(".js-calendar__button-select").addEventListener("click", this.setValue.bind(this));
        document.querySelector(".js-calendar__button-clear").addEventListener("click", this.clearDate.bind(this));
        this.jsCalendarFrom = document.querySelector(".js-calendar__from");
        this.jsCalendarFrom.addEventListener("click", this.showCalendar.bind(this));
        this.jsCalendarTo = document.querySelector(".js-calendar__to");
        this.jsCalendarTo.addEventListener("click", this.showCalendar.bind(this));
        this.calendar1.hide();
    }

    setValue() {
        if (typeof (this.calendar.selectedDates[0]) == "undefined") {
            let date = new Date();
            let currentDate = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
            this.jsCalendarFrom.value = currentDate;
            this.jsCalendarTo.value = currentDate;
        }
        else {
            let start = this.calendar.selectedDates[0];
            let startStr = start.getDate() + "." + (start.getMonth()+1) + "." + start.getFullYear();
            let end = this.calendar.selectedDates[this.calendar.selectedDates.length - 1];
            let endStr = end.getDate() + "." + (end.getMonth()+1) + "." + end.getFullYear();
            this.jsCalendarFrom.value = startStr;
            this.jsCalendarTo.value = endStr;
        }
        this.calendar1.hide();
    }

    clearDate() {
        this.calendar.clear();
        this.jsCalendarFrom.value = "ДД.ММ.ГГГГ";
        this.jsCalendarTo.value = "ДД.ММ.ГГГГ";
    }

    showCalendar() {
        this.calendar1.show();
    }
}

let c = new Calendar();