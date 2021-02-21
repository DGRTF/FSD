import './landing.scss';

import SearchRoom from '../../blockUI/search-room/search-room';

(function initLanding() {
  const searchRoom = document.querySelector('.search-room');
  // eslint-disable-next-line no-new
  new SearchRoom(searchRoom);
}());
