// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 200) {
            jQuery('.header').addClass('fixed-top');
        } else {
            jQuery('.header').removeClass('fixed-top');
        }
    });
});



//testimonial carousel
jQuery('document').ready(function () {
    jQuery('#partner-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
        0:{
            items:4
        },
        600:{
            items:5,
        },
        1000:{
            items:7
        }
    }
    });
});



/* nav scrolling */
jQuery(document).ready(function () {

    jQuery('.nav-link').on('click', function (e) {
        e.preventDefault();
        var id = jQuery(e.currentTarget).attr('href');
        var jQuerydest = jQuery(id);

        jQuery('html,body').animate({
            scrollTop: (jQuerydest.offset().top)
        }, 1000);
    });

});



$('document').ready(function(){
    $('.text1').click(function(){
       $('.popup1').toggle();
       $('.popup2,.popup3,.popup4').hide();
       $('.overflow').show();
    });
    $('.text2').click(function(){
       $('.popup2').toggle();
       $('.popup1,.popup3,.popup4').hide();
        $('.overflow').show();
    });
    $('.text3').click(function(){
       $('.popup3').toggle();
       $('.popup1,.popup2,.popup4').hide();
        $('.overflow').show();
    });
    $('.text4').click(function(){
       $('.popup4').toggle();
       $('.popup1,.popup2,.popup3').hide();
        $('.overflow').show();
    });
    $('.overflow').click(function(){
        $('.services-popup').hide();
        $(this).hide();
    });
    
});

