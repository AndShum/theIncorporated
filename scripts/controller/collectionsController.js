(function (module) {
  var collectionsController = {};

  collectionsController.reveal = function() {
    $('#shop').hide();
    $('#retailers').hide();
    $('#contact').hide();
    $('#andrade_gallery', function() {
      console.log(this);
    }).hide();
    $('#godoy_gallery', function() {
      console.log(this);
    }).hide();
    $('#mojica_gallery').fadeIn();
  };

  module.collectionsController = collectionsController;
})(window);
