import './current-room.scss';
import '../../blockUI/comment/comment';
import '../../blockUI/calculate-price/calculate-price';
import StatisticVotes from '../../blockUI/statistic-votes/statistic-votes';

const parentVotes = document.querySelector('.js-current-room__impressions');

const data = [0, 15, 15, 30];
// eslint-disable-next-line no-new
new StatisticVotes(parentVotes, data);
