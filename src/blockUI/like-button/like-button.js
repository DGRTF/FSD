class LikeButton {
  constructor() {
    this._initialize();
  }

  _initialize() {
    this.mainElement = document.querySelectorAll('.like-button');
    this.mainElement.forEach((element) => {
      element.addEventListener('submit', this._changeContent);
    });
  }

  static _changeContent(event) {
    event.preventDefault();
    const number = parseInt(event.currentTarget.querySelector('.like-button__number').innerText, 10) + 1;
    const numberElement = event.currentTarget.querySelector('.like-button__number');
    numberElement.parentElement.classList.toggle('like-button__button-like');
    numberElement.innerText = String(number);
  }
}

// eslint-disable-next-line no-new
new LikeButton();
