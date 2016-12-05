(function (module) {
  var contactController = {};

  contactController.reveal = function() {
    $('#gallery_wrapper').fadeOut();
    $('#shop').fadeOut();
    $('#retailers').fadeOut();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
