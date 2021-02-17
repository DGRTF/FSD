import 'chart.js';

export default class StatisticVotes {
  constructor(parentHTMLElement, data) {
    this.parentHTMLElement = parentHTMLElement;
    this.data = data;
    this._init();
    this._setNumberVotes();
  }

  _init() {
    const ctx = this.parentHTMLElement.querySelector('.statistic-votes__canvas').getContext('2d');

    // eslint-disable-next-line no-new
    new Chart(ctx, {
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
      },
    });
  }

  _setNumberVotes() {
    const numberVotes = this.parentHTMLElement.querySelector('.statistic-votes__number');
    let votes = 0;

    this.data.forEach((el) => {
      votes += el;
    });

    numberVotes.innerText = votes;
  }
}
