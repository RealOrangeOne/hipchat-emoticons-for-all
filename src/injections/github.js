var jq = jQuery.noConflict(true);

function get_images() {
  return JSON.parse('[{"(noot)" : "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/23362/noot-1438871175.png"}]');
}

function change_comments() {
  window.image_decoder = get_images();
  console.log("comment event");
  jq('.comment-body').each(function() {
    for (var i = 0; i < window.image_decoder.length; i++) {
      key = Object.keys(window.image_decoder[i]);
      image = window.image_decoder[key];
      console.log('Checking for ' + key)
      jq(this).html(jq(this).html().replace(
        key,
        "<img style='height: 30px; width: 30px;' src='" + image + "'/>"
      ));
    }
  });
}

function change_readme() {
  window.image_decoder = get_images();
  console.log("readme event");
  for (var i = 0; i < window.image_decoder.length; i++) {
    key = Object.keys(window.image_decoder[i]);
    image = window.image_decoder[i][key];
    console.log('Checking for ' + key)
    jq('#readme').html(jq('#readme').html().replace(
      key,
      "<img style='height: 30px; width: 30px;' src='" + image + "'/>"
    ));
  }
}



jq("button.btn[name='comment_and_close']").prev().on('click', function(){  // When the comment button is clicked
  change_comments();
});


jq('.js-comment-container').on('load change', function(){  // when another comment comes in
  change_comments();
});


window.setInterval(function(){
  change_comments();
  change_readme();
}, 3000);



alert("Github");