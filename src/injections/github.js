function change_comments() {
  insert_emoticons('.comment-body');
}

function change_readme() {
  insert_emoticons('#readme');
}

function change_wiki() {
  insert_emoticons('#wiki-body');
}

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);

$('form .timeline-comment textarea[placeholder="Leave a comment"]').on('change input', function() {
    markdown_decoder('form .timeline-comment textarea[placeholder="Leave a comment"]');
});

$(document).on('ready', function() {
  change_comments();
  change_readme();
  change_wiki();
});
