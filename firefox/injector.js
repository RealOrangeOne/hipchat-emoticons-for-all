var injection_script = document.createElement('script');
injection_script.type = 'text/javascript';

sites = JSON.parse(self.options.sites);


console.log(sites);
console.log(sites[document.domain]);
if (self.options.sites.hasOwnProperty(document.domain)) {
    self.port.on('init',function() {
        injection_script.src=(self.options.injectorURL + self.options.site[document.domain]);
        window.document.body.appendChild(injection_script);
    });

    console.log("Injector Imported");
} else {
    console.log('No script');
}