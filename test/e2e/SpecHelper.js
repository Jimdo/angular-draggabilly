/* global browser, global, protractor */
var port = process.env.E2E_SANDBOX_PORT || 8765;
var sandboxUrl = 'http://localhost:' + port + '/';

global.By = protractor.By;
global.ptor = protractor.getInstance();

beforeEach(function() {
  browser.get(sandboxUrl);
});

module.exports = {
};
