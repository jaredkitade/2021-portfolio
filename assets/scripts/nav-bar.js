$(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $('.nav-bar').addClass('reveal');
    }
    else {
        $('.nav-bar').removeClass('reveal');
    }

 });
