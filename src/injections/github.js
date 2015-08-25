function change_comments() {
  inject_image('.comment-body');
}

function change_readme() {
  inject_image('#readme');
}

$("button.btn[name='comment_and_close']").prev().on('click', change_comments);

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);


change_comments();
change_readme();