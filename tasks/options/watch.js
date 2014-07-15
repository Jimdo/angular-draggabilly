var files = require('../files');

module.exports = {
  andtest: {
    files: files.source.concat([files.allPartials, files.grunt, files.unitTests]),
    tasks: ['_test:beforeEach', 'karma:watch:run']
  }
};
