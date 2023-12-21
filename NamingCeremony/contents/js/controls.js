let played = 0;
$(function () {
    $('div.nav a').bind('click', function (event) {
        let $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 3000, 'easeInOutQuad');
        event.preventDefault();
    });

    $('div#lunaplane a').bind('click', function (event) {
        let $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 3000, 'easeInOutQuad');
        event.preventDefault();
    });

});

(function ($) {
    $(document).ready(function () {

        console.log(document.body.scrollHeight)

        $('#cloud').pan({fps: 60, speed: 0, dir: 'right'}).active();
        $('#lunaplane').sprite({fps: 5, no_of_frames: 4}).active();
        $('#snowflake').pan({fps: 60, speed: 0, dir: 'down'}).active();
    });
})(jQuery);

window.addEventListener("click", () => {
    disableMute();
})

window.addEventListener("touchstart", () => {
    disableMute();
})

window.addEventListener("touchmove", () => {
    disableMute();
})

function disableMute() {
    let audio = document.getElementById("audio");
    if (audio && played <= 3) {
        audio.muted = false;
        audio.play();
        audio.muted = false;
        audio.play();
        audio.muted = false;
        audio.play();
        audio.muted = false;
        audio.play();
        audio.muted = false;
        audio.play();
    }
}