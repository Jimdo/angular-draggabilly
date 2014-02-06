beforeEach(function() {
  this.addMatchers({
    toBeTypeOf: function(expected) {
      var actual, notText, objType;

      actual = this.actual;
      notText = this.isNot ? 'not ' : '';
      expected = expected.toLowerCase();
      objType = typeof actual;

      this.message = function() {
        return 'Expected ' + actual + notText + ' to be type of ' + expected;
      };
     
      return objType === expected;
    }
  });
});
