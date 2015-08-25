function change_comments() {
  inject_image('.comment-body');
}

function change_readme() {
  inject_image('#readme');
}

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);

$('.timeline-comment textarea[placeholder="Leave a comment"]').on('change input', function() {
    markdown_injector('.timeline-comment textarea[placeholder="Leave a comment"]');
});

change_comments();
change_readme();
