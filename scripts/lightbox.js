
function handleLightBox() {
  var $overlay = $('<div id="overlay"></div>');
  var $image = $('<img>');


  $overlay.append($image);

  $('body').append($overlay);



  $('.gallery img').click(function(event) {
  	 event.preventDefault();
  	 var imageLocation = $(this).attr('src');
  	 $image.attr('src', imageLocation);

  	 $overlay.css({'display':'flex', 'justify-content':'center', 'align-items':'center'}).fadeIn('fast');

  });

  $overlay.click(function(){
    $overlay.fadeOut('fast');
  });

}


handleLightBox();
