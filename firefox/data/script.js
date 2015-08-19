$('.fbNubFlyout').on('DOMNodeInserted DOMNodeRemoved change load', function(event) {
    $('._d97').each(function(){
        $(this).html($(this).html().replace('expected',
            "<img class='emoticon' style='height: 30px; width: 30px;' src='http://icons.iconarchive.com/icons/hopstarter/sleek-xp-software/256/Yahoo-Messenger-icon.png'/>"
        ));
        console.log("Change made!");
    });

});


window.setInterval(function(){ //Force it every now and then
    elements = $('.fbNubFlyout');
    if (elements.length != 0) {
        elements.trigger('change');
    }
}, 5000);