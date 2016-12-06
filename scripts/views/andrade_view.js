var andradeImages = [];

function handleAndradePage() {
  function AndradeGallery(opts) {
    this.main_img_src = opts.main_img_src;
    this.lrg_img_src = opts.lrg_img_src;
    this.img_alt = opts.img_alt;
    this.description = opts.description;
    this.featured_items = opts.featured_items;
  }

  AndradeGallery.prototype.toHtml = function() {
    var source = $('#andrade_template').html();
    var renderAndradeGallery = Handlebars.compile(source);
    return renderAndradeGallery(this);
  };

  andradeLocalData.forEach(function(element) {
    andradeImages.push(new AndradeGallery(element));
  });

  andradeImages.forEach(function(inst) {
    $('#gallery').append(inst.toHtml());
  });


  function handleCollections() {
    $('.collections').on('click', function() {
      $('.collections').css({'border-bottom':'none'});
      $('.collections_ul').addClass('showing').slideToggle('slow');
    });
  }
}


$('.andrade_link').on('click', function(e) {
  handleAndradePage();
});
// handleCollections();
