// $(document).ready(function() {
//     if ($(window).scrollTop() > 300){
//         $(".nav-bar").addClass( "show-nav");
//     }
//     else {
//         $(".nav-bar").removeClass("show-nav");
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-bar").toggleClass("show-nav", ($(window).scrollTop() > 100));
     });
});