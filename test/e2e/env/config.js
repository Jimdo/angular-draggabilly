/* Add coffeescript support */
require('coffee-script').register();
exports.config = {
  framework: 'jasmine',
  allScriptsTimeout: 120000,
  capabilities: {
    'browserName': 'chrome'
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  }
}; /* See tasks/options/protractor.js for config */


