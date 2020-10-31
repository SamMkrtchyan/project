$(document).ready(function () {

    
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scrollToTop").fadeIn(100);
        } else {
            $(".scrollToTop").fadeOut(100);
        }
    });

    $(".scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
});
