function change_comments() {
  console.log("comment event");
  inject_image('.comment-body');
}

function change_readme() {
  console.log("readme event");
  inject_image('.comment-body');
}



jq("button.btn[name='comment_and_close']").prev().on('click', function(){  // When the comment button is clicked
  change_comments();
});


jq('.js-comment-container').on('load change', function(){  // when another comment comes in
  change_comments();
});


change_comments();
change_readme();