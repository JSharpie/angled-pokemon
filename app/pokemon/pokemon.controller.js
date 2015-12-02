(function(){


  angular
    .module('pokemon')
    .controller('PokemonController', function ($scope, PokemonService, CaughtService) {
      var vm = this;
      PokemonService.getPokemon().success(function(pokemon){
        vm.allPokemon = pokemon.pokemon
        console.log(vm.allPokemon);
      });
      vm.catchPokemon = function(pokemon){
        CaughtService.catchPokemon(pokemon);
      };
    });
})();
