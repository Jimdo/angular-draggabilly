/* global browser, global, protractor */
var sandboxUrl = 'http://localhost:8765/test/e2e/env/';
var i = 0;

global.By = protractor.By;
global.prot = protractor.getInstance();

beforeEach(function() {
  i = 0;
  browser.get(sandboxUrl);
});

module.exports = {

};
