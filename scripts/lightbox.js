
function handleLightBox() {
  var $overlay = $('<div id="overlay"></div>');
  var $image = $('<img>');


  $overlay.append($image);

  $('body').append($overlay);



  $('.gallery a').click(function(event) {
  	 event.preventDefault();
  	 var imageLocation = $(this).attr('href');
  	 $image.attr('src', imageLocation);


  	 $overlay.fadeIn('fast');


  });


  $overlay.click(function(){
    $overlay.fadeOut('fast');
  });

}

handleLightBox();
