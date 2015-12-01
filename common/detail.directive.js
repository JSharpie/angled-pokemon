(function () {
  "use strict";
  angular
    .module('pokedex')
    .directive('detail', function () {
      return {
        restrict: 'EA',
        templateUrl: 'common/views/detail.directive.html',
        scope: {
          pokemon: '=',
          pokemonData: '=data',
          showMoves: '&moves',
          showTypes: '&types'
        },
      };
    });

})();
