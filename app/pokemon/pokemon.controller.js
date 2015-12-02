(function(){


  angular
    .module('pokemon')
    .controller('PokemonController', function ($scope, PokemonService, CaughtService) {
      var vm = this;
      PokemonService.getPokemon().success(function(pokemon){
        vm.allPokemon = pokemon.pokemon
        setInterval(function(){
            vm.currPokemon = pokemon.pokemon[Math.floor(Math.random() * pokemon.pokemon.length)];
            console.log(vm.currPokemon);
        }, 2000);
      });
      vm.catchPokemon = function(pokemon){
        CaughtService.catchPokemon(pokemon);
      };
    });
})();
