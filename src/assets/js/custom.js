/* Fancybox */

$('.js-fancybox').each(function () {
    var fancybox = $.HSCore.components.HSFancyBox.init($(this));
});

/* Slick carousel */

$('.js-slick-carousel').each(function() {
    var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
});

/* Contact Map */

$('#map').each(function () {
    var leaflet = $.HSCore.components.HSLeaflet.init($(this)[0]);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        id: 'mapbox/light-v9'
    }).addTo(leaflet);
});