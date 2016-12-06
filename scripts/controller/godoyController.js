(function (module) {
  var godoyController = {};

  godoyController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#andrade_gallery').hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').hide();
    $('#godoy_gallery').fadeIn();
  };

  module.godoyController = godoyController;
})(window);
