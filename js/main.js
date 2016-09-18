$(document).on('ready', function() {

  $('h2').on('click', function() {
    $(this).next('.menuSect').slideToggle(1000);

    var $current = $(this).next('.menuSect');
    $('.menuSect').not($current).slideUp(1000);
  });


  $('#footer-extras h3').on('click', function() {
    if ($('.line').css('display') == 'none') {
      $(this).nextAll('#footer-extras ul').slideToggle(500);
    };

    var $current = $(this).nextAll('#footer-extras ul');
    $('#footer-extras ul').not($current).slideUp(500);
  });




}); // ends doc.ready
