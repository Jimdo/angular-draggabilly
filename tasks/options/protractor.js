var files = require('../files');

module.exports = {
  options: {
    args: {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      seleniumArgs: [],
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