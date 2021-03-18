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

/* Fancybox */

$('.js-fancybox').each(function () {
    var fancybox = $.HSCore.components.HSFancyBox.init($(this));
});

/* Contact Map */

$('#map').each(function () {
    var leaflet = $.HSCore.components.HSLeaflet.init($(this)[0]);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        id: 'mapbox/light-v9'
    }).addTo(leaflet);
});