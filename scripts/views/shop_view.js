var shopImages = [];

function handleShopPage() {
  function ShopGallery(opts) {
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

  ShopGallery.prototype.toHtml = function() {
    var source = $('#shop_template').html();
    var renderShopGallery = Handlebars.compile(source);
    return renderShopGallery(this);
  };

  shopLocalData.forEach(function(element) {
    shopImages.push(new ShopGallery(element));
  });

  shopImages.forEach(function(inst) {
    $('#shop_gallery').append(inst.toHtml());
  });



  function handleCollections() {
    $('#shop_link').on('click', function() {
      // $('.collections').css({'border-bottom':'none'});
      // $('.collections_ul').addClass('showing').slideToggle('slow');
    });
  }

  document.getElementById('shop_link').removeEventListener('click', handleShopPage, false);
}
document.getElementById('shop_link').addEventListener('click', handleShopPage, false);






shopImages.handleItemDetails = function(event) {
  $('#shop_gallery').on('click', '.open_description', function() {
    console.log(this);
    $(this).siblings('#details_wrapper').children().fadeToggle('fast');
  });
};


console.log('closing');
$('#shop_gallery').on('click', '.close_description', function() {
  console.log('second closing');
  $(this).parent().fadeToggle();
});

handleShopPage();
shopImages.handleItemDetails();
//
