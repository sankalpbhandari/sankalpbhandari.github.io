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
    $(document).ready(async function () {
        let user = await getNames();
        let param = null;
        let searchParams = new URLSearchParams(window.location.search)
        if (searchParams.has('q')) {
            param = user[searchParams.get('q')]
        }
        if (param !== null && param !== undefined) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "button",
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "<div style=\"font-family:'Handlee',serif;\">Jai Jinendra " + param + "</div>",
                imageHeight: 150,
                imageUrl: "contents/media/couple.gif",
                confirmButtonText: "Go to invitation"
            }).then((result) => {
                    disableMute()
                }
            );
        }
        console.log(document.body.scrollHeight)
        $('#doli').pan({fps: 60, speed: 0, dir: 'left'}).active();

        $('#car').sprite({fps: 3, no_of_frames: 4})
        /*.spRandom({
            top: 443,
            left: 538,
            right: 588,
            bottom: 480,
            speed: 2000,
            pause: 2000
        });*/

        $('#lantern').pan({fps: 90, speed: 0, dir: 'up'}).active();
        $('#as').sprite({fps: 8, no_of_frames: 1, bounce: [150, 0, 500]})
            .spRandom({
                top: 20,
                left: 10,
                right: 200,
                bottom: 80,
                speed: 1500,
                pause: 0
            }).active();

    });
})(jQuery);

window.addEventListener("click", () => {
    disableMute();
})

window.addEventListener("touchstart", () => {
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

async function getNames() {
    let data;
    const response = await  fetch("./../../../names.json")
    data = await response.json();
    console.log(data)
    return data;
}