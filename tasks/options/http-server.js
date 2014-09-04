var optPort = require('grunt').option('port');

module.exports = {
  options: {
    host: '127.0.0.1'
  },
  test: {
    port: optPort || process.env.E2E_SANDBOX_PORT || 8765,
    runInBackground: true
  },
  demo: {
    port: optPort || process.env.DEMO_PORT || 8000,
    runInBackground: true
  }
};
