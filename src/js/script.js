$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 700,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
    $(this)
      .addClass("catalog__tab_active")
      .siblings()
      .removeClass("catalog__tab_active")
      .closest("div.container")
      .find("div.catalog__content")
      .removeClass("catalog__content_active")
      .eq($(this).index())
      .addClass("catalog__content_active");
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_hidden");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut("slow");
  });

  $(".button_buy").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__desc").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Пожалуйста, введите существующую почту",
        },
      },
    });
  }

  validateForm(".consultation .feed-form");
  validateForm("#consultation .feed-form");
  validateForm("#order .feed-form");

  $("input[name=phone]").mask("+7(999)999-99-99");

  // Smooth scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
