/* global myModule */
myModule.directive('myDirective', [function() {
  return {
    templateUrl: 'directive.html',
    controller: ['$scope', function($scope) {
      $scope.foo = 'bar';
    }]
  };
}]);
