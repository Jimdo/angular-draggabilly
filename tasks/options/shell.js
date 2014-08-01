var optPort = require('grunt').option('port');

module.exports = {
  startsilenium: {
    command: process.cwd() + '/node_modules/protractor/bin/webdriver-manager start',
    options: {
      async: true,
      stdout: false
    }
  },
  opendemo: {
    command: 'open http://localhost:' + (optPort || process.env.DEMO_PORT || 8000) + '/demo/',
    options: {
      async: true
    }
  }
};
