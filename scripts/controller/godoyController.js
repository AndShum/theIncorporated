(function (module) {
  var godoyController = {};

  godoyController.reveal = function() {
    $('#mojica_gallery', function() {
      console.log(this);
    }).hide();
    $('#andrade_gallery', function() {
      console.log(this);
    }).hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').hide();
    $('#godoy_gallery').fadeIn();
  };

  module.godoyController = godoyController;
})(window);
