var grunt = require('grunt');
var files = require('../files');
var testfiles = files.source.concat([files.grunt]);
var unitTestfiles = grunt.util._.clone(testfiles).concat([files.unitTests]);
var e2eTestfiles = grunt.util._.clone(testfiles).concat([files.e2eTests]);
var bothTestfiles = grunt.util._.clone(unitTestfiles).concat([files.e2eTests]);

module.exports = {
  andtestunit: {
    files: files.source.concat([files.grunt, files.unitTests]),
    tasks: ['_test:beforeEach', 'karma:watch:run']
  },
  andteste2e: {
    files: e2eTestfiles,
    tasks: ['_test:beforeEach', 'protractor:tdd']
  },
  andtestboth: {
    files: bothTestfiles,
    tasks: ['_test:beforeEach', 'karma:watch:run', 'protractor:tdd']
  }
};
