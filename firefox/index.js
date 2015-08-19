var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: ["./jquery.js", "./script.js"]
});