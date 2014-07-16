(function() {
  'use strict';

  var app = angular.module('protractorApp', ['draggabilly']);
  app.run(function($rootScope) {
    $rootScope.evts = '';
    $rootScope.dragEnabled = true;

    var events = [];
    var handler = function($event, instance) {
      events.push({
        type: $event.name.substr('draggie.'.length),
        id: $(instance.element).attr('id'),
        pos: [instance.position.x, instance.position.y]
      });
      $rootScope.evts = JSON.stringify(events);
    };
    $rootScope.$on('draggie.start', handler);
    $rootScope.$on('draggie.move', handler);
    $rootScope.$on('draggie.end', handler);
  });
  angular.bootstrap(document, ['protractorApp']);
})();
