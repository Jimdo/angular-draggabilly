var grunt = require('grunt');
var files = require('../files');
var glob = require('glob');

var jar = glob.sync('node_modules/protractor/selenium/selenium-server-standalone-2.*.jar')[0];
var chromeDriver = process.cwd() + '/node_modules/protractor/selenium/chromedriver';

module.exports = {
  single: {
    options: {
      configFile: 'test/e2e/env/config.js',
      args: {
        chromeDriver: chromeDriver,
        specs: [files.e2eTests],
        seleniumServerJar: jar
      }
    }
  },
  tdd: {
    options: {
      configFile: 'test/e2e/env/config.js',
      args: {
        specs: [files.e2eTests],
        seleniumAddress: 'http://localhost:4444/wd/hub'
      }
    }
  },
  sauce: {
    options: {
      configFile: 'test/e2e/env/config.js',
      args: {
        specs: [files.e2eTests],
        sauceUser: process.env.SAUCE_USERNAME,
        sauceKey: process.env.SAUCE_ACCESS_KEY
      }
    }
  }
};
