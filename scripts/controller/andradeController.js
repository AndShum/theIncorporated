(function (module) {
  var andradeController = {};

  andradeController.reveal = function() {
    $('#mojica_gallery', function() {
      console.log(this);
    }).hide();
    $('#godoy_gallery', function() {
      console.log(this);
    }).hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').hide();
    $('#andrade_gallery').fadeIn();
  };

  module.andradeController = andradeController;
})(window);
