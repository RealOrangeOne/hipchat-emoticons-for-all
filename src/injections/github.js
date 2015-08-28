function change_comments() {
  inject_image('.comment-body');
}

function change_readme() {
  inject_image('#readme');
}

function change_wiki() {
    inject_image('#wiki-body');
}

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);

$('form .timeline-comment textarea[placeholder="Leave a comment"]').on('change input', function() {
    markdown_injector('form .timeline-comment textarea[placeholder="Leave a comment"]');
});

$(document).on('ready', function() {
    change_comments();
    change_readme();
    change_wiki();
});
