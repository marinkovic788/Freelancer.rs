// Back to top - appear
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 160) {
        $("#to-top").addClass("show");
    }
    else {
        $("#to-top").removeClass("show");
    }
});

// Freelancer thumbnails animation
$('.pop').hover(
   function(){ $(this).addClass('animated ' + 'pulse') },
   function(){ $(this).removeClass('animated ' + 'pulse') }
);
