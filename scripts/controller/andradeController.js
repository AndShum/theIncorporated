(function (module) {
  var andradeController = {};

  andradeController.reveal = function() {
    $('#gallery_wrapper').fadeOut();
    $('#shop').fadeOut();
    $('#contact').fadeOut();
    $('#retailers').fadeOut();
    $('#andrade').fadeIn();
  };

  module.andradeController = andradeController;
})(window);
