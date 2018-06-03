/*======================================
            SERVICES
========================================*/

$(function(){
    new WOW().init();
});

/*======================================
            WORK
========================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
        enabled: true
        }
    });
});

/*======================================
            CAROUSEL
========================================*/

$(function() {
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause: true
            
    });

});

$(function() {
        $(".customer-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:600,
        loop:true
    });
    
})

/*======================================
            COUNTER
========================================*/

$(function() {
    
    $(".counter").counterUp({
    delay: 10,
    time: 3000,
    offset: 70,
    beginAt: 0,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
        
    });
});

/*======================================
            CLIENTS
========================================*/

$(function() {
     $(".clients").owlCarousel({
        items:6,
        autoplay:true,
        smartSpeed:600,
        loop:true
    });
    
});

/*======================================
            SMOOTH SCROLL
========================================*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/*======================================
            NAVIGATION SCROLL
========================================*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 100 ){
           //hide nav
            $("nav").removeClass("nesco-nav");
            $(".btn-back-to-top").fadeOut();
           } else {
           //show nav
            $("nav").addClass("nesco-nav");
            $(".btn-back-to-top").fadeIn();
           }
    });
    
});