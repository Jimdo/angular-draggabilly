module.exports = {
  options: {
    host: '127.0.0.1'
  },
  test: {
    port: process.env.SANDBOX_PORT || 8765,
    runInBackground: true
  },
  demo: {
    port: 8000
  }
};
