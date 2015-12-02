(function() {
  "use strict";
  angular
    .module('pokemon')
    .factory('PokemonService', function($http) {
      var url = 'https://pokeapi.co/api/v1/pokedex/1/';
      var getPokemon = function() {
        console.log($http.get(url));
        return $http.get(url);
      };
      return {
        getPokemon: getPokemon,
      };
    });
})();
