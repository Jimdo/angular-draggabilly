var files = require('../files');
var browsers = process.env.KARMA_BROWSERS;

module.exports = {
  options: {
    browsers: (browsers || 'Chrome').split(','),
    preprocessors: {
      '**/*.coffee': ['coffee']
    },
    frameworks: [
      'jasmine'
    ],
    singleRun: true,
    files: files.environments.karma.concat([files.unitTests])
  },
  all: {
    options: {
      browsers: (browsers || 'Chrome,Firefox,PhantomJS').split(',')
    }
  },
  watch: {
    options: {
      background: true,
      singleRun: false,
      autoWatch: false
    }
  }
};
