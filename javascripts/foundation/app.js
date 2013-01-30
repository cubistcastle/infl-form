;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();



if ( !Modernizr.touch) {
  // toggle program, visit, contact flyout direction  
  var $document = $(document),
      $element = $('.flyout'),
      className = 'up',
      last = +new Date;
    $(window).scroll(function () {
      if (+new Date - last > 30) { // more than 30 ms elapsed
        $element.toggleClass(className, $document.scrollTop() <= 190);
      }
        last = +new Date;
      });
}



  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
/*  if (Modernizr.touch) {
   $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }*/

/*        $("form").validate({
            rules: {
             // name: "required",
             "entry.2.single": {
               required: true,
               email: true
             }
           },
           messages: {
             // name: "Please specify your name",
             "entry.2.single": {
               required: "We need your email address to contact you",
               email: "That's no email!"
             }
           }
        });*/
     $(".influencer-form").validate({
         rules: {
          "entry.0.single": "required", // firstname
          "entry.1.single": "required", // lastname
          "entry.2.single": {
            required: true,
            email: true
          },
          "entry.5.single": "required", // country
          "entry.8.single": "required", // address1
          "entry.12.single": "required", // city
          "entry.14.single": "required", // state/prov
          "entry.18.single": "required", // zip
          "entry.16.single": "required" // phone
        },
        messages: {
          // name: "Please specify your name",
          "entry.2.single": {
            required: "We need your email address to contact you",
            email: "That's no email!"
          }
        }
     });


  $('#submit').on('click', function(e) {
      if ($(".influencer-form").valid()) {


          e.preventDefault();
          // console.log( $("form").serialize() );
          var postVar = $("form").serialize();
           $.ajax({
              url: "http://spreadsheets.google.com/spreadsheet/formResponse",
              data: postVar,
              type: 'POST',
              dataType: "jsonp"
          });
          // $('form').hide();
          // $('.thanks').show().addClass('animated bounceInLeft');
      }
  });


})(jQuery, this);