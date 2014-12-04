var files = require('../files');
var DEFAULT_BROWSERS = 'Chrome,Firefox,PhantomJS';
var browsers = process.env.KARMA_BROWSERS;

module.exports = {
  options: {
    browsers: (browsers || 'Chrome').split(','),
    preprocessors: {
      'src/**/*.+(js|coffee)': ['coverage'],
      '**/*.coffee': ['coffee']
    },
    frameworks: [
      'jasmine'
    ],
    coverageReporter: {
      reporters: [{
        type: 'lcov',
        dir: '.tmp/coverage',
        subdir: '.'
      }, {
        dir: '.tmp/coverage',
        type: 'text-summary'
      }]
    },
    reporters: ['progress', 'coverage'],
    singleRun: true,
    files: files.environments.karma.concat([files.unitTests])
  },
  all: {
    options: {
      browsers: (browsers || DEFAULT_BROWSERS).split(',')
    }
  },
  ci: {
    options: {
      browsers: (browsers || DEFAULT_BROWSERS).split(','),
      reporters: ['spec', 'coverage']
    },
  },
  watch: {
    options: {
      background: true,
      singleRun: false,
      autoWatch: false
    }
  }
};
