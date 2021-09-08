$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-bar").toggleClass("show-nav", ($(window).scrollTop() > 250));
     });

    $(function(){
        $("#nav-placeholder").load("nav.html");
    });

    $(function(){
        $("#sitemap-placeholder").load("sitemap.html");
    });

    $('.sitemap-p').click(function() {
        $(".sitemap").toggleClass("show-sitemap");
    });
});