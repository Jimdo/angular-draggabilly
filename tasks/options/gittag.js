module.exports = {
  dist: {
    options: {
      tag: 'v<%= pkg.version %>',
      message: 'Version <%= pkg.version %>'
    }
  }
};
