$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.logo-large').offset().top; // pixels to the top of div1
        var ht = $('.logo-large').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('.nav-bar').toggleClass('reveal');
        }
        // if(scroll < os + ht){
        //     $('.nav-bar').toggleClass('reveal');
        // }
    });
});