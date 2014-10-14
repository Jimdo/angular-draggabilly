var optPort = require('grunt').option('port');
var helpers = require('../helpers');
var connectLess = require('connect-less');

function middleware(dir, env) {
  return function(connect, options, middlewares) {
    middlewares.unshift(function addJs(req, res, next) {
      if (req.method === 'GET' && req.url === '/') {
        helpers.getIndex(dir, env, function(index) {
          res.end(index);
        });
        return;
      }
      next();
    });


    middlewares.unshift(connectLess());

    return middlewares;
  };
}

module.exports = {
  options: {
    hostname: '*',
  },
  test: {
    options: {
      port: optPort || process.env.E2E_SANDBOX_PORT || 8765,
      middleware: middleware('test/e2e/env', 'demo'),
      base: ['.', 'test/e2e/env']
    }
  },
  demo: {
    options: {
      port: optPort || process.env.DEMO_PORT || 8000,
      middleware: middleware('demo', 'demo'),
      base: ['.', 'demo'],
      livereload: true,
      open: true
    }
  }
};
