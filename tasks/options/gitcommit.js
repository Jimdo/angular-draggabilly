var files = require('../files');

module.exports = {
  dist: {
    options: {
      message: 'Release v<%= pkg.version %>',
    },
    files: {
      src: files.package.concat(files.dists)
    }
  }
};