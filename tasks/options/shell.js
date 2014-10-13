var optPort = require('grunt').option('port');

module.exports = {
  startsilenium: {
    command: process.cwd() + '/node_modules/protractor/bin/webdriver-manager start',
    options: {
      async: true,
      stdout: false,
      stderr: false
    }
  }
};
