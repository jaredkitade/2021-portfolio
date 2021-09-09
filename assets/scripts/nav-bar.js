$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-bar").toggleClass("show-nav", ($(window).scrollTop() > 150));
        $(".logo-large").toggleClass("show-nav", ($(window).scrollTop() < 150));
     });

    $(function(){
        $("#nav-placeholder").load("nav.html");
        $("#sitemap-placeholder").load("sitemap.html");
        $("#footer-placeholder").load("footer.html");
    });

    $(".sitemap-q").click(function(){
        $(".sitemap-container").toggleClass("show-sitemap");
        $(".nav-bar").toggleClass("logo-behind");
    });

});