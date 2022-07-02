$(document).ready(function() {

    /* GRAPHICS */
    
    /* stop() used to prevent mouseenter/mouseleave from queueing up
    when mouse moves too fast */

    // duration of fadeIn/Out needs to be same as transition duration in .carouselBoxDiv in external.css
    $(".carouselBoxDiv").hover(function() {
        // mouseenter

        // .carouselBoxContent initial display is none, need to set it to flex or else it's default block
        $(this).find(".carouselBoxContent").stop().fadeIn(300).css("display", "flex");
        
        // can also do $(this).find(".carouselBoxContent").stop().css("display", "flex").hide().fadeIn(300);
        // need to hide() after css() or else it would not fade in
    }, function() {
        // mouseleave
        $(this).find(".carouselBoxContent").stop().fadeOut(300);
    });
    
    
    $(".carouselBoxContentBody button").click(function(e) {
        e.stopPropagation(); // works without this line, although it's supposed to prevent event bubbling
        e.preventDefault(); // needed
    });


});