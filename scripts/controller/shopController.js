(function (module) {
  var shopController = {};

  shopController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#andrade_gallery').hide();
    $('#godoy_gallery').hide();
    $('#retailers').hide();
    $('#contact').hide();
    $('#shop').fadeIn();
  };

  module.shopController = shopController;
})(window);
