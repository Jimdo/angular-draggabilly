describe('Setup', function() {
  'use strict';

  it('should be able to execute tests.', function() {
    expect(true).toBe(true);
  });

  it('should have angular defined.', function() {
    expect(angular).toBeDefined();
  });

  it('should be able to find the angular module', function() {
    expect(angular.module('draggabilly')).toBeDefined();
  });

  it('should use the full jQuery to find elements', function() {
    var elm = angular.element('<div><span class="foo" /></div>');
    expect(elm.find('.foo').length).toBe(1);
  });

});
