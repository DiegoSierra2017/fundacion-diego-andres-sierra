(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.overlayer').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    galleryMasonary();
  });
  // Gallery Masonary
  function galleryMasonary() {
    // filter functions
    var $gridTwo = $(".masonary-wrapper");
    var filterFns = {};
    $gridTwo.isotope({
      itemSelector: '.masonary-item',
      masonry: {
        columnWidth: 0,
      }
    });
    // bind filter button click
    $('ul.filter-2').on('click', 'li', function () {
      var filterValueTwo = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValueTwo = filterFns[filterValueTwo] || filterValueTwo;
      $gridTwo.isotope({
        filter: filterValueTwo
      });
    });
    // change is-checked class on buttons
    $('.filter-2').each(function (i, buttonGroup) {
      var $buttonGroupTwo = $(buttonGroup);
      $buttonGroupTwo.on('click', 'li', function () {
        $buttonGroupTwo.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  $(document).ready(function () {
    // PoPuP 
    $('.popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    $('.ellepsis-bar').on('click', function (e) {
      var element = $('.header-top');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.slideUp(300, "swing");
        $('.overlayTwo').removeClass('active');
      } else {
        element.addClass('open');
        element.slideDown(300, "swing");
        $('.overlayTwo').addClass('active');
      }
    });
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //Header Bar
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    //Header Bar
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.menu').removeClass('active');
      $('.cart-sidebar-area').removeClass('active');
    })
    //Header Bar
    $('.overlayTwo').on('click', function () {
      $(this).removeClass('active');
      $('.header-top').slideUp(300, "swing");
    })
    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header-fixed fadeInUp");
      } else {
        fixed_top.removeClass("header-fixed fadeInUp");
      }
    });
    //Tab Section
    // $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').slideUp(600);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').slideDown(600);
      g.preventDefault();
    });

    $('.sponsor-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    $('.causes-slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $('.causes-next').on('click', function (e) {
      $('.causes-slider').slick('slickNext');
    });
    $('.causes-prev').on('click', function (e) {
      $('.causes-slider').slick('slickPrev');
    });
    // clients slider
    $('.clients-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        
      ]
    });
    $('.clients-next').on('click', function (e) {
      $('.clients-slider').slick('slickNext');
    });
    $('.clients-prev').on('click', function (e) {
      $('.clients-slider').slick('slickPrev');
    });


    // model option start here
    $('.view-modal').on('click', function () {
      $('.modal').addClass('show');
    });
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
    });
  });

  //skill bar 
  window.addEventListener('DOMContentLoaded', function () {
    const circle = new CircularProgressBar('pie');
    circle.initial();

    setInterval(() => {
      const options = {
        percent: Math.floor((Math.random() * 100) + 1)
      }
      //circle.animationTo(options);
    }, 2000);
  });


  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".bs-item").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");

      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

})(jQuery);
