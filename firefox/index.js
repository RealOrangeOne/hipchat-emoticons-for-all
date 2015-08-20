var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/site-decoder")


pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: ["./jquery.js", "./script.js"]
});