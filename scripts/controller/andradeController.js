(function (module) {
  var andradeController = {};

  andradeController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#godoy_gallery').hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').hide();
    $('#andrade_gallery').fadeIn();
  };

  module.andradeController = andradeController;
})(window);
