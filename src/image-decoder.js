function inject_image(ident, classes) {
  classes = classes || "";
  $(ident).each(function() {
    for (var i = 0; i < image_decoder.length; i++) {
      key = Object.keys(image_decoder[i]);
      image = image_decoder[key];
      $(this).html($(this).html().replace(
        key,
        "<img class='" + classes + "' style='height: 30px; width: 30px;' src='" + image + "'/>"
      ));
    }
  });
}

var image_decoder = %image_decoder%