new WOW().init();

var navStick = function () {
    var $nav = $('.nav-sticky');
    if (! $nav.length) return;

    var stickyNavTop = $nav.offset().top;
    var scrollTop = $(window).scrollTop();

    if(stickyNavTop > 70) {
        $nav.addClass('sticky');
    } else {
        $nav.removeClass('sticky');
    }
}

jQuery(document).ready(function() {
    $('.fancybox').fancybox();

    navStick();

    if ($('#vimeoIframe').length) {
        var iframe = document.getElementById('vimeoIframe');
        var player = $f(iframe);
        $('.modal').on('hidden.bs.modal', function () {
            player.api('pause');
        });
        $('.modal').on('shown.bs.modal', function () {
            player.api('play');
        });
    }

    $(".scrolling-nav li:not(.except)>a").click(function(e){
        e.preventDefault();
        // alert($(this.hash).offset().top);
        $("html,body").animate({scrollTop: $(this.hash).offset().top-90}, 'slow');
    });

    if ($('.testimonials-owl').length) {
        $('.testimonials-owl').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            rtl: true,
            nav: false,
            dots: true
        });
    }

    if ($('.team-carousel').length) {
        $('.team-carousel').slick({
            centerMode: true,
            dots: true,
            arrows: false,
            accessibility: true,
            infinite: true,
            speed: 650,
            centerPadding: "500px",
            cssEase: "ease",
            slidesToShow: 1,
            rtl: true,
            draggable: true,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    centerPadding: "300px"
                }
            }, {
                breakpoint: 1200,
                settings: {
                    centerPadding: "125px"
                }
            }, {
                breakpoint: 991,
                settings: {
                    centerPadding: "125px"
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerPadding: "27px"
                }
            }]
        });
        // Show the active item on document ready
        $('.team-carousel .slick-current .member-info').css('opacity', '1');
        // On before slide change
        $('.team-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.slick-current .member-info').css('opacity', '0');
        });
        // On after slide change
        $('.team-carousel').on('afterChange', function(event, slick, currentSlide){
            $('.slick-current .member-info').css('opacity', '1');
        });
    }

});

$(window).scroll(function() {
   navStick();
});

$(window).on("resize", function(event){
    // console.log( $(this).width() );
});