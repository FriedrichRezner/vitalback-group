/* Scroll Nav Start */

var header = new HSHeader($('#header')).init();
var isClosed = false;

$('.js-scroll-nav').each(function () {
    new HSScrollNav($(this), {
        beforeShow: function () {
            if (window.innerWidth < 768) {
                $('#navBar').collapse('hide').on('hidden.bs.collapse', function () {
                    isClosed = true;
                });
            } else {
                isClosed = true;
            }

            return isClosed;
        },
        afterShow: function () {
            isClosed = false;
        }
    }).init();
});

AOS.init({
    duration: 650,
    once: true
});

/* Scroll Nav End */