

  $(document).ready(function() {
    $('.upcoming-hotel-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {

    if (!e.namespace)  {

      return;

    }

    var carousel = e.relatedTarget;

    if(carousel.items().length != 0 ){

    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

}carousel 

  }).owlCarousel({

      loop: true,

      margin: 10,

      responsiveClass: true,
      

      responsive: {

        0: {

          items: 1,

          autoplay: true,


          nav: true,

          navText: [

            "<span>Prev</span>",

            "<span>Next</span>"

          ]

        },

        600: {
          items: 2,
          autoplay: true,
          nav: true,

          navText: [

            "Prev<span></span>",

            "Next<span></span>"

          ]

        },

        1000: {
          items: 4,
          autoplay: true,
          nav: true,
          navText: [
            "Prev<span></span>",

            "Next<span></span>"

          ],

          loop: true,

          margin: 10

        }

      }

    })

  })

  

  





  

  $('.newest-hotel-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {

    if (!e.namespace)  {

      return;

    }

    var carousel = e.relatedTarget;

    if(carousel.items().length != 0 ){

    $('.slider-counter1').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

}carousel 

  }).owlCarousel({

    loop:true,

    autoplay: true,

    //margin:0,    

    autoplayTimeout: 6000,

    autoplayHoverPause: true,

    nav:true,

    center: true,

    dots:false,

    responsiveClass: true,

    responsive:{

        0:{

            items:2 

        },

        481:{

            items:2

        },

        1000:{

            items:3

        }

    }

  });

  $("#all-hotels-main").click(function(){

    $("#all-cities").slideToggle();

  });

  $(".rooms-childs-input").click(function(){

    $(".add-rooms-block").slideToggle();

  });

  $("#navbarDropdown").click(function(){

    $(".bookbtn_slide_booking_form").slideToggle();

  });

  

  $(".cross-ion").click(function(){

    $(".bookbtn_slide_booking_form").hide();

  });

  $("#mobile-book-now-btn").click(function(){

    $(".bookbtn_slide_booking_form").slideToggle();

  });

  

  $(document).ready(function() {

    $('.owl-carousel.offer-permotion-slider').owlCarousel({

      loop: true,

      margin: 10,

      responsiveClass: true,

      responsive: {

        0: {

          items: 1,

          autoplay: true,

         

          nav: true

        },

        600: {

          items: 1,

          autoplay: true,

          nav: true

        },

        1000: {
          items: 1,
          autoplay: true,
          nav: true,

          loop: true,

          margin: 10

        }

      }

    })

  })

  

  