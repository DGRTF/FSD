import 'slick-carousel';

export default class PresentRoom {
  constructor(presentRoomElement) {
    PresentRoom._init(presentRoomElement);
  }

  static _init(presentRoomElement) {
    // eslint-disable-next-line no-undef
    $(document).ready(() => {
      // eslint-disable-next-line no-undef
      $(presentRoomElement).find('.present-room__img').slick({
        dots: true,
        nextArrow: "<button class='present-room__slick-next'>chevron_right</button>",
        prevArrow: '<button type = "button" class = "present-room__slick-prev">chevron_left</button>',
      });
    });
  }
}
