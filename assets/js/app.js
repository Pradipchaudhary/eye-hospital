var changeClass = function(name) {
    $('#search, #nav ul').removeAttr('class').addClass(name);
}

$(document).ready(function() {

    $("#testimonial-slider").owlCarousel({

        items: 1,

        itemsDesktop: [1000, 1],

        itemsDesktopSmall: [979, 1],

        itemsTablet: [768, 1],

        pagination: true,

        navigation: false,

        slideSpeed: 1000,

        singleItem: false,

        navigationText: ["", ""],

        autoPlay: true

    });

});