var files = require('../files');

module.exports = {
  andtest: {
    files: files.source.concat(files.sourceStyle).concat([files.allPartials, files.grunt, files.unitTests]),
    tasks: ['test:beforeEach', 'karma:watch:run']
  }
};
