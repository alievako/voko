$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        // autoplayTimeout: 5000,
        smartSpeed: 3000,
        // animateIn: fadeIn,
        responsive: {
            0:{
                items: 1
            },
            600: {
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })
    new WOW().init();
});