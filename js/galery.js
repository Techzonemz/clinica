/* ===================================
--------------------------------------
	Boto | Photography HTML Template
	Version: 1.0
	Copyright By: ColorLib
--------------------------------------
======================================*/

"use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

(function ($) {
  /*-------------------
		Hero Slider
	-------------------*/
  $(".hero-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    asNavFor: ".hero-text-slider",
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  var hero_slider = $(".hero-slider");

  hero_slider.on("wheel", function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  });

  hero_slider.on("click", ".slick-slide", function (e) {
    e.preventDefault();
    var index = $(this).data("slick-index");
    if ($(".slick-slider").slick("slickCurrentSlide") !== index) {
      $(".slick-slider").slick("slickGoTo", index);
    }
  });

  $(".hero-text-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    asNavFor: ".hero-slider",
  });
})(jQuery);
