/* ----------------------------------------------------------------------------------------
* Author        : CodersPoint
* Template Name : Carbonrock - Multipurpose Html5 Template
* File          : Carbonrock main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */




    
/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js

02. Navigation js

03. Portfolio js

04. Latest Project

05. Testimonial js   

06. client js

07. Ajax Contact Form js

08. Mailchimp js

-------------------------------------------------------------------------------------- */





(function($) {
'use strict';


    /*-------------------------------------------------------------------------*
     *                  01. Preloader js                                       *
     *-------------------------------------------------------------------------*/
      $(window).on('load', function(){
        
          $('#preloader').delay(300).fadeOut('slow',function(){
            $(this).remove();
          });    

      }); // $(window).on end



  $(document).ready(function(){


    /*-------------------------------------------------------------------------*
     *                   02. Navigation js                                     *
     *-------------------------------------------------------------------------*/
      $(document).on('click', '.navbar-collapse.in', function (e) {
          if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
              $(this).collapse('hide');
          }
      });

      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });


    /*-------------------------------------------------------------------------*
     *                  03. Portfolio js                                       *
     *-------------------------------------------------------------------------*/
      $('.portfolio').mixItUp();


      /*-------------------------------------------------------------------------
                        04. Latest Project
      *------------------------------------------------------------------------*/

       $(".news-carousel").owlCarousel({
        
          items               : 3,
          autoPlay            : false,
          itemsDesktop        : [1199, 3],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : true,
          autoHeight          : true,
          navigation          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
         });

    /*-------------------------------------------------------------------------*
     *                  05. Testimonial js                                     *
     *-------------------------------------------------------------------------*/
      $(".testimonial-list").owlCarousel({
          items               : 3,
          autoPlay            : false,
          itemsDesktop        : [1199, 2],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : true,
          autoHeight          : true,
          navigation          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });



    /*-------------------------------------------------------------------------*
     *                       06. client js                                     *
     *-------------------------------------------------------------------------*/
      $(".owl-client").owlCarousel({
          items               : 6,
          autoPlay            : true,
          itemsDesktop        : [1199, 5],
          itemsDesktopSmall   : [980, 3],
          itemsTablet         : [768, 3],
          itemsMobile         : [479, 2],
          pagination          : false,
          autoHeight          : true,
          navigation          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });



    /*-------------------------------------------------------------------------*
     *                  07. Ajax Contact Form js                               *
     *-------------------------------------------------------------------------*/
      // Get the form.
      var form = $('#ajax-contact');

      // Get the messages div.
      var formMessages = $('#form-messages');

      // Set up an event listener for the contact form.
      $(form).on('submit', function(e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
              type: 'POST',
              url: $(form).attr('action'),
              data: formData
          })
          .done(function(response) {
              // Make sure that the formMessages div has the 'success' class.
              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');

              // Set the message text.
              $(formMessages).text(response);

              // Clear the form.
              $('#name').val('');
              $('#email').val('');
              $('#subject').val('');
              $('#message').val('');

          })
          .fail(function(data) {
              // Make sure that the formMessages div has the 'error' class.
              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');

              // Set the message text.
              if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
              } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
              }
          });

      });



        /*-------------------------------------------------------------------------*
         *                   08. MailChimp js                                    *
         *-------------------------------------------------------------------------*/
          $('#mc-form').ajaxChimp({
            language: 'en',
            callback: mailChimpResponse,

            // ADD YOUR MAILCHIMP URL BELOW HERE!
            url: 'http://coderspoint.us14.list-manage.com/subscribe/post?u=e5d45c203261b0686dad32537&amp;id=d061f39c51'
            
          });

          function mailChimpResponse(resp) {
            if (resp.result === 'success') {
              $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
              $('.mailchimp-error').fadeOut(400);

            } else if(resp.result === 'error') {
              $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
            }  
          }



      /*-------------------------------------------------------------------------*
       *                  09. Magnific Popup js                                  *
       *-------------------------------------------------------------------------*/
        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
            
        });
        

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }); 



        // Home Page Slider Settings
        /*-------------------------------------------------------------------------*/
          $('#carousel-example-generic').carousel({
            interval: 5000,
            cycle: true
          });



  }); // $(document).ready end

})(jQuery);