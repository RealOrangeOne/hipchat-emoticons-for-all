var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
var sites = require("data/decoder.json").sites;

patterns = []

for (var i = 0; i < sites.length; i++) {
    patterns.push(Object.keys(sites[i])[0])
}
pageMod.PageMod({
  include: '*',
  contentScriptFile: './../injector.js',
  attachTo: 'top',
  onAttach: function(worker) {
    worker.port.emit('init');
  },
  contentScriptOptions: {
    injectorURL: self.data.url('injections/'),
    sites: require('data/decoder.json').sites,

  }
});