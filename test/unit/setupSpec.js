/* global initGlobals, createDirective */
describe('Setup', function() {
  'use strict';

  it('should be able to execute tests.', function() {
    expect(true).toBe(true);
  });

  it('should have angular defined.', function() {
    expect(angular).toBeDefined();
  });

  it('should be able to find the angular module', function() {
    initGlobals();
    expect(angular.module('myModule')).toBeDefined();
  });

  it('should be able to create a directive', function() {
    initGlobals();

    var directive = createDirective();
    expect(directive.scope.foo).toBe('bar');
  });

  it('should have additional jasmine matchers', function() {
    expect(function() {}).toBeInstanceOf(Function);
  });

  it('should use jasmine 2.0 done callbacks', function(done) {
    expect(window.waitsFor).toBeUndefined();
    window.setTimeout(done, 10);
  });
});
