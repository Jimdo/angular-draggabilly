var files = require('../files');

module.exports = {
  andtest: {
    files: files.source.concat([files.grunt, files.unitTests]),
    tasks: ['_test:beforeEach', 'karma:watch:run']
  }
};
