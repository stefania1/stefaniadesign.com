// Avoid `console` errors in browsers that lack a console.
(function($) {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}(jQuery));

    
$(document).ready(function(){
  //Counter js
  // Find the 'count this' class on the page and animate it
  $('.count-this').each(function () {

  // Start the counting from a specified number - in this case, 0!
  $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      // Speed of counter in ms, default animation style
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          // Round up the number
            $(this).text(Math.ceil(now));
        }
    });
  });

  $('.portfolioFilter a').click(function () {
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    return false;
  });
  // isotope container selector
  var $container = $('.portfolioContainer');
  //Isotope portfolio
  $container.isotope({
    filter: '*',
    itemSelector: '.column-response',
    masonry: {
      columnWidth: 40,
      isFitWidth: true
    },
    animationOptions: {
    duration: 750,
    easing: 'linear',
    queue: false
  }});

});