function inject_image(ident, classes) {
  classes = classes || "";
  $(ident).each(function() {
    decoder = image_decoder.images;
    for (var i = 0; i < decoder.length; i++) {
      key = Object.keys(decoder[i]);
      image = decoder[i][key];
      key = "(" + key + ")";
      $(this).html($(this).html().replace(key,
        "<img class='" + classes + "' style='height: 30px; width: 30px;' src='" + image + "'/>"
      ));
    }
  });
}

function markdown_injector(ident) {
  decoder = image_decoder.images;
  for (var i = 0; i < decoder.length; i++) {
    raw_key = Object.keys(decoder[i]);
    image = decoder[i][raw_key];
    key = "(" + raw_key + ")";
    $(ident).val($(ident).val().replace(key,
      "![" + raw_key + "](" + image + ")"
    ));
  }
}

console.log("Hipchat-emoticons-for-all is enabled.");

var image_decoder = %image_decoder%