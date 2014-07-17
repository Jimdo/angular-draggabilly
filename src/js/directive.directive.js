(function(Draggabilly) {

  /** @const */
  var NAME = 'draggabilly';
  /** @const */
  var PREFIX = 'draggie';

  /** @const */
  var dragEvents = {
    'dragStart': 'start',
    'dragMove': 'move',
    'dragEnd': 'end'
  };

  /* global draggabilly */
  draggabilly.directive(NAME, [
    function() {
      return {
        restrict: 'A',
        scope: false,
        link: function($scope, $element, attrs) {
          function getPrefixedAttr(name) {
            var attrName = PREFIX + name.substr(0,1).toUpperCase() + name.substr(1);
            return attrs[attrName];
          }

          var options = {};

          // axis attribute
          var axis = getPrefixedAttr('axis');
          if (axis === 'x' || axis === 'y') {
            options.axis = axis;
          }

          // containment attribute
          var containment = getPrefixedAttr('containment');
          if (containment) {
            options.containment = $scope.$eval(containment);
          }

          // handle attribute
          var handle = getPrefixedAttr('handle');
          if (handle) {
            options.handle = handle;
          }

          // grid attribute
          var grid = getPrefixedAttr('grid');
          if (grid) {
            var evaldGrid = $scope.$eval(grid);
            if (angular.isArray(evaldGrid)) {
              options.grid = evaldGrid;
            }
          }

          var draggie = new Draggabilly($element[0], options);

          // disabled attribute
          var disabledStr = getPrefixedAttr('disabled');
          $scope.$watch(disabledStr, function(shouldBeDisabled) {
            if (shouldBeDisabled) {
              draggie.disable();
            } else {
              draggie.enable();
            }
          });

          angular.forEach(dragEvents, function(targetEventPostfix, sourceEventName) {
            draggie.on(sourceEventName, function(draggieInstance, event, pointer) {
              $scope.$apply(function(scope) {
                scope.$emit(PREFIX + '.' + targetEventPostfix, draggieInstance, event, pointer);
              });
            });
          });
        }
      };
    }
  ]);
})(window.Draggabilly);
