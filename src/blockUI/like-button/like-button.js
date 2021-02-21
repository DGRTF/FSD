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
    const likeCount = parseInt(event.currentTarget.querySelector('.like-button__number').innerText, 10) + 1;
    const likeCountElement = event.currentTarget.querySelector('.like-button__number');
    likeCountElement.parentElement.classList.toggle('like-button__button-like');
    likeCountElement.innerText = String(likeCount);
  }
}

// eslint-disable-next-line no-new
new LikeButton();
