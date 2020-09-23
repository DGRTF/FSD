import "./current-room.scss"
import "./../../blockUI/comment/comment.js";
import "./../../blockUI/calculate-price/calculate-price";
import { StatisticVotes } from "./../../blockUI/statistic-votes/statistic-votes.js";

let parentVotes = document.querySelector('.js-current-room__impressions');
console.warn(parentVotes);
let data = [0, 15, 15, 30];
let statisticVotes = new StatisticVotes(parentVotes, data);