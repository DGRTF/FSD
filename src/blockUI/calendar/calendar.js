import 'air-datepicker';


class Calendar {
    constructor() {
        this.initialize();
        this.calendar;
    }

    initialize() {
        this.calendar1 = $('#minMaxExample').datepicker({
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
        // document.querySelector(".datepicker--button").style.display = "none";
        document.querySelector(".datepicker--buttons").innerHTML = "<div class='calendar__clear'>Очистить</div><div class='calendar__celect'>Применить</div>";
        // document.querySelector(".datepicker--buttons").innerHTML = "<button class='calendar__clear'>Очистить</button>";
        document.querySelector(".calendar__celect").addEventListener("click", this.setValue.bind(this));
        document.querySelector(".calendar__clear").addEventListener("click", this.clearDate.bind(this));
        document.querySelector(".calendar__from").addEventListener("click", this.showCalendar.bind(this));
        document.querySelector(".calendar__to").addEventListener("click", this.showCalendar.bind(this));
        this.calendar1.hide();
    }

    setValue() {
        if (typeof (this.calendar.selectedDates[0]) == "undefined") {
            let currentDate = new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear();
            document.querySelector(".calendar__from").value = currentDate;
            document.querySelector(".calendar__to").value = currentDate;
        }
        else {
            let start = this.calendar.selectedDates[0];
            let startStr = start.getDate() + "." + start.getMonth() + "." + start.getFullYear();
            let end = this.calendar.selectedDates[this.calendar.selectedDates.length - 1];
            let endStr = end.getDate() + "." + end.getMonth() + "." + end.getFullYear();
            document.querySelector(".calendar__from").value = startStr;
            document.querySelector(".calendar__to").value = endStr;
        }
        this.calendar1.hide();
    }

    clearDate() {
        this.calendar.clear();
        document.querySelector(".calendar__from").value = "";
        document.querySelector(".calendar__to").value = "";
    }

    showCalendar() {
        this.calendar1.show();
    }
}

let c = new Calendar();