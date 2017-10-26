// sticky header functionality
function desktopNav() {
    $(window).on('scroll', function() {
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
}

function mobileNav() {
    $('.header').css({
        'height': '60px',
        'border-bottom': '1px solid #dbdbdb'
    });
    $('.header .header__logo').css({
        'line-height': '60px'
    });
    $('.header__menu li a').css({
        'height': '55px',
        'padding-top': '8px'
    });
    $('.header__mobile_btn').css({
        'margin-top': '11px'
    });
}

function navCondition(width) {
    if (width > 768) {
        desktopNav();
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

    } else if (width < 768) {
        $(window).unbind('scroll');
        mobileNav();        
    }
}

navCondition($(window).width());

$(window).resize(function() {
    var viewPortWidth = $(this).width();
    navCondition(viewPortWidth);
});