import './registration.scss';

class Account {
  constructor() {
    this._initialize();
  }

  _initialize() {
    const buttonMenu = document.querySelector('.header__menu');
    buttonMenu.querySelector('.button-border').addEventListener('click', this._openLogIn.bind(this));
    buttonMenu.querySelector('.button').addEventListener('click', this._openRegistration.bind(this));
    this.registration = document.querySelector('.registration__registration');
    this.logIn = document.querySelector('.registration__entry-form');
  }

  _openLogIn() {
    this.registration.classList.add('registration__registration-display');
    this.logIn.classList.add('registration__entry-form-display');
  }

  _openRegistration() {
    this.logIn.classList.remove('registration__entry-form-display');
    this.registration.classList.remove('registration__registration-display');
  }
}

// eslint-disable-next-line no-new
new Account();
