(function (module) {
  var collectionsController = {};

  collectionsController.reveal = function() {
    $('#shop').hide();
    $('#retailers').hide();
    $('#contact').hide();
    $('#andrade_gallery').hide();
    $('#godoy_gallery').hide();
    $('#mojica_gallery').fadeIn();
  };

  module.collectionsController = collectionsController;
})(window);
