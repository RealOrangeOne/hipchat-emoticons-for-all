function change_chat_tabs() {
  $('._d97').each(function(){
    for (var i = 0; i < image_decoder.length; i++) {
      console.log('Checking for ' + image_decoder[i][0])
      $(this).html($(this).html().replace(
        image_decoder[i][0],
        "<img class='emoticon' style='height: 30px; width: 30px;' src='" + image_decoder[i][1] + "'/>"
      ));
    }
  });
}


$('.fbNubFlyout').on('DOMNodeInserted DOMNodeRemoved change load', function() { // Something changes inside the chat tab
  change_chat_tabs();
});


$('._d97').on('change load', function(){ // Chat Bubble messages
  change_chat_tabs();
});


$('.fbNubButton').on('click', function() { // Facebook tab button is clicked
  change_chat_tabs();
});


$('._55ln').on('click', function() { //Facebook sidebar person is clicked
  change_chat_tabs();
})


$('._552m').on('input paste', function() { // Text change in textbox. Mainly used to cover all bases
  change_chat_tabs();
});