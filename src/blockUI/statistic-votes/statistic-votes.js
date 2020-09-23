import 'chart.js';

class StatisticVotes {
  constructor(parentHTMLElement, data) {
    this.parentHTMLElement = parentHTMLElement;
    this.data = data;
    this._init();
    this._setNumberVotes();
  }

  _init() {
    let ctx = this.parentHTMLElement.querySelector('.statistic-votes__canvas').getContext('2d');

    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data:
            this.data,
          backgroundColor: [
            'rgb(144, 144, 144)',
            'rgb(188, 156, 255)',
            'rgb(111, 207, 151)',
            'rgb(255, 227, 156)',
          ],
        },
        ],
      },
      options: {
        cutoutPercentage: 90,
      }
    });
  }

  _setNumberVotes() {
    let numberVotes = this.parentHTMLElement.querySelector('.statistic-votes__number');
    let votes = 0;

    this.data.forEach(el => {
      votes += el;
    });

    numberVotes.innerText = votes;
  }
}

export { StatisticVotes };
