var files = require('../files');
var grunt = require('grunt');
var browsers = grunt.option('browser') || grunt.option('browsers') || process.env.KARMA_BROWSERS;

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
    files: files.testEnvKarma.concat([files.unitTests])
  },
  all: {
    options: {
      browsers: (browsers || 'Chrome,Firefox,PhantomJS').split(',')
    }
  },
  watch: {
    options: {
      singleRun: false
    }
  }
};
