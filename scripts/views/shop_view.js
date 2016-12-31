var shopImages = [];

function handleShopPage() {
  function ShopGallery(opts) {
    this.name = opts.name;
    this.href = opts.href;
    this.img_alt = opts.img_alt;
    this.open_description = opts.open_description;
    this.close_description = opts.close_description;
    this.front_img_src = opts.front_img_src;
    this.back_img_src = opts.back_img_src;
    this.status = opts.status;
    this.sold_out = opts.sold_out;
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


  document.getElementById('shop_link').removeEventListener('click', handleShopPage, false);
}
document.getElementById('shop_link').addEventListener('click', handleShopPage, false);






shopImages.handleItemDetails = function(event) {
  $('#shop_gallery').on('click', '.open_description', function() {
    console.log('open description');
    $(this).siblings('#details_wrapper').children().fadeToggle('fast');
    $(this).siblings('#details_wrapper').css({'display':'flex', 'justify-content':'center', 'align-items':'center'});
  });
};


$('#shop_gallery').on('click', '.close_description', function() {
  console.log('close description');
  $(this).parent().fadeToggle();
});

$('#shop_gallery').on('click', '#img_swap_front', function() {
  console.log('toggle front');
  $(this).parent().siblings('.close_description').children('.detail_image_front').show('fast');
  console.log(this);
  $(this).parent().siblings('.close_description').children('.detial_image_back').hide('fast');
  console.log(this);
});

$('#shop_gallery').on('click', '#img_swap_back', function() {
  console.log('toggle front');
  $(this).parent().siblings('.close_description').children('.detial_image_back').show('fast');
  console.log(this);
  $(this).parent().siblings('.close_description').children('.detail_image_front').hide('fast');
  console.log(this);
});


handleShopPage();
shopImages.handleItemDetails();
//
