var andradeImages = [];
var width = $(window).width();


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
    $('#andrade_gallery').append(inst.toHtml());
  });

  // function setDisplay() {
  //   $('#andrade_link').on('click', function() {
  //     $('#andrade_gallery').css({'display':'flex'});
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
}

$('#andrade_link').on('click', function() {
  if(width < 736){
    $('#andrade_gallery').fadeToggle().css({'display':'block'});
  } else {
    $('#andrade_gallery').fadeToggle().css({'display':'inline-flex','justify-content':'flex-start','position':'static'});
  }
});

handleAndradePage();
