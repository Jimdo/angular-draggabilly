/* global browser, global, protractor */
var sandboxUrl = 'http://localhost:8765/test/e2e/env/';

global.By = protractor.By;
global.prot = protractor.getInstance();

beforeEach(function() {
  browser.get(sandboxUrl);
});

module.exports = {

};
