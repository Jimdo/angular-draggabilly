var browsers = process.env.PROTRACTOR_BROWSERS;
var capabilities = [];
(browsers || 'chrome').split(',').forEach(function(browser) {
  capabilities.push({browserName: browser.toLowerCase()});
});

/* Add coffeescript support */
require('coffee-script').register();

/* See tasks/options/protractor.js for config */
/* We still need to set some config thats not supported by grunt-protractor-runner */
exports.config = {
  multiCapabilities: capabilities,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  }
};
