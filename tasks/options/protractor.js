var grunt = require('grunt');
var files = require('../files');
var glob = require('glob');

var jar = glob.sync('node_modules/protractor/selenium/selenium-server-standalone-2.*.jar')[0];

var options = {
  args: {
    browser: 'chrome',
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
  keepAlive: true
};

var singleOptions = grunt.util._.clone(options);
singleOptions.args.seleniumServerJar = jar;
var tddoptions = grunt.util._.clone(options);
singleOptions.args.seleniumAddress = 'http://localhost:4444/wd/hub';

module.exports = {
  single: {
    options: singleOptions
  },
  tdd: {
    options: tddoptions
  }
};
