/*!
 * angular-directive-seed v0.0.0
 * https://github.com/Jimdo/angular-directive-seed
 *
 * A starting point for angular directives.
 *
 * Copyright 2014, Jimdo, Hannes Diercks <hannes.diercks@jimdo.com>
 * Released under the MIT license
 */
(function(angular, undefined) {
  'use strict';

  // src/js/helper.module.js
  var myModule = angular.module('myModule', []);

  // src/js/directive.directive.js
  myModule.directive('myDirective', [function() {
    return {
      templateUrl: 'directive.html',
      controller: ['$scope', function($scope) {
        $scope.foo = 'bar';
      }]
    };
  }]);

  // test/e2e/env/all-partials.js
  angular.module('myModule').run(['$templateCache', function($templateCache) {
    'use strict';
  
    $templateCache.put('directive.html',
      "<div><h1>My Directive</h1><h2>{{foo}}</h2></div>"
    );
  
  }]);
})(window.angular);
