(function (module) {
  var american_art_tController = {};

  american_art_tController.reveal = function() {
    $('#mojica_gallery').hide();
    $('#andrade_gallery').hide();
    $('#shop').hide();
    $('#contact').hide();
    $('#retailers').hide();
    $('#american_art').hide();
    $('#american_girl').hide();
    $('#american_dream_hoodie').hide();
    $('#american_revolution_hoodie').hide();
    $('#american_justice_system_hoodie').hide();
    $('#nacireman_trench_coat').hide();
    $('#body_ritual_denim').hide();
    $('#rest_in_peace_turtleneck').hide();
    $('#nacireman_cargos').hide();
    $('#body_ritual_belt').hide();
    $('#nacireman_tote').hide();
    $('#american_art_t').fadeIn();
  };

  module.american_art_tController = american_art_tController;
})(window);
