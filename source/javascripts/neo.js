$(function() {

var fixed_header = $('.sticky');
var main_text = $('#main_text');
var sticky_navigation_offset_top = fixed_header.offset().top;

var sticky_navigation = function() {
    var scroll_top = $(window).scrollTop();
    var offset = 0

    if($(window).width() > 979) {
      offset = 40;
    }

    if(scroll_top > sticky_navigation_offset_top - offset) {
      fixed_header.addClass('fixed');
      main_text.addClass('offset3');
    } else {
      fixed_header.removeClass('fixed');
      main_text.removeClass('offset3');
    }
  };

sticky_navigation();$(window).scroll(_.throttle(sticky_navigation, 50));

});