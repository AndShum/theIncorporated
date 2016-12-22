
function handleLightBox() {
  var $overlay = $('<div id="overlay"></div>');
  var $image = $('<img>');


  $overlay.append($image);

  $('body').append($overlay);



  $('.gallery a').click(function(event) {
  	 event.preventDefault();
    console.log(this);
  	 var imageLocation = $(this).attr('href');
    console.log(this);
  	 $image.attr('src', imageLocation);


  	 $overlay.css({'display':'flex', 'justify-content':'center', 'align-items':'center'}).fadeIn('fast');

    console.log(this);

  });


  $overlay.click(function(){
    $overlay.fadeOut('fast');
  });

}


handleLightBox();
