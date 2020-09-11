var $ = jQuery.noConflict();

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 600) {
        $('.sticky').removeClass('scroll-header');
    } else {
        $('.sticky').addClass('scroll-header');
    }
});


//Mobile Menu Active
$(document).ready(function() {
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });


    //WOW
    new WOW().init();


    //Slider Active
    $('.slider-actiive').slick({
        infinite: true,
        arrows: true,
        nextArrow: '<button type ="button" class ="slick-next"> <i class="fa fa-long-arrow-right"></i></button>',
        prevArrow: '<button type ="button" class ="slick-prev"> <i class = "fa fa-long-arrow-left" ></i> </button>',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* magnificPopup video view */
    $('.popUp').magnificPopup({
        type: 'iframe'
    })

    //Counter 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Testimonial Slick

    $('.testimonial-active').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //Brand Active
    }
$('.brand-active').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            
        ]
    });

    //Smooth Scroll
    $('.main-menu ul li a').smoothScroll();

    //Scroll Up Acive
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa fa-angle-up"></i>',
        activeOverlay: false,
    });

});