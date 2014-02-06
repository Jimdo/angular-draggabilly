beforeEach(function() {
  this.addMatchers({
    toBeInstanceOf: function(expectedInstance) {
      var actual = this.actual;
      var notText = this.isNot ? ' not' : '';
      this.message = function() {
        return 'Expected ' + actual.constructor.name + notText + ' is instance of ' + expectedInstance.name;
      };
      return actual instanceof expectedInstance;
    }
  });
});
