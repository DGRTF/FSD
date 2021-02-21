import './search.scss';
import Dropdown from '../../blockUI/dropdown/dropdown';
import Slider from '../../blockUI/slider/slider';
import Comfort from '../../blockUI/comfort/comfort';
import PresentRoom from '../../blockUI/present-room/present-room';

(function initSearch() {
  const dropdown = document.querySelector('.dropdown');
  // eslint-disable-next-line no-new
  new Dropdown(dropdown);

  const sliderElement = document.querySelector('.slider');
  // eslint-disable-next-line no-new
  new Slider({ sliderElement });

  const parentComfortContainer = document.querySelector('.search__drop-list');
  // eslint-disable-next-line no-new
  new Comfort(parentComfortContainer);

  const presentRooms = document.querySelectorAll('.present-room');

  presentRooms.forEach((presentRoom) => {
    // eslint-disable-next-line no-new
    new PresentRoom(presentRoom);
  });
}());
