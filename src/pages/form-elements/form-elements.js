import './form-elements.scss';
import Dropdown from '../../blockUI/dropdown/dropdown';
import Slider from '../../blockUI/slider/slider';
import Comfort from '../../blockUI/comfort/comfort';
import Calendar from '../../blockUI/calendar/calendar';

(function buttonDisable() {
  const calendarElement = document.querySelector('.calendar');
  // eslint-disable-next-line no-new
  new Calendar(calendarElement);

  const containerDropdownFirst = document.querySelector('.form-elements__dropdown1');
  // eslint-disable-next-line no-new
  new Dropdown(containerDropdownFirst);

  const containerDropdownSecond = document.querySelector('.form-elements__dropdown3');
  // eslint-disable-next-line no-new
  new Dropdown(containerDropdownSecond);

  const containerDropdown = document.querySelector('.form-elements__dropdown5');
  // eslint-disable-next-line no-new
  new Dropdown(containerDropdown);

  const sliderElement = document.querySelector('.slider');
  // eslint-disable-next-line no-new
  new Slider({ sliderElement });

  const parentComfort = document.querySelector('.form-elements__comfort');
  // eslint-disable-next-line no-new
  new Comfort(parentComfort);

  const parentComfortContainer = document.querySelector('.form-elements__comfort1');
  // eslint-disable-next-line no-new
  new Comfort(parentComfortContainer);
}());
