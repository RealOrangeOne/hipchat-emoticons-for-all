function insert_emoticons(ident, classes) {
  classes = classes || "";
  decoder = image_decoder.images;
  console.log("Replacing " + $(ident).length + " instances of " + ident);
  $(ident).each(function() {
    for (var i = 0; i < decoder.length; i++) {
      key = Object.keys(decoder[i]);
      image = decoder[i][key];
      key = "(" + key + ")";
      $(this).html($(this).html().replace(key,
        "<img class='" + classes + "' style='height: 30px; width: auto;' src='" + image + "'/>"
      ));
    }
  });
  console.log("Swapped " + ident);
}

function markdown_decoder(ident) {
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

console.log("Hipchat-emoticons-for-all is enabled on " + location.href);

var image_decoder = %image_decoder%
