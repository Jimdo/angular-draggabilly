/* global browser, global, protractor */
var sandboxUrl = 'http://localhost:80/test/e2e/env/index.html';
var i = 0;

global.By = protractor.By;
global.prot = protractor.getInstance();

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