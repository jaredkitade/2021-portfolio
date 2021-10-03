$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-bar").toggleClass("show-nav", ($(window).scrollTop() > 150));
        $(".logo-large").toggleClass("show-nav", ($(window).scrollTop() < 150));
        $(".sitemap-q-container").toggleClass("q-padding", ($(window).scrollTop() > 0));
     });

    $(function(){
        $("#nav-placeholder").load("nav.html");
        $("#q-placeholder").load("q.html");
        $("#sitemap-placeholder").load("sitemap.html");
        $("#footer-placeholder").load("footer.html");
        $("#color-flip-placeholder").load("color-flip.html");
    });

    // $(".sitemap-q").click(function(){
    //     $(".sitemap-container").toggleClass("show-sitemap");
    //     $(".nav-bar").toggleClass("logo-behind");
    // });

    $(".question").click(function(){
        $(".sitemap-container").toggleClass("show-sitemap");
        $(".nav-bar").toggleClass("logo-behind");
    });

    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(4)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
       
        
    });