/* globals jasmine */
beforeEach(function() {
  'use strict';

  jasmine.addMatchers({
    toBeInstanceOf: function() {
      return {
        compare: function(actual, expected) {
          var pass = actual instanceof expected;
          var name;

          try {
            name = actual.constructor.name;
          } catch (e) {
            name = typeof actual;
          }

          return {
            pass: pass,
            message: name + ' is ' + (!pass ? 'not ' : '') + 'an instance of ' + expected.name
          };
        }
      };
    }
  });
});
