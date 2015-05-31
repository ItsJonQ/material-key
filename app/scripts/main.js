(function($) {

  window.APP = {};

  $materialBoard = $('#material-board');

  var letters = [
  "1","2","3","4","5","6","7","8","9","0",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ];

  $.each(letters, function(i, e) { // i is element index. e is element as text.
    var letter = letters[i];

    // $(document).bind('keydown', letter, function() {
    //   var key = $('[data-key-label="'+letter+'"]')
    //   var bound = key.parent();

    //   key.addClass('is-active');
    //   bound.addClass('is-active');

    //   return false;
    // });
});

  $('[data-key-label]').on('touchstart', function() {
    var $this = $(this);
    var $bound = $this.parent();

    $this.addClass('is-active');
    $bound.addClass('is-active');
  });

  $('[data-key-label]').on('touchend', function() {
    var $this = $(this);
    var $bound = $this.parent();

    $this.removeClass('is-active');
    $bound.removeClass('is-active');
  });

  // $(document).on('keydown', function(e) {

  //   var value = String.fromCharCode(e.keyCode).toLowerCase();

  //   var key = $('[data-key-label="'+value+'"]')
  //   var bound = key.parent();

  //   key.addClass('is-active')
  //   .delay(200)
  //   .queue(function() {
  //     $(this).removeClass("is-active");
  //     $(this).dequeue();
  //   });

  //   bound.addClass('is-active')
  //   .delay(200)
  //   .queue(function() {
  //     $(this).removeClass("is-active");
  //     $(this).dequeue();
  //   });

  //   return false;
  // });

})(jQuery);