(function () {
  "use strict";
  angular
    .module('pokedex')
    .directive('pkmn', function () {
      return {
        restrict: 'EA',
        templateUrl: 'common/views/pokemon.directive.html',
        scope: {
          pokemon: '=',
          pokemonData: '=',
          action: '&'
        },
      };
    });

})();
