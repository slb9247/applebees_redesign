$(document).on('ready', function() {

/* mobile menu sections toggle */
  $('h2').on('click', function() {
    $(this).next('.menuSect').slideToggle(1000);

    var $current = $(this).next('.menuSect');
    $('.menuSect').not($current).slideUp(1000);

    // $('#footer-extras h3').on('click', function() {
    //   if ($('.line').css('display') == 'none') {
    //     $(this).nextAll('section ul').slideToggle(500);
    //
    //     var $current = $(this).nextAll('section ul');
    //     $('section ul').not($current).slideUp(500);
    //   }
    // });








/* mobile menu sections grayscale class */
    $('h2').removeClass('active');
    $(this).addClass('active');

    //ONLY SHOW COLOR WHEN SLIDETOGGLE IS ACTIVE
  });


/* mobile menu sections toggle fix for window resize */
  $(window).resize(function(){
    if ($('h2:nth-of-type(2)').css('background-image') == 'none') {
      $('.menuSect').css('display', 'block');
    } else {
      $('.menuSect').css('display', 'none');
    }
  });


/* footer extras toggle at < 370px */
  $('#footer-extras h3').on('click', function() {
    if ($('.line').css('display') == 'none') {
      $(this).nextAll('section ul').slideToggle(500);

      var $current = $(this).nextAll('section ul');
      $('section ul').not($current).slideUp(500);
    }
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
