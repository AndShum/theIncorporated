var details = [];

function handleDetailsPage() {
  function DetailsGallery(opts) {
    this.name = opts.name;
    this.href = opts.href;
    this.img_alt = opts.img_alt;
    this.description = opts.description;
    this.front_img_src = opts.front_img_src;
    this.back_img_src = opts.back_img_src;
    this.price = opts.price;
    this.shop_link = opts.shop_link;
    this.detail_1 = opts.detail_1;
    this.detail_2 = opts.detail_2;
    this.detail_3 = opts.detail_3;
    this.detail_4 = opts.detail_4;
    this.detail_5 = opts.detail_5;
    this.detail_6 = opts.detail_6;
    this.detail_7 = opts.detail_7;
    this.detail_8 = opts.detail_8;
  }

  DetailsGallery.prototype.toHtml = function() {
    var source = $('#details_template').html();
    var renderDetailsGallery = Handlebars.compile(source);
    return renderDetailsGallery(this);
  };

  shopLocalData.forEach(function(element) {
    details.push(new DetailsGallery(element));
  });

  details.forEach(function(inst) {
    $('#details_gallery').append(inst.toHtml());
  });



  function handleCollections() {
    $('#details_link').on('click', function() {
      // $('.collections').css({'border-bottom':'none'});
      // $('.collections_ul').addClass('showing').slideToggle('slow');
    });
  }

  document.getElementById('details_link').removeEventListener('click', handleDetailsPage, false);
}
document.getElementById('details_link').addEventListener('click', handleDetailsPage, false);

$('.fa-plus-square-o').on('click', function() {
  $('#details_wrapper').css({'display':'flex', 'justify-content':'center', 'align-items':'center'});
});
