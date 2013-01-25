/*;(function ($, window, undefined) {
  'use strict';

  $.fn.foundationNavigation = function (options) {

    var lockNavBar = false;
    // Windows Phone, sadly, does not register touch events :(
    if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
      $(document).on('click.fndtn touchstart.fndtn', '.nav-bar a.flyout-toggle', function (e) {
        e.preventDefault();
        var flyout = $(this).siblings('.flyout').first();
        if (lockNavBar === false) {
          $('.nav-bar .flyout').not(flyout).slideUp(500);
          flyout.slideToggle(500, function () {
            lockNavBar = false;
          });
        }
        lockNavBar = true;
      });
      $('.nav-bar>li.has-flyout', this).addClass('is-touch');
    } else {
      $('.nav-bar>li.has-flyout', this).hover(function () {
        $(this).children('.flyout').show();
      }, function () {
        $(this).children('.flyout').hide();
      });
    }

  };

})( jQuery, this );*/(function(e,t,n){"use strict";e.fn.foundationNavigation=function(t){var n=!1;if(Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)){e(document).on("click.fndtn touchstart.fndtn",".nav-bar .has-flyout",function(t){t.preventDefault();var r=e(this).children(".flyout");if(n===!1){e(".nav-bar .flyout").not(r).slideUp(500);r.slideToggle(500,function(){n=!1})}n=!0});e(".nav-bar>li.has-flyout",this).addClass("is-touch")}else e(".nav-bar>li.has-flyout",this).hoverIntent(function(){e(this).children(".flyout").show()},function(){e(this).children(".flyout").hide()})}})(jQuery,this);