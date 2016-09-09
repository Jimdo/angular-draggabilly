/* global browser, global, protractor */
var port = process.env.E2E_SANDBOX_PORT || 8765;
var sandboxUrl = 'http://localhost:' + port + '/';

global.By = protractor.By;

beforeEach(function() {
  browser.get(sandboxUrl);
});

module.exports = {
};
