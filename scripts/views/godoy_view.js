var godoyImages = [];

function handleGodoyPage() {
  function GodoyGallery(opts) {
    this.main_img_src = opts.main_img_src;
    this.lrg_img_src = opts.lrg_img_src;
    this.img_alt = opts.img_alt;
    this.description = opts.description;
    this.featured_items = opts.featured_items;
  }

  GodoyGallery.prototype.toHtml = function() {
    var source = $('#godoy_template').html();
    var renderGodoyGallery = Handlebars.compile(source);
    return renderGodoyGallery(this);
  };

  godoyLocalData.forEach(function(element) {
    godoyImages.push(new GodoyGallery(element));
  });

  godoyImages.forEach(function(inst) {
    $('#godoy_gallery').append(inst.toHtml());
  });

  // function setDisplay() {
  //   $('#godoy_link').on('click', function() {
  //     $('#godoy_gallery').css({'display':'block'});
  //   });
  // }
  //
  // setDisplay();

  function handleCollections() {
    $('.collections').on('click', function() {
      $('.collections').css({'border-bottom':'none'});
      $('.collections_ul').addClass('showing').slideToggle('slow');
    });
  }
  document.getElementById('godoy_link').removeEventListener('click', handleGodoyPage, false);
}
document.getElementById('godoy_link').addEventListener('click', handleGodoyPage, false);

handleGodoyPage();
