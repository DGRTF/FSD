import './cards.scss';
import Calendar from '../../blockUI/calendar/calendar';
import SearchRoom from '../../blockUI/search-room/search-room';
import CalculatePrice from '../../blockUI/calculate-price/calculate-price';
import PresentRoom from '../../blockUI/present-room/present-room';

(function initCards() {
  const calendarElement = document.querySelector('.calendar');
  // eslint-disable-next-line no-new
  new Calendar(calendarElement);

  const searchRoom = document.querySelector('.search-room');
  // eslint-disable-next-line no-new
  new SearchRoom(searchRoom);

  const calculatePrice = document.querySelector('.calculate-price');
  // eslint-disable-next-line no-new
  new CalculatePrice(calculatePrice);

  const presentRooms = document.querySelectorAll('.present-room');

  presentRooms.forEach((presentRoom) => {
    // eslint-disable-next-line no-new
    new PresentRoom(presentRoom);
  });
}());
