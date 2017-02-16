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
      $(this).nextAll('#footer-extras ul').slideToggle(500);
    }

    // var $current = $(this).nextAll('#footer-extras ul');
    // $('#footer-extras ul').not($current).slideUp(500);
  });

/* footer extras toggle fix for window resize */
  checkSize();

  $(window).resize(checkSize);

  function checkSize() {
    if ($('.line').css('display') == 'block') {
      $('#footer-extras ul').css('display', 'block');
    } else {
      $('#footer-extras ul').css('display', 'none');
    }
  }


    // $(window).resize(function(){
    //   if (window.matchMedia("(min-width: 370px)").matches) {
    //       $('#footer-extras ul').css('display','block')
    //   } else {
    //     $('#footer-extras ul').css('display', 'none');
    //   }
    // });




}); // ends doc.ready
