import "./test.scss";
import { StatisticVotes } from "./../../blockUI/statistic-votes/statistic-votes.js";

let parentVotes = document.querySelector('.cards');
console.warn(parentVotes);
let data = [0, 15, 15, 30];
let statisticVotes = new StatisticVotes(parentVotes, data);