var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/site-decoder.json")

for (var i = 0; i < sites.length; i++) {
    pageMod.PageMod({
      include: sites[i][0],
      contentScriptFile: ["lib/jquery.js", "./image_lookup.js", "injections/" + sites[i][1]]
    });
}