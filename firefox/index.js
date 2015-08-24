var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/decoder.json").sites;

for (var i = 0; i < sites.length; i++) {
    site = Object.keys(sites[i]);
    script = sites[i][site];
    site = '*.' + site;
    pageMod.PageMod({
      include: site,
      contentScriptFile: './injections/' + script,
      attachTo: ['top', 'existing', 'iframe'],
    });
}