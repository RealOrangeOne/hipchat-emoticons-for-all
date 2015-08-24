function change_chat_tabs() {
  console.log("Event");
  inject_image('._d97', 'emoticon');
}


jq('.fbNubFlyout').on('DOMNodeInserted DOMNodeRemoved change load', function() {  // Something changes inside the chat tab
  change_chat_tabs();
});


jq('._d97').on('change load', function(){  // Chat Bubble messages
  change_chat_tabs();
});


jq('.fbNub').on('click', function() {  // Facebook tab button is clicked
  change_chat_tabs();
});


jq('._55ln').on('click', function() {  //Facebook sidebar person is clicked
  change_chat_tabs();
})

change_chat_tabs();