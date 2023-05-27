
$(function() {


    // OWL CAROUSEL resort
    $("#resort .owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2,
                     nav:true
                },
                991: {
                    items: 3,
                    nav:true
                }
            }
        });

     // OWL CAROUSEL resort
    $("#review .owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 1,
                },
                991: {
                    items: 1,
                }
            }
        });

});
