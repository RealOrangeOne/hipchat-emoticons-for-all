function change_comments() {
  $('.comment-body').each(function() {
    for (var i = 0; i < image_decoder.length; i++) {
      console.log('Checking for ' + image_decoder[i][0])
      $(this).html($(this).html().replace(
        image_decoder[i][0],
        "<img style='height: 30px; width: 30px;' src='" + image_decoder[i][1] + "'/>"
      ));
    }
  });
}

$("button.btn[name='comment_and_close']").prev().on('click', function(){  // When the comment button is clicked
  change_comments();
});

$('.js-comment-container').on('load change', function(){  // when another comment comes in
  change_comments();
});

$(window).on('load', function(){  // When window loads
  change_comments();
});
alert("Github");