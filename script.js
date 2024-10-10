
//  Sliders Active Code
if ($.fn.owlCarousel) {
  var welcomeSlide = $('.hero-post-slides');
  var testiSlides = $('.testimonials-slides');
  var portfolioSlides = $('.portfolio-slides');

  welcomeSlide.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 15000,
    smartSpeed: 1000
  });

  testiSlides.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 700,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  });

  portfolioSlides.owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 700,
    center: true
  });
}

// Masonary Gallery Active Code
if ($.fn.imagesLoaded) {
  $('.alazea-portfolio').imagesLoaded(function () {
    // filter items on button click
    $('.portfolio-filter').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    // init Isotope
    var $grid = $('.alazea-portfolio').isotope({
      itemSelector: '.single_portfolio_item',
      percentPosition: true,
      masonry: {
        columnWidth: '.single_portfolio_item'
      }
    });
  });
}

// magnificPopup Active Code
if ($.fn.magnificPopup) {
  $('.portfolio-img, .product-img').magnificPopup({
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('.video-icon').magnificPopup({
    type: 'iframe'
  });
}

// prevent default a click
$('a[href="#"]').on('click', function ($) {
  $.preventDefault();
});

