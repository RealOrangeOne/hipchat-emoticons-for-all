function insert_emoticons(ident, classes) {
  classes = classes || "";
  decoder = image_decoder.images;
  console.log("Replacing " + $(ident).length + " instances of " + ident);
  $(ident).each(function() {
    for (var i = 0; i < decoder.length; i++) {
      key = Object.keys(decoder[i]);
      image = decoder[i][key];
      key = "(" + key + ")";
      $(this).html(
        replaceAll(
          $(this).html(),
          key,
          "<img class='" + classes + "' style='height: 28px; width: auto;' src='" + image + "'/>"
        );
      );
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
    $(ident).val(
      replaceAll(
        $(ident).val(),
        key,
        "![" + raw_key + "](" + image + ")"
      );
    );
  }
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

console.log("Hipchat-emoticons-for-all is enabled on " + location.href);

var image_decoder = %image_decoder%
