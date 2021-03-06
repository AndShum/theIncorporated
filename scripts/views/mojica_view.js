var mojicaImages = [];

function MojicaGallery(opts) {
  this.main_img_src = opts.main_img_src;
  this.lrg_img_src = opts.lrg_img_src;
  this.img_alt = opts.img_alt;
  this.description = opts.description;
  this.featured_items = opts.featured_items;
}

MojicaGallery.prototype.toHtml = function() {
  var source = $('#mojica_template').html();
  var renderMojicaGallery = Handlebars.compile(source);
  return renderMojicaGallery(this);
};

mojicaLocalData.forEach(function(element) {
  mojicaImages.push(new MojicaGallery(element));
});

mojicaImages.forEach(function(inst) {
  $('#mojica_gallery').append(inst.toHtml());
});

function setDisplay() {
  $('#godoy_link').on('click', function() {
    $('#godoy_gallery').css({'display':'none'});
    $('andrade_gallery').css({'display':'none'});
  });
}

setDisplay();

function handleCollections() {
  $('.collections').on('click', function() {
    $('.collections').css({'border-bottom':'none'});
    $('.collections_ul').addClass('showing').slideToggle('slow');
  });
}

mojicaImages.handleLightBox = function(event) {
  console.log(this);
  $('#mojica_gallery').on('click', '.lightbox', function() {
    console.log(this);
    $(this).children().children('.main_img_display').animate().css({'position':'absolute','max-width':'900px','width':'35%','left':'33%','top':'223px'});
  });
};

// mojicaImages.handleLightBox();



handleCollections();
