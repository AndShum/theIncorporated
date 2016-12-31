

$('#img_swap_front').on('click', '#img_swap_front', function() {
  console.log('toggle front');
  $(this).parent().siblings('.close_description').children('#img_swap_front').show('fast');
  $(this).parent().siblings('.close_description').children('#img_swap_back').hide('fast');
});
