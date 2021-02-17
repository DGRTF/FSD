import 'slick-carousel';

class PresentRoom {
  constructor() {
    PresentRoom._init();
  }

  static _init() {
    // eslint-disable-next-line no-undef
    $(document).ready(() => {
      // eslint-disable-next-line no-undef
      $('.present-room__img').slick({
        dots: true,
        nextArrow: "<button class='present-room__slick-next'>chevron_right</button>",
        prevArrow: '<button type = "button" class = "present-room__slick-prev">chevron_left</button>',
      });
    });
  }
}

// eslint-disable-next-line no-new
new PresentRoom();
