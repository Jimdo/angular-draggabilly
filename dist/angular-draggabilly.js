/*!
 * angular-draggabilly v0.0.4
 * https://github.com/Jimdo/angular-draggabilly
 *
 * An angular wrapper for Draggabilly
 *
 * Copyright 2014, Jimdo GmbH
 * Released under the MIT license
 */
(function(angular) {
  'use strict';
  // src/js/helper.module.js
  var draggabilly = angular.module('draggabilly', []);

  // src/js/directive.directive.js
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
  
    /** @const */
    var rDragEvents = {
      'start': 'dragStart',
      'move': 'dragMove',
      'end': 'dragEnd'
    };
  
    /** @const */
    var defaultEvents = [dragEvents.dragStart, dragEvents.dragMove, dragEvents.dragEnd];  draggabilly.directive(NAME, [
      function() {
        return {
          restrict: 'A',
          scope: false,
          link: function($scope, $element, attrs) {
            attrs = attrs || {};
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
  
            // enable specific events
            var events = getPrefixedAttr('events');
            if (typeof events !== 'undefined') {
              var allegedEvents = events.toLowerCase().replace(/\s+/g, '').split(/,/);
              events = [];
              angular.forEach(allegedEvents, function(allegedEvent) {
                if (typeof rDragEvents[allegedEvent] !== 'undefined' && events.indexOf(allegedEvent) === -1) {
                  events.push(allegedEvent);
                }
              });
            } else {
              events = defaultEvents;
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
  
            angular.forEach(events, function(targetEventPostfix) {
              var sourceEventName = rDragEvents[targetEventPostfix];
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
})(window.angular);
