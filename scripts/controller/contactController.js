(function (module) {
  var contactController = {};

  contactController.reveal = function() {
    $('#mojica_template').fadeOut();
    $('#shop').fadeOut();
    $('#retailers').fadeOut();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
