(function (module) {
  var retailersController = {};

  retailersController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#godoy_gallery').hide();
    $('#andrade_gallery').hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').fadeIn();
  };

  module.retailersController = retailersController;
})(window);
