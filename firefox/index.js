var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}


pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: ["./jquery.js", "./script.js"]
});
exports.dummy = dummy;

