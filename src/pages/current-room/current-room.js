import './current-room.scss';
import CalculatePrice from '../../blockUI/calculate-price/calculate-price';
import StatisticVotes from '../../blockUI/statistic-votes/statistic-votes';

(function initCurrentRoom() {
  const parentVotes = document.querySelector('.js-current-room__impressions');

  const data = [0, 15, 15, 30];
  // eslint-disable-next-line no-new
  new StatisticVotes(parentVotes, data);

  const calculatePrice = document.querySelector('.calculate-price');
  // eslint-disable-next-line no-new
  new CalculatePrice(calculatePrice);
}());
