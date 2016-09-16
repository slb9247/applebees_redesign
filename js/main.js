$(document).on('ready', function() {

  $('h2').on('click', function() {
    $(this).next('.menuSect').slideToggle(1000);
    var $current = $(this).next('.menuSect');
    $('.menuSect').not($current).slideUp(1000);
  });



}); // ends doc.ready
