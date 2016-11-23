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

mojicaImages.slice(0,9).forEach(function(inst) {
  $('#gallery').append(inst.toHtml());
});

function handleCollections() {
  $('.collections').on('click', function() {
    $('.collections').css({'border-bottom':'none'});
    $('.sub_nav_li').addClass('showing').slideToggle('slow');
  });
}

function handleViewMore() {
  $('.view_more').on('click', function() {
    mojicaImages.splice(9,9).forEach(function(inst) {
      $('#gallery').append(inst.toHtml());
    });
  });
}


handleCollections();
handleViewMore();
