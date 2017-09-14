$(document).ready(function() {
  var tableHeight = 16;
  var tableWidth = 16;

  function makeTable() {
    var boxSize = tableHeight * tableWidth;
    for (x = 0; x < boxSize; x++) {
      $("<div class='squares'></div>").appendTo('#main');

    };
    $('.squares').width((780 / tableWidth) - 2);
    $('.squares').height((780 / tableHeight) - 2);
    $('.squares').hover(function() {
      $(this).addClass('hover');
      $(this).removeClass('squares');
    });
    $('#reset').click(function() {
      $('.hover').addClass('squares');
      $('.squares').removeClass('hover');
    });
  };
  makeTable();
});
