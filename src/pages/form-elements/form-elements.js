import './form-elements.scss';
import '../../blockUI/dropdown/dropdown';
import SliderInit from '../../blockUI/slider/sliderInit';
import '../../blockUI/like-button/like-button';
import '../../blockUI/comfort/comfort';
import '../../blockUI/calendar/calendar';

// eslint-disable-next-line no-new
new SliderInit({});

(function buttonDisable() {
  const containerButton = document.querySelector('.form-elements__div-button-d');
  const button = containerButton.querySelector('.button');
  button.disabled = true;

  const containerButtonBorder = document.querySelector('.form-elements__div-button-border-d');
  const buttonBorder = containerButtonBorder.querySelector('.button-border');
  buttonBorder.disabled = true;
}());
