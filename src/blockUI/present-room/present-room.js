import "slick-carousel";

class PresentRoom {
  constructor() {
    this._init();
  }

  _init() {
    $(document).ready(function () {
      $('.present-room__img').slick({
        dots: true,
        nextArrow: "<button class='present-room__slick-next'>chevron_right</button>",
        prevArrow: '<button type = "button" class = "present-room__slick-prev">chevron_left</button>' ,
      });
    });
  }
}

new PresentRoom();