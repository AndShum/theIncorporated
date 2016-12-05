(function (module) {
  var collectionsController = {};

  collectionsController.reveal = function() {
    $('#shop').fadeOut();
    $('#retailers').fadeOut();
    $('#contact').fadeOut();
    $('#gallery_wrapper').fadeIn();
  };

  module.collectionsController = collectionsController;
})(window);
