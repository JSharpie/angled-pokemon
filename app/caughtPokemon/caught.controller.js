(function () {
  "use strict";
  angular
  .module('caught')
  .controller('CaughtController', function ($http, $scope, CaughtService, $routeParams) {
    var vm = this;
    console.log(vm);
    CaughtService.getCaught().success(function (caught) {
      vm.caughtPokemon = caught;
      console.log(vm.caughtPokemon);
    });
    if($routeParams._id){
      CaughtService.detail($routeParams._id).success(function(data){
        // console.log(data);
        vm.pokemon = data;
        $http.get(data.resource_url).success(function(data){
          console.log(data);
          vm.pokemonData = data;
        });
      });
    }
    // else{
    //   CaughtService.getCaught().success(function(pokemon){
    //     console.log(pokemon);
    //     vm.pokemon = pokemon;
    //   });
    // }

    else{
      CaughtService.getCaught().success(function(data){
        vm.pokemon = data;
      });
    }
    vm.deletePokemon = function(pokemon){
      CaughtService.deletePokemon(pokemon);
    };
    vm.toggleHidden = function(cls){
      CaughtService.toggleHidden(cls);
    }
  });
})();
