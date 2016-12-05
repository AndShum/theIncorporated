(function (module) {
  var shopController = {};

  shopController.reveal = function() {
    $('#gallery_wrapper').fadeOut();
    $('#retailers').fadeOut();
    $('#contact').fadeOut();
    $('#shop').fadeIn();
  };

  module.shopController = shopController;
})(window);
