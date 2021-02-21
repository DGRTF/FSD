import './registration.scss';

class Account {
  constructor() {
    this._initialize();
  }

  _initialize() {
    const buttonMenu = document.querySelector('.header__menu');
    buttonMenu.querySelector('.button-border').addEventListener('click', this._handleButtonBorderClick.bind(this));
    buttonMenu.querySelector('.button').addEventListener('click', this._handleButtonClick.bind(this));
    this.registration = document.querySelector('.registration__registration');
    this.logIn = document.querySelector('.registration__entry-form');
  }

  _handleButtonBorderClick() {
    this.registration.classList.add('registration__registration-display');
    this.logIn.classList.add('registration__entry-form-display');
  }

  _handleButtonClick() {
    this.logIn.classList.remove('registration__entry-form-display');
    this.registration.classList.remove('registration__registration-display');
  }
}

// eslint-disable-next-line no-new
new Account();
