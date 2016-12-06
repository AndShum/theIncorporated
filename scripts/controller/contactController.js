(function (module) {
  var contactController = {};

  contactController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#andrade_gallery').hide();
    $('#godoy_gallery').hide();
    $('#shop').hide();
    $('#retailers').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
