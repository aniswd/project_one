
$(function() {


    // OWL CAROUSEL resort
    $("#photoGal .owl-carousel").owlCarousel({
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

    // Magnific popup start

    var magnifPopup = function() {
        $('._popup_img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    // Call the functions
    magnifPopup();

    // Magnific popup end

});
