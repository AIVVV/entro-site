$(document).ready(function() {

    // set active class to navigation
    $('.header__menu li a').click(function() {
        $('li a').removeClass('active');
        $(this).addClass('active');
    });

    // sticky header functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').css({
                'height': '80px',
                'border-bottom': '1px solid #dbdbdb'
            });
            $('.header .header__logo').css({
                'line-height': '80px'
            });
            $('.header__menu li a').css({
                'height': '80px',
                'padding-top': '24px'
            });
            $('.header__mobile_btn').css({
                'margin-top': '22px'
            });
        } else {
            $('.header').css({
                'height': '100px',
                'border-bottom': '0'
            });
            $('.header .header__logo').css({
                'line-height': '100px'
            });
            $('.header__menu li a').css({
                'height': '100px',
                'padding-top': '32px'
            });
            $('.header__mobile_btn').css({
                'margin-top': '32px'
            });
        }
    });

    // slick slider 
    $(document).ready(function() {
        $('.slider__container').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows:false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows:false
                    }
                }
            ]
        });
    });
});