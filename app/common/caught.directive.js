(function () {
  "use strict";
  angular
    .module('pokedex')
    .directive('caught', function () {
      return {
        restrict: 'EA',
        templateUrl: 'common/views/caught.directive.html',
        scope: {
          pokemon: '=',
          action: '&',
        },
      };
    });

})();
