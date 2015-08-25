function change_chat_tabs() {
  inject_image('._d97', 'emoticon');
}

$('.fbNubFlyout').on('DOMNodeInserted DOMNodeRemoved change load', change_chat_tabs);

$('._d97').on('change load', change_chat_tabs);

$('.fbNub').on('click', change_chat_tabs);

$('._55ln').on('click', change_chat_tabs);

change_chat_tabs();