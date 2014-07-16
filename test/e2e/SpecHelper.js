/* global browser, global, protractor */
var port = process.env.SANDBOX_PORT || 8765;
var sandboxUrl = 'http://localhost:' + port + '/test/e2e/env/index.html';
var i = 0;

global.By = protractor.By;
global.ptor = protractor.getInstance();

beforeEach(function() {
  i = 0;
  browser.get(sandboxUrl);
});

module.exports = {
  help: function() {
    i++;
    return i <= 1 ? '... I need somebody.' : 'not just anybody!';
  }
};
