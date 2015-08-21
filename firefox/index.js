var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/site-decoder.json").sites;

for (var i = 0; i < sites.length; i++) {
    pattern = Object.keys(sites[i])[0];
    script = sites[i][pattern];
    content_scripts = ["./lib/jquery.js", "./image-lookup.js", "./injections/" + script];
    console.log('pattern: ' + pattern);
    console.log('content_scripts: ' + content_scripts);
    pageMod.PageMod({
      include: pattern,
      contentScriptFile: content_scripts,
    });
}