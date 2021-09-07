$(document).ready(function(){


    // $(window).scroll(function(){

    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 300) {
    //         $('.nav-bar').addClass('reveal');
    //     }
    //     else {
    //         $('.nav-bar').removeClass('reveal');
    //     }

    //  });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $('.nav-bar').addClass('reveal');
        }
        // else {
        //  $('.scroll-wrap').removeClass('scroll-fade');
        // }

    });

    
});