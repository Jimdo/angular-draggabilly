var optPort = require('grunt').option('port');
var path = require('path');
var base = process.cwd();

module.exports = {
  startsilenium: {
    command: process.cwd() + '/node_modules/protractor/bin/webdriver-manager start',
    options: {
      async: true,
      stdout: false,
      stderr: false
    }
  },
  opendemo: {
    command: 'sleep 1; open http://localhost:' + (optPort || process.env.DEMO_PORT || 8000) + '/',
    options: {
      async: true
    }
  },
  deleteCoverages: {
    command: [
      'rm -rf',
      path.join(base, '.tmp/coverage')
    ].join(' ')
  }
};
