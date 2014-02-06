angular.module('myApp', ['myModule']).directive('myApp', function() {
  return {
    restrict: 'E',
    replace: false,
    template: '<div my-directive></div>',
    controller: ['$scope', function($scope) {
      /* do something with $scope */
      $scope.bar = 'lorem';
    }]
  };
});
angular.bootstrap(document, ['myApp']);