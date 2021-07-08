$(document).ready(function () {
  $(window).scroll(function () {
    // sticky nav
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll up button
    if (this.scrollY > 200) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll up button "smooth scroll"

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  //nav link "smooth"

  $(".navbar .nav-list li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // click the link atfer auto remove the nav

  $(".nav-btn").click(function () {
    $(".navbar .nav-list").toggleClass("active");
    $(".nav-line > div").toggleClass("active");
    $(".icon p").toggleClass("active");
    $(".icon").toggleClass("active");
  });

});


// Gallery

$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
    enabled: true
  }
});

// Counter 

$(document).ready(function () {
  $(".counting").counterUp({
    delay: 10,
    time: 1200
  });
});


