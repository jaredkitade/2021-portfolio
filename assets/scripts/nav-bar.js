$(document).ready(function(){


    // $(window).scroll(function(){

    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 300) {
    //         $('.nav-bar').addClass('show-nav');
    //     }
    //     else {
    //         $('.nav-bar').removeClass('show-nav');
    //     }

    //  });

    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 200) {
    //         $('.nav-bar').addClass('show-nav');
    //     }
        // else {
        //  $('.scroll-wrap').removeClass('show-nav');
        // }

    // });

    if ($(window).scrollTop() > 300){
        $('.nav-bar').addClass( "show-nav");
    }
    else {
        $('.nav-bar').removeClass("show-nav");
    }


});