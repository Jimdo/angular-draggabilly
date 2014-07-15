/* global draggabilly */
draggabilly.directive('draggabilly', [function() {
  return {
    templateUrl: 'directive.html',
    controller: ['$scope', function($scope) {
      $scope.foo = 'bar';
    }]
  };
}]);
