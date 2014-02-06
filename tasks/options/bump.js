var files = require('../files');

module.exports = {
  options: {
    files: files.package,
    updateConfigs: ['pkg'],
    commit: false,
    createTag: false,
    push: false
  }
};
