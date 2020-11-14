import './form-elements.scss';
import '../../blockUI/dropdown/dropdown.js';
import { SliderInit } from '../../blockUI/slider/slider.js';
import "../../blockUI/like-button/like-button.js";
import "./../../blockUI/comfort/comfort.js";
import './../../blockUI/calendar/calendar.js';

new SliderInit({});

(function buttonDisable(){
  const containerButton = document.querySelector('.form-elements__div-button-d');
  const button = containerButton.querySelector('.button');
  button.disabled = true;

  const containerButtonBorder = document.querySelector('.form-elements__div-button-border-d');
  const buttonBorder = containerButtonBorder.querySelector('.button-border');
  buttonBorder.disabled = true;
})
  ();