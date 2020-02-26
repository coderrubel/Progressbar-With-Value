/* Examples */
(function($) {

  $('.second.circle').circleProgress({
    value: 80/90
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90));
  });

  
})(jQuery);
