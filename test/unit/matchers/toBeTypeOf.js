/* globals jasmine */
beforeEach(function() {
  'use strict';

  jasmine.addMatchers({
    toBeTypeOf: function() {
      return {
        compare: function(actual, expected) {
          if (typeof expected !== 'string') {
            expected = expected.constructor.name;
          }

          var pass = typeof actual === expected.toLowerCase();

          return {
            pass: pass,
            message: jasmine.pp(actual) + ' is ' + (!pass ? 'not ' : '') + 'of type ' + expected
          };
        }
      };
    }
  });
});
