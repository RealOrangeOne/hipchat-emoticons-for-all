function change_card_title() {
    inject_image('.list-card-title');
    inject_image('.window-title-text');
}

function change_list_title() {
    inject_image('.list-header-name');
    inject_image('.window-header-inline-content');
}

function change_comment() {
    inject_image('.action-comment');
}

$('.list-header-name').on('change load', function() {
    change_list_title();
});

$('.active-card').on('click', function() {
    change_list_title();
    change_card_title();
    change_comment();
});

$('.card-detail-edit textarea').on('change input', function() {
    markdown_injector('.card-detail-edit textarea');
});

$('.phenom-action').on('DOMNodeInserted DOMNodeRemoved change load', function() {
    change_card_title();
    change_list_title();
    change_comment();
});

$('.js-add-card').on('click', function() {
    change_card_title();
});

$('.action-card').on('click', function() {
    change_card_title();
    change_list_title();
    change_comment();
});

$('.action-comment').on('click', function() {
    change_comment();
});

$('.js-save-edit').on('click', function() {
    change_card_title();
    change_list_title();
    change_comment();
});

$(document).on('ready', function() {
    change_comment();
    change_card_title();
    change_card_list();
});
