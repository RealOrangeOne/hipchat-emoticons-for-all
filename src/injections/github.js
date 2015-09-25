function change_comments() {
  insert_emoticons('.comment-body');
}

function change_readme() {
  insert_emoticons('#readme');
}

function change_wiki() {
  console.log("Changing wiki");
  insert_emoticons('#wiki-body');
}

function change_commits() {
    insert_emoticons('table.files a.message');
    insert_emoticons('table.timeline-commits commit-message a.message');

}

$('.js-comment-container').on('load change', change_comments);

$('#readme').on('load change', change_readme);

$('form .timeline-comment textarea[placeholder="Leave a comment"]').on('change input', function() {
    markdown_decoder('form .timeline-comment textarea[placeholder="Leave a comment"]');
});

$('#wiki-body').on('load change', change_wiki);

$('table.timeline-commits').on('load chang', change_commits);

$('a.wiki-page-link').on('click', function() {
    change_comments();
    change_commits();
    change_readme();
    change_wiki();
});

$('a.sunken-menu-item').on('click', function() {
    change_comments();
    change_commits();
    change_readme();
    change_wiki();
});

$(document).on('ready', function() {
  console.log("Ready");
  change_comments();
  change_commits();
  change_readme();
  change_wiki();
});

console.log('Github');
