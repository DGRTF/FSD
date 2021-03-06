import 'chart.js';

export default class StatisticVotes {
  constructor(statisticVotesElement, data) {
    this.statisticVotesElement = statisticVotesElement;
    this.data = data;
    this._init();
    this._setNumberVotes();
  }

  _init() {
    const context = this.statisticVotesElement.querySelector('.statistic-votes__canvas').getContext('2d');

    // eslint-disable-next-line no-new
    new Chart(context, {
      type: 'doughnut',
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green'],
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
        tooltips: {
          enabled: false,
        },
      },
    });
  }

  _setNumberVotes() {
    const countVotes = this.statisticVotesElement.querySelector('.statistic-votes__number');
    let votes = 0;

    this.data.forEach((el) => {
      votes += el;
    });

    countVotes.innerText = votes;
  }
}
