# Hipchat Emoticons for all! #

## Building for yourself ##
Whilst I recommend that you use the plugins that are on the add-on stores of the respective browsers, building the apps yourself is perfectly possible, and __should__ be self contained within this application. I am building this on Ubuntu 15.04, but your luck may vary on other platforms.
### Build Commands ###
    npm install
    npm run build
    npm run build-chrome
    npm run build-firefox
    npm run build-extensions (firefox and chrome)

### Modification ###
If you want to modify the code in any way, you must run `npm run develop`. This build all the code, but doesnt delete any files you may have modified as `npm run build` does.

## Disclaimer ##
As you can tell, the quality of the code isnt perfect, or to a particular standard. Once the plugin works properly to a basic level, I will install some linting software to make the code look nicer, and possibly run smoother too.

All the time the app has a version of `0.0.0`, the extensions are considered to be unstable and unlikely to work properly if at all.

## More Info ##
More information can be found in the [Wiki](https://github.com/RealOrangeOne/hipchat-emoticons-for-all/wiki)
