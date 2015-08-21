function change_chat_tabs() {
    $('._d97').each(function(){
        for (var i = 0; i < image_decoder.length; i++) {
            console.log('Checking for ' + image_decoder[i][0])
            $(this).html($(this).html().replace("(" + image_decoder[i][0] + ")",
                "<img class='emoticon' style='height: 30px; width: 30px;' src='" + image_decoder[i][1] + "'/>"
            ));
        }
    });
}


$('.fbNubFlyout').on(
    'DOMNodeInserted DOMNodeRemoved change load', function(event) {
    change_chat_tabs();
});

$('._d97').on('change load', function(event){
    change_chat_tabs();
});
alert("Injected");
console.log("Injected");