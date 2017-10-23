$(document).ready(function() {
    // set active class to navigation
    $('.header__menu li a').click(function() {
        $('li a').removeClass('active');
        $(this).addClass('active');
    });
});

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