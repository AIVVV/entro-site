$(document).ready(function() {

    // set active class to navigation
    $('.header__menu li a').click(function() {
        $('li a').removeClass('active');
        $(this).addClass('active');
    });

    //set active class to gallery buttons
    $('.btn-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active_btn').removeClass('active_btn');
            $(this).addClass('active_btn');
        });
    });

    // init isotope
    var $gallery = $('.gallery__container_2').isotope({
        itemSelector: '.gallery__box',
        percentPosition: true,
        masonry: {
            columnWidth: '.gallery__box'
        }
    });

    $('.gallery__btn__group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    // slick slider 
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
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
});