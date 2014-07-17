module.exports = {
  options: {
    host: '127.0.0.1'
  },
  test: {
    port: process.env.E2E_SANDBOX_PORT || 8765,
    runInBackground: true
  },
  demo: {
    port: process.env.DEMO_PORT || 8000
  }
};
