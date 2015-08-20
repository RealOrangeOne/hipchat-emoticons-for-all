var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/site-decoder.json").sites;

for (var i = 0; i < sites.length; i++) {
    pattern = Object.keys(sites[i])[0];
    script = sites[i][pattern];
    console.log('script ' + script);
    console.log('pattern ' + pattern);
    pageMod.PageMod({
      include: pattern,
      contentScriptFile: ["lib/jquery.js", "./image_lookup.js", "injections/" + script]
    });
}