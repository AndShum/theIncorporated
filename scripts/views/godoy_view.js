var godoyImages = [];
var width = $(window).width();


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

}

$('#godoy_link').on('click', function() {
  if(width < 736){
    $('#godoy_gallery').fadeToggle().css({'display':'block'});
    console.log(this);
  } else {
    $('#godoy_gallery').fadeToggle().css({'display':'inline-flex','justify-content':'flex-start','position':'static'});
    console.log(this);
  }
});

handleGodoyPage();
