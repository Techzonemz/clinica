"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    //Masonary
    $(".gallery__container").masonry({
      columnWidth: ".grid-sizer",
      itemSelector: ".gc__item",
      gutter: 20,
    });
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  /*------------------
        Accordin Active
    --------------------*/
  $(".collapse").on("shown.bs.collapse", function () {
    $(this).prev().addClass("active");
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    $(this).prev().removeClass("active");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".header__menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
    closedSymbol: '<i class="fa fa-angle-right"></i>', // Character after collapsed parents.
    openedSymbol: '<i class="fa fa-angle-up"></i>', // Character after expanded parents.
  });

  /*--------------------------
        Testimonial Slider
    ----------------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 2,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  /*------------------
		Magnific
	--------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  /*-------------------
		Nice Select
	--------------------- */
  $("select").niceSelect();

  /*-------------------
		Datepicker
	--------------------- */
  $(".datepicker").datepicker({
    minDate: 0,
  });
})(jQuery);

/// some script
document.addEventListener("DOMContentLoaded", function () {
  // Impede que o clique dentro do dropdown feche o menu principal
  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // Faz o submenu "Vacinação" funcionar como toggle no clique
  document.querySelectorAll(".dropdown-submenu > a").forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = this.nextElementSibling;

      // Fecha outros submenus (opcional)
      document.querySelectorAll(".submenu").forEach(function (el) {
        if (el !== submenu) el.style.display = "none";
      });

      // Alterna visibilidade
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });
});
// jQuery ready start
$(document).ready(function () {
  // Abrir menu offcanvas
  $("[data-trigger]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr("data-trigger");
    $(offcanvas_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
    $(".offcanvas-menu-overlay ").toggleClass("active");
  });

  // Fechar ao pressionar ESC
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      fecharOffcanvas();
    }
  });

  // Fechar ao clicar no botão de fechar ou overlay
  $(".btn-close, .screen-overlay").click(function () {
    fecharOffcanvas();
  });

  // Fechar ao clicar fora do menu
  $(document).click(function (e) {
    if (!$(e.target).closest(".mobile-offcanvas, [data-trigger]").length) {
      fecharOffcanvas();
    }
  });

  // Função para fechar o offcanvas
  function fecharOffcanvas() {
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $(".offcanvas-menu-overlay ").removeClass("active");
    $("body").removeClass("offcanvas-active");
  }
}); // jQuery end

// Verifica se o usuário já aceitou os cookies
if (!localStorage.getItem("cookies-accepted")) {
  // Exibe o banner se o cookie não foi aceito
  document.getElementById("cookie-banner").style.display = "flex";
}

// Quando o usuário clica em "Aceitar"
document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    // Armazena que o usuário aceitou os cookies
    localStorage.setItem("cookies-accepted", "true");
    // Esconde o banner
    document.getElementById("cookie-banner").style.display = "none";
  });
