//swiper stop
$('.featured .card').hover(
  function () {
    swiper.autoplay.stop();
  },
  function () {
    swiper.autoplay.start();
  }
);
//for the filter gallery
$(document).ready(function () {
  let $btns = $('.gallery-cf .button-group button');

  $btns.click(function (e) {
    $('.gallery-cf .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.gallery-cf .grid').isotope({
      filter: selector,
    });
    return false;
  });
});
//to do something on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('#fixed-name').css({
        opacity: '1',
        animation: 'fixed-name-out 1s forwards 0s ease-in-out',
      }); 
      
      $('.backToTop').css('bottom', '3%');
      $('.section-indicator').css('opacity', '0');
    } else {
      $('#fixed-name').css({
        opacity: '1',
        animation: 'fixed-name-in 1s forwards 0s ease-in-out',
      });
      $('.backToTop').css('bottom', '-15%');
      $('.section-indicator').css('opacity', '1');
    }
  });
});
//for mobile device
$(document).ready(function () {
  $(window).on('resize', function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    //if the width is less than 600(Mobile Screen)
    if (newWindowWidth < 600) {
      $(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 30) {
            $('#fixed-name').css('opacity', '0');
            $('#fixed-socialMedia').css('opacity', '0');
            $('.section-indicator').css('opacity', '0');
          } else {
            $('#fixed-name').css('opacity', '1');
            $('.backToTop').css('bottom', '-15%');
            $('.section-indicator').css('opacity', '1');
            $('#fixed-socialMedia').css('opacity', '1');
          }
        });
      });
    }
  }
});
