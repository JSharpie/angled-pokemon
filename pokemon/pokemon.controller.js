(function(){


  angular
    .module('pokemon')
    .controller('PokemonController', function ($scope, PokemonService, CaughtService) {
      PokemonService.getPokemon().success(function(pokemon){
        $scope.allPokemon = pokemon.pokemon
        console.log($scope.allPokemon);
      });
      $scope.catchPokemon = function(pokemon){
        CaughtService.catchPokemon(pokemon);
      };
    });
})();
