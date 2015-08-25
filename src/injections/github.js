function change_comments() {
  inject_image('.comment-body');
}

function change_readme() {
  inject_image('#readme');
}

$('#partial-new-comment-form-actions').append('<button id="#markdown-inject-btn" class="btn">Inject Emoticons</button>');

$("button.btn[name='comment_and_close']").prev().on('click', change_comments);

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);

$('#markdown-inject-btn').on('click', function() { markdown_injector('#new-comment-field');})
change_comments();
change_readme();