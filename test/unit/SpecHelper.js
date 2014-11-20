/**
 * Some tasks we need to perform before any test-suite starts.
 */
/* jshint undef: false, unused: false  */

/* some globals we might need later on, set in beforeEach */
var $rootScope, $compile, $injector, $httpBackend, $scope, $q, $controller;

function initGlobals(withModule) {
  if (withModule !== false) {
    /* Initiate the main module */
    module('myModule');
  }

  /* jshint maxparams: 10 */
  inject(function(_$rootScope_, _$compile_, _$injector_, _$httpBackend_, _$q_, _$controller_) {
  /* jshint maxparams: 3 */
    $rootScope   = _$rootScope_;
    $compile     = _$compile_;
    $injector    = _$injector_;
    $httpBackend = _$httpBackend_;
    $q           = _$q_;
    $controller  = _$controller_;
  });
}

function createDirective() {
  var r = {};

  /* Create the element for our directive */
  r.elm = angular.element('<div my-directive>');

  /* Apply the directive */
  $compile(r.elm)($rootScope);
  $rootScope.$digest();

  /* Save a reference to the directive scope */
  r.scope = r.elm.isolateScope() || r.elm.scope();

  return r;
}

beforeEach(function() {
  $rootScope = $compile = $injector = $httpBackend = $scope = $q = $controller = null;
});

afterEach(function() {
  if ($httpBackend) {
    /* Make sure, there are no unexpected request */
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }
});
