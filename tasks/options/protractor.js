var files = require('../files');
var glob = require('glob');

var jar = glob.sync('node_modules/protractor/selenium/selenium-server-standalone-2.*.jar')[0];

module.exports = {
  options: {
    args: {
      seleniumServerJar: jar,
      capabilities: {
        'browserName': 'chrome'
      },
      specs: [files.e2eTests],
      jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
      }
    },
    configFile: 'test/e2e/env/config.js',
    keepAlive: true,
  },
  e2e: {}
};