angular.module('myModule', ['draggabilly']).directive('myApp', function() {
  return {
    restrict: 'E',
    replace: false,
    template: '<div draggabilly>Drag me</div>',
    controller: ['$scope', function($scope) {
      /* do something with $scope */
      $scope.bar = 'lorem';
    }]
  };
});
angular.bootstrap(document, ['myModule']);
