var files = require('../files');
var glob = require('glob');

var jar = glob.sync('node_modules/protractor/selenium/selenium-server-standalone-2.*.jar')[0];
var chromeDriver = process.cwd() + '/node_modules/protractor/selenium/chromedriver';

module.exports = {
  single: {
    options: {
      args: {
        browser: 'chrome',
        seleniumServerJar: jar,
        chromeDriver: chromeDriver,
        specs: [files.e2eTests],
        jasmineNodeOpts: {
          showColors: true,
          defaultTimeoutInterval: 30000
        }
      },
      configFile: 'test/e2e/env/config.js',
      keepAlive: true
    }
  },
  tdd: {
    options: {
      args: {
        browser: 'chrome',
        seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: [files.e2eTests],
        jasmineNodeOpts: {
          showColors: true,
          defaultTimeoutInterval: 30000
        }
      },
      configFile: 'test/e2e/env/config.js',
      keepAlive: true
    }
  }
};
