$(document).ready(function() {
    $(window).scroll(function(event) {
        let scroll = $(this).scrollTop();
        let opacity = 1 - (scroll / 700);
        if (opacity > 0) {
            $('figure h3').css('opacity', opacity);
        }
    });
});