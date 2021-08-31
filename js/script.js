$(document).ready(function () {
  //nav
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(500);
  });

  // navbar scroll
  $(window).scroll(function () {
    let pos = $(window).srollTop();
    if (pos >= 100) {
      $(".navbar").addClass("fix-nav");
    } else {
      $(".navbar").removeClass("fix-nav");
    }
  });

  //testimonials
  $("#next").on("click", function () {
    let currentImg = $(".active");
    let nextImg = currentImg.next();
    if (nextImg.length) {
      currentImg.removeClass("active").addClass("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $("#prev").on("click", function () {
    let currentImg = $(".active");
    let prevImg = currentImg.prev();
    if (prevImg.length) {
      currentImg.removeClass("active").addClass("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });

  //sapmle video
  $(document).ready(function () {
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
      breakpoints: {},
    });
  });

  //faq
  $(".faq-head").each(function () {
    $(this).click(function () {
      $(this).next().toggleClass("showFaq");
      let icon = $(this).children("span").children("i").attr("class");

      if (icon == "fas fa-plus") {
        $(this).children("span").html('<i class= "fas fa-minus" ></i>');
      } else {
        $(this).children("span").html('<i class= "fas fa-plus" ></i>');
      }
    });
  });
});
