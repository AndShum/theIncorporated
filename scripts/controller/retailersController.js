(function (module) {
  var retailersController = {};

  retailersController.reveal = function() {
    $('#gallery_wrapper').fadeOut();
    $('#shop').fadeOut();
    $('#contact').fadeOut();
    $('#retailers').fadeIn();
  };

  module.retailersController = retailersController;
})(window);
