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
  $('#gallery').append(inst.toHtml());
});

function handleCollections() {
  $('.collections').on('click', function() {
    $('.collections').css({'border-bottom':'none'});
    $('.sub_nav_li').addClass('showing').slideToggle('slow');
    console.log(this);
    if($(this).siblings().class() === 'showing') {
      $('.collections').on('click', function() {
        $('.collections').css({'border-bottom':'1px solid black'});
        $('.sub_nav_li').removeClass('showing');
      });
    }
  });

}

function horizontalScroll(){
  $(function(){
    var $anchor = $(this);
    $('#gallery').stop().animate({
      scrollLeft:$($anchor.attr('href')).offset()},1000);
    event.preventDefault();
  });
}

handleCollections();
horizontalScroll();
