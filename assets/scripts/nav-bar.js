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
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    // var mouseX, mouseY;
    //     $(document).mousemove(function(event) {
    //         mouseX = event.pageX;
    //         mouseY = event.pageY;
    //         $(".arrow").each(function(){
    //             var angle, arrowPos, arrowWidth, arrowHeight, arrowOriginX, arrowOriginY;
    //             arrowPos = $(this).position();
    //             arrowWidth = $(this).width();
    //             arrowHeight = $(this).height();
    //             arrowOriginX = arrowWidth/2 + arrowPos.left;
    //             arrowOriginY = arrowHeight/2 + arrowPos.top;

    //             angle = Math.atan2(mouseY - arrowOriginY, mouseX - arrowOriginX);
    //             // console.log("x=" + mouseX + " y=" + mouseY + " angle=" + angle);
    //             $(this).css({'-webkit-transform' : 'rotate('+ angle +'rad)',
    //                             '-moz-transform' : 'rotate('+ angle +'rad)',
    //                             '-ms-transform' : 'rotate('+ angle +'rad)',
    //                             'transform' : 'rotate('+ angle +'rad)'});
    //         })
    //     }).mouseover();
    });