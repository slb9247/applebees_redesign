$(document).on('ready', function() {

/* menu page sections */
  $('h2').on('click', function() {
    $(this).next('.menuSect').slideToggle(1000);

    var $current = $(this).next('.menuSect');
    $('.menuSect').not($current).slideUp(1000);
  });

/* footer extras toggle at < 370px */
  $('#footer-extras h3').on('click', function() {
    if ($('.line').css('display') == 'none') {
      $(this).nextAll('section ul').slideToggle(500);
    }

    var $current = $(this).nextAll('section ul');
    $('section ul').not($current).slideUp(500);
  });

/* footer extras toggle fix for window resize */
  $(window).resize(function(){
    if ($('.line').css('display') == 'block') {
      $('section ul').css('display', 'block');
    } else {
      $('section ul').css('display', 'none');
    }
  });




}); // ends doc.ready
