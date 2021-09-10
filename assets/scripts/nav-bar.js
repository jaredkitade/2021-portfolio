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

    var $cursor = $('.cursor');

    function moveCursor(e) {
        $cursor.css({"top": e.pageY, "left": e.pageX});
    }

    $(window).on('mousemove', moveCursor);

    $(document).mousemove(function(e) {

        const cursor = $('.cursor');
        const target = $(event.target);

        // update position of cursor
        cursor.css('left', e.clientX-10).css('top', e.clientY-10);

        const isLinkTag = target.is('a');
        const isHovered = cursor.hasClass('cursor-hover');

        // toggle the cursor class if necessary 
        if(isLinkTag && !isHovered) {

        cursor.addClass('cursor-hover');

        } else if(!isLinkTag && isHovered) {

        cursor.removeClass('cursor-hover');

        }

        });

        $(document).mouseleave(function(e) {

        const cursor = $('.cursor');
        cursor.hide()

        });

        $(document).mouseenter(function(e) {

        const cursor = $('.cursor');
        cursor.show()

        });
});